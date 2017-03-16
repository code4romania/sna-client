import {RouterState} from 'react-router-redux';
import {Promise} from 'es6-promise';
import {Indicator} from '../models/indicator';

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

export interface AsyncConnectState {
  loadState: LoadState;
  indicators?: Indicator[];
  ministriesStats?: any[];
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
