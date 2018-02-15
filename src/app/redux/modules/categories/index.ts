import {Promise} from 'es6-promise';

import {CategoryErrorAction} from '../../../models/category';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
export const GET_FAILURE = 'categories/GET_FAILURE';

export function loadCategoriesConfig(): AsyncLoaderEntry {
  return {
    key: 'categories',
    promise: (context: AsyncContext) => {
      return loadCategories(context);
    },
  };
}

/** Async Action Creator */
export function loadCategories(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.categories;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.categories);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/categories')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then((res) => Promise.resolve(res.data));
      } else {
        dispatch(categoriesFailure(res));
        return Promise.reject('Eroare de server.');
      }
    })
    .catch((err) => {
      dispatch(categoriesFailure(err));
      return Promise.reject('Eroare de retea.');
    });
}

/** Action Creator */
export function categoriesFailure(message: any): CategoryErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
