import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';
import {Promise} from 'es6-promise';

export function loadMinistriesStatsConfig(): AsyncLoaderEntry {
  return {
    key: 'ministriesStats',
    promise: (context: AsyncContext) => {
      return loadMinistriesStats(context);
    },
  };
}

/** Async Action Creator */
export function loadMinistriesStats(context: AsyncContext) {
  const {store} = context;
  // const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.ministriesStats;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.ministriesStats);
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
