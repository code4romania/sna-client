import {Promise} from 'es6-promise';

import {
  // CountyAction,
  // CountyState,
  // County,
  CountyErrorAction,
  // CountySuccessAction,
} from '../../../models/county';  // TODO maybe a new interface file(different than that for county admins)?
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
// export const GET_REQUEST = 'counties/GET_REQUEST';
// export const GET_SUCCESS = 'counties/GET_SUCCESS';
export const GET_FAILURE = 'counties/GET_FAILURE';

// /** Counter: Initial State */
// const initialState: CountyState = {
//   isFetching: true,
// };
//
// /** Reducer */
// export function countiesReducer(state = initialState, action: CountyAction) {
//   switch (action.type) {
//     case GET_REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true,
//       });
//
//     case GET_SUCCESS:
//       const {counties} = action as CountySuccessAction;
//       return Object.assign({}, state, {
//         isFetching: false,
//         counties,
//       });
//
//     case GET_FAILURE:
//       // TODO vitaliel display errors...
//       const {message} = action as CountyErrorAction;
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

export function loadCountiesConfig(): AsyncLoaderEntry {
  return {
    key: 'counties',
    promise: (context: AsyncContext) => {
      return loadCounties(context);
    },
  };
}

/** Async Action Creator */
export function loadCounties(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.counties;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.counties);
  }

  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = {
          data: [
            {
              id: 1,
              name: "Alba",
              code: "AB",
              population: [
                {
                  population: 380976,
                  year: 2017,
                },
              ],
            },
            {
              id: 2,
              name: "Arad",
              code: "AR",
              population: [
                {
                  population: 473946,
                  year: 2017,
                },
              ],
            },
            {
              id: 3,
              name: "Arges",
              code: "AG",
              population: [
                {
                  population: 646333,
                  year: 2017,
                },
              ],
            },
            {
              id: 4,
              name: "Bacau",
              code: "BC",
              population: [
                {
                  population: 746566,
                  year: 2017,
                },
              ],
            },
            {
              id: 5,
              name: "Bihor",
              code: "BH",
              population: [
                {
                  population: 619102,
                  year: 2017,
                },
              ],
            },
            {
              id: 6,
              name: "Bistrita Nasaud",
              code: "BN",
              population: [
                {
                  population: 329188,
                  year: 2017,
                },
              ],
            },
            {
              id: 7,
              name: "Botosani",
              code: "BT",
              population: [
                {
                  population: 455973,
                  year: 2017,
                },
              ],
            },
            {
              id: 8,
              name: "Braila",
              code: "BR",
              population: [
                {
                  population: 630807,
                  year: 2017,
                },
              ],
            },
            {
              id: 9,
              name: "Brasov",
              code: "BV",
              population: [
                {
                  population: 356196,
                  year: 2017,
                },
              ],
            },
            {
              id: 10,
              name: "Bucuresti",
              code: "B",
              population: [
                {
                  population: 2106144,
                  year: 2017,
                },
              ],
            },
            {
              id: 11,
              name: "Buzau",
              code: "BZ",
              population: [
                {
                  population: 478811,
                  year: 2017,
                },
              ],
            },
            {
              id: 12,
              name: "Calarasi",
              code: "CL",
              population: [
                {
                  population: 317293,
                  year: 2017,
                },
              ],
            },
            {
              id: 13,
              name: "Caras Severin",
              code: "CS",
              population: [
                {
                  population: 328047,
                  year: 2017,
                },
              ],
            },
            {
              id: 14,
              name: "Cluj",
              code: "CJ",
              population: [
                {
                  population: 721955,
                  year: 2017,
                },
              ],
            },
            {
              id: 15,
              name: "Constanta",
              code: "CT",
              population: [
                {
                  population: 769768,
                  year: 2017,
                },
              ],
            },
            {
              id: 16,
              name: "Covasna",
              code: "CV",
              population: [
                {
                  population: 228732,
                  year: 2017,
                },
              ],
            },
            {
              id: 17,
              name: "Dambovita",
              code: "DB",
              population: [
                {
                  population: 528426,
                  year: 2017,
                },
              ],
            },
            {
              id: 18,
              name: "Dolj",
              code: "DJ",
              population: [
                {
                  population: 700117,
                  year: 2017,
                },
              ],
            },
            {
              id: 19,
              name: "Galati",
              code: "GL",
              population: [
                {
                  population: 631669,
                  year: 2017,
                },
              ],
            },
            {
              id: 20,
              name: "Giurgiu",
              code: "GR",
              population: [
                {
                  population: 276781,
                  year: 2017,
                },
              ],
            },
            {
              id: 21,
              name: "Gorj",
              code: "GJ",
              population: [
                {
                  population: 366261,
                  year: 2017,
                },
              ],
            },
            {
              id: 22,
              name: "Harghita",
              code: "HR",
              population: [
                {
                  population: 333674,
                  year: 2017,
                },
              ],
            },
            {
              id: 23,
              name: "Hunedoara",
              code: "HD",
              population: [
                {
                  population: 469853,
                  year: 2017,
                },
              ],
            },
            {
              id: 24,
              name: "Ialomita",
              code: "IL",
              population: [
                {
                  population: 293658,
                  year: 2017,
                },
              ],
            },
            {
              id: 25,
              name: "Iasi",
              code: "IS",
              population: [
                {
                  population: 919049,
                  year: 2017,
                },
              ],
            },
            {
              id: 26,
              name: "Ilfov",
              code: "IF",
              population: [
                {
                  population: 390751,
                  year: 2017,
                },
              ],
            },
            {
              id: 27,
              name: "Maramures",
              code: "MM",
              population: [
                {
                  population: 525765,
                  year: 2017,
                },
              ],
            },
            {
              id: 28,
              name: "Mehedinti",
              code: "MH",
              population: [
                {
                  population: 286678,
                  year: 2017,
                },
              ],
            },
            {
              id: 29,
              name: "Mures",
              code: "MS",
              population: [
                {
                  population: 595948,
                  year: 2017,
                },
              ],
            },
            {
              id: 30,
              name: "Neamt",
              code: "NT",
              population: [
                {
                  population: 577359,
                  year: 2017,
                },
              ],
            },
            {
              id: 31,
              name: "Olt",
              code: "OT",
              population: [
                {
                  population: 450094,
                  year: 2017,
                },
              ],
            },
            {
              id: 32,
              name: "Prahova",
              code: "PH",
              population: [
                {
                  population: 809052,
                  year: 2017,
                },
              ],
            },
            {
              id: 33,
              name: "Salaj",
              code: "SJ",
              population: [
                {
                  population: 247537,
                  year: 2017,
                },
              ],
            },
            {
              id: 34,
              name: "Satu Mare",
              code: "SM",
              population: [
                {
                  population: 390639,
                  year: 2017,
                },
              ],
            },
            {
              id: 35,
              name: "Sibiu",
              code: "SB",
              population: [
                {
                  population: 464202,
                  year: 2017,
                },
              ],
            },
            {
              id: 36,
              name: "Suceava",
              code: "SV",
              population: [
                {
                  population: 743645,
                  year: 2017,
                },
              ],
            },
            {
              id: 37,
              name: "Teleorman",
              code: "TR",
              population: [
                {
                  population: 389433,
                  year: 2017,
                },
              ],
            },
            {
              id: 38,
              name: "Timis",
              code: "TM",
              population: [
                {
                  population: 742886,
                  year: 2017,
                },
              ],
            },
            {
              id: 39,
              name: "Tulcea",
              code: "TL",
              population: [
                {
                  population: 244249,
                  year: 2017,
                },
              ],
            },
            {
              id: 40,
              name: "Valcea",
              code: "VL",
              population: [
                {
                  population: 403171,
                  year: 2017,
                },
              ],
            },
            {
              id: 41,
              name: "Vaslui",
              code: "VS",
              population: [
                {
                  population: 479815,
                  year: 2017,
                },
              ],
            },
            {
              id: 42,
              name: "Vrancea",
              code: "VN",
              population: [
                {
                  population: 391169,
                  year: 2017,
                },
              ],
            },
            {
              id: 43,
              name: "Diaspora",
              code: "DI",
              population: [
                {
                  population: 0,
                  year: 2017,
                },
              ],
            },
            {
              id: 44,
              name: "Anti corruption",
              code: "AI",
              population: [],
            },
            {
              id: 45,
              name: "Ministry",
              code: "MI",
              population: [],
            },
          ],
        };

        resolve(res.data);
      }, 500);
    });
  } else {
    // TODO uncomment after CORS is enabled
    // return fetch((process.env.API_URL || 'http://localhost:8889') + '/public/data/counties.json')
    return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/counties')
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => {
              return Promise.resolve(res.data);
            });
        } else {
          return res.json()
            .then((res) => dispatch(countiesFailure(res)));
        }
      })
      .catch((err) => {
        console.log('main failure', err);
        dispatch(countiesFailure(err));
      });
  }
}

// /** Action Creator */
// export function countiesRequest(): CountyAction {
//   return {
//     type: GET_REQUEST,
//   };
// }
//
// /** Action Creator */
// export function countiesSuccess(counties: County[]): CountySuccessAction {
//   return {
//     type: GET_SUCCESS,
//     counties,
//   };
// }

/** Action Creator */
export function countiesFailure(message: any): CountyErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
