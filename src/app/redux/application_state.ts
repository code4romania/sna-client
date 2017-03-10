import {IndicatorState} from '../models/indicator';
import {RouterState} from 'react-router-redux';

export interface ApplicationState {
  routing: RouterState;
  indicators: IndicatorState;
}
