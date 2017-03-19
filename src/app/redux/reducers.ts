import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ApplicationState } from './application_state';
import {selectedCountiesReducer} from "./modules/filters/selected_counties";
import {selectedMinistriesReducer} from "./modules/filters/selected_ministries";

const { reducer } = require('redux-connect');

interface ChangeAllYearsStateAction {
  type: "change-all-years";
  checked: boolean;
}

export function changeAllYears(checked: boolean): ChangeAllYearsStateAction {
  return {type: "change-all-years", checked};
}

function allYearsReducer(state = false, action: ChangeAllYearsStateAction): boolean {
  if (action.type === "change-all-years") {
    return action.checked;
  } else {
    return state;
  }
}

const rootReducer: Redux.Reducer<ApplicationState> = combineReducers<ApplicationState>({
  routing: routerReducer,
  reduxAsyncConnect: reducer,
  selectedCounties: selectedCountiesReducer,
  selectedMinistries: selectedMinistriesReducer,
  areAllYearsSelected: allYearsReducer,
});

export default rootReducer;
