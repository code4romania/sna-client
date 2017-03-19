import {Set} from "immutable";
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ApplicationState } from './application_state';
import Action = Redux.Action;

const { reducer } = require('redux-connect');

export function checkboxGroupReducer(state: Set<number>, action: Action): Set<number> {
  if (!state) {
    return Set<number>();
  }

  switch (action.type) {
    case "add-option":
      return state.add(1);
    default:
      return state;
  }
}

const rootReducer: Redux.Reducer<ApplicationState> = combineReducers<ApplicationState>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  selectedCounties: checkboxGroupReducer,
  selectedMinistries: checkboxGroupReducer,
});

export default rootReducer;
