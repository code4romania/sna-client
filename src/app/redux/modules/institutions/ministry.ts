import {Promise} from 'es6-promise';

import {
  // MinistryAction,
  // MinistryState,
  // Ministry,
  MinistryErrorAction,
  // MinistrySuccessAction,
} from '../../../models/ministry';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
// export const GET_REQUEST = 'ministries/GET_REQUEST';
// export const GET_SUCCESS = 'ministries/GET_SUCCESS';
export const GET_FAILURE = 'ministries/GET_FAILURE';

// /** Counter: Initial State */
// const initialState: MinistryState = {
//   isFetching: true,
// };
//
// /** Reducer */
// export function ministriesReducer(state = initialState, action: MinistryAction) {
//   switch (action.type) {
//     case GET_REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true,
//       });
//
//     case GET_SUCCESS:
//       const {ministries} = action as MinistrySuccessAction;
//       return Object.assign({}, state, {
//         isFetching: false,
//         ministries,
//       });
//
//     case GET_FAILURE:
//       // TODO display errors...
//       const {message} = action as MinistryErrorAction;
//       return Object.assign({}, state, {
//         isFetching: false,
//         message,
//         error: true,
//       });
//
//     default:
//       return state;
//   }
// }

export function loadMinistriesConfig(): AsyncLoaderEntry {
  return {
    key: 'ministryAdmins',
    promise: (context: AsyncContext) => {
      return loadMinistries(context);
    },
  };
}

/** Async Action Creator */
export function loadMinistries(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.ministryAdmins;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.ministryAdmins);
  }

  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = {
          data: [
            {
              id: 17,
              name: "Ministerul Justiţiei",
              county: "Ministry",
            },
            {
              id: 18,
              name: "Ministerul Afacerilor Interne",
              county: "Ministry",
            },
            {
              id: 19,
              name: "Ministerul Afacerilor Interne",
              county: "Ministry",
            },
            {
              id: 20,
              name: "Ministerul Agriculturii și Dezvoltării Rurale",
              county: "Ministry",
            },
            {
              id: 21,
              name: "Ministerul Apărării Naţionale",
              county: "Ministry",
            },
            {
              id: 22,
              name: "Ministerul Apelor și Pădurilor",
              county: "Ministry",
            },
            {
              id: 23,
              name: "Ministerul Comunicaţiilor și Societății Informaţionale",
              county: "Ministry",
            },
            {
              id: 24,
              name: "Ministerul Consultării Publice și Dialogului Social",
              county: "Ministry",
            },
            {
              id: 25,
              name: "Ministerul Culturii și Identității Naționale",
              county: "Ministry",
            },
            {
              id: 26,
              name: "Ministerul Cercetării și Inovării",
              county: "Ministry",
            },
            {
              id: 27,
              name: "Ministerul Dezvoltării Regionale, Administraţiei Publice și Fondurilor Europene",
              county: "Ministry",
            },
            {
              id: 28,
              name: "Ministerul Economiei",
              county: "Ministry",
            },
            {
              id: 29,
              name: "Ministerul pentru Mediul de Afaceri, Comerț și Antreprenoriat",
              county: "Ministry",
            },
            {
              id: 30,
              name: "Ministerul Educaţiei Naționale",
              county: "Ministry",
            },
            {
              id: 31,
              name: "Ministerul Energiei",
              county: "Ministry",
            },
            {
              id: 32,
              name: "Ministrul Finanţelor Publice",
              county: "Ministry",
            },
            {
              id: 33,
              name: "Ministerul Mediului",
              county: "Ministry",
            },
            {
              id: 34,
              name: "Ministerul Muncii și Justiției Sociale",
              county: "Ministry",
            },
            {
              id: 35,
              name: "Ministerul Sănătăţii",
              county: "Ministry",
            },
            {
              id: 36,
              name: "Ministerul Tineretului și Sportului",
              county: "Ministry",
            },
            {
              id: 37,
              name: "Ministerul Turismului",
              county: "Ministry",
            },
            {
              id: 38,
              name: "Ministerul Transporturilor",
              county: "Ministry",
            },
            {
              id: 39,
              name: "Ministerul pentru Românii de Pretutindeni",
              county: "Ministry",
            },
            {
              id: 40,
              name: "Ministerul pentru Relaţia cu Parlamentul",
              county: "Ministry",
            },
          ],
        };

        resolve(res.data);
      }, 500);
    });
  } else {
    // TODO uncomment after CORS is enabled
    return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/institutions/ministry')
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => {
              return Promise.resolve(res.data);
            });
        } else {
          return res.json()
            .then((res) => dispatch(ministriesFailure(res)));
        }
      })
      .catch((err) => {
        console.log('main failure', err);
        dispatch(ministriesFailure(err));
      });
  }
}

// /** Action Creator */
// export function ministriesRequest(): MinistryAction {
//   return {
//     type: GET_REQUEST,
//   };
// }
//
// /** Action Creator */
// export function ministriesSuccess(ministries: Ministry[]): MinistrySuccessAction {
//   return {
//     type: GET_SUCCESS,
//     ministries,
//   };
// }

/** Action Creator */
export function ministriesFailure(message: any): MinistryErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
