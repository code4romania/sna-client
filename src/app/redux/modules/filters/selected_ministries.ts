import {Set} from 'immutable';

const initialState = Set<number>();

type Action = SelectMinistry | DeselectMinistry | Reset;

interface SelectMinistry {
  type: 'ministry-filter-add';
  id: number;
}

interface DeselectMinistry  {
  type: 'ministry-filter-remove';
  id: number;
}

interface Reset {
  type: 'ministry-filter-reset';
}

/** Action Creator */
export function selectMinistry(id: number): SelectMinistry {
  return {
    type: 'ministry-filter-add',
    id,
  };
}

/** Action Creator */
export function deselectMinistry(id: number): DeselectMinistry {
  return {
    type: 'ministry-filter-remove',
    id,
  };
}

/** Action Creator */
export function reset(): Reset {
  return {
    type: 'ministry-filter-reset',
  };
}

/** Reducer */
export function selectedMinistriesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ministry-filter-add':
      return state.add(action.id);
    case 'ministry-filter-remove':
      return state.remove(action.id);
    case 'ministry-filter-reset':
      return initialState;
    default:
      return state;
  }
}
