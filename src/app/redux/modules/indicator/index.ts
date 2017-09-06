import {Promise} from 'es6-promise';

import {
  IndicatorAction,
  IndicatorState,
  Indicator,
  IndicatorErrorAction,
  IndicatorSuccessAction,
} from '../../../models/indicator';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
export const GET_REQUEST: string = 'indicators/GET_REQUEST';
export const GET_SUCCESS: string = 'indicators/GET_SUCCESS';
export const GET_FAILURE: string = 'indicators/GET_FAILURE';

/** Counter: Initial State */
const initialState: IndicatorState = {
  isFetching: true,
};

// TODO remove?
/** Reducer */
export function indicatorsReducer(state = initialState, action: IndicatorAction) {
  switch (action.type) {
    case GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case GET_SUCCESS:
      const {indicators} = action as IndicatorSuccessAction;
      return Object.assign({}, state, {
        isFetching: false,
        indicators,
      });

    case GET_FAILURE:
      // TODO vitaliel display errors...
      const {message} = action as IndicatorErrorAction;
      return Object.assign({}, state, {
        isFetching: false,
        message,
        error: true,
      });

    default:
      return state;
  }
}

// TODO remove?
export function loadIndicatorsConfig(): AsyncLoaderEntry {
  return {
    key: 'indicators',
    promise: (context: AsyncContext) => {
      return loadIndicators(context);
    },
  };
}

// TODO remove?
/** Async Action Creator */
export function loadIndicators(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.indicators;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.indicators);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/public/data/indicators.json')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then((res) => {
            return Promise.resolve(res.data);
          });
      } else {
        return res.json()
          .then((res) => dispatch(indicatorsFailure(res)));
      }
    })
    .catch((err) => {
      console.log('main failure', err);
      dispatch(indicatorsFailure(err));
  });
}

/** Action Creator */
export function indicatorsRequest(): IndicatorAction {
  return {
    type: GET_REQUEST,
  };
}

/** Action Creator */
export function indicatorsSuccess(indicators: Indicator[]): IndicatorSuccessAction {
  return {
    type: GET_SUCCESS,
    indicators,
  };
}

/** Action Creator */
export function indicatorsFailure(message: any): IndicatorErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
