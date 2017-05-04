import {Set} from 'immutable';
import {RouterState} from 'react-router-redux';
import {Promise} from 'es6-promise';

import {Indicator} from '../models/indicator';
import {Ministry} from '../models/ministry';
import {ILocalStorage} from '../models/localStorage';

export interface ApplicationState {
  routing: RouterState;
  reduxAsyncConnect: AsyncConnectState;
  selectedCounties: Set<number>;
  selectedMinistries: Set<number>;
  areAllYearsSelected: boolean;
  isSidebarOpen: boolean;
  localStorage: ILocalStorage;
}

type RemoteContent = 'indicators' | 'ministriesStats' | 'countiesStats';

export interface LoadEntryState {
  error: any;
  loaded: boolean;
  loading: boolean;
}

export interface LoadState {
  loaded: boolean;
  indicators?: LoadEntryState;
  ministriesStats?: LoadEntryState;
  countiesStats?: LoadEntryState;
}

// key year
export interface YearsStats {
  [key: string]: number;
}

export interface MStatEntry {
  i_id: number;
  c_id: number;
  m_id: number;
  v: YearsStats;
}

export interface EmployeeStats {
  m_id: number;
  v: YearsStats;
}

interface PopulationEntry {
  m_id: number;
  v: YearsStats;
}

export interface CStats {
  stats: MStatEntry[];
  population: PopulationEntry[];
}

export interface MStats {
  ministries: Ministry[];
  employees: EmployeeStats[];
  stats: MStatEntry[];
}

export interface AsyncConnectState {
  loadState: LoadState;
  indicators?: Indicator[];
  ministriesStats?: MStats;
  countiesStats?: CStats;
}

export interface AsyncContext {
  store: Redux.Store<ApplicationState>;
}

export interface AsyncLoaderEntry {
  key: RemoteContent;
  promise: (context: AsyncContext) => Promise<any>;
}

export function isContentLoaded(loadState?: LoadEntryState): boolean {
  if (!loadState || loadState.loading) {
    return false;
  }

  return loadState.loaded;
}
