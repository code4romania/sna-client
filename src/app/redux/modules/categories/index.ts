import {Promise} from 'es6-promise';

import {
  // CategoryAction,
  // CategoryState,
  // Category,
  CategoryErrorAction,
  // CategorySuccessAction,
} from '../../../models/category';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
// export const GET_REQUEST = 'categories/GET_REQUEST';
// export const GET_SUCCESS = 'categories/GET_SUCCESS';
export const GET_FAILURE = 'categories/GET_FAILURE';

// /** Counter: Initial State */
// const initialState: CategoryState = {
//   isFetching: true,
// };
//
// /** Reducer */
// export function categoriesReducer(state = initialState, action: CategoryAction) {
//   switch (action.type) {
//     case GET_REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true,
//       });
//
//     case GET_SUCCESS:
//       const {categories} = action as CategorySuccessAction;
//       return Object.assign({}, state, {
//         isFetching: false,
//         categories,
//       });
//
//     case GET_FAILURE:
//       // TODO vitaliel display errors...
//       const {message} = action as CategoryErrorAction;
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

export function loadCategoriesConfig(): AsyncLoaderEntry {
  return {
    key: 'categories',
    promise: (context: AsyncContext) => {
      return loadCategories(context);
    },
  };
}

/** Async Action Creator */
export function loadCategories(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.categories;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.categories);
  }

  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = {
          data: [
            {
              id: 1,
              name: "Cod etic/deontologic/de conduită",
            },
            {
              id: 2,
              name: "Declararea averilor",
            },
            {
              id: 3,
              name: "Declararea cadourilor",
            },
            {
              id: 4,
              name: "Conflicte de interese",
            },
            {
              id: 5,
              name: "Consilier de etică",
            },
            {
              id: 6,
              name: "Incompatibilități",
            },
            {
              id: 7,
              name: "Transparență în procesul decizional",
            },
            {
              id: 8,
              name: "Acces la informații de interes public",
            },
            {
              id: 9,
              name: "Protecția avertizorului de integritate",
            },
            {
              id: 10,
              name: "Distribuirea aleatorie a sarcinilor de serviciu",
            },
            {
              id: 11,
              name: "Interdicții după încheierea angajării în cadrul instituțiilor publice (Pantouflage)",
            },
            {
              id: 12,
              name: "Funcții sensibile",
            },
          ],
        };

        resolve(res.data);
      }, 500);
    });
  } else {
    return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/categories')
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => {
              return Promise.resolve(res.data);
            });
        } else {
          return res.json()
            .then((res) => dispatch(categoriesFailure(res)));
        }
      })
      .catch((err) => {
        console.log('main failure', err);
        dispatch(categoriesFailure(err));
      });
  }
}

// /** Action Creator */
// export function categoriesRequest(): CategoryAction {
//   return {
//     type: GET_REQUEST,
//   };
// }
//
// /** Action Creator */
// export function categoriesSuccess(categories: Category[]): CategorySuccessAction {
//   return {
//     type: GET_SUCCESS,
//     categories,
//   };
// }

/** Action Creator */
export function categoriesFailure(message: any): CategoryErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
