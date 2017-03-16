import {Action} from 'redux';

export interface Category {
  id: number;
  name: string;
}

export interface Indicator {
  id: number;
  name: string;
  categories: Category[];
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
