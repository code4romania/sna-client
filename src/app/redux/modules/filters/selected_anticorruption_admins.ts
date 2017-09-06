import {Set} from 'immutable';

const initialState = Set<number>();

type Action = SelectAnticorruptionAdmin | DeselectAnticorruptionAdmin | Reset;

interface SelectAnticorruptionAdmin {
  type: 'anticorruption-admin-filter-add';
  id: number;
}

interface DeselectAnticorruptionAdmin  {
  type: 'anticorruption-admin-filter-remove';
  id: number;
}

interface Reset {
  type: 'anticorruption-admin-filter-reset';
}

/** Action Creator */
export function selectAnticorruptionAdmin(id: number): SelectAnticorruptionAdmin {
  return {
    type: 'anticorruption-admin-filter-add',
    id,
  };
}

/** Action Creator */
export function deselectAnticorruptionAdmin(id: number): DeselectAnticorruptionAdmin {
  return {
    type: 'anticorruption-admin-filter-remove',
    id,
  };
}

/** Action Creator */
export function resetAnticorruptionAdmin(): Reset {
  return {
    type: 'anticorruption-admin-filter-reset',
  };
}

/** Reducer */
export function selectedAnticorruptionAdminsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'anticorruption-admin-filter-add':
      return state.add(action.id);
    case 'anticorruption-admin-filter-remove':
      return state.remove(action.id);
    case 'anticorruption-admin-filter-reset':
      return initialState;
    default:
      return state;
  }
}
