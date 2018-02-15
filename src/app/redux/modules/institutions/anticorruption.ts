import {Promise} from 'es6-promise';

import { AnticorruptionErrorAction } from '../../../models/anticorruption';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
export const GET_FAILURE = 'anticorruptions/GET_FAILURE';

export function loadAnticorruptionAdminsConfig(): AsyncLoaderEntry {
  return {
    key: 'anticorruptionAdmins',
    promise: (context: AsyncContext) => {
      return loadAnticorruptionAdmins(context);
    },
  };
}

/** Async Action Creator */
export function loadAnticorruptionAdmins(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.anticorruptionAdmins;
  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.anticorruptionAdmins);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/institutions/anticorruption')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then((res) => Promise.resolve(res.data));
      } else {
        dispatch(anticorruptionsFailure(res));
        return Promise.reject('Eroare de server.');
      }
    })
    .catch((err) => {
      dispatch(anticorruptionsFailure(err));
      return Promise.reject('Eroare de retea.');
    });
}

/** Action Creator */
export function anticorruptionsFailure(message: any): AnticorruptionErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
