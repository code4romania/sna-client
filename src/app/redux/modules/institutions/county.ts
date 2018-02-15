import {Promise} from 'es6-promise';

import {CountyErrorAction} from '../../../models/county';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
export const GET_FAILURE = 'counties/GET_FAILURE';

export function loadCountyAdminsConfig(): AsyncLoaderEntry {
  return {
    key: 'countyAdmins',
    promise: (context: AsyncContext) => {
      return loadCountyAdmins(context);
    },
  };
}

/** Async Action Creator */
export function loadCountyAdmins(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.countyAdmins;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.countyAdmins);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/institutions/county')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then((res) => Promise.resolve(res.data));
      } else {
        dispatch(countiesFailure(res));
        return Promise.reject('Eroare de server.');
      }
    })
    .catch((err) => {
      dispatch(countiesFailure(err));
      return Promise.reject('Eroare de retea.');
    });
}

/** Action Creator */
export function countiesFailure(message: any): CountyErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
