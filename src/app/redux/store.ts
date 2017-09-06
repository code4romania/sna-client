import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// const createLogger = require('redux-logger');

const appConfig = require('../../../config/main');
import rootReducer from './reducers';
import { ApplicationState } from './application_state';

export function configureStore(history, initialState?: ApplicationState): Redux.Store<ApplicationState> {
  const middlewares: Redux.Middleware[] = [
    routerMiddleware(history),
    thunk,
  ];

  /** Add Only Dev. Middlewares */
  if (appConfig.env !== 'production' && process.env.BROWSER) {
    // const logger = createLogger();
    // middlewares.push(logger);
  }

  const composeEnhancers: any = (appConfig.env !== 'production'
    && typeof window === 'object'
    && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore<ApplicationState>(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (appConfig.env === 'development' && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store;
}
