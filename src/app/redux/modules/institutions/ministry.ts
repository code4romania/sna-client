import {Promise} from 'es6-promise';

import {MinistryErrorAction} from '../../../models/ministry';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
export const GET_FAILURE = 'ministries/GET_FAILURE';

export function loadMinistriesConfig(): AsyncLoaderEntry {
  return {
    key: 'ministryAdmins',
    promise: (context: AsyncContext) => {
      return loadMinistries(context);
    },
  };
}

/** Async Action Creator */
export function loadMinistries(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.ministryAdmins;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.ministryAdmins);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/institutions/ministry')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then((res) => Promise.resolve(res.data));
      } else {
        dispatch(ministriesFailure(res));
        return Promise.reject('Eroare de server.');
      }
    })
    .catch((err) => {
      dispatch(ministriesFailure(err));
      return Promise.reject('Eroare de retea.');
    });
}

/** Action Creator */
export function ministriesFailure(message: any): MinistryErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
