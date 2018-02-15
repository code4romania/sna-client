import {Promise} from 'es6-promise';

import {IndicatorErrorAction} from '../../../models/indicator';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
export const GET_FAILURE = 'indicators/GET_FAILURE';

export function loadIndicatorsConfig(): AsyncLoaderEntry {
  return {
    key: 'indicators',
    promise: (context: AsyncContext) => {
      return loadIndicators(context);
    },
  };
}

/** Async Action Creator */
export function loadIndicators(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.indicators;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.indicators);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/indicators')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then((res) => Promise.resolve(res.data));
      } else {
        dispatch(indicatorsFailure(res));
        return Promise.reject('Eroare de server.');
      }
    })
    .catch((err) => {
      dispatch(indicatorsFailure(err));
      return Promise.reject('Eroare de retea.');
    });
}

/** Action Creator */
export function indicatorsFailure(message: any): IndicatorErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
