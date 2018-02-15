import {Promise} from 'es6-promise';

// TODO maybe a new interface file(different than that for county admins)?
import {CountyErrorAction} from '../../../models/county';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
export const GET_FAILURE = 'counties/GET_FAILURE';

export function loadCountiesConfig(): AsyncLoaderEntry {
  return {
    key: 'counties',
    promise: (context: AsyncContext) => {
      return loadCounties(context);
    },
  };
}

/** Async Action Creator */
export function loadCounties(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.counties;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.counties);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/counties')
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
