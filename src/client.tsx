import {Set} from "immutable";
import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
const { Router, browserHistory } = require('react-router');
const { ReduxAsyncConnect } = require('redux-connect');

import routes from './app/routes';
import { configureStore } from './app/redux/store';
import { ApplicationState } from './app/redux/application_state';
import { loadFromLocalStorage } from './app/redux/modules/localStorage/localStorageHelpers';

const store = configureStore(
  browserHistory,
  ({...window.__INITIAL_STATE__,
    selectedCounties: Set<number>(),
    selectedMinistries: Set<number>(),
    localStorage: loadFromLocalStorage(),
  } as ApplicationState),
);
const history = syncHistoryWithStore(browserHistory, store);
const connectedCmp = (props) => <ReduxAsyncConnect {...props} />;

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router
      history={history}
      render={connectedCmp}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app'),
);
