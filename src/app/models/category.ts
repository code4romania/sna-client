import {Action} from 'redux';

export interface Category {
  id: number;
  name: string;
}

export interface CategoryState {
  indicators?: Category[];
  isFetching?: boolean;
  error?: boolean;
  message?: any;
}

export interface CategoryAction extends Action {}

export interface CategorySuccessAction extends CategoryAction {
  indicators: Category[];
}

export interface CategoryErrorAction extends CategoryAction {
  message: any;
}
