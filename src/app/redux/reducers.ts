import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ApplicationState } from './application_state';
import {selectedCountiesReducer} from "./modules/filters/selected_counties";
import {selectedMinistriesReducer} from "./modules/filters/selected_ministries";

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<ApplicationState> = combineReducers<ApplicationState>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  selectedCounties: selectedCountiesReducer,
  selectedMinistries: selectedMinistriesReducer,
});

export default rootReducer;
