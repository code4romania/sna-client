import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect, loadOnServer } = require('redux-connect');
const express = require('express');
const path = require('path');
const compression = require('compression');
const Chalk = require('chalk');
const favicon = require('serve-favicon');

import { configureStore } from './app/redux/store';
import { Html } from './app/containers';
import routes from './app/routes';
const manifest = require('../build/manifest.json');
const appConfig = require('../config/main');
const app = express();

app.use(compression());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack/dev');
  const webpackCompiler = webpack(webpackConfig);

  const logger = (req, res, next) => {
    next();
    console.log(`${req.method} ${req.url} ${res.statusCode}`); // req.headers['user-agent']
  };

  app.use(logger);

  app.use((req, res, next) => {
    if (req.method === "GET") {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });

  app.use(require('webpack-dev-middleware')(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    quiet: true,
  }));

  app.use(require('webpack-hot-middleware')(webpackCompiler));
}

app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  const location = req.url;
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ history, routes, location },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const asyncRenderData = Object.assign({}, renderProps, { store });

        loadOnServer(asyncRenderData).then(() => {
          const markup = ReactDOMServer.renderToString(
            <Provider store={store} key="provider">
              <ReduxAsyncConnect {...renderProps} />
            </Provider>,
          );
          res.status(200).send(renderHTML(markup, store));
        });
      } else {
        res.status(404).send('Not Found?');
      }
    });
});

app.listen(appConfig.port, appConfig.host, (err) => {
  if (err) {
    console.error(Chalk.bgRed(err));
  } else {
    console.info(Chalk.black.bgGreen(
      `\n\n💂  Listening at http://${appConfig.host}:${appConfig.port}\n`,
    ));
  }
});

function renderHTML(markup: string, store: any) {
  const html = ReactDOMServer.renderToString(
    <Html markup={markup} manifest={manifest} store={store} />,
  );

  return `<!DOCTYPE html> ${html}`;
}
