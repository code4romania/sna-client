import {Promise} from 'es6-promise';

import {
  // AnticorruptionAction,
  // AnticorruptionState,
  // Anticorruption,
  AnticorruptionErrorAction,
  // AnticorruptionSuccessAction,
} from '../../../models/anticorruption';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
// export const GET_REQUEST = 'anticorruptions/GET_REQUEST';
// export const GET_SUCCESS = 'anticorruptions/GET_SUCCESS';
export const GET_FAILURE = 'anticorruptions/GET_FAILURE';

// /** Counter: Initial State */
// const initialState: AnticorruptionState = {
//   isFetching: true,
// };
//
// /** Reducer */
// export function anticorruptionsReducer(state = initialState, action: AnticorruptionAction) {
//   switch (action.type) {
//     case GET_REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true,
//       });
//
//     case GET_SUCCESS:
//       const {anticorruptions} = action as AnticorruptionSuccessAction;
//       return Object.assign({}, state, {
//         isFetching: false,
//         anticorruptions,
//       });
//
//     case GET_FAILURE:
//       // TODO display errors...
//       const {message} = action as AnticorruptionErrorAction;
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

export function loadAnticorruptionAdminsConfig(): AsyncLoaderEntry {
  return {
    key: 'anticorruptionAdmins',
    promise: (context: AsyncContext) => {
      return loadAnticorruptionAdmins(context);
    },
  };
}

/** Async Action Creator */
export function loadAnticorruptionAdmins(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.anticorruptionAdmins;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.anticorruptionAdmins);
  }

  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = {
          data: [
            {
              id: 1,
              name: "Agenţia Naţională de Integritate",
              county: "Anti corruption",
            },
            {
              id: 2,
              name: "Autoritatea Electorală Permanentă",
              county: "Anti corruption",
            },
            {
              id: 3,
              name: "Avocatul Poporului",
              county: "Anti corruption",
            },
            {
              id: 4,
              name: "Consiliul Concurenţei",
              county: "Anti corruption",
            },
            {
              id: 5,
              name: "Consiliului Naţional de Integritate",
              county: "Anti corruption",
            },
            {
              id: 6,
              name: "Consiliul Naţional de Soluţionare a Contestaţiilor",
              county: "Anti corruption",
            },
            {
              id: 7,
              name: "Consiliul Superior al Magistraturii",
              county: "Anti corruption",
            },
            {
              id: 8,
              name: "Curtea de Conturi",
              county: "Anti corruption",
            },
            {
              id: 9,
              name: "Curtea Constituțională",
              county: "Anti corruption",
            },
            {
              id: 10,
              name: "Departamentul pentru Lupta Antifraudă",
              county: "Anti corruption",
            },
            {
              id: 11,
              name: "Direcţia Generală Anticorupţie",
              county: "Anti corruption",
            },
            {
              id: 12,
              name: "Direcţia Naţională Anticorupţie",
              county: "Anti corruption",
            },
            {
              id: 13,
              name: "Înalta Curte de Casaţie și Justiţie",
              county: "Anti corruption",
            },
            {
              id: 14,
              name: "Oficiul Naţional de Prevenire și Combatere a Spălării Banilor",
              county: "Anti corruption",
            },
            {
              id: 15,
              name: "Parchetul de pe lângă Înalta Curte de Casaţie şi Justiţie",
              county: "Anti corruption",
            },
            {
              id: 16,
              name: "Serviciul Român de Informaţii",
              county: "Anti corruption",
            },
            {
              id: 41,
              name: "Secretariatul General al Guvernului",
              county: "Anti corruption",
            },
            {
              id: 42,
              name: "Cancelaria Prim-Ministrului",
              county: "Anti corruption",
            },
            {
              id: 43,
              name: "Autoritatea Naţională pentru Achiziţii Publice",
              county: "Anti corruption",
            },
            {
              id: 44,
              name: "Corpul de Control al Primului-Ministru",
              county: "Anti corruption",
            },
          ],
        };

        resolve(res.data);
      }, 500);
    });
  } else {
    // TODO uncomment after CORS is enabled
    return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/institutions/anticorruption')
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => {
              return Promise.resolve(res.data);
            });
        } else {
          return res.json()
            .then((res) => dispatch(anticorruptionsFailure(res)));
        }
      })
      .catch((err) => {
        console.log('main failure', err);
        dispatch(anticorruptionsFailure(err));
    });
  }
}

// /** Action Creator */
// export function anticorruptionsRequest(): AnticorruptionAction {
//   return {
//     type: GET_REQUEST,
//   };
// }
//
// /** Action Creator */
// export function anticorruptionsSuccess(anticorruptions: Anticorruption[]): AnticorruptionSuccessAction {
//   return {
//     type: GET_SUCCESS,
//     anticorruptions,
//   };
// }

/** Action Creator */
export function anticorruptionsFailure(message: any): AnticorruptionErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
