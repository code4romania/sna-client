import {
  IndicatorAction, IndicatorState, Indicator, IndicatorErrorAction,
  IndicatorSuccessAction,
} from '../../../models/indicator';

/** Action Types */
export const GET_REQUEST: string = 'indicators/GET_REQUEST';
export const GET_SUCCESS: string = 'indicators/GET_SUCCESS';
export const GET_FAILURE: string = 'indicators/GET_FAILURE';

/** Counter: Initial State */
const initialState: IndicatorState = {
  isFetching: true,
};

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

/** Async Action Creator */
export function getIndicators() {
  return (dispatch) => {
    console.log("Loading indicators");
    dispatch(indicatorsRequest());

    return fetch('/public/data/indicators.json')
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => dispatch(indicatorsSuccess(res.data)));
        } else {
          return res.json()
            .then((res) => dispatch(indicatorsFailure(res)));
        }
      })
      .catch((err) => dispatch(indicatorsFailure(err)));
  };
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
