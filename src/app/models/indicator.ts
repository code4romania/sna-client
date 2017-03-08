import {Action} from 'redux';

export interface Indicator {
  id: string;
  name: string;
}

export interface IndicatorState {
  indicators?: Indicator[];
  isFetching?: boolean;
  error?: boolean;
  message?: any;
}

export interface IndicatorAction extends Action {}

export interface IndicatorSuccessAction extends IndicatorAction {
  indicators: Indicator[];
}

export interface IndicatorErrorAction extends IndicatorAction {
  message: any;
}
