import {Promise} from 'es6-promise';

import {AsyncLoaderEntry, AsyncContext} from '../../application_state';
import {areMinistriesStatsLoaded, areCountiesStatsLoaded} from '../../../selectors/index';

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
export function loadCountiesStatsConfig(): AsyncLoaderEntry {
  return {
    key: 'countiesStats',
    promise: (context: AsyncContext) => {
      return loadCountiesStats(context);
    },
  };
}

/** Async Action Creator */
export function loadMinistriesStats(context: AsyncContext) {
  const {store} = context;
  const state = store.getState();

  if (areMinistriesStatsLoaded(state)) {
    return Promise.resolve(state.reduxAsyncConnect.ministriesStats);
  }

  return fetch('http://localhost:8889/public/data/ministries_stats.json')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then((res) => {
            return Promise.resolve(res.data);
          });
      } else {
        return res.json()
          .then((res) => (
            console.log('json failure', res)
          ));
      }
    })
    .catch((err) => {
      console.log('main failure', err);
    });
}

/** Async Action Creator */
export function loadCountiesStats(context: AsyncContext) {
  const {store} = context;
  const state = store.getState();

  if (areCountiesStatsLoaded(state)) {
    return Promise.resolve(state.reduxAsyncConnect.countiesStats);
  }

  return fetch('http://localhost:8889/public/data/counties_stats.json')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then((res) => {
            return Promise.resolve(res.data);
          });
      } else {
        return res.json()
          .then((res) => (
            console.log('json failure', res)
          ));
      }
    })
    .catch((err) => {
      console.log('main failure', err);
    });
}
