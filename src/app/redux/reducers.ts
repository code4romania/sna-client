import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from './modules/counter';
import { starsReducer } from './modules/stars';
import { ApplicationState } from './application_state';
import {indicatorsReducer} from './modules/indicator/index';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<ApplicationState> = combineReducers<ApplicationState>({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  indicators: indicatorsReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
