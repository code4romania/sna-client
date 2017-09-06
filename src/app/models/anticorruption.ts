import {Action} from 'redux';

export interface AnticorruptionAdmin {
  id: number;
  name: string;
  county: string;
}

export interface AnticorruptionState {
  anticorruptionAdmins?: AnticorruptionAdmin[];
  isFetching?: boolean;
  error?: boolean;
  message?: any;
}

export interface AnticorruptionAction extends Action {}

export interface AnticorruptionSuccessAction extends AnticorruptionAction {
  anticorruptionAdmins: AnticorruptionAdmin[];
}

export interface AnticorruptionErrorAction extends AnticorruptionAction {
  message: any;
}
