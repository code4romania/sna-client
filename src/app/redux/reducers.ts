import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ApplicationState } from './application_state';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<ApplicationState> = combineReducers<ApplicationState>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
