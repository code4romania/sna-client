/// <reference path="../../typings/tsd.d.ts" />

import { ICounterAction, ACTION } from '../actions/index';

export default function counters(state: number[] = [0, 0, 0], action: ICounterAction): number[] {
  switch (action.type) {
    case ACTION.IncrementCounter:
      return [
        ...state.slice(0, action.counterId),
        state[action.counterId] + 1,
        ...state.slice(action.counterId + 1),
      ];

    case ACTION.DecrementCounter:
      return [
        ...state.slice(0, action.counterId),
        state[action.counterId] - 1,
        ...state.slice(action.counterId + 1),
      ];

    case ACTION.AddCounter:
      return [...state, 0];

    default:
      return state;
  }
}
