import {Action} from 'redux';

export interface ILocalStorage {
  seenFirstTooltip?: boolean;
  seenSecondTooltip?: boolean;
  seenThirdTooltip?: boolean;
}

export interface LocalStorageAction extends Action {
  payload: any;
}
