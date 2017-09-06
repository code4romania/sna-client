import {Action} from 'redux';

export interface Ministry {
  id: number;
  name: string;
  county: string;
}

export interface MinistryState {
  anticorruptionAdmins?: Ministry[];
  isFetching?: boolean;
  error?: boolean;
  message?: any;
}

export interface MinistryAction extends Action {}

export interface MinistrySuccessAction extends MinistryAction {
  anticorruptionAdmins: Ministry[];
}

export interface MinistryErrorAction extends MinistryAction {
  message: any;
}
