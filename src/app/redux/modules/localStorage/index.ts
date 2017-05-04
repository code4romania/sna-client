import {ILocalStorage, LocalStorageAction} from "../../../models/localStorage";
import {saveToLocalStorage} from "./localStorageHelpers";

export const SAVE: string = 'localStorage/SAVE';

/** localStorage: Initial State */
export const initialLocalStorageState: ILocalStorage = {
  seenFirstTooltip: false,
  seenSecondTooltip: false,
  seenThirdTooltip: false,
};

/** Reducer */
export function localStorageReducer(state = {}, action: LocalStorageAction) {
  switch (action.type) {
    case SAVE:
      const newState = Object.assign({}, state, action.payload || {});
      saveToLocalStorage(newState);
      return newState;

    default:
      return state;
  }
}

/** Action Creator */
export function saveToLocalStorageAction(flagObject: any): LocalStorageAction {
  return {
    type: SAVE,
    payload: flagObject,
  };
}
