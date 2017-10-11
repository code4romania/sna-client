import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { responsiveStateReducer } from 'redux-responsive';
import { createResponsiveStateReducer } from 'redux-responsive';
import * as _ from 'lodash';
const { reducer } = require('redux-connect');

import { ApplicationState } from './application_state';
import {selectedMinistriesReducer} from './modules/filters/selected_ministries';
import {selectedAnticorruptionAdminsReducer} from './modules/filters/selected_anticorruption_admins';
import {selectedCountiesReducer} from './modules/filters/selected_counties';
import {localStorageReducer} from './modules/localStorage/index';

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
  selectedAnticorruptionAdmins: selectedAnticorruptionAdminsReducer,
  areAllYearsSelected: allYearsReducer,
  isSidebarOpen: isSidebarOpenReducer,
  localStorage: localStorageReducer,
  browser: createResponsiveStateReducer({  // or use responsiveStateReducer for defaults(or null object in here)
    extraSmall: 480,
    small: 768,
    medium: 992,
    large: 1200,
  }, {
    extraFields: ({ greaterThan, is }) => ({
      // greaterThanOrEqual is built by transforming greaterThan
      greaterThanOrEqual: _.transform(greaterThan, (result, value, mediaType) => {
        // and combining the value with the `is` field
        result[mediaType] = value || is[mediaType];
      }, {}),
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
    }),
    initialMediaType: 'small',
    infinity: 'extraLarge',
  }),
});

export default rootReducer;
