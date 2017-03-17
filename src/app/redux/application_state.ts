import {RouterState} from 'react-router-redux';
import {Promise} from 'es6-promise';
import {Indicator} from '../models/indicator';
import {Ministry} from "../models/ministry";

type RemoteContent = "indicators" | "ministriesStats";

export interface LoadEntryState {
  error: any;
  loaded: boolean;
  loading: boolean;
}

export interface LoadState {
  loaded: boolean;
  indicators?: LoadEntryState;
  ministriesStats?: LoadEntryState;
}

// key year
interface YearsStats {
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

export interface MStats {
  ministries: Ministry[];
  employees: EmployeeStats[];
  stats: MStatEntry[];
}

export interface AsyncConnectState {
  loadState: LoadState;
  indicators?: Indicator[];
  ministriesStats?: MStats;
}

export interface ApplicationState {
  routing: RouterState;
  reduxAsyncConnect: AsyncConnectState;
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
