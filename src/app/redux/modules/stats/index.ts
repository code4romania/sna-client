import {Promise} from 'es6-promise';

import {
  AsyncLoaderEntry,
  AsyncContext,
  MStats,
} from '../../application_state';
import {
  areMinistryStatsLoaded,
  areAnticorruptionStatsLoaded,
  areCountiesStatsLoaded,
} from '../../../selectors/index';

// ===== Ministries Stats =====

/** Async Action Creator */
export function loadMinistriesStatsConfig(): AsyncLoaderEntry {
  return {
    key: 'ministriesStats',
    promise: (context: AsyncContext) => {
      return loadMinistriesStats(context);
    },
  };
}

/** Async Action Creator */
function loadMinistriesStats(context: AsyncContext) {
  const {store} = context;
  const state = store.getState();

  if (areMinistryStatsLoaded(state)) {
    return Promise.resolve(state.reduxAsyncConnect.ministriesStats);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/answers/ministry')
    .then((res: any) => {
      return res.ok
        ? res.json().then((res: MStats) => Promise.resolve(res))
        : Promise.reject('Eroare de server.');
    })
    .catch(() => Promise.reject('Eroare de retea.'));
}

// ===== Anticorruption Admin Stats =====

/** Async Action Creator */
export function loadAnticorruptionStatsConfig(): AsyncLoaderEntry {
  return {
    key: 'anticorruptionStats',
    promise: (context: AsyncContext) => {
      return loadAnticorruptionStats(context);
    },
  };
}

/** Async Action Creator */
function loadAnticorruptionStats(context: AsyncContext) {
  const {store} = context;
  const state = store.getState();

  if (areAnticorruptionStatsLoaded(state)) {
    return Promise.resolve(state.reduxAsyncConnect.anticorruptionStats);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/answers/anticorruption')
    .then((res: any) => {
      return res.ok
        ? res.json().then((res) => Promise.resolve(res))
        : Promise.reject('Eroare de server.');
    })
    .catch(() => Promise.reject('Eroare de retea.'));
}

// ===== County Administrations Stats =====

/** Async Action Creator */
export function loadCountiesStatsConfig(): AsyncLoaderEntry {
  return {
    key: 'countiesStats',
    promise: (context: AsyncContext) => {
      return loadCountiesStats(context);
    },
  };
}

function loadCountiesStats(context: AsyncContext) {
  const {store} = context;
  const state = store.getState();

  if (areCountiesStatsLoaded(state)) {
    return Promise.resolve(state.reduxAsyncConnect.countiesStats);
  }

  return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/answers/county')
    .then((res: any) => {
      return res.ok
        ? res.json().then((res: MStats) => Promise.resolve(res))
        : Promise.reject('Eroare de server.');
    })
    .catch(() => Promise.reject('Eroare de retea.'));
}
