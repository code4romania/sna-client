import {Set} from 'immutable';

const initialState = Set<number>();

type Action = SelectCounty | DeselectCounty | Reset;

interface SelectCounty {
  type: 'county-filter-add';
  id: number;
}

interface DeselectCounty  {
  type: 'county-filter-remove';
  id: number;
}

interface Reset {
  type: 'county-filter-reset';
}

/** Action Creator */
export function selectCounty(id: number): SelectCounty {
  return {type: 'county-filter-add', id};
}

/** Action Creator */
export function deselectCounty(id: number): DeselectCounty {
  return {type: 'county-filter-remove', id};
}

/** Action Creator */
export function reset(): Reset {
  return {type: 'county-filter-reset'};
}

/** Reducer */
export function selectedCountiesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'county-filter-add':
      return state.add(action.id);
    case 'county-filter-remove':
      return state.remove(action.id);
    case 'county-filter-reset':
      return initialState;
    default:
      return state;
  }
}
