import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
const { reducer } = require('redux-connect');

import { ApplicationState } from './application_state';
import {selectedCountiesReducer} from './modules/filters/selected_counties';
import {selectedMinistriesReducer} from './modules/filters/selected_ministries';

interface ChangeAllYearsStateAction {
  type: 'change-all-years';
  checked: boolean;
}

interface SidebarOpenAction {
  type: 'sidebar-open';
  open: boolean;
}

/** Action Creator */
export function changeAllYears(checked: boolean): ChangeAllYearsStateAction {
  return {
    type: 'change-all-years',
    checked,
  };
}

/** Action Creator */
export function openSidebar(open: boolean): SidebarOpenAction {
  return {
    type: 'sidebar-open',
    open,
  };
}

/** Reducer */
function allYearsReducer(state = false, action: ChangeAllYearsStateAction): boolean {
  if (action.type === 'change-all-years') {
    return action.checked;
  } else {
    return state;
  }
}

/** Reducer */
function isSidebarOpenReducer(state = true, action: SidebarOpenAction): boolean {
  if (action.type === 'sidebar-open') {
    return action.open;
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
  isSidebarOpen: isSidebarOpenReducer,
});

export default rootReducer;
