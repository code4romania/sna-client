import { Reducer, combineReducers } from 'redux';
import counters from './counterReducer';

export const app: Reducer = combineReducers({ counters });
