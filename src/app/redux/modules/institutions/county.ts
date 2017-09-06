import {Promise} from 'es6-promise';

import {
  // CountyAction,
  // CountyState,
  // County,
  CountyErrorAction,
  // CountySuccessAction,
} from '../../../models/county';
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
//       // TODO display errors...
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

export function loadCountyAdminsConfig(): AsyncLoaderEntry {
  return {
    key: 'countyAdmins',
    promise: (context: AsyncContext) => {
      return loadCountyAdmins(context);
    },
  };
}

/** Async Action Creator */
export function loadCountyAdmins(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.countyAdmins;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.countyAdmins);
  }

  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = {
          data: [
            {
              id: 45,
              name: "Primaria MUNICIPIUL AIUD",
              county: "Alba",
            },
            {
              id: 46,
              name: "Primaria MUNICIPIUL BLAJ",
              county: "Alba",
            },
            {
              id: 47,
              name: "Primaria MUNICIPIUL SEBEŞ",
              county: "Alba",
            },
            {
              id: 48,
              name: "Primaria MUNICIPIUL ALBA IULIA",
              county: "Alba",
            },
            {
              id: 49,
              name: "Primaria MUNICIPIUL SEBEŞ",
              county: "Alba",
            },
            {
              id: 50,
              name: "Primaria ORAŞ ABRUD",
              county: "Alba",
            },
            {
              id: 51,
              name: "Primaria MUNICIPIUL ALBA IULIA",
              county: "Alba",
            },
            {
              id: 52,
              name: "Primaria MUNICIPIUL AIUD",
              county: "Alba",
            },
            {
              id: 53,
              name: "Primaria ORAŞ ABRUD",
              county: "Alba",
            },
            {
              id: 54,
              name: "Primaria ORAŞ BAIA DE ARIEŞ",
              county: "Alba",
            },
            {
              id: 55,
              name: "Primaria ORAŞ CÎMPENI",
              county: "Alba",
            },
            {
              id: 56,
              name: "Primaria ORAŞ CUGIR",
              county: "Alba",
            },
            {
              id: 57,
              name: "Primaria ORAŞ OCNA MUREŞ",
              county: "Alba",
            },
            {
              id: 58,
              name: "Primaria ORAŞ TEIUŞ",
              county: "Alba",
            },
            {
              id: 59,
              name: "Primaria ORAŞ ZLATNA",
              county: "Alba",
            },
            {
              id: 60,
              name: "Primaria ALBAC",
              county: "Alba",
            },
            {
              id: 61,
              name: "Primaria ALMAŞU MARE",
              county: "Alba",
            },
            {
              id: 62,
              name: "Primaria ARIEŞENI",
              county: "Alba",
            },
            {
              id: 63,
              name: "Primaria AVRAM IANCU",
              county: "Alba",
            },
            {
              id: 64,
              name: "Primaria BERGHIN",
              county: "Alba",
            },
            {
              id: 65,
              name: "Primaria BISTRA",
              county: "Alba",
            },
            {
              id: 66,
              name: "Primaria BLANDIANA",
              county: "Alba",
            },
            {
              id: 67,
              name: "Primaria BUCERDEA GRÂNOASĂ",
              county: "Alba",
            },
            {
              id: 68,
              name: "Primaria BUCIUM",
              county: "Alba",
            },
            {
              id: 69,
              name: "Primaria CENADE",
              county: "Alba",
            },
            {
              id: 70,
              name: "Primaria CERGĂU",
              county: "Alba",
            },
            {
              id: 71,
              name: "Primaria CERU-BĂCĂINŢI",
              county: "Alba",
            },
            {
              id: 72,
              name: "Primaria CETATEA DE BALTĂ",
              county: "Alba",
            },
            {
              id: 73,
              name: "Primaria CIUGUD",
              county: "Alba",
            },
            {
              id: 74,
              name: "Primaria CIURULEASA",
              county: "Alba",
            },
            {
              id: 75,
              name: "Primaria CÎLNIC",
              county: "Alba",
            },
            {
              id: 76,
              name: "Primaria CRĂCIUNELU DE JOS",
              county: "Alba",
            },
            {
              id: 77,
              name: "Primaria CRICĂU",
              county: "Alba",
            },
            {
              id: 78,
              name: "Primaria CUT",
              county: "Alba",
            },
            {
              id: 79,
              name: "Primaria DAIA ROMÂNĂ",
              county: "Alba",
            },
            {
              id: 80,
              name: "Primaria DOŞTAT",
              county: "Alba",
            },
            {
              id: 81,
              name: "Primaria FĂRĂU",
              county: "Alba",
            },
            {
              id: 82,
              name: "Primaria GALDA DE JOS",
              county: "Alba",
            },
            {
              id: 83,
              name: "Primaria GÎRBOVA",
              county: "Alba",
            },
            {
              id: 84,
              name: "Primaria GÎRDA DE SUS",
              county: "Alba",
            },
            {
              id: 85,
              name: "Primaria HOPÎRTA",
              county: "Alba",
            },
            {
              id: 86,
              name: "Primaria HOREA",
              county: "Alba",
            },
            {
              id: 87,
              name: "Primaria IGHIU",
              county: "Alba",
            },
            {
              id: 88,
              name: "Primaria ÎNTREGALDE",
              county: "Alba",
            },
            {
              id: 89,
              name: "Primaria JIDVEI",
              county: "Alba",
            },
            {
              id: 90,
              name: "Primaria LIVEZILE",
              county: "Alba",
            },
            {
              id: 91,
              name: "Primaria LOPADEA NOUĂ",
              county: "Alba",
            },
            {
              id: 92,
              name: "Primaria LUNCA MUREŞULUI",
              county: "Alba",
            },
            {
              id: 93,
              name: "Primaria LUPŞA",
              county: "Alba",
            },
            {
              id: 94,
              name: "Primaria METEŞ",
              county: "Alba",
            },
            {
              id: 95,
              name: "Primaria MIHALŢ",
              county: "Alba",
            },
            {
              id: 96,
              name: "Primaria MIRĂSLĂU",
              county: "Alba",
            },
            {
              id: 97,
              name: "Primaria MOGOŞ",
              county: "Alba",
            },
            {
              id: 98,
              name: "Primaria NOŞLAC",
              county: "Alba",
            },
            {
              id: 99,
              name: "Primaria OCOLIŞ",
              county: "Alba",
            },
            {
              id: 100,
              name: "Primaria OHABA",
              county: "Alba",
            },
            {
              id: 101,
              name: "Primaria PIANU",
              county: "Alba",
            },
            {
              id: 102,
              name: "Primaria POIANA VADULUI",
              county: "Alba",
            },
            {
              id: 103,
              name: "Primaria PONOR",
              county: "Alba",
            },
            {
              id: 104,
              name: "Primaria POŞAGA",
              county: "Alba",
            },
            {
              id: 105,
              name: "Primaria RĂDEŞTI",
              county: "Alba",
            },
            {
              id: 106,
              name: "Primaria RÎMETEA",
              county: "Alba",
            },
            {
              id: 107,
              name: "Primaria RÎMEŢ",
              county: "Alba",
            },
            {
              id: 108,
              name: "Primaria ROŞIA DE SECAŞ",
              county: "Alba",
            },
            {
              id: 109,
              name: "Primaria ROŞIA MONTANĂ",
              county: "Alba",
            },
            {
              id: 110,
              name: "Primaria SĂLCIUA",
              county: "Alba",
            },
            {
              id: 111,
              name: "Primaria SĂLIŞTEA",
              county: "Alba",
            },
            {
              id: 112,
              name: "Primaria SĂSCIORI",
              county: "Alba",
            },
            {
              id: 113,
              name: "Primaria SCĂRIŞOARA",
              county: "Alba",
            },
            {
              id: 114,
              name: "Primaria SÎNCEL",
              county: "Alba",
            },
            {
              id: 115,
              name: "Primaria SÎNTIMBRU",
              county: "Alba",
            },
            {
              id: 116,
              name: "Primaria SOHODOL",
              county: "Alba",
            },
            {
              id: 117,
              name: "Primaria STREMŢ",
              county: "Alba",
            },
            {
              id: 118,
              name: "Primaria ŞIBOT",
              county: "Alba",
            },
            {
              id: 119,
              name: "Primaria ŞONA",
              county: "Alba",
            },
            {
              id: 120,
              name: "Primaria ŞPRING",
              county: "Alba",
            },
            {
              id: 121,
              name: "Primaria ŞUGAG",
              county: "Alba",
            },
            {
              id: 122,
              name: "Primaria UNIREA",
              county: "Alba",
            },
            {
              id: 123,
              name: "Primaria VADU MOŢILOR",
              county: "Alba",
            },
            {
              id: 124,
              name: "Primaria VALEA LUNGĂ",
              county: "Alba",
            },
            {
              id: 125,
              name: "Primaria VIDRA",
              county: "Alba",
            },
            {
              id: 126,
              name: "Primaria VINŢU DE JOS",
              county: "Alba",
            },
            {
              id: 127,
              name: "Primaria MUNICIPIUL ARAD",
              county: "Arad",
            },
            {
              id: 128,
              name: "Primaria ORAŞ CHIŞINEU-CRIŞ",
              county: "Arad",
            },
            {
              id: 129,
              name: "Primaria ORAŞ CURTICI",
              county: "Arad",
            },
            {
              id: 130,
              name: "Primaria ORAŞ INEU",
              county: "Arad",
            },
            {
              id: 131,
              name: "Primaria ORAŞ LIPOVA",
              county: "Arad",
            },
            {
              id: 132,
              name: "Primaria ORAŞ NĂDLAC",
              county: "Arad",
            },
            {
              id: 133,
              name: "Primaria ORAŞ PECICA",
              county: "Arad",
            },
            {
              id: 134,
              name: "Primaria ORAŞ PÎNCOTA",
              county: "Arad",
            },
            {
              id: 135,
              name: "Primaria ORAŞ SÂNTANA",
              county: "Arad",
            },
            {
              id: 136,
              name: "Primaria ORAŞ SEBIŞ",
              county: "Arad",
            },
            {
              id: 137,
              name: "Primaria ALMAŞ",
              county: "Arad",
            },
            {
              id: 138,
              name: "Primaria APATEU",
              county: "Arad",
            },
            {
              id: 139,
              name: "Primaria ARCHIŞ",
              county: "Arad",
            },
            {
              id: 140,
              name: "Primaria BATA",
              county: "Arad",
            },
            {
              id: 141,
              name: "Primaria BELIU",
              county: "Arad",
            },
            {
              id: 142,
              name: "Primaria BIRCHIŞ",
              county: "Arad",
            },
            {
              id: 143,
              name: "Primaria BÎRSA",
              county: "Arad",
            },
            {
              id: 144,
              name: "Primaria BÎRZAVA",
              county: "Arad",
            },
            {
              id: 145,
              name: "Primaria BOCSIG",
              county: "Arad",
            },
            {
              id: 146,
              name: "Primaria BRAZII",
              county: "Arad",
            },
            {
              id: 147,
              name: "Primaria BUTENI",
              county: "Arad",
            },
            {
              id: 148,
              name: "Primaria CĂRAND",
              county: "Arad",
            },
            {
              id: 149,
              name: "Primaria CERMEI",
              county: "Arad",
            },
            {
              id: 150,
              name: "Primaria CHISINDIA",
              county: "Arad",
            },
            {
              id: 151,
              name: "Primaria CONOP",
              county: "Arad",
            },
            {
              id: 152,
              name: "Primaria COVĂSINŢ",
              county: "Arad",
            },
            {
              id: 153,
              name: "Primaria CRAIVA",
              county: "Arad",
            },
            {
              id: 154,
              name: "Primaria DEZNA",
              county: "Arad",
            },
            {
              id: 155,
              name: "Primaria DIECI",
              county: "Arad",
            },
            {
              id: 156,
              name: "Primaria DOROBANŢI",
              county: "Arad",
            },
            {
              id: 157,
              name: "Primaria FÂNTÂNELE",
              county: "Arad",
            },
            {
              id: 158,
              name: "Primaria FELNAC",
              county: "Arad",
            },
            {
              id: 159,
              name: "Primaria FRUMUŞENI",
              county: "Arad",
            },
            {
              id: 160,
              name: "Primaria GHIOROC",
              county: "Arad",
            },
            {
              id: 161,
              name: "Primaria GRĂNICERI",
              county: "Arad",
            },
            {
              id: 162,
              name: "Primaria GURAHONŢ",
              county: "Arad",
            },
            {
              id: 163,
              name: "Primaria HĂLMAGIU",
              county: "Arad",
            },
            {
              id: 164,
              name: "Primaria HĂLMĂGEL",
              county: "Arad",
            },
            {
              id: 165,
              name: "Primaria HĂŞMAŞ",
              county: "Arad",
            },
            {
              id: 166,
              name: "Primaria IGNEŞTI",
              county: "Arad",
            },
            {
              id: 167,
              name: "Primaria IRATOŞU",
              county: "Arad",
            },
            {
              id: 168,
              name: "Primaria LIVADA",
              county: "Arad",
            },
            {
              id: 169,
              name: "Primaria MACEA",
              county: "Arad",
            },
            {
              id: 170,
              name: "Primaria MIŞCA",
              county: "Arad",
            },
            {
              id: 171,
              name: "Primaria MONEASA",
              county: "Arad",
            },
            {
              id: 172,
              name: "Primaria OLARI",
              county: "Arad",
            },
            {
              id: 173,
              name: "Primaria PĂULIŞ",
              county: "Arad",
            },
            {
              id: 174,
              name: "Primaria PEREGU MARE",
              county: "Arad",
            },
            {
              id: 175,
              name: "Primaria PETRIŞ",
              county: "Arad",
            },
            {
              id: 176,
              name: "Primaria PILU",
              county: "Arad",
            },
            {
              id: 177,
              name: "Primaria PLEŞCUŢA",
              county: "Arad",
            },
            {
              id: 178,
              name: "Primaria SĂVÎRŞIN",
              county: "Arad",
            },
            {
              id: 179,
              name: "Primaria SECUSIGIU",
              county: "Arad",
            },
            {
              id: 180,
              name: "Primaria SELEUŞ",
              county: "Arad",
            },
            {
              id: 181,
              name: "Primaria SEMLAC",
              county: "Arad",
            },
            {
              id: 182,
              name: "Primaria SINTEA MARE",
              county: "Arad",
            },
            {
              id: 183,
              name: "Primaria SOCODOR",
              county: "Arad",
            },
            {
              id: 184,
              name: "Primaria ŞAGU",
              county: "Arad",
            },
            {
              id: 185,
              name: "Primaria ŞEITIN",
              county: "Arad",
            },
            {
              id: 186,
              name: "Primaria ŞEPREUŞ",
              county: "Arad",
            },
            {
              id: 187,
              name: "Primaria ŞICULA",
              county: "Arad",
            },
            {
              id: 188,
              name: "Primaria ŞILINDIA",
              county: "Arad",
            },
            {
              id: 189,
              name: "Primaria ŞIMAND",
              county: "Arad",
            },
            {
              id: 190,
              name: "Primaria ŞIRIA",
              county: "Arad",
            },
            {
              id: 191,
              name: "Primaria ŞIŞTAROVĂŢ",
              county: "Arad",
            },
            {
              id: 192,
              name: "Primaria ŞOFRONEA",
              county: "Arad",
            },
            {
              id: 193,
              name: "Primaria TAUŢ",
              county: "Arad",
            },
            {
              id: 194,
              name: "Primaria TÎRNOVA",
              county: "Arad",
            },
            {
              id: 195,
              name: "Primaria USUSĂU",
              county: "Arad",
            },
            {
              id: 196,
              name: "Primaria VĂRĂDIA DE MUREŞ",
              county: "Arad",
            },
            {
              id: 197,
              name: "Primaria VINGA",
              county: "Arad",
            },
            {
              id: 198,
              name: "Primaria VÎRFURILE",
              county: "Arad",
            },
            {
              id: 199,
              name: "Primaria VLADIMIRESCU",
              county: "Arad",
            },
            {
              id: 200,
              name: "Primaria ZĂBRANI",
              county: "Arad",
            },
            {
              id: 201,
              name: "Primaria ZĂDĂRENI",
              county: "Arad",
            },
            {
              id: 202,
              name: "Primaria ZĂRAND",
              county: "Arad",
            },
            {
              id: 203,
              name: "Primaria ZERIND",
              county: "Arad",
            },
            {
              id: 204,
              name: "Primaria ZIMANDU NOU",
              county: "Arad",
            },
            {
              id: 205,
              name: "Primaria MUNICIPIUL PITEŞTI",
              county: "Arges",
            },
            {
              id: 206,
              name: "Primaria MUNICIPIUL CÂMPULUNG",
              county: "Arges",
            },
            {
              id: 207,
              name: "Primaria MUNICIPIUL CURTEA DE ARGEŞ",
              county: "Arges",
            },
            {
              id: 208,
              name: "Primaria ORAŞ COSTEŞTI",
              county: "Arges",
            },
            {
              id: 209,
              name: "Primaria ORAŞ MIOVENI",
              county: "Arges",
            },
            {
              id: 210,
              name: "Primaria ORAŞ ŞTEFĂNEŞTI",
              county: "Arges",
            },
            {
              id: 211,
              name: "Primaria ORAŞ TOPOLOVENI",
              county: "Arges",
            },
            {
              id: 212,
              name: "Primaria ALBEŞTII DE ARGEŞ",
              county: "Arges",
            },
            {
              id: 213,
              name: "Primaria ALBEŞTII DE MUSCEL",
              county: "Arges",
            },
            {
              id: 214,
              name: "Primaria ALBOTA",
              county: "Arges",
            },
            {
              id: 215,
              name: "Primaria ANINOASA",
              county: "Arges",
            },
            {
              id: 216,
              name: "Primaria AREFU",
              county: "Arges",
            },
            {
              id: 217,
              name: "Primaria BASCOV",
              county: "Arges",
            },
            {
              id: 218,
              name: "Primaria BĂBANA",
              county: "Arges",
            },
            {
              id: 219,
              name: "Primaria BĂICULEŞTI",
              county: "Arges",
            },
            {
              id: 220,
              name: "Primaria BĂLILEŞTI",
              county: "Arges",
            },
            {
              id: 221,
              name: "Primaria BELEŢI-NEGREŞTI",
              county: "Arges",
            },
            {
              id: 222,
              name: "Primaria BEREVOEŞTI",
              county: "Arges",
            },
            {
              id: 223,
              name: "Primaria BÎRLA",
              county: "Arges",
            },
            {
              id: 224,
              name: "Primaria BOGAŢI",
              county: "Arges",
            },
            {
              id: 225,
              name: "Primaria BOTENI",
              county: "Arges",
            },
            {
              id: 226,
              name: "Primaria BOŢEŞTI",
              county: "Arges",
            },
            {
              id: 227,
              name: "Primaria BRADU",
              county: "Arges",
            },
            {
              id: 228,
              name: "Primaria BRĂDULEŢ",
              county: "Arges",
            },
            {
              id: 229,
              name: "Primaria BUDEASA",
              county: "Arges",
            },
            {
              id: 230,
              name: "Primaria BUGHEA DE JOS",
              county: "Arges",
            },
            {
              id: 231,
              name: "Primaria BUGHEA DE SUS",
              county: "Arges",
            },
            {
              id: 232,
              name: "Primaria BUZOEŞTI",
              county: "Arges",
            },
            {
              id: 233,
              name: "Primaria CĂLDĂRARU",
              county: "Arges",
            },
            {
              id: 234,
              name: "Primaria CĂLINEŞTI",
              county: "Arges",
            },
            {
              id: 235,
              name: "Primaria CĂTEASCA",
              county: "Arges",
            },
            {
              id: 236,
              name: "Primaria CEPARI",
              county: "Arges",
            },
            {
              id: 237,
              name: "Primaria CETĂŢENI",
              county: "Arges",
            },
            {
              id: 238,
              name: "Primaria CICĂNEŞTI",
              county: "Arges",
            },
            {
              id: 239,
              name: "Primaria CIOFRINGENI",
              county: "Arges",
            },
            {
              id: 240,
              name: "Primaria CIOMĂGEŞTI",
              county: "Arges",
            },
            {
              id: 241,
              name: "Primaria COCU",
              county: "Arges",
            },
            {
              id: 242,
              name: "Primaria CORBENI",
              county: "Arges",
            },
            {
              id: 243,
              name: "Primaria CORBI",
              county: "Arges",
            },
            {
              id: 244,
              name: "Primaria COŞEŞTI",
              county: "Arges",
            },
            {
              id: 245,
              name: "Primaria COTMEANA",
              county: "Arges",
            },
            {
              id: 246,
              name: "Primaria CUCA",
              county: "Arges",
            },
            {
              id: 247,
              name: "Primaria DAVIDEŞTI",
              county: "Arges",
            },
            {
              id: 248,
              name: "Primaria DÎMBOVICIOARA",
              county: "Arges",
            },
            {
              id: 249,
              name: "Primaria DÎRMĂNEŞTI",
              county: "Arges",
            },
            {
              id: 250,
              name: "Primaria DOBREŞTI",
              county: "Arges",
            },
            {
              id: 251,
              name: "Primaria DOMNEŞTI",
              county: "Arges",
            },
            {
              id: 252,
              name: "Primaria DRAGOSLAVELE",
              county: "Arges",
            },
            {
              id: 253,
              name: "Primaria DRĂGANU",
              county: "Arges",
            },
            {
              id: 254,
              name: "Primaria GODENI",
              county: "Arges",
            },
            {
              id: 255,
              name: "Primaria HÂRSEȘTI",
              county: "Arges",
            },
            {
              id: 256,
              name: "Primaria HÂRTIEŞTI",
              county: "Arges",
            },
            {
              id: 257,
              name: "Primaria IZVORU",
              county: "Arges",
            },
            {
              id: 258,
              name: "Primaria LEORDENI",
              county: "Arges",
            },
            {
              id: 259,
              name: "Primaria LEREŞTI",
              county: "Arges",
            },
            {
              id: 260,
              name: "Primaria LUNCA CORBULUI",
              county: "Arges",
            },
            {
              id: 261,
              name: "Primaria MĂLURENI",
              county: "Arges",
            },
            {
              id: 262,
              name: "Primaria MĂRĂCINENI",
              county: "Arges",
            },
            {
              id: 263,
              name: "Primaria MERIŞANI",
              county: "Arges",
            },
            {
              id: 264,
              name: "Primaria MICEŞTI",
              county: "Arges",
            },
            {
              id: 265,
              name: "Primaria MIHĂEŞTI",
              county: "Arges",
            },
            {
              id: 266,
              name: "Primaria MIOARELE",
              county: "Arges",
            },
            {
              id: 267,
              name: "Primaria MIROŞI",
              county: "Arges",
            },
            {
              id: 268,
              name: "Primaria MORĂREŞTI",
              county: "Arges",
            },
            {
              id: 269,
              name: "Primaria MOŞOAIA",
              county: "Arges",
            },
            {
              id: 270,
              name: "Primaria MOZĂCENI",
              county: "Arges",
            },
            {
              id: 271,
              name: "Primaria MUŞĂTEŞTI",
              county: "Arges",
            },
            {
              id: 272,
              name: "Primaria NEGRAŞI",
              county: "Arges",
            },
            {
              id: 273,
              name: "Primaria NUCŞOARA",
              county: "Arges",
            },
            {
              id: 274,
              name: "Primaria OARJA",
              county: "Arges",
            },
            {
              id: 275,
              name: "Primaria PIETROŞANI",
              county: "Arges",
            },
            {
              id: 276,
              name: "Primaria POIANA LACULUI",
              county: "Arges",
            },
            {
              id: 277,
              name: "Primaria POIENARII DE ARGEŞ",
              county: "Arges",
            },
            {
              id: 278,
              name: "Primaria POIENARII DE MUSCEL",
              county: "Arges",
            },
            {
              id: 279,
              name: "Primaria POPEŞTI",
              county: "Arges",
            },
            {
              id: 280,
              name: "Primaria PRIBOIENI",
              county: "Arges",
            },
            {
              id: 281,
              name: "Primaria RĂTEŞTI",
              county: "Arges",
            },
            {
              id: 282,
              name: "Primaria RÂCA",
              county: "Arges",
            },
            {
              id: 283,
              name: "Primaria RECEA",
              county: "Arges",
            },
            {
              id: 284,
              name: "Primaria ROCIU",
              county: "Arges",
            },
            {
              id: 285,
              name: "Primaria RUCĂR",
              county: "Arges",
            },
            {
              id: 286,
              name: "Primaria SĂLĂTRUCU",
              county: "Arges",
            },
            {
              id: 287,
              name: "Primaria SĂPATA",
              county: "Arges",
            },
            {
              id: 288,
              name: "Primaria SCHITU GOLEŞTI",
              county: "Arges",
            },
            {
              id: 289,
              name: "Primaria SLOBOZIA",
              county: "Arges",
            },
            {
              id: 290,
              name: "Primaria STÎLPENI",
              county: "Arges",
            },
            {
              id: 291,
              name: "Primaria STOENEŞTI",
              county: "Arges",
            },
            {
              id: 292,
              name: "Primaria STOLNICI",
              county: "Arges",
            },
            {
              id: 293,
              name: "Primaria SUSENI",
              county: "Arges",
            },
            {
              id: 294,
              name: "Primaria ŞTEFAN CEL MARE",
              county: "Arges",
            },
            {
              id: 295,
              name: "Primaria ŞUICI",
              county: "Arges",
            },
            {
              id: 296,
              name: "Primaria TEIU",
              county: "Arges",
            },
            {
              id: 297,
              name: "Primaria TIGVENI",
              county: "Arges",
            },
            {
              id: 298,
              name: "Primaria ŢIŢEŞTI",
              county: "Arges",
            },
            {
              id: 299,
              name: "Primaria UDA",
              county: "Arges",
            },
            {
              id: 300,
              name: "Primaria UNGHENI",
              county: "Arges",
            },
            {
              id: 301,
              name: "Primaria VALEA DANULUI",
              county: "Arges",
            },
            {
              id: 302,
              name: "Primaria VALEA IAŞULUI",
              county: "Arges",
            },
            {
              id: 303,
              name: "Primaria VALEA MARE PRAVĂŢ",
              county: "Arges",
            },
            {
              id: 304,
              name: "Primaria VEDEA",
              county: "Arges",
            },
            {
              id: 305,
              name: "Primaria VLĂDEŞTI",
              county: "Arges",
            },
            {
              id: 306,
              name: "Primaria VULTUREŞTI",
              county: "Arges",
            },
            {
              id: 307,
              name: "Primaria MUNICIPIUL BACĂU",
              county: "Bacau",
            },
            {
              id: 308,
              name: "Primaria MUNICIPIUL MOINEŞTI",
              county: "Bacau",
            },
            {
              id: 309,
              name: "Primaria MUNICIPIUL ONEŞTI",
              county: "Bacau",
            },
            {
              id: 310,
              name: "Primaria ORAŞ BUHUŞI",
              county: "Bacau",
            },
            {
              id: 311,
              name: "Primaria ORAŞ COMĂNEŞTI",
              county: "Bacau",
            },
            {
              id: 312,
              name: "Primaria ORAŞ DĂRMĂNEŞTI",
              county: "Bacau",
            },
            {
              id: 313,
              name: "Primaria ORAŞ SLĂNIC-MOLDOVA",
              county: "Bacau",
            },
            {
              id: 314,
              name: "Primaria ORAŞ TÎRGU OCNA",
              county: "Bacau",
            },
            {
              id: 315,
              name: "Primaria AGĂŞ",
              county: "Bacau",
            },
            {
              id: 316,
              name: "Primaria ARDEOANI",
              county: "Bacau",
            },
            {
              id: 317,
              name: "Primaria ASĂU",
              county: "Bacau",
            },
            {
              id: 318,
              name: "Primaria BALCANI",
              county: "Bacau",
            },
            {
              id: 319,
              name: "Primaria BEREŞTI-BISTRIŢA",
              county: "Bacau",
            },
            {
              id: 320,
              name: "Primaria BEREŞTI-TAZLĂU",
              county: "Bacau",
            },
            {
              id: 321,
              name: "Primaria BERZUNŢI",
              county: "Bacau",
            },
            {
              id: 322,
              name: "Primaria BÎRSĂNEŞTI",
              county: "Bacau",
            },
            {
              id: 323,
              name: "Primaria BLĂGEŞTI",
              county: "Bacau",
            },
            {
              id: 324,
              name: "Primaria BOGDĂNEŞTI",
              county: "Bacau",
            },
            {
              id: 325,
              name: "Primaria BRUSTUROASA",
              county: "Bacau",
            },
            {
              id: 326,
              name: "Primaria BUCIUMI",
              county: "Bacau",
            },
            {
              id: 327,
              name: "Primaria BUHOCI",
              county: "Bacau",
            },
            {
              id: 328,
              name: "Primaria CAŞIN",
              county: "Bacau",
            },
            {
              id: 329,
              name: "Primaria CĂIUŢI",
              county: "Bacau",
            },
            {
              id: 330,
              name: "Primaria CLEJA",
              county: "Bacau",
            },
            {
              id: 331,
              name: "Primaria COLONEŞTI",
              county: "Bacau",
            },
            {
              id: 332,
              name: "Primaria CORBASCA",
              county: "Bacau",
            },
            {
              id: 333,
              name: "Primaria COŢOFĂNEŞTI",
              county: "Bacau",
            },
            {
              id: 334,
              name: "Primaria DĂMIENEŞTI",
              county: "Bacau",
            },
            {
              id: 335,
              name: "Primaria DEALU MORII",
              county: "Bacau",
            },
            {
              id: 336,
              name: "Primaria DOFTEANA",
              county: "Bacau",
            },
            {
              id: 337,
              name: "Primaria FARAOANI",
              county: "Bacau",
            },
            {
              id: 338,
              name: "Primaria FILIPENI",
              county: "Bacau",
            },
            {
              id: 339,
              name: "Primaria FILIPEŞTI",
              county: "Bacau",
            },
            {
              id: 340,
              name: "Primaria GĂICEANA",
              county: "Bacau",
            },
            {
              id: 341,
              name: "Primaria GHIMEŞ-FĂGET",
              county: "Bacau",
            },
            {
              id: 342,
              name: "Primaria GIOSENI",
              county: "Bacau",
            },
            {
              id: 343,
              name: "Primaria GÎRLENI",
              county: "Bacau",
            },
            {
              id: 344,
              name: "Primaria GLĂVĂNEŞTI",
              county: "Bacau",
            },
            {
              id: 345,
              name: "Primaria GURA VĂII",
              county: "Bacau",
            },
            {
              id: 346,
              name: "Primaria HELEGIU",
              county: "Bacau",
            },
            {
              id: 347,
              name: "Primaria HEMEIUŞ",
              county: "Bacau",
            },
            {
              id: 348,
              name: "Primaria HORGEŞTI",
              county: "Bacau",
            },
            {
              id: 349,
              name: "Primaria HURUIEŞTI",
              county: "Bacau",
            },
            {
              id: 350,
              name: "Primaria ITEŞTI",
              county: "Bacau",
            },
            {
              id: 351,
              name: "Primaria IZVORU BERHECIULUI",
              county: "Bacau",
            },
            {
              id: 352,
              name: "Primaria LETEA VECHE",
              county: "Bacau",
            },
            {
              id: 353,
              name: "Primaria LIPOVA",
              county: "Bacau",
            },
            {
              id: 354,
              name: "Primaria LIVEZI",
              county: "Bacau",
            },
            {
              id: 355,
              name: "Primaria LUIZI-CĂLUGĂRA",
              county: "Bacau",
            },
            {
              id: 356,
              name: "Primaria MĂGIREŞTI",
              county: "Bacau",
            },
            {
              id: 357,
              name: "Primaria MĂGURA",
              county: "Bacau",
            },
            {
              id: 358,
              name: "Primaria MĂNĂSTIREA CAŞIN",
              county: "Bacau",
            },
            {
              id: 359,
              name: "Primaria MĂRGINENI",
              county: "Bacau",
            },
            {
              id: 360,
              name: "Primaria MOTOŞENI",
              county: "Bacau",
            },
            {
              id: 361,
              name: "Primaria NEGRI",
              county: "Bacau",
            },
            {
              id: 362,
              name: "Primaria NICOLAE BĂLCESCU",
              county: "Bacau",
            },
            {
              id: 363,
              name: "Primaria ODOBEŞTI",
              county: "Bacau",
            },
            {
              id: 364,
              name: "Primaria OITUZ",
              county: "Bacau",
            },
            {
              id: 365,
              name: "Primaria ONCEŞTI",
              county: "Bacau",
            },
            {
              id: 366,
              name: "Primaria ORBENI",
              county: "Bacau",
            },
            {
              id: 367,
              name: "Primaria PALANCA",
              county: "Bacau",
            },
            {
              id: 368,
              name: "Primaria PARAVA",
              county: "Bacau",
            },
            {
              id: 369,
              name: "Primaria PARINCEA",
              county: "Bacau",
            },
            {
              id: 370,
              name: "Primaria PÂRJOL",
              county: "Bacau",
            },
            {
              id: 371,
              name: "Primaria PÎNCEŞTI",
              county: "Bacau",
            },
            {
              id: 372,
              name: "Primaria PÎRGĂREŞTI",
              county: "Bacau",
            },
            {
              id: 373,
              name: "Primaria PLOPANA",
              county: "Bacau",
            },
            {
              id: 374,
              name: "Primaria PODU TURCULUI",
              county: "Bacau",
            },
            {
              id: 375,
              name: "Primaria PODURI",
              county: "Bacau",
            },
            {
              id: 376,
              name: "Primaria PRĂJEŞTI",
              county: "Bacau",
            },
            {
              id: 377,
              name: "Primaria RACOVA",
              county: "Bacau",
            },
            {
              id: 378,
              name: "Primaria RĂCĂCIUNI",
              county: "Bacau",
            },
            {
              id: 379,
              name: "Primaria RĂCHITOASA",
              county: "Bacau",
            },
            {
              id: 380,
              name: "Primaria ROŞIORI",
              county: "Bacau",
            },
            {
              id: 381,
              name: "Primaria SASCUT",
              county: "Bacau",
            },
            {
              id: 382,
              name: "Primaria SĂNDULENI",
              county: "Bacau",
            },
            {
              id: 383,
              name: "Primaria SĂRATA",
              county: "Bacau",
            },
            {
              id: 384,
              name: "Primaria SĂUCEŞTI",
              county: "Bacau",
            },
            {
              id: 385,
              name: "Primaria SCORŢENI",
              county: "Bacau",
            },
            {
              id: 386,
              name: "Primaria SECUIENI",
              county: "Bacau",
            },
            {
              id: 387,
              name: "Primaria SOLONŢ",
              county: "Bacau",
            },
            {
              id: 388,
              name: "Primaria STĂNIŞEŞTI",
              county: "Bacau",
            },
            {
              id: 389,
              name: "Primaria STRUGARI",
              county: "Bacau",
            },
            {
              id: 390,
              name: "Primaria ŞTEFAN CEL MARE",
              county: "Bacau",
            },
            {
              id: 391,
              name: "Primaria TAMAŞI",
              county: "Bacau",
            },
            {
              id: 392,
              name: "Primaria TĂTĂRĂŞTI",
              county: "Bacau",
            },
            {
              id: 393,
              name: "Primaria TÎRGU TROTUŞ",
              county: "Bacau",
            },
            {
              id: 394,
              name: "Primaria TRAIAN",
              county: "Bacau",
            },
            {
              id: 395,
              name: "Primaria UNGURENI",
              county: "Bacau",
            },
            {
              id: 396,
              name: "Primaria URECHEŞTI",
              county: "Bacau",
            },
            {
              id: 397,
              name: "Primaria VALEA SEACĂ",
              county: "Bacau",
            },
            {
              id: 398,
              name: "Primaria VULTURENI",
              county: "Bacau",
            },
            {
              id: 399,
              name: "Primaria ZEMEŞ",
              county: "Bacau",
            },
            {
              id: 400,
              name: "Primaria MUNICIPIUL ORADEA",
              county: "Bihor",
            },
            {
              id: 401,
              name: "Primaria MUNICIPIUL BEIUŞ",
              county: "Bihor",
            },
            {
              id: 402,
              name: "Primaria MUNICIPIUL MARGHITA",
              county: "Bihor",
            },
            {
              id: 403,
              name: "Primaria MUNICIPIUL SALONTA",
              county: "Bihor",
            },
            {
              id: 404,
              name: "Primaria ORAŞ ALEŞD",
              county: "Bihor",
            },
            {
              id: 405,
              name: "Primaria ORAŞ NUCET",
              county: "Bihor",
            },
            {
              id: 406,
              name: "Primaria ORAŞ SĂCUENI",
              county: "Bihor",
            },
            {
              id: 407,
              name: "Primaria ORAŞ ŞTEI",
              county: "Bihor",
            },
            {
              id: 408,
              name: "Primaria ORAŞ VALEA LUI MIHAI",
              county: "Bihor",
            },
            {
              id: 409,
              name: "Primaria ORAŞ VAŞCĂU",
              county: "Bihor",
            },
            {
              id: 410,
              name: "Primaria ABRAM",
              county: "Bihor",
            },
            {
              id: 411,
              name: "Primaria ABRĂMUŢ",
              county: "Bihor",
            },
            {
              id: 412,
              name: "Primaria AŞTILEU",
              county: "Bihor",
            },
            {
              id: 413,
              name: "Primaria AUŞEU",
              county: "Bihor",
            },
            {
              id: 414,
              name: "Primaria AVRAM IANCU",
              county: "Bihor",
            },
            {
              id: 415,
              name: "Primaria BALC",
              county: "Bihor",
            },
            {
              id: 416,
              name: "Primaria BATĂR",
              county: "Bihor",
            },
            {
              id: 417,
              name: "Primaria BIHARIA",
              county: "Bihor",
            },
            {
              id: 418,
              name: "Primaria BOIANU MARE",
              county: "Bihor",
            },
            {
              id: 419,
              name: "Primaria BOROD",
              county: "Bihor",
            },
            {
              id: 420,
              name: "Primaria BORŞ",
              county: "Bihor",
            },
            {
              id: 421,
              name: "Primaria BRATCA",
              county: "Bihor",
            },
            {
              id: 422,
              name: "Primaria BRUSTURI",
              county: "Bihor",
            },
            {
              id: 423,
              name: "Primaria BUDUREASA",
              county: "Bihor",
            },
            {
              id: 424,
              name: "Primaria BUDUSLĂU",
              county: "Bihor",
            },
            {
              id: 425,
              name: "Primaria BULZ",
              county: "Bihor",
            },
            {
              id: 426,
              name: "Primaria BUNTEŞTI",
              county: "Bihor",
            },
            {
              id: 427,
              name: "Primaria CĂBEŞTI",
              county: "Bihor",
            },
            {
              id: 428,
              name: "Primaria CĂPÎLNA",
              county: "Bihor",
            },
            {
              id: 429,
              name: "Primaria CĂRPINET",
              county: "Bihor",
            },
            {
              id: 430,
              name: "Primaria CEFA",
              county: "Bihor",
            },
            {
              id: 431,
              name: "Primaria CEICA",
              county: "Bihor",
            },
            {
              id: 432,
              name: "Primaria CETARIU",
              county: "Bihor",
            },
            {
              id: 433,
              name: "Primaria CHERECHIU",
              county: "Bihor",
            },
            {
              id: 434,
              name: "Primaria CHIŞLAZ",
              county: "Bihor",
            },
            {
              id: 435,
              name: "Primaria CIUMEGHIU",
              county: "Bihor",
            },
            {
              id: 436,
              name: "Primaria CÎMPANI",
              county: "Bihor",
            },
            {
              id: 437,
              name: "Primaria COCIUBA MARE",
              county: "Bihor",
            },
            {
              id: 438,
              name: "Primaria COPĂCEL",
              county: "Bihor",
            },
            {
              id: 439,
              name: "Primaria CRIŞTIORU DE JOS",
              county: "Bihor",
            },
            {
              id: 440,
              name: "Primaria CURĂŢELE",
              county: "Bihor",
            },
            {
              id: 441,
              name: "Primaria CURTUIŞENI",
              county: "Bihor",
            },
            {
              id: 442,
              name: "Primaria DERNA",
              county: "Bihor",
            },
            {
              id: 443,
              name: "Primaria DIOSIG",
              county: "Bihor",
            },
            {
              id: 444,
              name: "Primaria DOBREŞTI",
              county: "Bihor",
            },
            {
              id: 445,
              name: "Primaria DRĂGĂNEŞTI",
              county: "Bihor",
            },
            {
              id: 446,
              name: "Primaria DRĂGEŞTI",
              county: "Bihor",
            },
            {
              id: 447,
              name: "Primaria FINIŞ",
              county: "Bihor",
            },
            {
              id: 448,
              name: "Primaria GEPIU",
              county: "Bihor",
            },
            {
              id: 449,
              name: "Primaria GIRIŞU DE CRIŞ",
              county: "Bihor",
            },
            {
              id: 450,
              name: "Primaria HIDIŞELU DE SUS",
              county: "Bihor",
            },
            {
              id: 451,
              name: "Primaria HOLOD",
              county: "Bihor",
            },
            {
              id: 452,
              name: "Primaria HUSASĂU DE TINCA",
              county: "Bihor",
            },
            {
              id: 453,
              name: "Primaria INEU",
              county: "Bihor",
            },
            {
              id: 454,
              name: "Primaria LAZURI DE BEIUŞ",
              county: "Bihor",
            },
            {
              id: 455,
              name: "Primaria LĂZĂRENI",
              county: "Bihor",
            },
            {
              id: 456,
              name: "Primaria LUGAŞU DE JOS",
              county: "Bihor",
            },
            {
              id: 457,
              name: "Primaria LUNCA",
              county: "Bihor",
            },
            {
              id: 458,
              name: "Primaria MĂDĂRAS",
              county: "Bihor",
            },
            {
              id: 459,
              name: "Primaria MĂGEŞTI",
              county: "Bihor",
            },
            {
              id: 460,
              name: "Primaria NOJORID",
              county: "Bihor",
            },
            {
              id: 461,
              name: "Primaria OLCEA",
              county: "Bihor",
            },
            {
              id: 462,
              name: "Primaria OŞORHEI",
              county: "Bihor",
            },
            {
              id: 463,
              name: "Primaria PALEU",
              county: "Bihor",
            },
            {
              id: 464,
              name: "Primaria PIETROASA",
              county: "Bihor",
            },
            {
              id: 465,
              name: "Primaria POCOLA",
              county: "Bihor",
            },
            {
              id: 466,
              name: "Primaria POMEZEU",
              county: "Bihor",
            },
            {
              id: 467,
              name: "Primaria POPEŞTI",
              county: "Bihor",
            },
            {
              id: 468,
              name: "Primaria RĂBĂGANI",
              county: "Bihor",
            },
            {
              id: 469,
              name: "Primaria REMETEA",
              county: "Bihor",
            },
            {
              id: 470,
              name: "Primaria RIENI",
              county: "Bihor",
            },
            {
              id: 471,
              name: "Primaria ROŞIA",
              county: "Bihor",
            },
            {
              id: 472,
              name: "Primaria ROŞIORI",
              county: "Bihor",
            },
            {
              id: 473,
              name: "Primaria SĂCĂDAT",
              county: "Bihor",
            },
            {
              id: 474,
              name: "Primaria SĂLACEA",
              county: "Bihor",
            },
            {
              id: 475,
              name: "Primaria SĂLARD",
              county: "Bihor",
            },
            {
              id: 476,
              name: "Primaria SÂNIOB",
              county: "Bihor",
            },
            {
              id: 477,
              name: "Primaria SÂNNICOLAU ROMÂN",
              county: "Bihor",
            },
            {
              id: 478,
              name: "Primaria SÎMBĂTA",
              county: "Bihor",
            },
            {
              id: 479,
              name: "Primaria SÎNMARTIN",
              county: "Bihor",
            },
            {
              id: 480,
              name: "Primaria SÎNTANDREI",
              county: "Bihor",
            },
            {
              id: 481,
              name: "Primaria SÎRBI",
              county: "Bihor",
            },
            {
              id: 482,
              name: "Primaria SPINUŞ",
              county: "Bihor",
            },
            {
              id: 483,
              name: "Primaria SUPLACU DE BARCĂU",
              county: "Bihor",
            },
            {
              id: 484,
              name: "Primaria ŞIMIAN",
              county: "Bihor",
            },
            {
              id: 485,
              name: "Primaria ŞINTEU",
              county: "Bihor",
            },
            {
              id: 486,
              name: "Primaria ŞOIMI",
              county: "Bihor",
            },
            {
              id: 487,
              name: "Primaria ŞUNCUIUŞ",
              county: "Bihor",
            },
            {
              id: 488,
              name: "Primaria TARCEA",
              county: "Bihor",
            },
            {
              id: 489,
              name: "Primaria TĂMĂŞEU",
              county: "Bihor",
            },
            {
              id: 490,
              name: "Primaria TĂRCAIA",
              county: "Bihor",
            },
            {
              id: 491,
              name: "Primaria TĂUTEU",
              county: "Bihor",
            },
            {
              id: 492,
              name: "Primaria TILEAGD",
              county: "Bihor",
            },
            {
              id: 493,
              name: "Primaria TINCA",
              county: "Bihor",
            },
            {
              id: 494,
              name: "Primaria TOBOLIU",
              county: "Bihor",
            },
            {
              id: 495,
              name: "Primaria TULCA",
              county: "Bihor",
            },
            {
              id: 496,
              name: "Primaria ŢEŢCHEA",
              county: "Bihor",
            },
            {
              id: 497,
              name: "Primaria UILEACU DE BEIUŞ",
              county: "Bihor",
            },
            {
              id: 498,
              name: "Primaria VADU CRIŞULUI",
              county: "Bihor",
            },
            {
              id: 499,
              name: "Primaria VIIŞOARA",
              county: "Bihor",
            },
            {
              id: 500,
              name: "Primaria VÎRCIOROG",
              county: "Bihor",
            },
            {
              id: 501,
              name: "Primaria MUNICIPIUL BISTRIŢA",
              county: "Bistrita Nasaud",
            },
            {
              id: 502,
              name: "Primaria ORAŞ BECLEAN",
              county: "Bistrita Nasaud",
            },
            {
              id: 503,
              name: "Primaria ORAŞ NĂSĂUD",
              county: "Bistrita Nasaud",
            },
            {
              id: 504,
              name: "Primaria ORAŞ SÎNGEORZ-BĂI",
              county: "Bistrita Nasaud",
            },
            {
              id: 505,
              name: "Primaria BISTRIŢA BÎRGĂULUI",
              county: "Bistrita Nasaud",
            },
            {
              id: 506,
              name: "Primaria BRANIŞTEA",
              county: "Bistrita Nasaud",
            },
            {
              id: 507,
              name: "Primaria BUDACU DE JOS",
              county: "Bistrita Nasaud",
            },
            {
              id: 508,
              name: "Primaria BUDEŞTI",
              county: "Bistrita Nasaud",
            },
            {
              id: 509,
              name: "Primaria CĂIANU MIC",
              county: "Bistrita Nasaud",
            },
            {
              id: 510,
              name: "Primaria CETATE",
              county: "Bistrita Nasaud",
            },
            {
              id: 511,
              name: "Primaria CHIOCHIŞ",
              county: "Bistrita Nasaud",
            },
            {
              id: 512,
              name: "Primaria CHIUZA",
              county: "Bistrita Nasaud",
            },
            {
              id: 513,
              name: "Primaria CICEU - MIHĂIEŞTI",
              county: "Bistrita Nasaud",
            },
            {
              id: 514,
              name: "Primaria CICEU-GIURGEŞTI",
              county: "Bistrita Nasaud",
            },
            {
              id: 515,
              name: "Primaria COŞBUC",
              county: "Bistrita Nasaud",
            },
            {
              id: 516,
              name: "Primaria DUMITRA",
              county: "Bistrita Nasaud",
            },
            {
              id: 517,
              name: "Primaria DUMITRIŢA",
              county: "Bistrita Nasaud",
            },
            {
              id: 518,
              name: "Primaria FELDRU",
              county: "Bistrita Nasaud",
            },
            {
              id: 519,
              name: "Primaria GALAŢII BISTRIŢEI",
              county: "Bistrita Nasaud",
            },
            {
              id: 520,
              name: "Primaria ILVA MARE",
              county: "Bistrita Nasaud",
            },
            {
              id: 521,
              name: "Primaria ILVA MICA",
              county: "Bistrita Nasaud",
            },
            {
              id: 522,
              name: "Primaria JOSENII BÎRGĂULUI",
              county: "Bistrita Nasaud",
            },
            {
              id: 523,
              name: "Primaria LECHINŢA",
              county: "Bistrita Nasaud",
            },
            {
              id: 524,
              name: "Primaria LEŞU",
              county: "Bistrita Nasaud",
            },
            {
              id: 525,
              name: "Primaria LIVEZILE",
              county: "Bistrita Nasaud",
            },
            {
              id: 526,
              name: "Primaria LUNCA ILVEI",
              county: "Bistrita Nasaud",
            },
            {
              id: 527,
              name: "Primaria MAIERU",
              county: "Bistrita Nasaud",
            },
            {
              id: 528,
              name: "Primaria MATEI",
              county: "Bistrita Nasaud",
            },
            {
              id: 529,
              name: "Primaria MĂGURA ILVEI",
              county: "Bistrita Nasaud",
            },
            {
              id: 530,
              name: "Primaria MĂRIŞELU",
              county: "Bistrita Nasaud",
            },
            {
              id: 531,
              name: "Primaria MICEŞTII DE CÎMPIE",
              county: "Bistrita Nasaud",
            },
            {
              id: 532,
              name: "Primaria MILAŞ",
              county: "Bistrita Nasaud",
            },
            {
              id: 533,
              name: "Primaria MONOR",
              county: "Bistrita Nasaud",
            },
            {
              id: 534,
              name: "Primaria NEGRILEŞTI",
              county: "Bistrita Nasaud",
            },
            {
              id: 535,
              name: "Primaria NIMIGEA",
              county: "Bistrita Nasaud",
            },
            {
              id: 536,
              name: "Primaria NUŞENI",
              county: "Bistrita Nasaud",
            },
            {
              id: 537,
              name: "Primaria PARVA",
              county: "Bistrita Nasaud",
            },
            {
              id: 538,
              name: "Primaria PETRU RAREŞ",
              county: "Bistrita Nasaud",
            },
            {
              id: 539,
              name: "Primaria POIANA ILVEI",
              county: "Bistrita Nasaud",
            },
            {
              id: 540,
              name: "Primaria PRUNDU BÎRGĂULUI",
              county: "Bistrita Nasaud",
            },
            {
              id: 541,
              name: "Primaria REBRA",
              county: "Bistrita Nasaud",
            },
            {
              id: 542,
              name: "Primaria REBRIŞOARA",
              county: "Bistrita Nasaud",
            },
            {
              id: 543,
              name: "Primaria RODNA",
              county: "Bistrita Nasaud",
            },
            {
              id: 544,
              name: "Primaria ROMULI",
              county: "Bistrita Nasaud",
            },
            {
              id: 545,
              name: "Primaria RUNCU SALVEI",
              county: "Bistrita Nasaud",
            },
            {
              id: 546,
              name: "Primaria SALVA",
              county: "Bistrita Nasaud",
            },
            {
              id: 547,
              name: "Primaria SILIVAŞU DE CÎMPIE",
              county: "Bistrita Nasaud",
            },
            {
              id: 548,
              name: "Primaria SÎNMIHAIU DE CÎMPIE",
              county: "Bistrita Nasaud",
            },
            {
              id: 549,
              name: "Primaria SPERMEZEU",
              county: "Bistrita Nasaud",
            },
            {
              id: 550,
              name: "Primaria ŞANŢ",
              county: "Bistrita Nasaud",
            },
            {
              id: 551,
              name: "Primaria ŞIEU",
              county: "Bistrita Nasaud",
            },
            {
              id: 552,
              name: "Primaria ŞIEU-MĂGHERUŞ",
              county: "Bistrita Nasaud",
            },
            {
              id: 553,
              name: "Primaria ŞIEU-ODORHEI",
              county: "Bistrita Nasaud",
            },
            {
              id: 554,
              name: "Primaria ŞIEUŢ",
              county: "Bistrita Nasaud",
            },
            {
              id: 555,
              name: "Primaria ŞINTEREAG",
              county: "Bistrita Nasaud",
            },
            {
              id: 556,
              name: "Primaria TEACA",
              county: "Bistrita Nasaud",
            },
            {
              id: 557,
              name: "Primaria TELCIU",
              county: "Bistrita Nasaud",
            },
            {
              id: 558,
              name: "Primaria TIHA BÎRGĂULUI",
              county: "Bistrita Nasaud",
            },
            {
              id: 559,
              name: "Primaria TÎRLIŞUA",
              county: "Bistrita Nasaud",
            },
            {
              id: 560,
              name: "Primaria URIU",
              county: "Bistrita Nasaud",
            },
            {
              id: 561,
              name: "Primaria URMENIŞ",
              county: "Bistrita Nasaud",
            },
            {
              id: 562,
              name: "Primaria ZAGRA",
              county: "Bistrita Nasaud",
            },
            {
              id: 563,
              name: "Primaria MUNICIPIUL BOTOŞANI",
              county: "Botosani",
            },
            {
              id: 564,
              name: "Primaria MUNICIPIUL DOROHOI",
              county: "Botosani",
            },
            {
              id: 565,
              name: "Primaria ORAŞ BUCECEA",
              county: "Botosani",
            },
            {
              id: 566,
              name: "Primaria ORAŞ DARABANI",
              county: "Botosani",
            },
            {
              id: 567,
              name: "Primaria ORAŞ FLĂMÂNZI",
              county: "Botosani",
            },
            {
              id: 568,
              name: "Primaria ORAŞ SĂVENI",
              county: "Botosani",
            },
            {
              id: 569,
              name: "Primaria ORAŞ ŞTEFĂNEŞTI",
              county: "Botosani",
            },
            {
              id: 570,
              name: "Primaria ADĂŞENI",
              county: "Botosani",
            },
            {
              id: 571,
              name: "Primaria ALBEŞTI",
              county: "Botosani",
            },
            {
              id: 572,
              name: "Primaria AVRĂMENI",
              county: "Botosani",
            },
            {
              id: 573,
              name: "Primaria BĂLUŞENI",
              county: "Botosani",
            },
            {
              id: 574,
              name: "Primaria BLÂNDEŞTI",
              county: "Botosani",
            },
            {
              id: 575,
              name: "Primaria BRĂEŞTI",
              county: "Botosani",
            },
            {
              id: 576,
              name: "Primaria BROSCĂUŢI",
              county: "Botosani",
            },
            {
              id: 577,
              name: "Primaria CĂLĂRAŞI",
              county: "Botosani",
            },
            {
              id: 578,
              name: "Primaria CÂNDEŞTI",
              county: "Botosani",
            },
            {
              id: 579,
              name: "Primaria CONCEŞTI",
              county: "Botosani",
            },
            {
              id: 580,
              name: "Primaria COPĂLĂU",
              county: "Botosani",
            },
            {
              id: 581,
              name: "Primaria CORDĂRENI",
              county: "Botosani",
            },
            {
              id: 582,
              name: "Primaria CORLĂTENI",
              county: "Botosani",
            },
            {
              id: 583,
              name: "Primaria CORNI",
              county: "Botosani",
            },
            {
              id: 584,
              name: "Primaria COŞULA",
              county: "Botosani",
            },
            {
              id: 585,
              name: "Primaria COŢUŞCA",
              county: "Botosani",
            },
            {
              id: 586,
              name: "Primaria CRISTEŞTI",
              county: "Botosani",
            },
            {
              id: 587,
              name: "Primaria CRISTINEŞTI",
              county: "Botosani",
            },
            {
              id: 588,
              name: "Primaria CURTEŞTI",
              county: "Botosani",
            },
            {
              id: 589,
              name: "Primaria DERSCA",
              county: "Botosani",
            },
            {
              id: 590,
              name: "Primaria DIMĂCHENI",
              county: "Botosani",
            },
            {
              id: 591,
              name: "Primaria DÎNGENI",
              county: "Botosani",
            },
            {
              id: 592,
              name: "Primaria DOBÂRCENI",
              county: "Botosani",
            },
            {
              id: 593,
              name: "Primaria DRĂGUŞENI",
              county: "Botosani",
            },
            {
              id: 594,
              name: "Primaria DURNEŞTI",
              county: "Botosani",
            },
            {
              id: 595,
              name: "Primaria FRUMUŞICA",
              county: "Botosani",
            },
            {
              id: 596,
              name: "Primaria GEORGE ENESCU",
              county: "Botosani",
            },
            {
              id: 597,
              name: "Primaria GORBĂNEŞTI",
              county: "Botosani",
            },
            {
              id: 598,
              name: "Primaria HAVÎRNA",
              county: "Botosani",
            },
            {
              id: 599,
              name: "Primaria HĂNEŞTI",
              county: "Botosani",
            },
            {
              id: 600,
              name: "Primaria HILIŞEU-HORIA",
              county: "Botosani",
            },
            {
              id: 601,
              name: "Primaria HLIPICENI",
              county: "Botosani",
            },
            {
              id: 602,
              name: "Primaria HUDEŞTI",
              county: "Botosani",
            },
            {
              id: 603,
              name: "Primaria IBĂNEŞTI",
              county: "Botosani",
            },
            {
              id: 604,
              name: "Primaria LEORDA",
              county: "Botosani",
            },
            {
              id: 605,
              name: "Primaria LOZNA",
              county: "Botosani",
            },
            {
              id: 606,
              name: "Primaria LUNCA",
              county: "Botosani",
            },
            {
              id: 607,
              name: "Primaria MANOLEASA",
              county: "Botosani",
            },
            {
              id: 608,
              name: "Primaria MIHAI EMINESCU",
              county: "Botosani",
            },
            {
              id: 609,
              name: "Primaria MIHĂILENI",
              county: "Botosani",
            },
            {
              id: 610,
              name: "Primaria MIHĂLĂŞENI",
              county: "Botosani",
            },
            {
              id: 611,
              name: "Primaria MILEANCA",
              county: "Botosani",
            },
            {
              id: 612,
              name: "Primaria MITOC",
              county: "Botosani",
            },
            {
              id: 613,
              name: "Primaria NICŞENI",
              county: "Botosani",
            },
            {
              id: 614,
              name: "Primaria PĂLTINIŞ",
              county: "Botosani",
            },
            {
              id: 615,
              name: "Primaria POMÎRLA",
              county: "Botosani",
            },
            {
              id: 616,
              name: "Primaria PRĂJENI",
              county: "Botosani",
            },
            {
              id: 617,
              name: "Primaria RĂCHIŢI",
              county: "Botosani",
            },
            {
              id: 618,
              name: "Primaria RĂDĂUŢI-PRUT",
              county: "Botosani",
            },
            {
              id: 619,
              name: "Primaria RĂUSENI",
              county: "Botosani",
            },
            {
              id: 620,
              name: "Primaria RIPICENI",
              county: "Botosani",
            },
            {
              id: 621,
              name: "Primaria ROMA",
              county: "Botosani",
            },
            {
              id: 622,
              name: "Primaria ROMÂNEŞTI",
              county: "Botosani",
            },
            {
              id: 623,
              name: "Primaria SANTA MARE",
              county: "Botosani",
            },
            {
              id: 624,
              name: "Primaria STĂUCENI",
              county: "Botosani",
            },
            {
              id: 625,
              name: "Primaria SUHARĂU",
              county: "Botosani",
            },
            {
              id: 626,
              name: "Primaria SULIŢA",
              county: "Botosani",
            },
            {
              id: 627,
              name: "Primaria ŞENDRICENI",
              county: "Botosani",
            },
            {
              id: 628,
              name: "Primaria ŞTIUBIENI",
              county: "Botosani",
            },
            {
              id: 629,
              name: "Primaria TODIRENI",
              county: "Botosani",
            },
            {
              id: 630,
              name: "Primaria TRUŞEŞTI",
              county: "Botosani",
            },
            {
              id: 631,
              name: "Primaria TUDORA",
              county: "Botosani",
            },
            {
              id: 632,
              name: "Primaria UNGURENI",
              county: "Botosani",
            },
            {
              id: 633,
              name: "Primaria UNŢENI",
              county: "Botosani",
            },
            {
              id: 634,
              name: "Primaria VĂCULEŞTI",
              county: "Botosani",
            },
            {
              id: 635,
              name: "Primaria VÂRFU CÂMPULUI",
              county: "Botosani",
            },
            {
              id: 636,
              name: "Primaria VIIŞOARA",
              county: "Botosani",
            },
            {
              id: 637,
              name: "Primaria VLĂDENI",
              county: "Botosani",
            },
            {
              id: 638,
              name: "Primaria VLĂSINEŞTI",
              county: "Botosani",
            },
            {
              id: 639,
              name: "Primaria VORNICENI",
              county: "Botosani",
            },
            {
              id: 640,
              name: "Primaria VORONA",
              county: "Botosani",
            },
            {
              id: 641,
              name: "Primaria MUNICIPIUL BRAŞOV",
              county: "Brasov",
            },
            {
              id: 642,
              name: "Primaria MUNICIPIUL CODLEA",
              county: "Brasov",
            },
            {
              id: 643,
              name: "Primaria MUNICIPIUL FĂGĂRAŞ",
              county: "Brasov",
            },
            {
              id: 644,
              name: "Primaria MUNICIPIUL SĂCELE",
              county: "Brasov",
            },
            {
              id: 645,
              name: "Primaria ORAŞ GHIMBAV",
              county: "Brasov",
            },
            {
              id: 646,
              name: "Primaria ORAŞ PREDEAL",
              county: "Brasov",
            },
            {
              id: 647,
              name: "Primaria ORAŞ RÂŞNOV",
              county: "Brasov",
            },
            {
              id: 648,
              name: "Primaria ORAŞ RUPEA",
              county: "Brasov",
            },
            {
              id: 649,
              name: "Primaria ORAŞ VICTORIA",
              county: "Brasov",
            },
            {
              id: 650,
              name: "Primaria ORAŞ ZĂRNEŞTI",
              county: "Brasov",
            },
            {
              id: 651,
              name: "Primaria APAŢA",
              county: "Brasov",
            },
            {
              id: 652,
              name: "Primaria AUGUSTIN",
              county: "Brasov",
            },
            {
              id: 653,
              name: "Primaria BECLEAN",
              county: "Brasov",
            },
            {
              id: 654,
              name: "Primaria BOD",
              county: "Brasov",
            },
            {
              id: 655,
              name: "Primaria BRAN",
              county: "Brasov",
            },
            {
              id: 656,
              name: "Primaria BUDILA",
              county: "Brasov",
            },
            {
              id: 657,
              name: "Primaria BUNEŞTI",
              county: "Brasov",
            },
            {
              id: 658,
              name: "Primaria CAŢA",
              county: "Brasov",
            },
            {
              id: 659,
              name: "Primaria CINCU",
              county: "Brasov",
            },
            {
              id: 660,
              name: "Primaria COMANA",
              county: "Brasov",
            },
            {
              id: 661,
              name: "Primaria CRISTIAN",
              county: "Brasov",
            },
            {
              id: 662,
              name: "Primaria CRIZBAV",
              county: "Brasov",
            },
            {
              id: 663,
              name: "Primaria DRĂGUŞ",
              county: "Brasov",
            },
            {
              id: 664,
              name: "Primaria DUMBRĂVIŢA",
              county: "Brasov",
            },
            {
              id: 665,
              name: "Primaria FELDIOARA",
              county: "Brasov",
            },
            {
              id: 666,
              name: "Primaria FUNDATA",
              county: "Brasov",
            },
            {
              id: 667,
              name: "Primaria HĂLCHIU",
              county: "Brasov",
            },
            {
              id: 668,
              name: "Primaria HĂRMAN",
              county: "Brasov",
            },
            {
              id: 669,
              name: "Primaria HÂRSENI",
              county: "Brasov",
            },
            {
              id: 670,
              name: "Primaria HOGHIZ",
              county: "Brasov",
            },
            {
              id: 671,
              name: "Primaria HOLBAV",
              county: "Brasov",
            },
            {
              id: 672,
              name: "Primaria HOMOROD",
              county: "Brasov",
            },
            {
              id: 673,
              name: "Primaria JIBERT",
              county: "Brasov",
            },
            {
              id: 674,
              name: "Primaria LISA",
              county: "Brasov",
            },
            {
              id: 675,
              name: "Primaria MĂIERUŞ",
              county: "Brasov",
            },
            {
              id: 676,
              name: "Primaria MÂNDRA",
              county: "Brasov",
            },
            {
              id: 677,
              name: "Primaria MOIECIU",
              county: "Brasov",
            },
            {
              id: 678,
              name: "Primaria ORMENIŞ",
              county: "Brasov",
            },
            {
              id: 679,
              name: "Primaria PĂRĂU",
              county: "Brasov",
            },
            {
              id: 680,
              name: "Primaria POIANA MĂRULUI",
              county: "Brasov",
            },
            {
              id: 681,
              name: "Primaria PREJMER",
              county: "Brasov",
            },
            {
              id: 682,
              name: "Primaria RACOŞ",
              county: "Brasov",
            },
            {
              id: 683,
              name: "Primaria RECEA",
              county: "Brasov",
            },
            {
              id: 684,
              name: "Primaria SÂMBĂTA DE SUS",
              county: "Brasov",
            },
            {
              id: 685,
              name: "Primaria SÎNPETRU",
              county: "Brasov",
            },
            {
              id: 686,
              name: "Primaria ŞERCAIA",
              county: "Brasov",
            },
            {
              id: 687,
              name: "Primaria ŞINCA",
              county: "Brasov",
            },
            {
              id: 688,
              name: "Primaria ŞINCA NOUĂ",
              county: "Brasov",
            },
            {
              id: 689,
              name: "Primaria ŞOARŞ",
              county: "Brasov",
            },
            {
              id: 690,
              name: "Primaria TĂRLUNGENI",
              county: "Brasov",
            },
            {
              id: 691,
              name: "Primaria TELIU",
              county: "Brasov",
            },
            {
              id: 692,
              name: "Primaria TICUŞU",
              county: "Brasov",
            },
            {
              id: 693,
              name: "Primaria UCEA",
              county: "Brasov",
            },
            {
              id: 694,
              name: "Primaria UNGRA",
              county: "Brasov",
            },
            {
              id: 695,
              name: "Primaria VAMA BUZĂULUI",
              county: "Brasov",
            },
            {
              id: 696,
              name: "Primaria VIŞTEA",
              county: "Brasov",
            },
            {
              id: 697,
              name: "Primaria VOILA",
              county: "Brasov",
            },
            {
              id: 698,
              name: "Primaria VULCAN",
              county: "Brasov",
            },
            {
              id: 699,
              name: "Primaria MUNICIPIUL BRĂILA",
              county: "Braila",
            },
            {
              id: 700,
              name: "Primaria ORAŞ FĂUREI",
              county: "Braila",
            },
            {
              id: 701,
              name: "Primaria ORAŞ IANCA",
              county: "Braila",
            },
            {
              id: 702,
              name: "Primaria ORAŞ ÎNSURĂŢEI",
              county: "Braila",
            },
            {
              id: 703,
              name: "Primaria BĂRĂGANUL",
              county: "Braila",
            },
            {
              id: 704,
              name: "Primaria BERTEŞTII DE JOS",
              county: "Braila",
            },
            {
              id: 705,
              name: "Primaria BORDEI VERDE",
              county: "Braila",
            },
            {
              id: 706,
              name: "Primaria CAZASU",
              county: "Braila",
            },
            {
              id: 707,
              name: "Primaria CHIŞCANI",
              county: "Braila",
            },
            {
              id: 708,
              name: "Primaria CIOCILE",
              county: "Braila",
            },
            {
              id: 709,
              name: "Primaria CIREŞU",
              county: "Braila",
            },
            {
              id: 710,
              name: "Primaria DUDEŞTI",
              county: "Braila",
            },
            {
              id: 711,
              name: "Primaria FRECĂŢEI",
              county: "Braila",
            },
            {
              id: 712,
              name: "Primaria GALBENU",
              county: "Braila",
            },
            {
              id: 713,
              name: "Primaria GEMENELE",
              county: "Braila",
            },
            {
              id: 714,
              name: "Primaria GRADIŞTEA",
              county: "Braila",
            },
            {
              id: 715,
              name: "Primaria GROPENI",
              county: "Braila",
            },
            {
              id: 716,
              name: "Primaria JIRLĂU",
              county: "Braila",
            },
            {
              id: 717,
              name: "Primaria MĂRAŞU",
              county: "Braila",
            },
            {
              id: 718,
              name: "Primaria MĂXINENI",
              county: "Braila",
            },
            {
              id: 719,
              name: "Primaria MIRCEA VODĂ",
              county: "Braila",
            },
            {
              id: 720,
              name: "Primaria MOVILA MIRESII",
              county: "Braila",
            },
            {
              id: 721,
              name: "Primaria RACOVIŢĂ",
              county: "Braila",
            },
            {
              id: 722,
              name: "Primaria RÎMNICELU",
              county: "Braila",
            },
            {
              id: 723,
              name: "Primaria ROMANU",
              county: "Braila",
            },
            {
              id: 724,
              name: "Primaria ROŞIORI",
              county: "Braila",
            },
            {
              id: 725,
              name: "Primaria SALCIA TUDOR",
              county: "Braila",
            },
            {
              id: 726,
              name: "Primaria SCORŢARU NOU",
              county: "Braila",
            },
            {
              id: 727,
              name: "Primaria SILIŞTEA",
              county: "Braila",
            },
            {
              id: 728,
              name: "Primaria STĂNCUŢA",
              county: "Braila",
            },
            {
              id: 729,
              name: "Primaria SURDILA-GĂISEANCA",
              county: "Braila",
            },
            {
              id: 730,
              name: "Primaria SURDILA-GRECI",
              county: "Braila",
            },
            {
              id: 731,
              name: "Primaria ŞUŢEŞTI",
              county: "Braila",
            },
            {
              id: 732,
              name: "Primaria TICHILEŞTI",
              county: "Braila",
            },
            {
              id: 733,
              name: "Primaria TRAIAN",
              county: "Braila",
            },
            {
              id: 734,
              name: "Primaria TUDOR VLADIMIRESCU",
              county: "Braila",
            },
            {
              id: 735,
              name: "Primaria TUFEŞTI",
              county: "Braila",
            },
            {
              id: 736,
              name: "Primaria ULMU",
              county: "Braila",
            },
            {
              id: 737,
              name: "Primaria UNIREA",
              county: "Braila",
            },
            {
              id: 738,
              name: "Primaria VĂDENI",
              county: "Braila",
            },
            {
              id: 739,
              name: "Primaria VICTORIA",
              county: "Braila",
            },
            {
              id: 740,
              name: "Primaria VIŞANI",
              county: "Braila",
            },
            {
              id: 741,
              name: "Primaria VIZIRU",
              county: "Braila",
            },
            {
              id: 742,
              name: "Primaria ZĂVOAIA",
              county: "Braila",
            },
            {
              id: 743,
              name: "Primaria MUNICIPIUL BUZĂU",
              county: "Buzau",
            },
            {
              id: 744,
              name: "Primaria MUNICIPIUL RÂMNICU SĂRAT",
              county: "Buzau",
            },
            {
              id: 745,
              name: "Primaria ORAŞ NEHOIU",
              county: "Buzau",
            },
            {
              id: 746,
              name: "Primaria ORAŞ PĂTÂRLAGELE",
              county: "Buzau",
            },
            {
              id: 747,
              name: "Primaria ORAŞ POGOANELE",
              county: "Buzau",
            },
            {
              id: 748,
              name: "Primaria AMARU",
              county: "Buzau",
            },
            {
              id: 749,
              name: "Primaria BALTA ALBĂ",
              county: "Buzau",
            },
            {
              id: 750,
              name: "Primaria BĂLĂCEANU",
              county: "Buzau",
            },
            {
              id: 751,
              name: "Primaria BECENI",
              county: "Buzau",
            },
            {
              id: 752,
              name: "Primaria BERCA",
              county: "Buzau",
            },
            {
              id: 753,
              name: "Primaria BISOCA",
              county: "Buzau",
            },
            {
              id: 754,
              name: "Primaria BLĂJANI",
              county: "Buzau",
            },
            {
              id: 755,
              name: "Primaria BOLDU",
              county: "Buzau",
            },
            {
              id: 756,
              name: "Primaria BOZIORU",
              county: "Buzau",
            },
            {
              id: 757,
              name: "Primaria BRĂDEANU",
              county: "Buzau",
            },
            {
              id: 758,
              name: "Primaria BRĂEŞTI",
              county: "Buzau",
            },
            {
              id: 759,
              name: "Primaria BREAZA",
              county: "Buzau",
            },
            {
              id: 760,
              name: "Primaria BUDA",
              county: "Buzau",
            },
            {
              id: 761,
              name: "Primaria C.A. ROSETTI",
              county: "Buzau",
            },
            {
              id: 762,
              name: "Primaria CALVINI",
              county: "Buzau",
            },
            {
              id: 763,
              name: "Primaria CĂNEŞTI",
              county: "Buzau",
            },
            {
              id: 764,
              name: "Primaria CĂTINA",
              county: "Buzau",
            },
            {
              id: 765,
              name: "Primaria CERNĂTEŞTI",
              county: "Buzau",
            },
            {
              id: 766,
              name: "Primaria CHILIILE",
              county: "Buzau",
            },
            {
              id: 767,
              name: "Primaria CHIOJDU",
              county: "Buzau",
            },
            {
              id: 768,
              name: "Primaria CILIBIA",
              county: "Buzau",
            },
            {
              id: 769,
              name: "Primaria CISLĂU",
              county: "Buzau",
            },
            {
              id: 770,
              name: "Primaria COCHIRLEANCA",
              county: "Buzau",
            },
            {
              id: 771,
              name: "Primaria COLŢI",
              county: "Buzau",
            },
            {
              id: 772,
              name: "Primaria COSTEŞTI",
              county: "Buzau",
            },
            {
              id: 773,
              name: "Primaria COZIENI",
              county: "Buzau",
            },
            {
              id: 774,
              name: "Primaria FLORICA",
              county: "Buzau",
            },
            {
              id: 775,
              name: "Primaria GĂLBINAŞI",
              county: "Buzau",
            },
            {
              id: 776,
              name: "Primaria GHERĂSENI",
              county: "Buzau",
            },
            {
              id: 777,
              name: "Primaria GHERGHEASA",
              county: "Buzau",
            },
            {
              id: 778,
              name: "Primaria GLODEANU SĂRAT",
              county: "Buzau",
            },
            {
              id: 779,
              name: "Primaria GLODEANU-SILIŞTEA",
              county: "Buzau",
            },
            {
              id: 780,
              name: "Primaria GREBĂNU",
              county: "Buzau",
            },
            {
              id: 781,
              name: "Primaria GURA TEGHII",
              county: "Buzau",
            },
            {
              id: 782,
              name: "Primaria LARGU",
              county: "Buzau",
            },
            {
              id: 783,
              name: "Primaria LOPĂTARI",
              county: "Buzau",
            },
            {
              id: 784,
              name: "Primaria LUCIU",
              county: "Buzau",
            },
            {
              id: 785,
              name: "Primaria MĂGURA",
              county: "Buzau",
            },
            {
              id: 786,
              name: "Primaria MĂRĂCINENI",
              county: "Buzau",
            },
            {
              id: 787,
              name: "Primaria MĂRGĂRITEŞTI",
              county: "Buzau",
            },
            {
              id: 788,
              name: "Primaria MEREI",
              county: "Buzau",
            },
            {
              id: 789,
              name: "Primaria MIHĂILEŞTI",
              county: "Buzau",
            },
            {
              id: 790,
              name: "Primaria MÎNZĂLEŞTI",
              county: "Buzau",
            },
            {
              id: 791,
              name: "Primaria MOVILA BANULUI",
              county: "Buzau",
            },
            {
              id: 792,
              name: "Primaria MURGEŞTI",
              county: "Buzau",
            },
            {
              id: 793,
              name: "Primaria NĂENI",
              county: "Buzau",
            },
            {
              id: 794,
              name: "Primaria ODĂILE",
              county: "Buzau",
            },
            {
              id: 795,
              name: "Primaria PADINA",
              county: "Buzau",
            },
            {
              id: 796,
              name: "Primaria PARDOŞI",
              county: "Buzau",
            },
            {
              id: 797,
              name: "Primaria PĂNĂTĂU",
              county: "Buzau",
            },
            {
              id: 798,
              name: "Primaria PIETROASELE",
              county: "Buzau",
            },
            {
              id: 799,
              name: "Primaria PÎRSCOV",
              county: "Buzau",
            },
            {
              id: 800,
              name: "Primaria PODGORIA",
              county: "Buzau",
            },
            {
              id: 801,
              name: "Primaria POŞTA CÎLNĂU",
              county: "Buzau",
            },
            {
              id: 802,
              name: "Primaria PUIEŞTI",
              county: "Buzau",
            },
            {
              id: 803,
              name: "Primaria RACOVIŢENI",
              county: "Buzau",
            },
            {
              id: 804,
              name: "Primaria RÎMNICELU",
              county: "Buzau",
            },
            {
              id: 805,
              name: "Primaria ROBEASCA",
              county: "Buzau",
            },
            {
              id: 806,
              name: "Primaria RUŞEŢU",
              county: "Buzau",
            },
            {
              id: 807,
              name: "Primaria SĂGEATA",
              county: "Buzau",
            },
            {
              id: 808,
              name: "Primaria SĂHĂTENI",
              county: "Buzau",
            },
            {
              id: 809,
              name: "Primaria SĂPOCA",
              county: "Buzau",
            },
            {
              id: 810,
              name: "Primaria SĂRULEŞTI",
              county: "Buzau",
            },
            {
              id: 811,
              name: "Primaria SCORŢOASA",
              county: "Buzau",
            },
            {
              id: 812,
              name: "Primaria SCUTELNICI",
              county: "Buzau",
            },
            {
              id: 813,
              name: "Primaria SIRIU",
              county: "Buzau",
            },
            {
              id: 814,
              name: "Primaria SMEENI",
              county: "Buzau",
            },
            {
              id: 815,
              name: "Primaria STÎLPU",
              county: "Buzau",
            },
            {
              id: 816,
              name: "Primaria TISĂU",
              county: "Buzau",
            },
            {
              id: 817,
              name: "Primaria TOPLICENI",
              county: "Buzau",
            },
            {
              id: 818,
              name: "Primaria ŢINTEŞTI",
              county: "Buzau",
            },
            {
              id: 819,
              name: "Primaria ULMENI",
              county: "Buzau",
            },
            {
              id: 820,
              name: "Primaria UNGURIU",
              county: "Buzau",
            },
            {
              id: 821,
              name: "Primaria VADU PAŞII",
              county: "Buzau",
            },
            {
              id: 822,
              name: "Primaria VALEA RÎMNICULUI",
              county: "Buzau",
            },
            {
              id: 823,
              name: "Primaria VALEA SALCIEI",
              county: "Buzau",
            },
            {
              id: 824,
              name: "Primaria VERNEŞTI",
              county: "Buzau",
            },
            {
              id: 825,
              name: "Primaria VINTILĂ VODĂ",
              county: "Buzau",
            },
            {
              id: 826,
              name: "Primaria VIPEREŞTI",
              county: "Buzau",
            },
            {
              id: 827,
              name: "Primaria VÎLCELELE",
              county: "Buzau",
            },
            {
              id: 828,
              name: "Primaria ZĂRNEŞTI",
              county: "Buzau",
            },
            {
              id: 829,
              name: "Primaria ZIDURI",
              county: "Buzau",
            },
            {
              id: 830,
              name: "Primaria MUNICIPIUL REŞIŢA",
              county: "Caras Severin",
            },
            {
              id: 831,
              name: "Primaria MUNICIPIUL CARANSEBEŞ",
              county: "Caras Severin",
            },
            {
              id: 832,
              name: "Primaria ORAŞ ANINA",
              county: "Caras Severin",
            },
            {
              id: 833,
              name: "Primaria ORAŞ BĂILE HERCULANE",
              county: "Caras Severin",
            },
            {
              id: 834,
              name: "Primaria ORAŞ BOCŞA",
              county: "Caras Severin",
            },
            {
              id: 835,
              name: "Primaria ORAŞ MOLDOVA NOUĂ",
              county: "Caras Severin",
            },
            {
              id: 836,
              name: "Primaria ORAŞ ORAVIŢA",
              county: "Caras Severin",
            },
            {
              id: 837,
              name: "Primaria ORAŞ OŢELU ROŞU",
              county: "Caras Severin",
            },
            {
              id: 838,
              name: "Primaria ARMENIŞ",
              county: "Caras Severin",
            },
            {
              id: 839,
              name: "Primaria BĂNIA",
              county: "Caras Severin",
            },
            {
              id: 840,
              name: "Primaria BĂUŢAR",
              county: "Caras Severin",
            },
            {
              id: 841,
              name: "Primaria BERLIŞTE",
              county: "Caras Severin",
            },
            {
              id: 842,
              name: "Primaria BERZASCA",
              county: "Caras Severin",
            },
            {
              id: 843,
              name: "Primaria BERZOVIA",
              county: "Caras Severin",
            },
            {
              id: 844,
              name: "Primaria BOLVAŞNIŢA",
              county: "Caras Severin",
            },
            {
              id: 845,
              name: "Primaria BOZOVICI",
              county: "Caras Severin",
            },
            {
              id: 846,
              name: "Primaria BREBU",
              county: "Caras Severin",
            },
            {
              id: 847,
              name: "Primaria BREBU NOU",
              county: "Caras Severin",
            },
            {
              id: 848,
              name: "Primaria BUCHIN",
              county: "Caras Severin",
            },
            {
              id: 849,
              name: "Primaria BUCOŞNIŢA",
              county: "Caras Severin",
            },
            {
              id: 850,
              name: "Primaria CARAŞOVA",
              county: "Caras Severin",
            },
            {
              id: 851,
              name: "Primaria CĂRBUNARI",
              county: "Caras Severin",
            },
            {
              id: 852,
              name: "Primaria CICLOVA ROMÂNĂ",
              county: "Caras Severin",
            },
            {
              id: 853,
              name: "Primaria CIUCHICI",
              county: "Caras Severin",
            },
            {
              id: 854,
              name: "Primaria CIUDANOVIŢA",
              county: "Caras Severin",
            },
            {
              id: 855,
              name: "Primaria CONSTANTIN DAICOVICIU",
              county: "Caras Severin",
            },
            {
              id: 856,
              name: "Primaria COPĂCELE",
              county: "Caras Severin",
            },
            {
              id: 857,
              name: "Primaria CORNEA",
              county: "Caras Severin",
            },
            {
              id: 858,
              name: "Primaria CORNEREVA",
              county: "Caras Severin",
            },
            {
              id: 859,
              name: "Primaria CORONINI",
              county: "Caras Severin",
            },
            {
              id: 860,
              name: "Primaria DALBOŞEŢ",
              county: "Caras Severin",
            },
            {
              id: 861,
              name: "Primaria DOCLIN",
              county: "Caras Severin",
            },
            {
              id: 862,
              name: "Primaria DOGNECEA",
              county: "Caras Severin",
            },
            {
              id: 863,
              name: "Primaria DOMAŞNEA",
              county: "Caras Severin",
            },
            {
              id: 864,
              name: "Primaria EFTIMIE MURGU",
              county: "Caras Severin",
            },
            {
              id: 865,
              name: "Primaria EZERIŞ",
              county: "Caras Severin",
            },
            {
              id: 866,
              name: "Primaria FÎRLIUG",
              county: "Caras Severin",
            },
            {
              id: 867,
              name: "Primaria FOROTIC",
              county: "Caras Severin",
            },
            {
              id: 868,
              name: "Primaria GÎRNIC",
              county: "Caras Severin",
            },
            {
              id: 869,
              name: "Primaria GLIMBOCA",
              county: "Caras Severin",
            },
            {
              id: 870,
              name: "Primaria GORUIA",
              county: "Caras Severin",
            },
            {
              id: 871,
              name: "Primaria GRĂDINARI",
              county: "Caras Severin",
            },
            {
              id: 872,
              name: "Primaria IABLANIŢA",
              county: "Caras Severin",
            },
            {
              id: 873,
              name: "Primaria LĂPUŞNICEL",
              county: "Caras Severin",
            },
            {
              id: 874,
              name: "Primaria LĂPUŞNICU MARE",
              county: "Caras Severin",
            },
            {
              id: 875,
              name: "Primaria LUNCAVIŢA",
              county: "Caras Severin",
            },
            {
              id: 876,
              name: "Primaria LUPAC",
              county: "Caras Severin",
            },
            {
              id: 877,
              name: "Primaria MARGA",
              county: "Caras Severin",
            },
            {
              id: 878,
              name: "Primaria MĂURENI",
              county: "Caras Severin",
            },
            {
              id: 879,
              name: "Primaria MEHADIA",
              county: "Caras Severin",
            },
            {
              id: 880,
              name: "Primaria MEHADICA",
              county: "Caras Severin",
            },
            {
              id: 881,
              name: "Primaria NAIDĂŞ",
              county: "Caras Severin",
            },
            {
              id: 882,
              name: "Primaria OBREJA",
              county: "Caras Severin",
            },
            {
              id: 883,
              name: "Primaria OCNA DE FIER",
              county: "Caras Severin",
            },
            {
              id: 884,
              name: "Primaria PĂLTINIŞ",
              county: "Caras Severin",
            },
            {
              id: 885,
              name: "Primaria POJEJENA",
              county: "Caras Severin",
            },
            {
              id: 886,
              name: "Primaria PRIGOR",
              county: "Caras Severin",
            },
            {
              id: 887,
              name: "Primaria RAMNA",
              county: "Caras Severin",
            },
            {
              id: 888,
              name: "Primaria RĂCĂŞDIA",
              county: "Caras Severin",
            },
            {
              id: 889,
              name: "Primaria RUSCA MONTANĂ",
              county: "Caras Severin",
            },
            {
              id: 890,
              name: "Primaria SACU",
              county: "Caras Severin",
            },
            {
              id: 891,
              name: "Primaria SASCA MONTANĂ",
              county: "Caras Severin",
            },
            {
              id: 892,
              name: "Primaria SICHEVIŢA",
              county: "Caras Severin",
            },
            {
              id: 893,
              name: "Primaria SLATINA-TIMIŞ",
              county: "Caras Severin",
            },
            {
              id: 894,
              name: "Primaria SOCOL",
              county: "Caras Severin",
            },
            {
              id: 895,
              name: "Primaria ŞOPOTU NOU",
              county: "Caras Severin",
            },
            {
              id: 896,
              name: "Primaria TEREGOVA",
              county: "Caras Severin",
            },
            {
              id: 897,
              name: "Primaria TICVANIU MARE",
              county: "Caras Severin",
            },
            {
              id: 898,
              name: "Primaria TÎRNOVA",
              county: "Caras Severin",
            },
            {
              id: 899,
              name: "Primaria TOPLEŢ",
              county: "Caras Severin",
            },
            {
              id: 900,
              name: "Primaria TURNU RUIENI",
              county: "Caras Severin",
            },
            {
              id: 901,
              name: "Primaria VĂLIUG",
              county: "Caras Severin",
            },
            {
              id: 902,
              name: "Primaria VĂRĂDIA",
              county: "Caras Severin",
            },
            {
              id: 903,
              name: "Primaria VERMEŞ",
              county: "Caras Severin",
            },
            {
              id: 904,
              name: "Primaria VRANI",
              county: "Caras Severin",
            },
            {
              id: 905,
              name: "Primaria ZĂVOI",
              county: "Caras Severin",
            },
            {
              id: 906,
              name: "Primaria ZORLENŢU MARE",
              county: "Caras Severin",
            },
            {
              id: 907,
              name: "Primaria MUNICIPIUL CĂLĂRAŞI",
              county: "Calarasi",
            },
            {
              id: 908,
              name: "Primaria MUNICIPIUL OLTENIŢA",
              county: "Calarasi",
            },
            {
              id: 909,
              name: "Primaria ORAŞ BUDEŞTI",
              county: "Calarasi",
            },
            {
              id: 910,
              name: "Primaria ORAŞ FUNDULEA",
              county: "Calarasi",
            },
            {
              id: 911,
              name: "Primaria ORAŞ LEHLIU GARĂ",
              county: "Calarasi",
            },
            {
              id: 912,
              name: "Primaria ALEXANDRU ODOBESCU",
              county: "Calarasi",
            },
            {
              id: 913,
              name: "Primaria BELCIUGATELE",
              county: "Calarasi",
            },
            {
              id: 914,
              name: "Primaria BORCEA",
              county: "Calarasi",
            },
            {
              id: 915,
              name: "Primaria CĂSCIOARELE",
              county: "Calarasi",
            },
            {
              id: 916,
              name: "Primaria CHIRNOGI",
              county: "Calarasi",
            },
            {
              id: 917,
              name: "Primaria CHISELET",
              county: "Calarasi",
            },
            {
              id: 918,
              name: "Primaria CIOCĂNEŞTI",
              county: "Calarasi",
            },
            {
              id: 919,
              name: "Primaria CRIVĂŢ",
              county: "Calarasi",
            },
            {
              id: 920,
              name: "Primaria CURCANI",
              county: "Calarasi",
            },
            {
              id: 921,
              name: "Primaria CUZA VODA",
              county: "Calarasi",
            },
            {
              id: 922,
              name: "Primaria DICHISENI",
              county: "Calarasi",
            },
            {
              id: 923,
              name: "Primaria DOR MĂRUNT",
              county: "Calarasi",
            },
            {
              id: 924,
              name: "Primaria DOROBANŢU",
              county: "Calarasi",
            },
            {
              id: 925,
              name: "Primaria DRAGALINA",
              county: "Calarasi",
            },
            {
              id: 926,
              name: "Primaria DRAGOŞ VODĂ",
              county: "Calarasi",
            },
            {
              id: 927,
              name: "Primaria FRĂSINET",
              county: "Calarasi",
            },
            {
              id: 928,
              name: "Primaria FRUMUŞANI",
              county: "Calarasi",
            },
            {
              id: 929,
              name: "Primaria FUNDENI",
              county: "Calarasi",
            },
            {
              id: 930,
              name: "Primaria GĂLBINAŞI",
              county: "Calarasi",
            },
            {
              id: 931,
              name: "Primaria GRĂDIŞTEA",
              county: "Calarasi",
            },
            {
              id: 932,
              name: "Primaria GURBĂNEŞTI",
              county: "Calarasi",
            },
            {
              id: 933,
              name: "Primaria ILEANA",
              county: "Calarasi",
            },
            {
              id: 934,
              name: "Primaria INDEPENDENŢA",
              county: "Calarasi",
            },
            {
              id: 935,
              name: "Primaria JEGĂLIA",
              county: "Calarasi",
            },
            {
              id: 936,
              name: "Primaria LEHLIU",
              county: "Calarasi",
            },
            {
              id: 937,
              name: "Primaria LUICA",
              county: "Calarasi",
            },
            {
              id: 938,
              name: "Primaria LUPŞANU",
              county: "Calarasi",
            },
            {
              id: 939,
              name: "Primaria MÂNĂSTIREA",
              county: "Calarasi",
            },
            {
              id: 940,
              name: "Primaria MITRENI",
              county: "Calarasi",
            },
            {
              id: 941,
              name: "Primaria MODELU",
              county: "Calarasi",
            },
            {
              id: 942,
              name: "Primaria NANA",
              county: "Calarasi",
            },
            {
              id: 943,
              name: "Primaria NICOLAE BĂLCESCU",
              county: "Calarasi",
            },
            {
              id: 944,
              name: "Primaria PERIŞORU",
              county: "Calarasi",
            },
            {
              id: 945,
              name: "Primaria PLĂTĂREŞTI",
              county: "Calarasi",
            },
            {
              id: 946,
              name: "Primaria RADOVANU",
              county: "Calarasi",
            },
            {
              id: 947,
              name: "Primaria ROSEŢI",
              county: "Calarasi",
            },
            {
              id: 948,
              name: "Primaria SĂRULEŞTI",
              county: "Calarasi",
            },
            {
              id: 949,
              name: "Primaria SOHATU",
              county: "Calarasi",
            },
            {
              id: 950,
              name: "Primaria SPANŢOV",
              county: "Calarasi",
            },
            {
              id: 951,
              name: "Primaria ŞOLDANU",
              county: "Calarasi",
            },
            {
              id: 952,
              name: "Primaria ŞTEFAN CEL MARE",
              county: "Calarasi",
            },
            {
              id: 953,
              name: "Primaria ŞTEFAN VODĂ",
              county: "Calarasi",
            },
            {
              id: 954,
              name: "Primaria TĂMĂDĂU MARE",
              county: "Calarasi",
            },
            {
              id: 955,
              name: "Primaria ULMENI",
              county: "Calarasi",
            },
            {
              id: 956,
              name: "Primaria ULMU",
              county: "Calarasi",
            },
            {
              id: 957,
              name: "Primaria UNIREA",
              county: "Calarasi",
            },
            {
              id: 958,
              name: "Primaria VALEA ARGOVEI",
              county: "Calarasi",
            },
            {
              id: 959,
              name: "Primaria VASILAŢI",
              county: "Calarasi",
            },
            {
              id: 960,
              name: "Primaria VÎLCELELE",
              county: "Calarasi",
            },
            {
              id: 961,
              name: "Primaria VLAD ŢEPEŞ",
              county: "Calarasi",
            },
            {
              id: 962,
              name: "Primaria MUNICIPIUL CLUJ-NAPOCA",
              county: "Cluj",
            },
            {
              id: 963,
              name: "Primaria MUNICIPIUL CÂMPIA TURZII",
              county: "Cluj",
            },
            {
              id: 964,
              name: "Primaria MUNICIPIUL DEJ",
              county: "Cluj",
            },
            {
              id: 965,
              name: "Primaria MUNICIPIUL GHERLA",
              county: "Cluj",
            },
            {
              id: 966,
              name: "Primaria MUNICIPIUL TURDA",
              county: "Cluj",
            },
            {
              id: 967,
              name: "Primaria ORAŞ HUEDIN",
              county: "Cluj",
            },
            {
              id: 968,
              name: "Primaria AGHIREŞU",
              county: "Cluj",
            },
            {
              id: 969,
              name: "Primaria AITON",
              county: "Cluj",
            },
            {
              id: 970,
              name: "Primaria ALUNIŞ",
              county: "Cluj",
            },
            {
              id: 971,
              name: "Primaria APAHIDA",
              county: "Cluj",
            },
            {
              id: 972,
              name: "Primaria AŞCHILEU",
              county: "Cluj",
            },
            {
              id: 973,
              name: "Primaria BACIU",
              county: "Cluj",
            },
            {
              id: 974,
              name: "Primaria BĂIŞOARA",
              county: "Cluj",
            },
            {
              id: 975,
              name: "Primaria BELIŞ",
              county: "Cluj",
            },
            {
              id: 976,
              name: "Primaria BOBÎLNA",
              county: "Cluj",
            },
            {
              id: 977,
              name: "Primaria BONŢIDA",
              county: "Cluj",
            },
            {
              id: 978,
              name: "Primaria BORŞA",
              county: "Cluj",
            },
            {
              id: 979,
              name: "Primaria BUZA",
              county: "Cluj",
            },
            {
              id: 980,
              name: "Primaria CĂIANU",
              county: "Cluj",
            },
            {
              id: 981,
              name: "Primaria CĂLĂRAŞI",
              county: "Cluj",
            },
            {
              id: 982,
              name: "Primaria CĂLĂŢELE",
              county: "Cluj",
            },
            {
              id: 983,
              name: "Primaria CĂMĂRAŞU",
              county: "Cluj",
            },
            {
              id: 984,
              name: "Primaria CĂPUŞU MARE",
              county: "Cluj",
            },
            {
              id: 985,
              name: "Primaria CĂŞEIU",
              county: "Cluj",
            },
            {
              id: 986,
              name: "Primaria CĂTINA",
              county: "Cluj",
            },
            {
              id: 987,
              name: "Primaria CEANU MARE",
              county: "Cluj",
            },
            {
              id: 988,
              name: "Primaria CHINTENI",
              county: "Cluj",
            },
            {
              id: 989,
              name: "Primaria CHIUIEŞTI",
              county: "Cluj",
            },
            {
              id: 990,
              name: "Primaria CIUCEA",
              county: "Cluj",
            },
            {
              id: 991,
              name: "Primaria CIURILA",
              county: "Cluj",
            },
            {
              id: 992,
              name: "Primaria CÎŢCĂU",
              county: "Cluj",
            },
            {
              id: 993,
              name: "Primaria COJOCNA",
              county: "Cluj",
            },
            {
              id: 994,
              name: "Primaria CORNEŞTI",
              county: "Cluj",
            },
            {
              id: 995,
              name: "Primaria CUZDRIOARA",
              county: "Cluj",
            },
            {
              id: 996,
              name: "Primaria DĂBÎCA",
              county: "Cluj",
            },
            {
              id: 997,
              name: "Primaria FELEACU",
              county: "Cluj",
            },
            {
              id: 998,
              name: "Primaria FIZEŞU GHERLII",
              county: "Cluj",
            },
            {
              id: 999,
              name: "Primaria FLOREŞTI",
              county: "Cluj",
            },
            {
              id: 1000,
              name: "Primaria FRATA",
              county: "Cluj",
            },
            {
              id: 1001,
              name: "Primaria GEACA",
              county: "Cluj",
            },
            {
              id: 1002,
              name: "Primaria GILĂU",
              county: "Cluj",
            },
            {
              id: 1003,
              name: "Primaria GÎRBĂU",
              county: "Cluj",
            },
            {
              id: 1004,
              name: "Primaria IARA",
              county: "Cluj",
            },
            {
              id: 1005,
              name: "Primaria ICLOD",
              county: "Cluj",
            },
            {
              id: 1006,
              name: "Primaria IZVORU CRIŞULUI",
              county: "Cluj",
            },
            {
              id: 1007,
              name: "Primaria JICHIŞU DE JOS",
              county: "Cluj",
            },
            {
              id: 1008,
              name: "Primaria JUCU",
              county: "Cluj",
            },
            {
              id: 1009,
              name: "Primaria LUNA",
              county: "Cluj",
            },
            {
              id: 1010,
              name: "Primaria MĂGURI-RĂCĂTĂU",
              county: "Cluj",
            },
            {
              id: 1011,
              name: "Primaria MĂNĂSTIRENI",
              county: "Cluj",
            },
            {
              id: 1012,
              name: "Primaria MĂRGĂU",
              county: "Cluj",
            },
            {
              id: 1013,
              name: "Primaria MĂRIŞEL",
              county: "Cluj",
            },
            {
              id: 1014,
              name: "Primaria MICA",
              county: "Cluj",
            },
            {
              id: 1015,
              name: "Primaria MIHAI VITEAZU",
              county: "Cluj",
            },
            {
              id: 1016,
              name: "Primaria MINTIU GHERLII",
              county: "Cluj",
            },
            {
              id: 1017,
              name: "Primaria MOCIU",
              county: "Cluj",
            },
            {
              id: 1018,
              name: "Primaria MOLDOVENEŞTI",
              county: "Cluj",
            },
            {
              id: 1019,
              name: "Primaria NEGRENI",
              county: "Cluj",
            },
            {
              id: 1020,
              name: "Primaria PANTICEU",
              county: "Cluj",
            },
            {
              id: 1021,
              name: "Primaria PĂLATCA",
              county: "Cluj",
            },
            {
              id: 1022,
              name: "Primaria PETREŞTII DE JOS",
              county: "Cluj",
            },
            {
              id: 1023,
              name: "Primaria PLOSCOŞ",
              county: "Cluj",
            },
            {
              id: 1024,
              name: "Primaria POIENI",
              county: "Cluj",
            },
            {
              id: 1025,
              name: "Primaria RECEA-CRISTUR",
              county: "Cluj",
            },
            {
              id: 1026,
              name: "Primaria RÎŞCA",
              county: "Cluj",
            },
            {
              id: 1027,
              name: "Primaria SĂCUIEU",
              county: "Cluj",
            },
            {
              id: 1028,
              name: "Primaria SĂNDULEŞTI",
              county: "Cluj",
            },
            {
              id: 1029,
              name: "Primaria SĂVĂDISLA",
              county: "Cluj",
            },
            {
              id: 1030,
              name: "Primaria SÂNCRAIU",
              county: "Cluj",
            },
            {
              id: 1031,
              name: "Primaria SÂNMĂRTIN",
              county: "Cluj",
            },
            {
              id: 1032,
              name: "Primaria SIC",
              county: "Cluj",
            },
            {
              id: 1033,
              name: "Primaria SÎNPAUL",
              county: "Cluj",
            },
            {
              id: 1034,
              name: "Primaria SUATU",
              county: "Cluj",
            },
            {
              id: 1035,
              name: "Primaria TRITENII DE JOS",
              county: "Cluj",
            },
            {
              id: 1036,
              name: "Primaria TURENI",
              county: "Cluj",
            },
            {
              id: 1037,
              name: "Primaria ŢAGA",
              county: "Cluj",
            },
            {
              id: 1038,
              name: "Primaria UNGURAŞ",
              county: "Cluj",
            },
            {
              id: 1039,
              name: "Primaria VAD",
              county: "Cluj",
            },
            {
              id: 1040,
              name: "Primaria VALEA IERII",
              county: "Cluj",
            },
            {
              id: 1041,
              name: "Primaria VIIŞOARA",
              county: "Cluj",
            },
            {
              id: 1042,
              name: "Primaria VULTURENI",
              county: "Cluj",
            },
            {
              id: 1043,
              name: "Primaria MUNICIPIUL CONSTANŢA",
              county: "Constanta",
            },
            {
              id: 1044,
              name: "Primaria MUNICIPIUL MANGALIA",
              county: "Constanta",
            },
            {
              id: 1045,
              name: "Primaria MUNICIPIUL MEDGIDIA",
              county: "Constanta",
            },
            {
              id: 1046,
              name: "Primaria ORAŞ BĂNEASA",
              county: "Constanta",
            },
            {
              id: 1047,
              name: "Primaria ORAŞ CERNAVODĂ",
              county: "Constanta",
            },
            {
              id: 1048,
              name: "Primaria ORAŞ EFORIE",
              county: "Constanta",
            },
            {
              id: 1049,
              name: "Primaria ORAŞ HÂRŞOVA",
              county: "Constanta",
            },
            {
              id: 1050,
              name: "Primaria ORAŞ MURFATLAR",
              county: "Constanta",
            },
            {
              id: 1051,
              name: "Primaria ORAŞ NĂVODARI",
              county: "Constanta",
            },
            {
              id: 1052,
              name: "Primaria ORAŞ NEGRU VODĂ",
              county: "Constanta",
            },
            {
              id: 1053,
              name: "Primaria ORAŞ OVIDIU",
              county: "Constanta",
            },
            {
              id: 1054,
              name: "Primaria ORAŞ TECHIRGHIOL",
              county: "Constanta",
            },
            {
              id: 1055,
              name: "Primaria 23 AUGUST",
              county: "Constanta",
            },
            {
              id: 1056,
              name: "Primaria ADAMCLISI",
              county: "Constanta",
            },
            {
              id: 1057,
              name: "Primaria AGIGEA",
              county: "Constanta",
            },
            {
              id: 1058,
              name: "Primaria ALBEŞTI",
              county: "Constanta",
            },
            {
              id: 1059,
              name: "Primaria ALIMAN",
              county: "Constanta",
            },
            {
              id: 1060,
              name: "Primaria AMZACEA",
              county: "Constanta",
            },
            {
              id: 1061,
              name: "Primaria BĂRĂGANU",
              county: "Constanta",
            },
            {
              id: 1062,
              name: "Primaria CASTELU",
              county: "Constanta",
            },
            {
              id: 1063,
              name: "Primaria CERCHEZU",
              county: "Constanta",
            },
            {
              id: 1064,
              name: "Primaria CHIRNOGENI",
              county: "Constanta",
            },
            {
              id: 1065,
              name: "Primaria CIOBANU",
              county: "Constanta",
            },
            {
              id: 1066,
              name: "Primaria CIOCÎRLIA",
              county: "Constanta",
            },
            {
              id: 1067,
              name: "Primaria COBADIN",
              county: "Constanta",
            },
            {
              id: 1068,
              name: "Primaria COGEALAC",
              county: "Constanta",
            },
            {
              id: 1069,
              name: "Primaria COMANA",
              county: "Constanta",
            },
            {
              id: 1070,
              name: "Primaria CORBU",
              county: "Constanta",
            },
            {
              id: 1071,
              name: "Primaria COSTINEŞTI",
              county: "Constanta",
            },
            {
              id: 1072,
              name: "Primaria CRUCEA",
              county: "Constanta",
            },
            {
              id: 1073,
              name: "Primaria CUMPĂNA",
              county: "Constanta",
            },
            {
              id: 1074,
              name: "Primaria CUZA VODA",
              county: "Constanta",
            },
            {
              id: 1075,
              name: "Primaria DELENI",
              county: "Constanta",
            },
            {
              id: 1076,
              name: "Primaria DOBROMIR",
              county: "Constanta",
            },
            {
              id: 1077,
              name: "Primaria DUMBRĂVENI",
              county: "Constanta",
            },
            {
              id: 1078,
              name: "Primaria FÎNTÎNELE",
              county: "Constanta",
            },
            {
              id: 1079,
              name: "Primaria GÂRLICIU",
              county: "Constanta",
            },
            {
              id: 1080,
              name: "Primaria GHINDĂREŞTI",
              county: "Constanta",
            },
            {
              id: 1081,
              name: "Primaria GRĂDINA",
              county: "Constanta",
            },
            {
              id: 1082,
              name: "Primaria HORIA",
              county: "Constanta",
            },
            {
              id: 1083,
              name: "Primaria INDEPENDENŢA",
              county: "Constanta",
            },
            {
              id: 1084,
              name: "Primaria ION CORVIN",
              county: "Constanta",
            },
            {
              id: 1085,
              name: "Primaria ISTRIA",
              county: "Constanta",
            },
            {
              id: 1086,
              name: "Primaria LIMANU",
              county: "Constanta",
            },
            {
              id: 1087,
              name: "Primaria LIPNIŢA",
              county: "Constanta",
            },
            {
              id: 1088,
              name: "Primaria LUMINA",
              county: "Constanta",
            },
            {
              id: 1089,
              name: "Primaria MERENI",
              county: "Constanta",
            },
            {
              id: 1090,
              name: "Primaria MIHAI VITEAZU",
              county: "Constanta",
            },
            {
              id: 1091,
              name: "Primaria MIHAIL KOGĂLNICEANU",
              county: "Constanta",
            },
            {
              id: 1092,
              name: "Primaria MIRCEA VODĂ",
              county: "Constanta",
            },
            {
              id: 1093,
              name: "Primaria NICOLAE BĂLCESCU",
              county: "Constanta",
            },
            {
              id: 1094,
              name: "Primaria OLTINA",
              county: "Constanta",
            },
            {
              id: 1095,
              name: "Primaria OSTROV",
              county: "Constanta",
            },
            {
              id: 1096,
              name: "Primaria PANTELIMON",
              county: "Constanta",
            },
            {
              id: 1097,
              name: "Primaria PECINEAGA",
              county: "Constanta",
            },
            {
              id: 1098,
              name: "Primaria PEŞTERA",
              county: "Constanta",
            },
            {
              id: 1099,
              name: "Primaria POARTA ALBĂ",
              county: "Constanta",
            },
            {
              id: 1100,
              name: "Primaria RASOVA",
              county: "Constanta",
            },
            {
              id: 1101,
              name: "Primaria SALIGNY",
              county: "Constanta",
            },
            {
              id: 1102,
              name: "Primaria SARAIU",
              county: "Constanta",
            },
            {
              id: 1103,
              name: "Primaria SĂCELE",
              county: "Constanta",
            },
            {
              id: 1104,
              name: "Primaria SEIMENI",
              county: "Constanta",
            },
            {
              id: 1105,
              name: "Primaria SILIŞTEA",
              county: "Constanta",
            },
            {
              id: 1106,
              name: "Primaria TÂRGUŞOR",
              county: "Constanta",
            },
            {
              id: 1107,
              name: "Primaria TOPALU",
              county: "Constanta",
            },
            {
              id: 1108,
              name: "Primaria TOPRAISAR",
              county: "Constanta",
            },
            {
              id: 1109,
              name: "Primaria TORTOMAN",
              county: "Constanta",
            },
            {
              id: 1110,
              name: "Primaria TUZLA",
              county: "Constanta",
            },
            {
              id: 1111,
              name: "Primaria VALU LUI TRAIAN",
              county: "Constanta",
            },
            {
              id: 1112,
              name: "Primaria VULTURU",
              county: "Constanta",
            },
            {
              id: 1113,
              name: "Primaria MUNICIPIUL SFÎNTU GHEORGHE",
              county: "Covasna",
            },
            {
              id: 1114,
              name: "Primaria MUNICIPIUL TÂRGU SECUIESC",
              county: "Covasna",
            },
            {
              id: 1115,
              name: "Primaria ORAŞ BARAOLT",
              county: "Covasna",
            },
            {
              id: 1116,
              name: "Primaria ORAŞ COVASNA",
              county: "Covasna",
            },
            {
              id: 1117,
              name: "Primaria ORAŞ ÎNTORSURA BUZĂULUI",
              county: "Covasna",
            },
            {
              id: 1118,
              name: "Primaria AITA MARE",
              county: "Covasna",
            },
            {
              id: 1119,
              name: "Primaria ARCUŞ",
              county: "Covasna",
            },
            {
              id: 1120,
              name: "Primaria BARCANI",
              county: "Covasna",
            },
            {
              id: 1121,
              name: "Primaria BĂŢANI",
              county: "Covasna",
            },
            {
              id: 1122,
              name: "Primaria BELIN",
              county: "Covasna",
            },
            {
              id: 1123,
              name: "Primaria BIXAD",
              county: "Covasna",
            },
            {
              id: 1124,
              name: "Primaria BODOC",
              county: "Covasna",
            },
            {
              id: 1125,
              name: "Primaria BOROŞNEU MARE",
              county: "Covasna",
            },
            {
              id: 1126,
              name: "Primaria BRATEŞ",
              county: "Covasna",
            },
            {
              id: 1127,
              name: "Primaria BRĂDUŢ",
              county: "Covasna",
            },
            {
              id: 1128,
              name: "Primaria BREŢCU",
              county: "Covasna",
            },
            {
              id: 1129,
              name: "Primaria CATALINA",
              county: "Covasna",
            },
            {
              id: 1130,
              name: "Primaria CERNAT",
              county: "Covasna",
            },
            {
              id: 1131,
              name: "Primaria CHICHIŞ",
              county: "Covasna",
            },
            {
              id: 1132,
              name: "Primaria COMANDĂU",
              county: "Covasna",
            },
            {
              id: 1133,
              name: "Primaria DALNIC",
              county: "Covasna",
            },
            {
              id: 1134,
              name: "Primaria DOBÎRLĂU",
              county: "Covasna",
            },
            {
              id: 1135,
              name: "Primaria ESTELNIC",
              county: "Covasna",
            },
            {
              id: 1136,
              name: "Primaria GHELINŢA",
              county: "Covasna",
            },
            {
              id: 1137,
              name: "Primaria GHIDFALĂU",
              county: "Covasna",
            },
            {
              id: 1138,
              name: "Primaria HĂGHIG",
              county: "Covasna",
            },
            {
              id: 1139,
              name: "Primaria ILIENI",
              county: "Covasna",
            },
            {
              id: 1140,
              name: "Primaria LEMNIA",
              county: "Covasna",
            },
            {
              id: 1141,
              name: "Primaria MALNAŞ",
              county: "Covasna",
            },
            {
              id: 1142,
              name: "Primaria MERENI",
              county: "Covasna",
            },
            {
              id: 1143,
              name: "Primaria MICFALĂU",
              county: "Covasna",
            },
            {
              id: 1144,
              name: "Primaria MOACŞA",
              county: "Covasna",
            },
            {
              id: 1145,
              name: "Primaria OJDULA",
              county: "Covasna",
            },
            {
              id: 1146,
              name: "Primaria OZUN",
              county: "Covasna",
            },
            {
              id: 1147,
              name: "Primaria POIAN",
              county: "Covasna",
            },
            {
              id: 1148,
              name: "Primaria RECI",
              county: "Covasna",
            },
            {
              id: 1149,
              name: "Primaria SITA BUZĂULUI",
              county: "Covasna",
            },
            {
              id: 1150,
              name: "Primaria SÎNZIENI",
              county: "Covasna",
            },
            {
              id: 1151,
              name: "Primaria TURIA",
              county: "Covasna",
            },
            {
              id: 1152,
              name: "Primaria VALEA CRIŞULUI",
              county: "Covasna",
            },
            {
              id: 1153,
              name: "Primaria VALEA MARE",
              county: "Covasna",
            },
            {
              id: 1154,
              name: "Primaria VÎLCELE",
              county: "Covasna",
            },
            {
              id: 1155,
              name: "Primaria VÎRGHIŞ",
              county: "Covasna",
            },
            {
              id: 1156,
              name: "Primaria ZAGON",
              county: "Covasna",
            },
            {
              id: 1157,
              name: "Primaria ZĂBALA",
              county: "Covasna",
            },
            {
              id: 1158,
              name: "Primaria MUNICIPIUL TÎRGOVIŞTE",
              county: "Dambovita",
            },
            {
              id: 1159,
              name: "Primaria MUNICIPIUL MORENI",
              county: "Dambovita",
            },
            {
              id: 1160,
              name: "Primaria ORAŞ FIENI",
              county: "Dambovita",
            },
            {
              id: 1161,
              name: "Primaria ORAŞ GĂEŞTI",
              county: "Dambovita",
            },
            {
              id: 1162,
              name: "Primaria ORAŞ PUCIOASA",
              county: "Dambovita",
            },
            {
              id: 1163,
              name: "Primaria ORAŞ RĂCARI",
              county: "Dambovita",
            },
            {
              id: 1164,
              name: "Primaria ORAŞ TITU",
              county: "Dambovita",
            },
            {
              id: 1165,
              name: "Primaria ANINOASA",
              county: "Dambovita",
            },
            {
              id: 1166,
              name: "Primaria BĂLENI",
              county: "Dambovita",
            },
            {
              id: 1167,
              name: "Primaria BĂRBULEŢU",
              county: "Dambovita",
            },
            {
              id: 1168,
              name: "Primaria BEZDEAD",
              county: "Dambovita",
            },
            {
              id: 1169,
              name: "Primaria BILCIUREŞTI",
              county: "Dambovita",
            },
            {
              id: 1170,
              name: "Primaria BRANIŞTEA",
              county: "Dambovita",
            },
            {
              id: 1171,
              name: "Primaria BRĂNEŞTI",
              county: "Dambovita",
            },
            {
              id: 1172,
              name: "Primaria BREZOAELE",
              county: "Dambovita",
            },
            {
              id: 1173,
              name: "Primaria BUCIUMENI",
              county: "Dambovita",
            },
            {
              id: 1174,
              name: "Primaria BUCŞANI",
              county: "Dambovita",
            },
            {
              id: 1175,
              name: "Primaria BUTIMANU",
              county: "Dambovita",
            },
            {
              id: 1176,
              name: "Primaria CIOCĂNEŞTI",
              county: "Dambovita",
            },
            {
              id: 1177,
              name: "Primaria CÎNDEŞTI",
              county: "Dambovita",
            },
            {
              id: 1178,
              name: "Primaria COBIA",
              county: "Dambovita",
            },
            {
              id: 1179,
              name: "Primaria COJASCA",
              county: "Dambovita",
            },
            {
              id: 1180,
              name: "Primaria COMIŞANI",
              county: "Dambovita",
            },
            {
              id: 1181,
              name: "Primaria CONŢEŞTI",
              county: "Dambovita",
            },
            {
              id: 1182,
              name: "Primaria CORBII MARI",
              county: "Dambovita",
            },
            {
              id: 1183,
              name: "Primaria CORNĂŢELU",
              county: "Dambovita",
            },
            {
              id: 1184,
              name: "Primaria CORNEŞTI",
              county: "Dambovita",
            },
            {
              id: 1185,
              name: "Primaria COSTEŞTII DIN VALE",
              county: "Dambovita",
            },
            {
              id: 1186,
              name: "Primaria CREVEDIA",
              county: "Dambovita",
            },
            {
              id: 1187,
              name: "Primaria CRÎNGURILE",
              county: "Dambovita",
            },
            {
              id: 1188,
              name: "Primaria DĂRMĂNEŞTI",
              county: "Dambovita",
            },
            {
              id: 1189,
              name: "Primaria DOBRA",
              county: "Dambovita",
            },
            {
              id: 1190,
              name: "Primaria DOICEŞTI",
              county: "Dambovita",
            },
            {
              id: 1191,
              name: "Primaria DRAGODANA",
              county: "Dambovita",
            },
            {
              id: 1192,
              name: "Primaria DRAGOMIREŞTI",
              county: "Dambovita",
            },
            {
              id: 1193,
              name: "Primaria FINTA",
              county: "Dambovita",
            },
            {
              id: 1194,
              name: "Primaria GLODENI",
              county: "Dambovita",
            },
            {
              id: 1195,
              name: "Primaria GURA FOII",
              county: "Dambovita",
            },
            {
              id: 1196,
              name: "Primaria GURA OCNIŢEI",
              county: "Dambovita",
            },
            {
              id: 1197,
              name: "Primaria GURA ŞUŢII",
              county: "Dambovita",
            },
            {
              id: 1198,
              name: "Primaria HULUBEŞTI",
              county: "Dambovita",
            },
            {
              id: 1199,
              name: "Primaria I. L. CARAGIALE",
              county: "Dambovita",
            },
            {
              id: 1200,
              name: "Primaria IEDERA",
              county: "Dambovita",
            },
            {
              id: 1201,
              name: "Primaria LUCIENI",
              county: "Dambovita",
            },
            {
              id: 1202,
              name: "Primaria LUDEŞTI",
              county: "Dambovita",
            },
            {
              id: 1203,
              name: "Primaria LUNGULEŢU",
              county: "Dambovita",
            },
            {
              id: 1204,
              name: "Primaria MALU CU FLORI",
              county: "Dambovita",
            },
            {
              id: 1205,
              name: "Primaria MĂNEŞTI",
              county: "Dambovita",
            },
            {
              id: 1206,
              name: "Primaria MĂTĂSARU",
              county: "Dambovita",
            },
            {
              id: 1207,
              name: "Primaria MOGOŞANI",
              county: "Dambovita",
            },
            {
              id: 1208,
              name: "Primaria MOROENI",
              county: "Dambovita",
            },
            {
              id: 1209,
              name: "Primaria MORTENI",
              county: "Dambovita",
            },
            {
              id: 1210,
              name: "Primaria MOŢĂIENI",
              county: "Dambovita",
            },
            {
              id: 1211,
              name: "Primaria NICULEŞTI",
              county: "Dambovita",
            },
            {
              id: 1212,
              name: "Primaria NUCET",
              county: "Dambovita",
            },
            {
              id: 1213,
              name: "Primaria OCNIŢA",
              county: "Dambovita",
            },
            {
              id: 1214,
              name: "Primaria ODOBEŞTI",
              county: "Dambovita",
            },
            {
              id: 1215,
              name: "Primaria PERŞINARI",
              county: "Dambovita",
            },
            {
              id: 1216,
              name: "Primaria PETREŞTI",
              county: "Dambovita",
            },
            {
              id: 1217,
              name: "Primaria PIETRARI",
              county: "Dambovita",
            },
            {
              id: 1218,
              name: "Primaria PIETROŞIŢA",
              county: "Dambovita",
            },
            {
              id: 1219,
              name: "Primaria POIANA",
              county: "Dambovita",
            },
            {
              id: 1220,
              name: "Primaria POTLOGI",
              county: "Dambovita",
            },
            {
              id: 1221,
              name: "Primaria PRODULEŞTI",
              county: "Dambovita",
            },
            {
              id: 1222,
              name: "Primaria PUCHENI",
              county: "Dambovita",
            },
            {
              id: 1223,
              name: "Primaria RACIU",
              county: "Dambovita",
            },
            {
              id: 1224,
              name: "Primaria RĂSCĂEŢI",
              county: "Dambovita",
            },
            {
              id: 1225,
              name: "Primaria RĂZVAD",
              county: "Dambovita",
            },
            {
              id: 1226,
              name: "Primaria RÂU ALB",
              county: "Dambovita",
            },
            {
              id: 1227,
              name: "Primaria RUNCU",
              county: "Dambovita",
            },
            {
              id: 1228,
              name: "Primaria SĂLCIOARA",
              county: "Dambovita",
            },
            {
              id: 1229,
              name: "Primaria SLOBOZIA MOARĂ",
              county: "Dambovita",
            },
            {
              id: 1230,
              name: "Primaria ŞELARU",
              county: "Dambovita",
            },
            {
              id: 1231,
              name: "Primaria ŞOTÎNGA",
              county: "Dambovita",
            },
            {
              id: 1232,
              name: "Primaria TĂRTĂŞEŞTI",
              county: "Dambovita",
            },
            {
              id: 1233,
              name: "Primaria TĂTĂRANI",
              county: "Dambovita",
            },
            {
              id: 1234,
              name: "Primaria ULIEŞTI",
              county: "Dambovita",
            },
            {
              id: 1235,
              name: "Primaria ULMI",
              county: "Dambovita",
            },
            {
              id: 1236,
              name: "Primaria VALEA LUNGĂ",
              county: "Dambovita",
            },
            {
              id: 1237,
              name: "Primaria VALEA MARE",
              county: "Dambovita",
            },
            {
              id: 1238,
              name: "Primaria VĂCĂREŞTI",
              county: "Dambovita",
            },
            {
              id: 1239,
              name: "Primaria VĂLENI-DÎMBOVIŢA",
              county: "Dambovita",
            },
            {
              id: 1240,
              name: "Primaria VIŞINA",
              county: "Dambovita",
            },
            {
              id: 1241,
              name: "Primaria VIŞINEŞTI",
              county: "Dambovita",
            },
            {
              id: 1242,
              name: "Primaria VÎRFURI",
              county: "Dambovita",
            },
            {
              id: 1243,
              name: "Primaria VLĂDENI",
              county: "Dambovita",
            },
            {
              id: 1244,
              name: "Primaria VOINEŞTI",
              county: "Dambovita",
            },
            {
              id: 1245,
              name: "Primaria VULCANA-BĂI",
              county: "Dambovita",
            },
            {
              id: 1246,
              name: "Primaria VULCANA-PANDELE",
              county: "Dambovita",
            },
            {
              id: 1247,
              name: "Primaria MUNICIPIUL CRAIOVA",
              county: "Dolj",
            },
            {
              id: 1248,
              name: "Primaria MUNICIPIUL BĂILEŞTI",
              county: "Dolj",
            },
            {
              id: 1249,
              name: "Primaria MUNICIPIUL CALAFAT",
              county: "Dolj",
            },
            {
              id: 1250,
              name: "Primaria ORAŞ BECHET",
              county: "Dolj",
            },
            {
              id: 1251,
              name: "Primaria ORAŞ DĂBULENI",
              county: "Dolj",
            },
            {
              id: 1252,
              name: "Primaria ORAŞ FILIAŞI",
              county: "Dolj",
            },
            {
              id: 1253,
              name: "Primaria ORAŞ SEGARCEA",
              county: "Dolj",
            },
            {
              id: 1254,
              name: "Primaria AFUMAŢI",
              county: "Dolj",
            },
            {
              id: 1255,
              name: "Primaria ALMĂJ",
              county: "Dolj",
            },
            {
              id: 1256,
              name: "Primaria AMĂRĂŞTII DE JOS",
              county: "Dolj",
            },
            {
              id: 1257,
              name: "Primaria AMĂRĂŞTII DE SUS",
              county: "Dolj",
            },
            {
              id: 1258,
              name: "Primaria APELE VII",
              county: "Dolj",
            },
            {
              id: 1259,
              name: "Primaria ARGETOAIA",
              county: "Dolj",
            },
            {
              id: 1260,
              name: "Primaria BISTREŢ",
              county: "Dolj",
            },
            {
              id: 1261,
              name: "Primaria BÎRCA",
              county: "Dolj",
            },
            {
              id: 1262,
              name: "Primaria BOTOŞEŞTI-PAIA",
              county: "Dolj",
            },
            {
              id: 1263,
              name: "Primaria BRABOVA",
              county: "Dolj",
            },
            {
              id: 1264,
              name: "Primaria BRALOŞTIŢA",
              county: "Dolj",
            },
            {
              id: 1265,
              name: "Primaria BRATOVOEŞTI",
              county: "Dolj",
            },
            {
              id: 1266,
              name: "Primaria BRĂDEŞTI",
              county: "Dolj",
            },
            {
              id: 1267,
              name: "Primaria BREASTA",
              county: "Dolj",
            },
            {
              id: 1268,
              name: "Primaria BUCOVĂŢ",
              county: "Dolj",
            },
            {
              id: 1269,
              name: "Primaria BULZEŞTI",
              county: "Dolj",
            },
            {
              id: 1270,
              name: "Primaria CALOPĂR",
              county: "Dolj",
            },
            {
              id: 1271,
              name: "Primaria CARAULA",
              county: "Dolj",
            },
            {
              id: 1272,
              name: "Primaria CARPEN",
              county: "Dolj",
            },
            {
              id: 1273,
              name: "Primaria CASTRANOVA",
              county: "Dolj",
            },
            {
              id: 1274,
              name: "Primaria CATANE",
              county: "Dolj",
            },
            {
              id: 1275,
              name: "Primaria CĂLĂRAŞI",
              county: "Dolj",
            },
            {
              id: 1276,
              name: "Primaria CÂRCEA",
              county: "Dolj",
            },
            {
              id: 1277,
              name: "Primaria CÂRNA",
              county: "Dolj",
            },
            {
              id: 1278,
              name: "Primaria CELARU",
              county: "Dolj",
            },
            {
              id: 1279,
              name: "Primaria CERĂT",
              county: "Dolj",
            },
            {
              id: 1280,
              name: "Primaria CERNĂTEŞTI",
              county: "Dolj",
            },
            {
              id: 1281,
              name: "Primaria CETATE",
              county: "Dolj",
            },
            {
              id: 1282,
              name: "Primaria CIOROIAŞI",
              county: "Dolj",
            },
            {
              id: 1283,
              name: "Primaria CIUPERCENII NOI",
              county: "Dolj",
            },
            {
              id: 1284,
              name: "Primaria COŞOVENI",
              county: "Dolj",
            },
            {
              id: 1285,
              name: "Primaria COŢOFENII DIN DOS",
              county: "Dolj",
            },
            {
              id: 1286,
              name: "Primaria COŢOFENII DIN FAŢĂ",
              county: "Dolj",
            },
            {
              id: 1287,
              name: "Primaria DANEŢI",
              county: "Dolj",
            },
            {
              id: 1288,
              name: "Primaria DESA",
              county: "Dolj",
            },
            {
              id: 1289,
              name: "Primaria DIOŞTI",
              county: "Dolj",
            },
            {
              id: 1290,
              name: "Primaria DOBREŞTI",
              county: "Dolj",
            },
            {
              id: 1291,
              name: "Primaria DOBROTEŞTI",
              county: "Dolj",
            },
            {
              id: 1292,
              name: "Primaria DRĂGOTEŞTI",
              county: "Dolj",
            },
            {
              id: 1293,
              name: "Primaria DRĂNIC",
              county: "Dolj",
            },
            {
              id: 1294,
              name: "Primaria FĂRCAŞ",
              county: "Dolj",
            },
            {
              id: 1295,
              name: "Primaria GALICEA MARE",
              county: "Dolj",
            },
            {
              id: 1296,
              name: "Primaria GALICIUICA",
              county: "Dolj",
            },
            {
              id: 1297,
              name: "Primaria GHERCEŞTI",
              county: "Dolj",
            },
            {
              id: 1298,
              name: "Primaria GHIDICI",
              county: "Dolj",
            },
            {
              id: 1299,
              name: "Primaria GHINDENI",
              county: "Dolj",
            },
            {
              id: 1300,
              name: "Primaria GIGHERA",
              county: "Dolj",
            },
            {
              id: 1301,
              name: "Primaria GIUBEGA",
              county: "Dolj",
            },
            {
              id: 1302,
              name: "Primaria GIURGIŢA",
              county: "Dolj",
            },
            {
              id: 1303,
              name: "Primaria GÎNGIOVA",
              county: "Dolj",
            },
            {
              id: 1304,
              name: "Primaria GOGOŞU",
              county: "Dolj",
            },
            {
              id: 1305,
              name: "Primaria GOICEA",
              county: "Dolj",
            },
            {
              id: 1306,
              name: "Primaria GOIEŞTI",
              county: "Dolj",
            },
            {
              id: 1307,
              name: "Primaria GRECEŞTI",
              county: "Dolj",
            },
            {
              id: 1308,
              name: "Primaria IŞALNIŢA",
              county: "Dolj",
            },
            {
              id: 1309,
              name: "Primaria IZVOARE",
              county: "Dolj",
            },
            {
              id: 1310,
              name: "Primaria ÎNTORSURA",
              county: "Dolj",
            },
            {
              id: 1311,
              name: "Primaria LEU",
              county: "Dolj",
            },
            {
              id: 1312,
              name: "Primaria LIPOVU",
              county: "Dolj",
            },
            {
              id: 1313,
              name: "Primaria MAGLAVIT",
              county: "Dolj",
            },
            {
              id: 1314,
              name: "Primaria MALU MARE",
              county: "Dolj",
            },
            {
              id: 1315,
              name: "Primaria MĂCEŞU DE JOS",
              county: "Dolj",
            },
            {
              id: 1316,
              name: "Primaria MĂCEŞU DE SUS",
              county: "Dolj",
            },
            {
              id: 1317,
              name: "Primaria MELINEŞTI",
              county: "Dolj",
            },
            {
              id: 1318,
              name: "Primaria MISCHII",
              county: "Dolj",
            },
            {
              id: 1319,
              name: "Primaria MÎRŞANI",
              county: "Dolj",
            },
            {
              id: 1320,
              name: "Primaria MOŢĂŢEI",
              county: "Dolj",
            },
            {
              id: 1321,
              name: "Primaria MURGAŞI",
              county: "Dolj",
            },
            {
              id: 1322,
              name: "Primaria NEGOI",
              county: "Dolj",
            },
            {
              id: 1323,
              name: "Primaria ORODEL",
              county: "Dolj",
            },
            {
              id: 1324,
              name: "Primaria OSTROVENI",
              county: "Dolj",
            },
            {
              id: 1325,
              name: "Primaria PERIŞOR",
              county: "Dolj",
            },
            {
              id: 1326,
              name: "Primaria PIELEŞTI",
              county: "Dolj",
            },
            {
              id: 1327,
              name: "Primaria PISCU VECHI",
              county: "Dolj",
            },
            {
              id: 1328,
              name: "Primaria PLENIŢA",
              county: "Dolj",
            },
            {
              id: 1329,
              name: "Primaria PLEŞOI",
              county: "Dolj",
            },
            {
              id: 1330,
              name: "Primaria PODARI",
              county: "Dolj",
            },
            {
              id: 1331,
              name: "Primaria POIANA MARE",
              county: "Dolj",
            },
            {
              id: 1332,
              name: "Primaria PREDEŞTI",
              county: "Dolj",
            },
            {
              id: 1333,
              name: "Primaria RADOVAN",
              county: "Dolj",
            },
            {
              id: 1334,
              name: "Primaria RAST",
              county: "Dolj",
            },
            {
              id: 1335,
              name: "Primaria ROBĂNEŞTI",
              county: "Dolj",
            },
            {
              id: 1336,
              name: "Primaria ROJIŞTE",
              county: "Dolj",
            },
            {
              id: 1337,
              name: "Primaria SADOVA",
              county: "Dolj",
            },
            {
              id: 1338,
              name: "Primaria SĂLCUŢA",
              county: "Dolj",
            },
            {
              id: 1339,
              name: "Primaria SCĂEŞTI",
              county: "Dolj",
            },
            {
              id: 1340,
              name: "Primaria SEACA DE CÎMP",
              county: "Dolj",
            },
            {
              id: 1341,
              name: "Primaria SEACA DE PĂDURE",
              county: "Dolj",
            },
            {
              id: 1342,
              name: "Primaria SECU",
              county: "Dolj",
            },
            {
              id: 1343,
              name: "Primaria SILIŞTEA CRUCII",
              county: "Dolj",
            },
            {
              id: 1344,
              name: "Primaria SOPOT",
              county: "Dolj",
            },
            {
              id: 1345,
              name: "Primaria ŞIMNICU DE SUS",
              county: "Dolj",
            },
            {
              id: 1346,
              name: "Primaria TĂLPAŞ",
              county: "Dolj",
            },
            {
              id: 1347,
              name: "Primaria TEASC",
              county: "Dolj",
            },
            {
              id: 1348,
              name: "Primaria TERPEZIŢA",
              county: "Dolj",
            },
            {
              id: 1349,
              name: "Primaria TESLUI",
              county: "Dolj",
            },
            {
              id: 1350,
              name: "Primaria ŢUGLUI",
              county: "Dolj",
            },
            {
              id: 1351,
              name: "Primaria UNIREA",
              county: "Dolj",
            },
            {
              id: 1352,
              name: "Primaria URZICUŢA",
              county: "Dolj",
            },
            {
              id: 1353,
              name: "Primaria VALEA STANCIULUI",
              county: "Dolj",
            },
            {
              id: 1354,
              name: "Primaria VELA",
              county: "Dolj",
            },
            {
              id: 1355,
              name: "Primaria VERBIŢA",
              county: "Dolj",
            },
            {
              id: 1356,
              name: "Primaria VÎRTOP",
              county: "Dolj",
            },
            {
              id: 1357,
              name: "Primaria VÎRVORU DE JOS",
              county: "Dolj",
            },
            {
              id: 1358,
              name: "Primaria MUNICIPIUL GALAŢI",
              county: "Galati",
            },
            {
              id: 1359,
              name: "Primaria MUNICIPIUL TECUCI",
              county: "Galati",
            },
            {
              id: 1360,
              name: "Primaria ORAŞ BEREŞTI",
              county: "Galati",
            },
            {
              id: 1361,
              name: "Primaria ORAŞ TÎRGU BUJOR",
              county: "Galati",
            },
            {
              id: 1362,
              name: "Primaria BARCEA",
              county: "Galati",
            },
            {
              id: 1363,
              name: "Primaria BĂLĂBĂNEŞTI",
              county: "Galati",
            },
            {
              id: 1364,
              name: "Primaria BĂLĂŞEŞTI",
              county: "Galati",
            },
            {
              id: 1365,
              name: "Primaria BĂLENI",
              county: "Galati",
            },
            {
              id: 1366,
              name: "Primaria BĂNEASA",
              county: "Galati",
            },
            {
              id: 1367,
              name: "Primaria BEREŞTI-MERIA",
              county: "Galati",
            },
            {
              id: 1368,
              name: "Primaria BRANIŞTEA",
              county: "Galati",
            },
            {
              id: 1369,
              name: "Primaria BRĂHĂŞEŞTI",
              county: "Galati",
            },
            {
              id: 1370,
              name: "Primaria BUCIUMENI",
              county: "Galati",
            },
            {
              id: 1371,
              name: "Primaria CAVADINEŞTI",
              county: "Galati",
            },
            {
              id: 1372,
              name: "Primaria CERŢEŞTI",
              county: "Galati",
            },
            {
              id: 1373,
              name: "Primaria CORNI",
              county: "Galati",
            },
            {
              id: 1374,
              name: "Primaria COROD",
              county: "Galati",
            },
            {
              id: 1375,
              name: "Primaria COSMEŞTI",
              county: "Galati",
            },
            {
              id: 1376,
              name: "Primaria COSTACHE NEGRI",
              county: "Galati",
            },
            {
              id: 1377,
              name: "Primaria CUCA",
              county: "Galati",
            },
            {
              id: 1378,
              name: "Primaria CUDALBI",
              county: "Galati",
            },
            {
              id: 1379,
              name: "Primaria CUZA VODĂ",
              county: "Galati",
            },
            {
              id: 1380,
              name: "Primaria DRĂGĂNEŞTI",
              county: "Galati",
            },
            {
              id: 1381,
              name: "Primaria DRĂGUŞENI",
              county: "Galati",
            },
            {
              id: 1382,
              name: "Primaria FÎRŢĂNEŞTI",
              county: "Galati",
            },
            {
              id: 1383,
              name: "Primaria FOLTEŞTI",
              county: "Galati",
            },
            {
              id: 1384,
              name: "Primaria FRUMUŞIŢA",
              county: "Galati",
            },
            {
              id: 1385,
              name: "Primaria FUNDENI",
              county: "Galati",
            },
            {
              id: 1386,
              name: "Primaria GHIDIGENI",
              county: "Galati",
            },
            {
              id: 1387,
              name: "Primaria GOHOR",
              county: "Galati",
            },
            {
              id: 1388,
              name: "Primaria GRIVIŢA",
              county: "Galati",
            },
            {
              id: 1389,
              name: "Primaria INDEPENDENŢA",
              county: "Galati",
            },
            {
              id: 1390,
              name: "Primaria IVEŞTI",
              county: "Galati",
            },
            {
              id: 1391,
              name: "Primaria JORĂŞTI",
              county: "Galati",
            },
            {
              id: 1392,
              name: "Primaria LIEŞTI",
              county: "Galati",
            },
            {
              id: 1393,
              name: "Primaria MATCA",
              county: "Galati",
            },
            {
              id: 1394,
              name: "Primaria MĂSTĂCANI",
              county: "Galati",
            },
            {
              id: 1395,
              name: "Primaria MOVILENI",
              county: "Galati",
            },
            {
              id: 1396,
              name: "Primaria MUNTENI",
              county: "Galati",
            },
            {
              id: 1397,
              name: "Primaria NĂMOLOASA",
              county: "Galati",
            },
            {
              id: 1398,
              name: "Primaria NEGRILEŞTI",
              county: "Galati",
            },
            {
              id: 1399,
              name: "Primaria NICOREŞTI",
              county: "Galati",
            },
            {
              id: 1400,
              name: "Primaria OANCEA",
              county: "Galati",
            },
            {
              id: 1401,
              name: "Primaria PECHEA",
              county: "Galati",
            },
            {
              id: 1402,
              name: "Primaria PISCU",
              county: "Galati",
            },
            {
              id: 1403,
              name: "Primaria POIANA",
              county: "Galati",
            },
            {
              id: 1404,
              name: "Primaria PRIPONEŞTI",
              county: "Galati",
            },
            {
              id: 1405,
              name: "Primaria RĂDEŞTI",
              county: "Galati",
            },
            {
              id: 1406,
              name: "Primaria REDIU",
              county: "Galati",
            },
            {
              id: 1407,
              name: "Primaria SCHELA",
              county: "Galati",
            },
            {
              id: 1408,
              name: "Primaria SCÎNTEIEŞTI",
              county: "Galati",
            },
            {
              id: 1409,
              name: "Primaria SLOBOZIA CONACHI",
              county: "Galati",
            },
            {
              id: 1410,
              name: "Primaria SMÎRDAN",
              county: "Galati",
            },
            {
              id: 1411,
              name: "Primaria SMULŢI",
              county: "Galati",
            },
            {
              id: 1412,
              name: "Primaria SUCEVENI",
              county: "Galati",
            },
            {
              id: 1413,
              name: "Primaria SUHURLUI",
              county: "Galati",
            },
            {
              id: 1414,
              name: "Primaria ŞENDRENI",
              county: "Galati",
            },
            {
              id: 1415,
              name: "Primaria TUDOR VLADIMIRESCU",
              county: "Galati",
            },
            {
              id: 1416,
              name: "Primaria TULUCEŞTI",
              county: "Galati",
            },
            {
              id: 1417,
              name: "Primaria ŢEPU",
              county: "Galati",
            },
            {
              id: 1418,
              name: "Primaria UMBRĂREŞTI",
              county: "Galati",
            },
            {
              id: 1419,
              name: "Primaria VALEA MĂRULUI",
              county: "Galati",
            },
            {
              id: 1420,
              name: "Primaria VÎNĂTORI",
              county: "Galati",
            },
            {
              id: 1421,
              name: "Primaria VÎRLEZI",
              county: "Galati",
            },
            {
              id: 1422,
              name: "Primaria VLĂDEŞTI",
              county: "Galati",
            },
            {
              id: 1423,
              name: "Primaria MUNICIPIUL GIURGIU",
              county: "Giurgiu",
            },
            {
              id: 1424,
              name: "Primaria ORAŞ BOLINTIN-VALE",
              county: "Giurgiu",
            },
            {
              id: 1425,
              name: "Primaria ORAŞ MIHĂILEŞTI",
              county: "Giurgiu",
            },
            {
              id: 1426,
              name: "Primaria ADUNAŢII-COPĂCENI",
              county: "Giurgiu",
            },
            {
              id: 1427,
              name: "Primaria BĂNEASA",
              county: "Giurgiu",
            },
            {
              id: 1428,
              name: "Primaria BOLINTIN-DEAL",
              county: "Giurgiu",
            },
            {
              id: 1429,
              name: "Primaria BUCŞANI",
              county: "Giurgiu",
            },
            {
              id: 1430,
              name: "Primaria BULBUCATA",
              county: "Giurgiu",
            },
            {
              id: 1431,
              name: "Primaria BUTURUGENI",
              county: "Giurgiu",
            },
            {
              id: 1432,
              name: "Primaria CĂLUGĂRENI",
              county: "Giurgiu",
            },
            {
              id: 1433,
              name: "Primaria CLEJANI",
              county: "Giurgiu",
            },
            {
              id: 1434,
              name: "Primaria COLIBAŞI",
              county: "Giurgiu",
            },
            {
              id: 1435,
              name: "Primaria COMANA",
              county: "Giurgiu",
            },
            {
              id: 1436,
              name: "Primaria COSOBA",
              county: "Giurgiu",
            },
            {
              id: 1437,
              name: "Primaria CREVEDIA MARE",
              county: "Giurgiu",
            },
            {
              id: 1438,
              name: "Primaria DAIA",
              county: "Giurgiu",
            },
            {
              id: 1439,
              name: "Primaria FLOREŞTI-STOENEŞTI",
              county: "Giurgiu",
            },
            {
              id: 1440,
              name: "Primaria FRĂTEŞTI",
              county: "Giurgiu",
            },
            {
              id: 1441,
              name: "Primaria GĂISENI",
              county: "Giurgiu",
            },
            {
              id: 1442,
              name: "Primaria GĂUJANI",
              county: "Giurgiu",
            },
            {
              id: 1443,
              name: "Primaria GHIMPAŢI",
              county: "Giurgiu",
            },
            {
              id: 1444,
              name: "Primaria GOGOŞARI",
              county: "Giurgiu",
            },
            {
              id: 1445,
              name: "Primaria GOSTINARI",
              county: "Giurgiu",
            },
            {
              id: 1446,
              name: "Primaria GOSTINU",
              county: "Giurgiu",
            },
            {
              id: 1447,
              name: "Primaria GRĂDINARI",
              county: "Giurgiu",
            },
            {
              id: 1448,
              name: "Primaria GREACA",
              county: "Giurgiu",
            },
            {
              id: 1449,
              name: "Primaria HERĂŞTI",
              county: "Giurgiu",
            },
            {
              id: 1450,
              name: "Primaria HOTARELE",
              county: "Giurgiu",
            },
            {
              id: 1451,
              name: "Primaria IEPUREŞTI",
              county: "Giurgiu",
            },
            {
              id: 1452,
              name: "Primaria ISVOARELE",
              county: "Giurgiu",
            },
            {
              id: 1453,
              name: "Primaria IZVOARELE",
              county: "Giurgiu",
            },
            {
              id: 1454,
              name: "Primaria JOIŢA",
              county: "Giurgiu",
            },
            {
              id: 1455,
              name: "Primaria LETCA NOUĂ",
              county: "Giurgiu",
            },
            {
              id: 1456,
              name: "Primaria MALU",
              county: "Giurgiu",
            },
            {
              id: 1457,
              name: "Primaria MIHAI BRAVU",
              county: "Giurgiu",
            },
            {
              id: 1458,
              name: "Primaria MÎRŞA",
              county: "Giurgiu",
            },
            {
              id: 1459,
              name: "Primaria OGREZENI",
              county: "Giurgiu",
            },
            {
              id: 1460,
              name: "Primaria OINACU",
              county: "Giurgiu",
            },
            {
              id: 1461,
              name: "Primaria PRUNDU",
              county: "Giurgiu",
            },
            {
              id: 1462,
              name: "Primaria PUTINEIU",
              county: "Giurgiu",
            },
            {
              id: 1463,
              name: "Primaria RĂSUCENI",
              county: "Giurgiu",
            },
            {
              id: 1464,
              name: "Primaria ROATA DE JOS",
              county: "Giurgiu",
            },
            {
              id: 1465,
              name: "Primaria SĂBĂRENI",
              county: "Giurgiu",
            },
            {
              id: 1466,
              name: "Primaria SCHITU",
              county: "Giurgiu",
            },
            {
              id: 1467,
              name: "Primaria SINGURENI",
              county: "Giurgiu",
            },
            {
              id: 1468,
              name: "Primaria SLOBOZIA",
              county: "Giurgiu",
            },
            {
              id: 1469,
              name: "Primaria STĂNEŞTI",
              county: "Giurgiu",
            },
            {
              id: 1470,
              name: "Primaria STOENEŞTI",
              county: "Giurgiu",
            },
            {
              id: 1471,
              name: "Primaria TOPORU",
              county: "Giurgiu",
            },
            {
              id: 1472,
              name: "Primaria ULMI",
              county: "Giurgiu",
            },
            {
              id: 1473,
              name: "Primaria VALEA DRAGULUI",
              county: "Giurgiu",
            },
            {
              id: 1474,
              name: "Primaria VĂRĂŞTI",
              county: "Giurgiu",
            },
            {
              id: 1475,
              name: "Primaria VEDEA",
              county: "Giurgiu",
            },
            {
              id: 1476,
              name: "Primaria VÎNĂTORII MICI",
              county: "Giurgiu",
            },
            {
              id: 1477,
              name: "Primaria MUNICIPIUL TÎRGU JIU",
              county: "Gorj",
            },
            {
              id: 1478,
              name: "Primaria MUNICIPIUL MOTRU",
              county: "Gorj",
            },
            {
              id: 1479,
              name: "Primaria ORAŞ BUMBEŞTI-JIU",
              county: "Gorj",
            },
            {
              id: 1480,
              name: "Primaria ORAŞ NOVACI",
              county: "Gorj",
            },
            {
              id: 1481,
              name: "Primaria ORAŞ ROVINARI",
              county: "Gorj",
            },
            {
              id: 1482,
              name: "Primaria ORAŞ TISMANA",
              county: "Gorj",
            },
            {
              id: 1483,
              name: "Primaria ORAŞ TÎRGU CĂRBUNEŞTI",
              county: "Gorj",
            },
            {
              id: 1484,
              name: "Primaria ORAŞ TURCENI",
              county: "Gorj",
            },
            {
              id: 1485,
              name: "Primaria ORAŞ ŢICLENI",
              county: "Gorj",
            },
            {
              id: 1486,
              name: "Primaria ALBENI",
              county: "Gorj",
            },
            {
              id: 1487,
              name: "Primaria ALIMPEŞTI",
              county: "Gorj",
            },
            {
              id: 1488,
              name: "Primaria ANINOASA",
              county: "Gorj",
            },
            {
              id: 1489,
              name: "Primaria ARCANI",
              county: "Gorj",
            },
            {
              id: 1490,
              name: "Primaria BAIA DE FIER",
              county: "Gorj",
            },
            {
              id: 1491,
              name: "Primaria BĂLĂNEŞTI",
              county: "Gorj",
            },
            {
              id: 1492,
              name: "Primaria BĂLEŞTI",
              county: "Gorj",
            },
            {
              id: 1493,
              name: "Primaria BĂRBĂTEŞTI",
              county: "Gorj",
            },
            {
              id: 1494,
              name: "Primaria BENGEŞTI-CIOCADIA",
              county: "Gorj",
            },
            {
              id: 1495,
              name: "Primaria BERLEŞTI",
              county: "Gorj",
            },
            {
              id: 1496,
              name: "Primaria BÎLTENI",
              county: "Gorj",
            },
            {
              id: 1497,
              name: "Primaria BOLBOŞI",
              county: "Gorj",
            },
            {
              id: 1498,
              name: "Primaria BORĂSCU",
              county: "Gorj",
            },
            {
              id: 1499,
              name: "Primaria BRĂNEŞTI",
              county: "Gorj",
            },
            {
              id: 1500,
              name: "Primaria BUMBEŞTI-PIŢIC",
              county: "Gorj",
            },
            {
              id: 1501,
              name: "Primaria BUSTUCHIN",
              county: "Gorj",
            },
            {
              id: 1502,
              name: "Primaria CĂPRENI",
              county: "Gorj",
            },
            {
              id: 1503,
              name: "Primaria CĂTUNELE",
              county: "Gorj",
            },
            {
              id: 1504,
              name: "Primaria CIUPERCENI",
              county: "Gorj",
            },
            {
              id: 1505,
              name: "Primaria CÎLNIC",
              county: "Gorj",
            },
            {
              id: 1506,
              name: "Primaria CRASNA",
              county: "Gorj",
            },
            {
              id: 1507,
              name: "Primaria CRUŞET",
              county: "Gorj",
            },
            {
              id: 1508,
              name: "Primaria DĂNCIULEŞTI",
              county: "Gorj",
            },
            {
              id: 1509,
              name: "Primaria DĂNEŞTI",
              county: "Gorj",
            },
            {
              id: 1510,
              name: "Primaria DRĂGOTEŞTI",
              county: "Gorj",
            },
            {
              id: 1511,
              name: "Primaria DRĂGUŢEŞTI",
              county: "Gorj",
            },
            {
              id: 1512,
              name: "Primaria FĂRCĂŞEŞTI",
              county: "Gorj",
            },
            {
              id: 1513,
              name: "Primaria GLOGOVA",
              county: "Gorj",
            },
            {
              id: 1514,
              name: "Primaria GODINEŞTI",
              county: "Gorj",
            },
            {
              id: 1515,
              name: "Primaria HUREZANI",
              county: "Gorj",
            },
            {
              id: 1516,
              name: "Primaria IONEŞTI",
              county: "Gorj",
            },
            {
              id: 1517,
              name: "Primaria JUPÎNEŞTI",
              county: "Gorj",
            },
            {
              id: 1518,
              name: "Primaria LELEŞTI",
              county: "Gorj",
            },
            {
              id: 1519,
              name: "Primaria LICURICI",
              county: "Gorj",
            },
            {
              id: 1520,
              name: "Primaria LOGREŞTI",
              county: "Gorj",
            },
            {
              id: 1521,
              name: "Primaria MĂTĂSARI",
              county: "Gorj",
            },
            {
              id: 1522,
              name: "Primaria MUŞETEŞTI",
              county: "Gorj",
            },
            {
              id: 1523,
              name: "Primaria NEGOMIR",
              county: "Gorj",
            },
            {
              id: 1524,
              name: "Primaria PADEŞ",
              county: "Gorj",
            },
            {
              id: 1525,
              name: "Primaria PEŞTIŞANI",
              county: "Gorj",
            },
            {
              id: 1526,
              name: "Primaria PLOPŞORU",
              county: "Gorj",
            },
            {
              id: 1527,
              name: "Primaria POLOVRAGI",
              county: "Gorj",
            },
            {
              id: 1528,
              name: "Primaria PRIGORIA",
              county: "Gorj",
            },
            {
              id: 1529,
              name: "Primaria ROŞIA DE AMARADIA",
              county: "Gorj",
            },
            {
              id: 1530,
              name: "Primaria RUNCU",
              county: "Gorj",
            },
            {
              id: 1531,
              name: "Primaria SAMARINEŞTI",
              county: "Gorj",
            },
            {
              id: 1532,
              name: "Primaria SĂCELU",
              county: "Gorj",
            },
            {
              id: 1533,
              name: "Primaria SĂULEŞTI",
              county: "Gorj",
            },
            {
              id: 1534,
              name: "Primaria SCHELA",
              county: "Gorj",
            },
            {
              id: 1535,
              name: "Primaria SCOARŢA",
              county: "Gorj",
            },
            {
              id: 1536,
              name: "Primaria SLIVILEŞTI",
              county: "Gorj",
            },
            {
              id: 1537,
              name: "Primaria STĂNEŞTI",
              county: "Gorj",
            },
            {
              id: 1538,
              name: "Primaria STEJARI",
              county: "Gorj",
            },
            {
              id: 1539,
              name: "Primaria STOINA",
              county: "Gorj",
            },
            {
              id: 1540,
              name: "Primaria TELEŞTI",
              county: "Gorj",
            },
            {
              id: 1541,
              name: "Primaria TURBUREA",
              county: "Gorj",
            },
            {
              id: 1542,
              name: "Primaria TURCINEŞTI",
              county: "Gorj",
            },
            {
              id: 1543,
              name: "Primaria ŢÎNŢĂRENI",
              county: "Gorj",
            },
            {
              id: 1544,
              name: "Primaria URDARI",
              county: "Gorj",
            },
            {
              id: 1545,
              name: "Primaria VĂGIULEŞTI",
              county: "Gorj",
            },
            {
              id: 1546,
              name: "Primaria VLADIMIR",
              county: "Gorj",
            },
            {
              id: 1547,
              name: "Primaria MUNICIPIUL MIERCUREA CIUC",
              county: "Harghita",
            },
            {
              id: 1548,
              name: "Primaria MUNICIPIUL GHEORGHENI",
              county: "Harghita",
            },
            {
              id: 1549,
              name: "Primaria MUNICIPIUL ODORHEIU SECUIESC",
              county: "Harghita",
            },
            {
              id: 1550,
              name: "Primaria MUNICIPIUL TOPLIŢA",
              county: "Harghita",
            },
            {
              id: 1551,
              name: "Primaria ORAŞ BĂILE TUŞNAD",
              county: "Harghita",
            },
            {
              id: 1552,
              name: "Primaria ORAŞ BĂLAN",
              county: "Harghita",
            },
            {
              id: 1553,
              name: "Primaria ORAŞ BORSEC",
              county: "Harghita",
            },
            {
              id: 1554,
              name: "Primaria ORAŞ CRISTURU SECUIESC",
              county: "Harghita",
            },
            {
              id: 1555,
              name: "Primaria ORAŞ VLĂHIŢA",
              county: "Harghita",
            },
            {
              id: 1556,
              name: "Primaria ATID",
              county: "Harghita",
            },
            {
              id: 1557,
              name: "Primaria AVRĂMEŞTI",
              county: "Harghita",
            },
            {
              id: 1558,
              name: "Primaria BILBOR",
              county: "Harghita",
            },
            {
              id: 1559,
              name: "Primaria BRĂDEŞTI",
              county: "Harghita",
            },
            {
              id: 1560,
              name: "Primaria CĂPÎLNIŢA",
              county: "Harghita",
            },
            {
              id: 1561,
              name: "Primaria CÂRŢA",
              county: "Harghita",
            },
            {
              id: 1562,
              name: "Primaria CICEU",
              county: "Harghita",
            },
            {
              id: 1563,
              name: "Primaria CIUCSÎNGEORGIU",
              county: "Harghita",
            },
            {
              id: 1564,
              name: "Primaria CIUMANI",
              county: "Harghita",
            },
            {
              id: 1565,
              name: "Primaria CORBU",
              county: "Harghita",
            },
            {
              id: 1566,
              name: "Primaria CORUND",
              county: "Harghita",
            },
            {
              id: 1567,
              name: "Primaria COZMENI",
              county: "Harghita",
            },
            {
              id: 1568,
              name: "Primaria DĂNEŞTI",
              county: "Harghita",
            },
            {
              id: 1569,
              name: "Primaria DEALU",
              county: "Harghita",
            },
            {
              id: 1570,
              name: "Primaria DITRĂU",
              county: "Harghita",
            },
            {
              id: 1571,
              name: "Primaria DÎRJIU",
              county: "Harghita",
            },
            {
              id: 1572,
              name: "Primaria FELICENI",
              county: "Harghita",
            },
            {
              id: 1573,
              name: "Primaria FRUMOASA",
              county: "Harghita",
            },
            {
              id: 1574,
              name: "Primaria GĂLĂUŢAŞ",
              county: "Harghita",
            },
            {
              id: 1575,
              name: "Primaria JOSENI",
              county: "Harghita",
            },
            {
              id: 1576,
              name: "Primaria LĂZAREA",
              county: "Harghita",
            },
            {
              id: 1577,
              name: "Primaria LELICENI",
              county: "Harghita",
            },
            {
              id: 1578,
              name: "Primaria LUETA",
              county: "Harghita",
            },
            {
              id: 1579,
              name: "Primaria LUNCA DE JOS",
              county: "Harghita",
            },
            {
              id: 1580,
              name: "Primaria LUNCA DE SUS",
              county: "Harghita",
            },
            {
              id: 1581,
              name: "Primaria LUPENI",
              county: "Harghita",
            },
            {
              id: 1582,
              name: "Primaria MĂDĂRAŞ",
              county: "Harghita",
            },
            {
              id: 1583,
              name: "Primaria MĂRTINIŞ",
              county: "Harghita",
            },
            {
              id: 1584,
              name: "Primaria MEREŞTI",
              county: "Harghita",
            },
            {
              id: 1585,
              name: "Primaria MIHĂILENI",
              county: "Harghita",
            },
            {
              id: 1586,
              name: "Primaria MUGENI",
              county: "Harghita",
            },
            {
              id: 1587,
              name: "Primaria OCLAND",
              county: "Harghita",
            },
            {
              id: 1588,
              name: "Primaria PĂULENI-CIUC",
              county: "Harghita",
            },
            {
              id: 1589,
              name: "Primaria PLĂIEŞII DE JOS",
              county: "Harghita",
            },
            {
              id: 1590,
              name: "Primaria PORUMBENI",
              county: "Harghita",
            },
            {
              id: 1591,
              name: "Primaria PRAID",
              county: "Harghita",
            },
            {
              id: 1592,
              name: "Primaria RACU",
              county: "Harghita",
            },
            {
              id: 1593,
              name: "Primaria REMETEA",
              county: "Harghita",
            },
            {
              id: 1594,
              name: "Primaria SATU MARE",
              county: "Harghita",
            },
            {
              id: 1595,
              name: "Primaria SĂCEL",
              county: "Harghita",
            },
            {
              id: 1596,
              name: "Primaria SĂRMAŞ",
              county: "Harghita",
            },
            {
              id: 1597,
              name: "Primaria SÂNCRĂIENI",
              county: "Harghita",
            },
            {
              id: 1598,
              name: "Primaria SÂNMARTIN",
              county: "Harghita",
            },
            {
              id: 1599,
              name: "Primaria SÂNTIMBRU",
              county: "Harghita",
            },
            {
              id: 1600,
              name: "Primaria SECUIENI",
              county: "Harghita",
            },
            {
              id: 1601,
              name: "Primaria SICULENI",
              county: "Harghita",
            },
            {
              id: 1602,
              name: "Primaria SÎNDOMINIC",
              county: "Harghita",
            },
            {
              id: 1603,
              name: "Primaria SÎNSIMION",
              county: "Harghita",
            },
            {
              id: 1604,
              name: "Primaria SUBCETATE",
              county: "Harghita",
            },
            {
              id: 1605,
              name: "Primaria SUSENI",
              county: "Harghita",
            },
            {
              id: 1606,
              name: "Primaria ŞIMONEŞTI",
              county: "Harghita",
            },
            {
              id: 1607,
              name: "Primaria TOMEŞTI",
              county: "Harghita",
            },
            {
              id: 1608,
              name: "Primaria TULGHEŞ",
              county: "Harghita",
            },
            {
              id: 1609,
              name: "Primaria TUŞNAD",
              county: "Harghita",
            },
            {
              id: 1610,
              name: "Primaria ULIEŞ",
              county: "Harghita",
            },
            {
              id: 1611,
              name: "Primaria VĂRŞAG",
              county: "Harghita",
            },
            {
              id: 1612,
              name: "Primaria VOŞLĂBENI",
              county: "Harghita",
            },
            {
              id: 1613,
              name: "Primaria ZETEA",
              county: "Harghita",
            },
            {
              id: 1614,
              name: "Primaria MUNICIPIUL DEVA",
              county: "Hunedoara",
            },
            {
              id: 1615,
              name: "Primaria MUNICIPIUL BRAD",
              county: "Hunedoara",
            },
            {
              id: 1616,
              name: "Primaria MUNICIPIUL HUNEDOARA",
              county: "Hunedoara",
            },
            {
              id: 1617,
              name: "Primaria MUNICIPIUL LUPENI",
              county: "Hunedoara",
            },
            {
              id: 1618,
              name: "Primaria MUNICIPIUL ORĂŞTIE",
              county: "Hunedoara",
            },
            {
              id: 1619,
              name: "Primaria MUNICIPIUL PETROŞANI",
              county: "Hunedoara",
            },
            {
              id: 1620,
              name: "Primaria MUNICIPIUL VULCAN",
              county: "Hunedoara",
            },
            {
              id: 1621,
              name: "Primaria ORAŞ ANINOASA",
              county: "Hunedoara",
            },
            {
              id: 1622,
              name: "Primaria ORAŞ CĂLAN",
              county: "Hunedoara",
            },
            {
              id: 1623,
              name: "Primaria ORAŞ GEOAGIU",
              county: "Hunedoara",
            },
            {
              id: 1624,
              name: "Primaria ORAŞ HAŢEG",
              county: "Hunedoara",
            },
            {
              id: 1625,
              name: "Primaria ORAŞ PETRILA",
              county: "Hunedoara",
            },
            {
              id: 1626,
              name: "Primaria ORAŞ SIMERIA",
              county: "Hunedoara",
            },
            {
              id: 1627,
              name: "Primaria ORAŞ URICANI",
              county: "Hunedoara",
            },
            {
              id: 1628,
              name: "Primaria BAIA DE CRIŞ",
              county: "Hunedoara",
            },
            {
              id: 1629,
              name: "Primaria BALŞA",
              county: "Hunedoara",
            },
            {
              id: 1630,
              name: "Primaria BARU",
              county: "Hunedoara",
            },
            {
              id: 1631,
              name: "Primaria BĂCIA",
              county: "Hunedoara",
            },
            {
              id: 1632,
              name: "Primaria BĂIŢA",
              county: "Hunedoara",
            },
            {
              id: 1633,
              name: "Primaria BĂNIŢA",
              county: "Hunedoara",
            },
            {
              id: 1634,
              name: "Primaria BĂTRÎNA",
              county: "Hunedoara",
            },
            {
              id: 1635,
              name: "Primaria BERIU",
              county: "Hunedoara",
            },
            {
              id: 1636,
              name: "Primaria BLĂJENI",
              county: "Hunedoara",
            },
            {
              id: 1637,
              name: "Primaria BOŞOROD",
              county: "Hunedoara",
            },
            {
              id: 1638,
              name: "Primaria BRĂNIŞCA",
              county: "Hunedoara",
            },
            {
              id: 1639,
              name: "Primaria BRETEA ROMÂNĂ",
              county: "Hunedoara",
            },
            {
              id: 1640,
              name: "Primaria BUCEŞ",
              county: "Hunedoara",
            },
            {
              id: 1641,
              name: "Primaria BUCUREŞCI",
              county: "Hunedoara",
            },
            {
              id: 1642,
              name: "Primaria BULZEŞTII DE SUS",
              county: "Hunedoara",
            },
            {
              id: 1643,
              name: "Primaria BUNILA",
              county: "Hunedoara",
            },
            {
              id: 1644,
              name: "Primaria BURJUC",
              county: "Hunedoara",
            },
            {
              id: 1645,
              name: "Primaria CÂRJIŢI",
              county: "Hunedoara",
            },
            {
              id: 1646,
              name: "Primaria CERBĂL",
              county: "Hunedoara",
            },
            {
              id: 1647,
              name: "Primaria CERTEJU DE SUS",
              county: "Hunedoara",
            },
            {
              id: 1648,
              name: "Primaria CRIŞCIOR",
              county: "Hunedoara",
            },
            {
              id: 1649,
              name: "Primaria DENSUŞ",
              county: "Hunedoara",
            },
            {
              id: 1650,
              name: "Primaria DOBRA",
              county: "Hunedoara",
            },
            {
              id: 1651,
              name: "Primaria GENERAL BERTHELOT",
              county: "Hunedoara",
            },
            {
              id: 1652,
              name: "Primaria GHELARI",
              county: "Hunedoara",
            },
            {
              id: 1653,
              name: "Primaria GURASADA",
              county: "Hunedoara",
            },
            {
              id: 1654,
              name: "Primaria HĂRĂU",
              county: "Hunedoara",
            },
            {
              id: 1655,
              name: "Primaria ILIA",
              county: "Hunedoara",
            },
            {
              id: 1656,
              name: "Primaria LĂPUGIU DE JOS",
              county: "Hunedoara",
            },
            {
              id: 1657,
              name: "Primaria LELESE",
              county: "Hunedoara",
            },
            {
              id: 1658,
              name: "Primaria LUNCA CERNII DE JOS",
              county: "Hunedoara",
            },
            {
              id: 1659,
              name: "Primaria LUNCOIU DE JOS",
              county: "Hunedoara",
            },
            {
              id: 1660,
              name: "Primaria MĂRTINEŞTI",
              county: "Hunedoara",
            },
            {
              id: 1661,
              name: "Primaria ORĂŞTIOARA DE SUS",
              county: "Hunedoara",
            },
            {
              id: 1662,
              name: "Primaria PESTIŞU MIC",
              county: "Hunedoara",
            },
            {
              id: 1663,
              name: "Primaria PUI",
              county: "Hunedoara",
            },
            {
              id: 1664,
              name: "Primaria RAPOLTU MARE",
              county: "Hunedoara",
            },
            {
              id: 1665,
              name: "Primaria RĂCHITOVA",
              county: "Hunedoara",
            },
            {
              id: 1666,
              name: "Primaria RÂU DE MORI",
              county: "Hunedoara",
            },
            {
              id: 1667,
              name: "Primaria RIBIŢA",
              county: "Hunedoara",
            },
            {
              id: 1668,
              name: "Primaria ROMOS",
              county: "Hunedoara",
            },
            {
              id: 1669,
              name: "Primaria SARMIZEGETUSA",
              county: "Hunedoara",
            },
            {
              id: 1670,
              name: "Primaria SĂLAŞU DE SUS",
              county: "Hunedoara",
            },
            {
              id: 1671,
              name: "Primaria SÂNTĂMĂRIA-ORLEA",
              county: "Hunedoara",
            },
            {
              id: 1672,
              name: "Primaria ŞOIMUŞ",
              county: "Hunedoara",
            },
            {
              id: 1673,
              name: "Primaria TELIUCU INFERIOR",
              county: "Hunedoara",
            },
            {
              id: 1674,
              name: "Primaria TOMEŞTI",
              county: "Hunedoara",
            },
            {
              id: 1675,
              name: "Primaria TOPLIŢA",
              county: "Hunedoara",
            },
            {
              id: 1676,
              name: "Primaria TOTEŞTI",
              county: "Hunedoara",
            },
            {
              id: 1677,
              name: "Primaria TURDAŞ",
              county: "Hunedoara",
            },
            {
              id: 1678,
              name: "Primaria VAŢA DE JOS",
              county: "Hunedoara",
            },
            {
              id: 1679,
              name: "Primaria VĂLIŞOARA",
              county: "Hunedoara",
            },
            {
              id: 1680,
              name: "Primaria VEŢEL",
              county: "Hunedoara",
            },
            {
              id: 1681,
              name: "Primaria VORŢA",
              county: "Hunedoara",
            },
            {
              id: 1682,
              name: "Primaria ZAM",
              county: "Hunedoara",
            },
            {
              id: 1683,
              name: "Primaria MUNICIPIUL SLOBOZIA",
              county: "Ialomita",
            },
            {
              id: 1684,
              name: "Primaria MUNICIPIUL FETEŞTI",
              county: "Ialomita",
            },
            {
              id: 1685,
              name: "Primaria MUNICIPIUL URZICENI",
              county: "Ialomita",
            },
            {
              id: 1686,
              name: "Primaria ORAŞ AMARA",
              county: "Ialomita",
            },
            {
              id: 1687,
              name: "Primaria ORAŞ CĂZĂNEŞTI",
              county: "Ialomita",
            },
            {
              id: 1688,
              name: "Primaria ORAŞ FIERBINŢI-TÂRG",
              county: "Ialomita",
            },
            {
              id: 1689,
              name: "Primaria ORAŞ ŢĂNDĂREI",
              county: "Ialomita",
            },
            {
              id: 1690,
              name: "Primaria ADÂNCATA",
              county: "Ialomita",
            },
            {
              id: 1691,
              name: "Primaria ALBEŞTI",
              county: "Ialomita",
            },
            {
              id: 1692,
              name: "Primaria ALEXENI",
              county: "Ialomita",
            },
            {
              id: 1693,
              name: "Primaria ANDRĂŞEŞTI",
              county: "Ialomita",
            },
            {
              id: 1694,
              name: "Primaria ARMĂŞEŞTI",
              county: "Ialomita",
            },
            {
              id: 1695,
              name: "Primaria AXINTELE",
              county: "Ialomita",
            },
            {
              id: 1696,
              name: "Primaria BALACIU",
              county: "Ialomita",
            },
            {
              id: 1697,
              name: "Primaria BĂRBULEŞTI",
              county: "Ialomita",
            },
            {
              id: 1698,
              name: "Primaria BĂRCĂNEŞTI",
              county: "Ialomita",
            },
            {
              id: 1699,
              name: "Primaria BORĂNEŞTI",
              county: "Ialomita",
            },
            {
              id: 1700,
              name: "Primaria BORDUŞANI",
              county: "Ialomita",
            },
            {
              id: 1701,
              name: "Primaria BUCU",
              county: "Ialomita",
            },
            {
              id: 1702,
              name: "Primaria BUEŞTI",
              county: "Ialomita",
            },
            {
              id: 1703,
              name: "Primaria CIOCÂRLIA",
              county: "Ialomita",
            },
            {
              id: 1704,
              name: "Primaria CIOCHINA",
              county: "Ialomita",
            },
            {
              id: 1705,
              name: "Primaria CIULNIŢA",
              county: "Ialomita",
            },
            {
              id: 1706,
              name: "Primaria COCORA",
              county: "Ialomita",
            },
            {
              id: 1707,
              name: "Primaria COLELIA",
              county: "Ialomita",
            },
            {
              id: 1708,
              name: "Primaria COSÂMBEŞTI",
              county: "Ialomita",
            },
            {
              id: 1709,
              name: "Primaria COŞERENI",
              county: "Ialomita",
            },
            {
              id: 1710,
              name: "Primaria DRĂGOEŞTI",
              county: "Ialomita",
            },
            {
              id: 1711,
              name: "Primaria DRIDU",
              county: "Ialomita",
            },
            {
              id: 1712,
              name: "Primaria FĂCĂENI",
              county: "Ialomita",
            },
            {
              id: 1713,
              name: "Primaria GÂRBOVI",
              county: "Ialomita",
            },
            {
              id: 1714,
              name: "Primaria GHEORGHE DOJA",
              county: "Ialomita",
            },
            {
              id: 1715,
              name: "Primaria GHEORGHE LAZĂR",
              county: "Ialomita",
            },
            {
              id: 1716,
              name: "Primaria GIURGENI",
              county: "Ialomita",
            },
            {
              id: 1717,
              name: "Primaria GRINDU",
              county: "Ialomita",
            },
            {
              id: 1718,
              name: "Primaria GRIVIŢA",
              county: "Ialomita",
            },
            {
              id: 1719,
              name: "Primaria GURA IALOMIŢEI",
              county: "Ialomita",
            },
            {
              id: 1720,
              name: "Primaria ION ROATĂ",
              county: "Ialomita",
            },
            {
              id: 1721,
              name: "Primaria JILAVELE",
              county: "Ialomita",
            },
            {
              id: 1722,
              name: "Primaria MAIA",
              county: "Ialomita",
            },
            {
              id: 1723,
              name: "Primaria MANASIA",
              county: "Ialomita",
            },
            {
              id: 1724,
              name: "Primaria MĂRCULEŞTI",
              county: "Ialomita",
            },
            {
              id: 1725,
              name: "Primaria MIHAIL KOGĂLNICEANU",
              county: "Ialomita",
            },
            {
              id: 1726,
              name: "Primaria MILOŞEŞTI",
              county: "Ialomita",
            },
            {
              id: 1727,
              name: "Primaria MOLDOVENI",
              county: "Ialomita",
            },
            {
              id: 1728,
              name: "Primaria MOVILA",
              county: "Ialomita",
            },
            {
              id: 1729,
              name: "Primaria MOVILIŢA",
              county: "Ialomita",
            },
            {
              id: 1730,
              name: "Primaria MUNTENI-BUZĂU",
              county: "Ialomita",
            },
            {
              id: 1731,
              name: "Primaria OGRADA",
              county: "Ialomita",
            },
            {
              id: 1732,
              name: "Primaria PERIEŢI",
              county: "Ialomita",
            },
            {
              id: 1733,
              name: "Primaria PLATONEŞTI",
              county: "Ialomita",
            },
            {
              id: 1734,
              name: "Primaria RADULEŞTI",
              county: "Ialomita",
            },
            {
              id: 1735,
              name: "Primaria REVIGA",
              county: "Ialomita",
            },
            {
              id: 1736,
              name: "Primaria ROŞIORI",
              county: "Ialomita",
            },
            {
              id: 1737,
              name: "Primaria SĂLCIOARA",
              county: "Ialomita",
            },
            {
              id: 1738,
              name: "Primaria SĂRĂŢENI",
              county: "Ialomita",
            },
            {
              id: 1739,
              name: "Primaria SĂVENI",
              county: "Ialomita",
            },
            {
              id: 1740,
              name: "Primaria SCÂNTEIA",
              county: "Ialomita",
            },
            {
              id: 1741,
              name: "Primaria SFÂNTU GHEORGHE",
              county: "Ialomita",
            },
            {
              id: 1742,
              name: "Primaria SINEŞTI",
              county: "Ialomita",
            },
            {
              id: 1743,
              name: "Primaria STELNICA",
              county: "Ialomita",
            },
            {
              id: 1744,
              name: "Primaria SUDIŢI",
              county: "Ialomita",
            },
            {
              id: 1745,
              name: "Primaria TRAIAN",
              county: "Ialomita",
            },
            {
              id: 1746,
              name: "Primaria VALEA CIORII",
              county: "Ialomita",
            },
            {
              id: 1747,
              name: "Primaria VALEA MĂCRIŞULUI",
              county: "Ialomita",
            },
            {
              id: 1748,
              name: "Primaria VLĂDENI",
              county: "Ialomita",
            },
            {
              id: 1749,
              name: "Primaria MUNICIPIUL IAŞI",
              county: "Iasi",
            },
            {
              id: 1750,
              name: "Primaria MUNICIPIUL PAŞCANI",
              county: "Iasi",
            },
            {
              id: 1751,
              name: "Primaria ORAŞ HÎRLĂU",
              county: "Iasi",
            },
            {
              id: 1752,
              name: "Primaria ORAŞ PODU ILOAIEI",
              county: "Iasi",
            },
            {
              id: 1753,
              name: "Primaria ORAŞ TÂRGU FRUMOS",
              county: "Iasi",
            },
            {
              id: 1754,
              name: "Primaria ALEXANDRU I. CUZA",
              county: "Iasi",
            },
            {
              id: 1755,
              name: "Primaria ANDRIEŞENI",
              county: "Iasi",
            },
            {
              id: 1756,
              name: "Primaria ARONEANU",
              county: "Iasi",
            },
            {
              id: 1757,
              name: "Primaria BALŞ",
              county: "Iasi",
            },
            {
              id: 1758,
              name: "Primaria BĂLŢAŢI",
              county: "Iasi",
            },
            {
              id: 1759,
              name: "Primaria BELCEŞTI",
              county: "Iasi",
            },
            {
              id: 1760,
              name: "Primaria BIVOLARI",
              county: "Iasi",
            },
            {
              id: 1761,
              name: "Primaria BÎRNOVA",
              county: "Iasi",
            },
            {
              id: 1762,
              name: "Primaria BRĂEŞTI",
              county: "Iasi",
            },
            {
              id: 1763,
              name: "Primaria BUTEA",
              county: "Iasi",
            },
            {
              id: 1764,
              name: "Primaria CEPLENIŢA",
              county: "Iasi",
            },
            {
              id: 1765,
              name: "Primaria CIOHORĂNI",
              county: "Iasi",
            },
            {
              id: 1766,
              name: "Primaria CIORTEŞTI",
              county: "Iasi",
            },
            {
              id: 1767,
              name: "Primaria CIUREA",
              county: "Iasi",
            },
            {
              id: 1768,
              name: "Primaria COARNELE CAPREI",
              county: "Iasi",
            },
            {
              id: 1769,
              name: "Primaria COMARNA",
              county: "Iasi",
            },
            {
              id: 1770,
              name: "Primaria COSTEŞTI",
              county: "Iasi",
            },
            {
              id: 1771,
              name: "Primaria COSTULENI",
              county: "Iasi",
            },
            {
              id: 1772,
              name: "Primaria COTNARI",
              county: "Iasi",
            },
            {
              id: 1773,
              name: "Primaria COZMEŞTI",
              county: "Iasi",
            },
            {
              id: 1774,
              name: "Primaria CRISTEŞTI",
              county: "Iasi",
            },
            {
              id: 1775,
              name: "Primaria CUCUTENI",
              county: "Iasi",
            },
            {
              id: 1776,
              name: "Primaria DAGÎŢA",
              county: "Iasi",
            },
            {
              id: 1777,
              name: "Primaria DELENI",
              county: "Iasi",
            },
            {
              id: 1778,
              name: "Primaria DOBROVĂŢ",
              county: "Iasi",
            },
            {
              id: 1779,
              name: "Primaria DOLHEŞTI",
              county: "Iasi",
            },
            {
              id: 1780,
              name: "Primaria DRĂGUŞENI",
              county: "Iasi",
            },
            {
              id: 1781,
              name: "Primaria DUMEŞTI",
              county: "Iasi",
            },
            {
              id: 1782,
              name: "Primaria ERBICENI",
              county: "Iasi",
            },
            {
              id: 1783,
              name: "Primaria FÂNTÂNELE",
              county: "Iasi",
            },
            {
              id: 1784,
              name: "Primaria FOCURI",
              county: "Iasi",
            },
            {
              id: 1785,
              name: "Primaria GOLĂIEŞTI",
              county: "Iasi",
            },
            {
              id: 1786,
              name: "Primaria GORBAN",
              county: "Iasi",
            },
            {
              id: 1787,
              name: "Primaria GRAJDURI",
              county: "Iasi",
            },
            {
              id: 1788,
              name: "Primaria GROPNIŢA",
              county: "Iasi",
            },
            {
              id: 1789,
              name: "Primaria GROZEŞTI",
              county: "Iasi",
            },
            {
              id: 1790,
              name: "Primaria HĂLĂUCEŞTI",
              county: "Iasi",
            },
            {
              id: 1791,
              name: "Primaria HĂRMĂNEŞTI",
              county: "Iasi",
            },
            {
              id: 1792,
              name: "Primaria HELEŞTENI",
              county: "Iasi",
            },
            {
              id: 1793,
              name: "Primaria HOLBOCA",
              county: "Iasi",
            },
            {
              id: 1794,
              name: "Primaria HORLEŞTI",
              county: "Iasi",
            },
            {
              id: 1795,
              name: "Primaria ION NECULCE",
              county: "Iasi",
            },
            {
              id: 1796,
              name: "Primaria IPATELE",
              county: "Iasi",
            },
            {
              id: 1797,
              name: "Primaria LESPEZI",
              county: "Iasi",
            },
            {
              id: 1798,
              name: "Primaria LEŢCANI",
              county: "Iasi",
            },
            {
              id: 1799,
              name: "Primaria LUNGANI",
              county: "Iasi",
            },
            {
              id: 1800,
              name: "Primaria MĂDÎRJAC",
              county: "Iasi",
            },
            {
              id: 1801,
              name: "Primaria MIRCEŞTI",
              county: "Iasi",
            },
            {
              id: 1802,
              name: "Primaria MIRONEASA",
              county: "Iasi",
            },
            {
              id: 1803,
              name: "Primaria MIROSLAVA",
              county: "Iasi",
            },
            {
              id: 1804,
              name: "Primaria MIROSLOVEŞTI",
              county: "Iasi",
            },
            {
              id: 1805,
              name: "Primaria MOGOŞEŞTI",
              county: "Iasi",
            },
            {
              id: 1806,
              name: "Primaria MOGOŞEŞTI-SIRET",
              county: "Iasi",
            },
            {
              id: 1807,
              name: "Primaria MOŞNA",
              county: "Iasi",
            },
            {
              id: 1808,
              name: "Primaria MOŢCA",
              county: "Iasi",
            },
            {
              id: 1809,
              name: "Primaria MOVILENI",
              county: "Iasi",
            },
            {
              id: 1810,
              name: "Primaria OŢELENI",
              county: "Iasi",
            },
            {
              id: 1811,
              name: "Primaria PLUGARI",
              county: "Iasi",
            },
            {
              id: 1812,
              name: "Primaria POPEŞTI",
              county: "Iasi",
            },
            {
              id: 1813,
              name: "Primaria POPRICANI",
              county: "Iasi",
            },
            {
              id: 1814,
              name: "Primaria PRISĂCANI",
              county: "Iasi",
            },
            {
              id: 1815,
              name: "Primaria PROBOTA",
              county: "Iasi",
            },
            {
              id: 1816,
              name: "Primaria RĂCHITENI",
              county: "Iasi",
            },
            {
              id: 1817,
              name: "Primaria RĂDUCĂNENI",
              county: "Iasi",
            },
            {
              id: 1818,
              name: "Primaria REDIU",
              county: "Iasi",
            },
            {
              id: 1819,
              name: "Primaria ROMÂNEŞTI",
              county: "Iasi",
            },
            {
              id: 1820,
              name: "Primaria ROŞCANI",
              county: "Iasi",
            },
            {
              id: 1821,
              name: "Primaria RUGINOASA",
              county: "Iasi",
            },
            {
              id: 1822,
              name: "Primaria SCÂNTEIA",
              county: "Iasi",
            },
            {
              id: 1823,
              name: "Primaria SCHITU DUCA",
              county: "Iasi",
            },
            {
              id: 1824,
              name: "Primaria SCOBINŢI",
              county: "Iasi",
            },
            {
              id: 1825,
              name: "Primaria SINEŞTI",
              county: "Iasi",
            },
            {
              id: 1826,
              name: "Primaria SIREŢEL",
              county: "Iasi",
            },
            {
              id: 1827,
              name: "Primaria STOLNICENI-PRĂJESCU",
              county: "Iasi",
            },
            {
              id: 1828,
              name: "Primaria STRUNGA",
              county: "Iasi",
            },
            {
              id: 1829,
              name: "Primaria ŞCHEIA",
              county: "Iasi",
            },
            {
              id: 1830,
              name: "Primaria ŞIPOTE",
              county: "Iasi",
            },
            {
              id: 1831,
              name: "Primaria TANSA",
              county: "Iasi",
            },
            {
              id: 1832,
              name: "Primaria TĂTĂRUŞI",
              county: "Iasi",
            },
            {
              id: 1833,
              name: "Primaria TODIREŞTI",
              county: "Iasi",
            },
            {
              id: 1834,
              name: "Primaria TOMEŞTI",
              county: "Iasi",
            },
            {
              id: 1835,
              name: "Primaria TRIFEŞTI",
              county: "Iasi",
            },
            {
              id: 1836,
              name: "Primaria ŢIBANA",
              county: "Iasi",
            },
            {
              id: 1837,
              name: "Primaria ŢIBĂNEŞTI",
              county: "Iasi",
            },
            {
              id: 1838,
              name: "Primaria ŢIGĂNĂŞI",
              county: "Iasi",
            },
            {
              id: 1839,
              name: "Primaria ŢUŢORA",
              county: "Iasi",
            },
            {
              id: 1840,
              name: "Primaria UNGHENI",
              county: "Iasi",
            },
            {
              id: 1841,
              name: "Primaria VALEA LUPULUI",
              county: "Iasi",
            },
            {
              id: 1842,
              name: "Primaria VALEA SEACĂ",
              county: "Iasi",
            },
            {
              id: 1843,
              name: "Primaria VICTORIA",
              county: "Iasi",
            },
            {
              id: 1844,
              name: "Primaria VÎNĂTORI",
              county: "Iasi",
            },
            {
              id: 1845,
              name: "Primaria VLĂDENI",
              county: "Iasi",
            },
            {
              id: 1846,
              name: "Primaria VOINEŞTI",
              county: "Iasi",
            },
            {
              id: 1847,
              name: "Primaria ORAŞ BRAGADIRU",
              county: "Ilfov",
            },
            {
              id: 1848,
              name: "Primaria ORAŞ BUFTEA",
              county: "Ilfov",
            },
            {
              id: 1849,
              name: "Primaria ORAŞ CHITILA",
              county: "Ilfov",
            },
            {
              id: 1850,
              name: "Primaria ORAŞ MĂGURELE",
              county: "Ilfov",
            },
            {
              id: 1851,
              name: "Primaria ORAŞ OTOPENI",
              county: "Ilfov",
            },
            {
              id: 1852,
              name: "Primaria ORAŞ PANTELIMON",
              county: "Ilfov",
            },
            {
              id: 1853,
              name: "Primaria ORAŞ POPEŞTI LEORDENI",
              county: "Ilfov",
            },
            {
              id: 1854,
              name: "Primaria ORAŞ VOLUNTARI",
              county: "Ilfov",
            },
            {
              id: 1855,
              name: "Primaria 1 DECEMBRIE",
              county: "Ilfov",
            },
            {
              id: 1856,
              name: "Primaria AFUMAŢI",
              county: "Ilfov",
            },
            {
              id: 1857,
              name: "Primaria BALOTEŞTI",
              county: "Ilfov",
            },
            {
              id: 1858,
              name: "Primaria BERCENI",
              county: "Ilfov",
            },
            {
              id: 1859,
              name: "Primaria BRĂNEŞTI",
              county: "Ilfov",
            },
            {
              id: 1860,
              name: "Primaria CERNICA",
              county: "Ilfov",
            },
            {
              id: 1861,
              name: "Primaria CHIAJNA",
              county: "Ilfov",
            },
            {
              id: 1862,
              name: "Primaria CIOLPANI",
              county: "Ilfov",
            },
            {
              id: 1863,
              name: "Primaria CIOROGÎRLA",
              county: "Ilfov",
            },
            {
              id: 1864,
              name: "Primaria CLINCENI",
              county: "Ilfov",
            },
            {
              id: 1865,
              name: "Primaria COPĂCENI",
              county: "Ilfov",
            },
            {
              id: 1866,
              name: "Primaria CORBEANCA",
              county: "Ilfov",
            },
            {
              id: 1867,
              name: "Primaria CORNETU",
              county: "Ilfov",
            },
            {
              id: 1868,
              name: "Primaria DASCĂLU",
              county: "Ilfov",
            },
            {
              id: 1869,
              name: "Primaria DĂRĂŞTI-ILFOV",
              county: "Ilfov",
            },
            {
              id: 1870,
              name: "Primaria DOBROEŞTI",
              county: "Ilfov",
            },
            {
              id: 1871,
              name: "Primaria DOMNEŞTI",
              county: "Ilfov",
            },
            {
              id: 1872,
              name: "Primaria DRAGOMIREŞTI-VALE",
              county: "Ilfov",
            },
            {
              id: 1873,
              name: "Primaria GĂNEASA",
              county: "Ilfov",
            },
            {
              id: 1874,
              name: "Primaria GLINA",
              county: "Ilfov",
            },
            {
              id: 1875,
              name: "Primaria GRĂDIŞTEA",
              county: "Ilfov",
            },
            {
              id: 1876,
              name: "Primaria GRUIU",
              county: "Ilfov",
            },
            {
              id: 1877,
              name: "Primaria JILAVA",
              county: "Ilfov",
            },
            {
              id: 1878,
              name: "Primaria MOARA VLĂSIEI",
              county: "Ilfov",
            },
            {
              id: 1879,
              name: "Primaria MOGOŞOAIA",
              county: "Ilfov",
            },
            {
              id: 1880,
              name: "Primaria NUCI",
              county: "Ilfov",
            },
            {
              id: 1881,
              name: "Primaria PERIŞ",
              county: "Ilfov",
            },
            {
              id: 1882,
              name: "Primaria PETRĂCHIOAIA",
              county: "Ilfov",
            },
            {
              id: 1883,
              name: "Primaria SNAGOV",
              county: "Ilfov",
            },
            {
              id: 1884,
              name: "Primaria ŞTEFĂNEŞTII DE JOS",
              county: "Ilfov",
            },
            {
              id: 1885,
              name: "Primaria TUNARI",
              county: "Ilfov",
            },
            {
              id: 1886,
              name: "Primaria VIDRA",
              county: "Ilfov",
            },
            {
              id: 1887,
              name: "Primaria MUNICIPIUL BAIA MARE",
              county: "Maramures",
            },
            {
              id: 1888,
              name: "Primaria MUNICIPIUL SIGHETU MARMAŢIEI",
              county: "Maramures",
            },
            {
              id: 1889,
              name: "Primaria ORAŞ BAIA SPRIE",
              county: "Maramures",
            },
            {
              id: 1890,
              name: "Primaria ORAŞ BORŞA",
              county: "Maramures",
            },
            {
              id: 1891,
              name: "Primaria ORAŞ CAVNIC",
              county: "Maramures",
            },
            {
              id: 1892,
              name: "Primaria ORAŞ DRAGOMIREŞTI",
              county: "Maramures",
            },
            {
              id: 1893,
              name: "Primaria ORAŞ SĂLIŞTEA DE SUS",
              county: "Maramures",
            },
            {
              id: 1894,
              name: "Primaria ORAŞ SEINI",
              county: "Maramures",
            },
            {
              id: 1895,
              name: "Primaria ORAŞ ŞOMCUTA MARE",
              county: "Maramures",
            },
            {
              id: 1896,
              name: "Primaria ORAŞ TĂUŢII-MĂGHERĂUŞ",
              county: "Maramures",
            },
            {
              id: 1897,
              name: "Primaria ORAŞ TÎRGU LĂPUŞ",
              county: "Maramures",
            },
            {
              id: 1898,
              name: "Primaria ORAŞ ULMENI",
              county: "Maramures",
            },
            {
              id: 1899,
              name: "Primaria ORAŞ VIŞEU DE SUS",
              county: "Maramures",
            },
            {
              id: 1900,
              name: "Primaria ARDUSAT",
              county: "Maramures",
            },
            {
              id: 1901,
              name: "Primaria ARINIŞ",
              county: "Maramures",
            },
            {
              id: 1902,
              name: "Primaria ASUAJU DE SUS",
              county: "Maramures",
            },
            {
              id: 1903,
              name: "Primaria BĂIŢA DE SUB CODRU",
              county: "Maramures",
            },
            {
              id: 1904,
              name: "Primaria BĂIUŢ",
              county: "Maramures",
            },
            {
              id: 1905,
              name: "Primaria BĂSEŞTI",
              county: "Maramures",
            },
            {
              id: 1906,
              name: "Primaria BÂRSANA",
              county: "Maramures",
            },
            {
              id: 1907,
              name: "Primaria BICAZ",
              county: "Maramures",
            },
            {
              id: 1908,
              name: "Primaria BISTRA",
              county: "Maramures",
            },
            {
              id: 1909,
              name: "Primaria BOCICOIU MARE",
              county: "Maramures",
            },
            {
              id: 1910,
              name: "Primaria BOGDAN VODĂ",
              county: "Maramures",
            },
            {
              id: 1911,
              name: "Primaria BOIU MARE",
              county: "Maramures",
            },
            {
              id: 1912,
              name: "Primaria BOTIZA",
              county: "Maramures",
            },
            {
              id: 1913,
              name: "Primaria BUDEŞTI",
              county: "Maramures",
            },
            {
              id: 1914,
              name: "Primaria CĂLINEŞTI",
              county: "Maramures",
            },
            {
              id: 1915,
              name: "Primaria CERNEŞTI",
              county: "Maramures",
            },
            {
              id: 1916,
              name: "Primaria CICÎRLĂU",
              county: "Maramures",
            },
            {
              id: 1917,
              name: "Primaria CÎMPULUNG LA TISA",
              county: "Maramures",
            },
            {
              id: 1918,
              name: "Primaria COAŞ",
              county: "Maramures",
            },
            {
              id: 1919,
              name: "Primaria COLTĂU",
              county: "Maramures",
            },
            {
              id: 1920,
              name: "Primaria COPALNIC-MĂNĂŞTUR",
              county: "Maramures",
            },
            {
              id: 1921,
              name: "Primaria COROIENI",
              county: "Maramures",
            },
            {
              id: 1922,
              name: "Primaria CUPŞENI",
              county: "Maramures",
            },
            {
              id: 1923,
              name: "Primaria DESEŞTI",
              county: "Maramures",
            },
            {
              id: 1924,
              name: "Primaria DUMBRĂVIŢA",
              county: "Maramures",
            },
            {
              id: 1925,
              name: "Primaria FĂRCAŞA",
              county: "Maramures",
            },
            {
              id: 1926,
              name: "Primaria GÂRDANI",
              county: "Maramures",
            },
            {
              id: 1927,
              name: "Primaria GIULEŞTI",
              county: "Maramures",
            },
            {
              id: 1928,
              name: "Primaria GROŞI",
              county: "Maramures",
            },
            {
              id: 1929,
              name: "Primaria GROŞII ŢIBLEŞULUI",
              county: "Maramures",
            },
            {
              id: 1930,
              name: "Primaria IEUD",
              county: "Maramures",
            },
            {
              id: 1931,
              name: "Primaria LĂPUŞ",
              county: "Maramures",
            },
            {
              id: 1932,
              name: "Primaria LEORDINA",
              county: "Maramures",
            },
            {
              id: 1933,
              name: "Primaria MIREŞU MARE",
              county: "Maramures",
            },
            {
              id: 1934,
              name: "Primaria MOISEI",
              county: "Maramures",
            },
            {
              id: 1935,
              name: "Primaria OARŢA DE JOS",
              county: "Maramures",
            },
            {
              id: 1936,
              name: "Primaria OCNA ŞUGATAG",
              county: "Maramures",
            },
            {
              id: 1937,
              name: "Primaria ONCEŞTI",
              county: "Maramures",
            },
            {
              id: 1938,
              name: "Primaria PETROVA",
              county: "Maramures",
            },
            {
              id: 1939,
              name: "Primaria POIENILE DE SUB MUNTE",
              county: "Maramures",
            },
            {
              id: 1940,
              name: "Primaria POIENILE IZEI",
              county: "Maramures",
            },
            {
              id: 1941,
              name: "Primaria RECEA",
              county: "Maramures",
            },
            {
              id: 1942,
              name: "Primaria REMETEA CHIOARULUI",
              county: "Maramures",
            },
            {
              id: 1943,
              name: "Primaria REMEŢI",
              county: "Maramures",
            },
            {
              id: 1944,
              name: "Primaria REPEDEA",
              county: "Maramures",
            },
            {
              id: 1945,
              name: "Primaria RONA DE JOS",
              county: "Maramures",
            },
            {
              id: 1946,
              name: "Primaria RONA DE SUS",
              county: "Maramures",
            },
            {
              id: 1947,
              name: "Primaria ROZAVLEA",
              county: "Maramures",
            },
            {
              id: 1948,
              name: "Primaria RUSCOVA",
              county: "Maramures",
            },
            {
              id: 1949,
              name: "Primaria SARASĂU",
              county: "Maramures",
            },
            {
              id: 1950,
              name: "Primaria SATULUNG",
              county: "Maramures",
            },
            {
              id: 1951,
              name: "Primaria SĂCĂLĂŞENI",
              county: "Maramures",
            },
            {
              id: 1952,
              name: "Primaria SĂCEL",
              county: "Maramures",
            },
            {
              id: 1953,
              name: "Primaria SĂLSIG",
              county: "Maramures",
            },
            {
              id: 1954,
              name: "Primaria SĂPÎNŢA",
              county: "Maramures",
            },
            {
              id: 1955,
              name: "Primaria STRÎMTURA",
              county: "Maramures",
            },
            {
              id: 1956,
              name: "Primaria SUCIU DE SUS",
              county: "Maramures",
            },
            {
              id: 1957,
              name: "Primaria ŞIEU",
              county: "Maramures",
            },
            {
              id: 1958,
              name: "Primaria ŞISEŞTI",
              county: "Maramures",
            },
            {
              id: 1959,
              name: "Primaria VADU IZEI",
              county: "Maramures",
            },
            {
              id: 1960,
              name: "Primaria VALEA CHIOARULUI",
              county: "Maramures",
            },
            {
              id: 1961,
              name: "Primaria VIMA MICĂ",
              county: "Maramures",
            },
            {
              id: 1962,
              name: "Primaria VIŞEU DE JOS",
              county: "Maramures",
            },
            {
              id: 1963,
              name: "Primaria MUNICIPIUL DROBETA-TURNU SEVERIN",
              county: "Mehedinti",
            },
            {
              id: 1964,
              name: "Primaria MUNICIPIUL ORŞOVA",
              county: "Mehedinti",
            },
            {
              id: 1965,
              name: "Primaria ORAŞ BAIA DE ARAMĂ",
              county: "Mehedinti",
            },
            {
              id: 1966,
              name: "Primaria ORAŞ STREHAIA",
              county: "Mehedinti",
            },
            {
              id: 1967,
              name: "Primaria ORAŞ VÎNJU MARE",
              county: "Mehedinti",
            },
            {
              id: 1968,
              name: "Primaria BALA",
              county: "Mehedinti",
            },
            {
              id: 1969,
              name: "Primaria BALTA",
              county: "Mehedinti",
            },
            {
              id: 1970,
              name: "Primaria BĂLĂCIŢA",
              county: "Mehedinti",
            },
            {
              id: 1971,
              name: "Primaria BÎCLEŞ",
              county: "Mehedinti",
            },
            {
              id: 1972,
              name: "Primaria BÎLVĂNEŞTI",
              county: "Mehedinti",
            },
            {
              id: 1973,
              name: "Primaria BRANIŞTEA",
              county: "Mehedinti",
            },
            {
              id: 1974,
              name: "Primaria BREZNIŢA-MOTRU",
              county: "Mehedinti",
            },
            {
              id: 1975,
              name: "Primaria BREZNIŢA-OCOL",
              county: "Mehedinti",
            },
            {
              id: 1976,
              name: "Primaria BROŞTENI",
              county: "Mehedinti",
            },
            {
              id: 1977,
              name: "Primaria BURILA MARE",
              county: "Mehedinti",
            },
            {
              id: 1978,
              name: "Primaria BUTOIEŞTI",
              county: "Mehedinti",
            },
            {
              id: 1979,
              name: "Primaria CĂZĂNEŞTI",
              county: "Mehedinti",
            },
            {
              id: 1980,
              name: "Primaria CIREŞU",
              county: "Mehedinti",
            },
            {
              id: 1981,
              name: "Primaria CORCOVA",
              county: "Mehedinti",
            },
            {
              id: 1982,
              name: "Primaria CORLĂŢEL",
              county: "Mehedinti",
            },
            {
              id: 1983,
              name: "Primaria CUJMIR",
              county: "Mehedinti",
            },
            {
              id: 1984,
              name: "Primaria DEVESEL",
              county: "Mehedinti",
            },
            {
              id: 1985,
              name: "Primaria DÎRVARI",
              county: "Mehedinti",
            },
            {
              id: 1986,
              name: "Primaria DUBOVA",
              county: "Mehedinti",
            },
            {
              id: 1987,
              name: "Primaria DUMBRAVA",
              county: "Mehedinti",
            },
            {
              id: 1988,
              name: "Primaria EŞELNIŢA",
              county: "Mehedinti",
            },
            {
              id: 1989,
              name: "Primaria FLOREŞTI",
              county: "Mehedinti",
            },
            {
              id: 1990,
              name: "Primaria GÂRLA MARE",
              county: "Mehedinti",
            },
            {
              id: 1991,
              name: "Primaria GODEANU",
              county: "Mehedinti",
            },
            {
              id: 1992,
              name: "Primaria GOGOŞU",
              county: "Mehedinti",
            },
            {
              id: 1993,
              name: "Primaria GRECI",
              county: "Mehedinti",
            },
            {
              id: 1994,
              name: "Primaria GROZEŞTI",
              county: "Mehedinti",
            },
            {
              id: 1995,
              name: "Primaria GRUIA",
              county: "Mehedinti",
            },
            {
              id: 1996,
              name: "Primaria HINOVA",
              county: "Mehedinti",
            },
            {
              id: 1997,
              name: "Primaria HUSNICIOARA",
              county: "Mehedinti",
            },
            {
              id: 1998,
              name: "Primaria ILOVĂŢ",
              county: "Mehedinti",
            },
            {
              id: 1999,
              name: "Primaria ILOVIŢA",
              county: "Mehedinti",
            },
            {
              id: 2000,
              name: "Primaria ISVERNA",
              county: "Mehedinti",
            },
            {
              id: 2001,
              name: "Primaria IZVORU BÎRZII",
              county: "Mehedinti",
            },
            {
              id: 2002,
              name: "Primaria JIANA",
              county: "Mehedinti",
            },
            {
              id: 2003,
              name: "Primaria LIVEZILE",
              county: "Mehedinti",
            },
            {
              id: 2004,
              name: "Primaria MALOVĂŢ",
              county: "Mehedinti",
            },
            {
              id: 2005,
              name: "Primaria OBÎRŞIA DE CÎMP",
              county: "Mehedinti",
            },
            {
              id: 2006,
              name: "Primaria OBÎRŞIA-CLOŞANI",
              county: "Mehedinti",
            },
            {
              id: 2007,
              name: "Primaria OPRIŞOR",
              county: "Mehedinti",
            },
            {
              id: 2008,
              name: "Primaria PĂDINA",
              county: "Mehedinti",
            },
            {
              id: 2009,
              name: "Primaria PĂTULELE",
              county: "Mehedinti",
            },
            {
              id: 2010,
              name: "Primaria PODENI",
              county: "Mehedinti",
            },
            {
              id: 2011,
              name: "Primaria PONOARELE",
              county: "Mehedinti",
            },
            {
              id: 2012,
              name: "Primaria POROINA MARE",
              county: "Mehedinti",
            },
            {
              id: 2013,
              name: "Primaria PRISTOL",
              county: "Mehedinti",
            },
            {
              id: 2014,
              name: "Primaria PRUNIŞOR",
              county: "Mehedinti",
            },
            {
              id: 2015,
              name: "Primaria PUNGHINA",
              county: "Mehedinti",
            },
            {
              id: 2016,
              name: "Primaria ROGOVA",
              county: "Mehedinti",
            },
            {
              id: 2017,
              name: "Primaria SALCIA",
              county: "Mehedinti",
            },
            {
              id: 2018,
              name: "Primaria STÎNGĂCEAUA",
              county: "Mehedinti",
            },
            {
              id: 2019,
              name: "Primaria SVINIŢA",
              county: "Mehedinti",
            },
            {
              id: 2020,
              name: "Primaria ŞIMIAN",
              county: "Mehedinti",
            },
            {
              id: 2021,
              name: "Primaria ŞIŞEŞTI",
              county: "Mehedinti",
            },
            {
              id: 2022,
              name: "Primaria ŞOVARNA",
              county: "Mehedinti",
            },
            {
              id: 2023,
              name: "Primaria TÎMNA",
              county: "Mehedinti",
            },
            {
              id: 2024,
              name: "Primaria VÂNĂTORI",
              county: "Mehedinti",
            },
            {
              id: 2025,
              name: "Primaria VÎNJULEŢ",
              county: "Mehedinti",
            },
            {
              id: 2026,
              name: "Primaria VLĂDAIA",
              county: "Mehedinti",
            },
            {
              id: 2027,
              name: "Primaria VOLOIAC",
              county: "Mehedinti",
            },
            {
              id: 2028,
              name: "Primaria VRATA",
              county: "Mehedinti",
            },
            {
              id: 2029,
              name: "Primaria MUNICIPIUL TÎRGU MUREŞ",
              county: "Mures",
            },
            {
              id: 2030,
              name: "Primaria MUNICIPIUL REGHIN",
              county: "Mures",
            },
            {
              id: 2031,
              name: "Primaria MUNICIPIUL SIGHIŞOARA",
              county: "Mures",
            },
            {
              id: 2032,
              name: "Primaria MUNICIPIUL TÂRNĂVENI",
              county: "Mures",
            },
            {
              id: 2033,
              name: "Primaria ORAŞ IERNUT",
              county: "Mures",
            },
            {
              id: 2034,
              name: "Primaria ORAŞ LUDUŞ",
              county: "Mures",
            },
            {
              id: 2035,
              name: "Primaria ORAŞ MIERCUREA NIRAJULUI",
              county: "Mures",
            },
            {
              id: 2036,
              name: "Primaria ORAŞ SARMAŞU",
              county: "Mures",
            },
            {
              id: 2037,
              name: "Primaria ORAŞ SÂNGEORGIU DE PĂDURE",
              county: "Mures",
            },
            {
              id: 2038,
              name: "Primaria ORAŞ SOVATA",
              county: "Mures",
            },
            {
              id: 2039,
              name: "Primaria ORAŞ UNGHENI",
              county: "Mures",
            },
            {
              id: 2040,
              name: "Primaria ACĂŢARI",
              county: "Mures",
            },
            {
              id: 2041,
              name: "Primaria ADĂMUŞ",
              county: "Mures",
            },
            {
              id: 2042,
              name: "Primaria ALBEŞTI",
              county: "Mures",
            },
            {
              id: 2043,
              name: "Primaria ALUNIŞ",
              county: "Mures",
            },
            {
              id: 2044,
              name: "Primaria APOLD",
              county: "Mures",
            },
            {
              id: 2045,
              name: "Primaria AŢINTIŞ",
              county: "Mures",
            },
            {
              id: 2046,
              name: "Primaria BAHNEA",
              county: "Mures",
            },
            {
              id: 2047,
              name: "Primaria BAND",
              county: "Mures",
            },
            {
              id: 2048,
              name: "Primaria BATOŞ",
              county: "Mures",
            },
            {
              id: 2049,
              name: "Primaria BĂGACIU",
              county: "Mures",
            },
            {
              id: 2050,
              name: "Primaria BĂLA",
              county: "Mures",
            },
            {
              id: 2051,
              name: "Primaria BĂLĂUŞERI",
              county: "Mures",
            },
            {
              id: 2052,
              name: "Primaria BEICA DE JOS",
              county: "Mures",
            },
            {
              id: 2053,
              name: "Primaria BERENI",
              county: "Mures",
            },
            {
              id: 2054,
              name: "Primaria BICHIŞ",
              county: "Mures",
            },
            {
              id: 2055,
              name: "Primaria BOGATA",
              county: "Mures",
            },
            {
              id: 2056,
              name: "Primaria BREAZA",
              county: "Mures",
            },
            {
              id: 2057,
              name: "Primaria BRÎNCOVENEŞTI",
              county: "Mures",
            },
            {
              id: 2058,
              name: "Primaria CEUAŞU DE CÎMPIE",
              county: "Mures",
            },
            {
              id: 2059,
              name: "Primaria CHEŢANI",
              county: "Mures",
            },
            {
              id: 2060,
              name: "Primaria CHIBED",
              county: "Mures",
            },
            {
              id: 2061,
              name: "Primaria CHIHERU DE JOS",
              county: "Mures",
            },
            {
              id: 2062,
              name: "Primaria COROISÎNMĂRTIN",
              county: "Mures",
            },
            {
              id: 2063,
              name: "Primaria CORUNCA",
              county: "Mures",
            },
            {
              id: 2064,
              name: "Primaria COZMA",
              county: "Mures",
            },
            {
              id: 2065,
              name: "Primaria CRĂCIUNEŞTI",
              county: "Mures",
            },
            {
              id: 2066,
              name: "Primaria CRĂIEŞTI",
              county: "Mures",
            },
            {
              id: 2067,
              name: "Primaria CRISTEŞTI",
              county: "Mures",
            },
            {
              id: 2068,
              name: "Primaria CUCERDEA",
              county: "Mures",
            },
            {
              id: 2069,
              name: "Primaria CUCI",
              county: "Mures",
            },
            {
              id: 2070,
              name: "Primaria DANEŞ",
              county: "Mures",
            },
            {
              id: 2071,
              name: "Primaria DEDA",
              county: "Mures",
            },
            {
              id: 2072,
              name: "Primaria EREMITU",
              county: "Mures",
            },
            {
              id: 2073,
              name: "Primaria ERNEI",
              county: "Mures",
            },
            {
              id: 2074,
              name: "Primaria FĂRĂGĂU",
              county: "Mures",
            },
            {
              id: 2075,
              name: "Primaria FÎNTÎNELE",
              county: "Mures",
            },
            {
              id: 2076,
              name: "Primaria GĂLEŞTI",
              county: "Mures",
            },
            {
              id: 2077,
              name: "Primaria GĂNEŞTI",
              county: "Mures",
            },
            {
              id: 2078,
              name: "Primaria GHEORGHE DOJA",
              county: "Mures",
            },
            {
              id: 2079,
              name: "Primaria GHINDARI",
              county: "Mures",
            },
            {
              id: 2080,
              name: "Primaria GLODENI",
              county: "Mures",
            },
            {
              id: 2081,
              name: "Primaria GORNEŞTI",
              county: "Mures",
            },
            {
              id: 2082,
              name: "Primaria GREBENIŞU DE CÎMPIE",
              county: "Mures",
            },
            {
              id: 2083,
              name: "Primaria GURGHIU",
              county: "Mures",
            },
            {
              id: 2084,
              name: "Primaria HODAC",
              county: "Mures",
            },
            {
              id: 2085,
              name: "Primaria HODOŞA",
              county: "Mures",
            },
            {
              id: 2086,
              name: "Primaria IBĂNEŞTI",
              county: "Mures",
            },
            {
              id: 2087,
              name: "Primaria ICLĂNZEL",
              county: "Mures",
            },
            {
              id: 2088,
              name: "Primaria IDECIU DE JOS",
              county: "Mures",
            },
            {
              id: 2089,
              name: "Primaria LIVEZENI",
              county: "Mures",
            },
            {
              id: 2090,
              name: "Primaria LUNCA",
              county: "Mures",
            },
            {
              id: 2091,
              name: "Primaria LUNCA BRADULUI",
              county: "Mures",
            },
            {
              id: 2092,
              name: "Primaria MĂDĂRAŞ",
              county: "Mures",
            },
            {
              id: 2093,
              name: "Primaria MĂGHERANI",
              county: "Mures",
            },
            {
              id: 2094,
              name: "Primaria MICA",
              county: "Mures",
            },
            {
              id: 2095,
              name: "Primaria MIHEŞU DE CÎMPIE",
              county: "Mures",
            },
            {
              id: 2096,
              name: "Primaria NADEŞ",
              county: "Mures",
            },
            {
              id: 2097,
              name: "Primaria NEAUA",
              county: "Mures",
            },
            {
              id: 2098,
              name: "Primaria OGRA",
              county: "Mures",
            },
            {
              id: 2099,
              name: "Primaria PAPIU ILARIAN",
              county: "Mures",
            },
            {
              id: 2100,
              name: "Primaria PĂNET",
              county: "Mures",
            },
            {
              id: 2101,
              name: "Primaria PĂSĂRENI",
              county: "Mures",
            },
            {
              id: 2102,
              name: "Primaria PETELEA",
              county: "Mures",
            },
            {
              id: 2103,
              name: "Primaria POGĂCEAUA",
              county: "Mures",
            },
            {
              id: 2104,
              name: "Primaria RĂSTOLIŢA",
              county: "Mures",
            },
            {
              id: 2105,
              name: "Primaria RÎCIU",
              county: "Mures",
            },
            {
              id: 2106,
              name: "Primaria RUŞII-MUNŢI",
              county: "Mures",
            },
            {
              id: 2107,
              name: "Primaria SASCHIZ",
              county: "Mures",
            },
            {
              id: 2108,
              name: "Primaria SĂRĂŢENI",
              county: "Mures",
            },
            {
              id: 2109,
              name: "Primaria SÂNGER",
              county: "Mures",
            },
            {
              id: 2110,
              name: "Primaria SÎNCRAIU DE MUREŞ",
              county: "Mures",
            },
            {
              id: 2111,
              name: "Primaria SÎNGEORGIU DE MUREŞ",
              county: "Mures",
            },
            {
              id: 2112,
              name: "Primaria SÎNPAUL",
              county: "Mures",
            },
            {
              id: 2113,
              name: "Primaria SÎNPETRU DE CÎMPIE",
              county: "Mures",
            },
            {
              id: 2114,
              name: "Primaria SÎNTANA DE MUREŞ",
              county: "Mures",
            },
            {
              id: 2115,
              name: "Primaria SOLOVĂSTRU",
              county: "Mures",
            },
            {
              id: 2116,
              name: "Primaria STÎNCENI",
              county: "Mures",
            },
            {
              id: 2117,
              name: "Primaria SUPLAC",
              county: "Mures",
            },
            {
              id: 2118,
              name: "Primaria SUSENI",
              county: "Mures",
            },
            {
              id: 2119,
              name: "Primaria ŞĂULIA",
              county: "Mures",
            },
            {
              id: 2120,
              name: "Primaria ŞINCAI",
              county: "Mures",
            },
            {
              id: 2121,
              name: "Primaria TĂURENI",
              county: "Mures",
            },
            {
              id: 2122,
              name: "Primaria VALEA LARGĂ",
              county: "Mures",
            },
            {
              id: 2123,
              name: "Primaria VĂRGATA",
              county: "Mures",
            },
            {
              id: 2124,
              name: "Primaria VĂTAVA",
              county: "Mures",
            },
            {
              id: 2125,
              name: "Primaria VEŢCA",
              county: "Mures",
            },
            {
              id: 2126,
              name: "Primaria VIIŞOARA",
              county: "Mures",
            },
            {
              id: 2127,
              name: "Primaria VÎNĂTORI",
              county: "Mures",
            },
            {
              id: 2128,
              name: "Primaria VOIVODENI",
              county: "Mures",
            },
            {
              id: 2129,
              name: "Primaria ZAGĂR",
              county: "Mures",
            },
            {
              id: 2130,
              name: "Primaria ZAU DE CÎMPIE",
              county: "Mures",
            },
            {
              id: 2131,
              name: "Primaria MUNICIPIUL PIATRA-NEAMŢ",
              county: "Neamt",
            },
            {
              id: 2132,
              name: "Primaria MUNICIPIUL ROMAN",
              county: "Neamt",
            },
            {
              id: 2133,
              name: "Primaria ORAŞ BICAZ",
              county: "Neamt",
            },
            {
              id: 2134,
              name: "Primaria ORAŞ ROZNOV",
              county: "Neamt",
            },
            {
              id: 2135,
              name: "Primaria ORAŞ TÎRGU NEAMŢ",
              county: "Neamt",
            },
            {
              id: 2136,
              name: "Primaria AGAPIA",
              county: "Neamt",
            },
            {
              id: 2137,
              name: "Primaria ALEXANDRU CEL BUN",
              county: "Neamt",
            },
            {
              id: 2138,
              name: "Primaria BAHNA",
              county: "Neamt",
            },
            {
              id: 2139,
              name: "Primaria BĂLŢĂTEŞTI",
              county: "Neamt",
            },
            {
              id: 2140,
              name: "Primaria BICAZ-CHEI",
              county: "Neamt",
            },
            {
              id: 2141,
              name: "Primaria BICAZU ARDELEAN",
              county: "Neamt",
            },
            {
              id: 2142,
              name: "Primaria BIRA",
              county: "Neamt",
            },
            {
              id: 2143,
              name: "Primaria BÎRGĂUANI",
              county: "Neamt",
            },
            {
              id: 2144,
              name: "Primaria BODEŞTI",
              county: "Neamt",
            },
            {
              id: 2145,
              name: "Primaria BOGHICEA",
              county: "Neamt",
            },
            {
              id: 2146,
              name: "Primaria BORCA",
              county: "Neamt",
            },
            {
              id: 2147,
              name: "Primaria BORLEŞTI",
              county: "Neamt",
            },
            {
              id: 2148,
              name: "Primaria BOTEŞTI",
              county: "Neamt",
            },
            {
              id: 2149,
              name: "Primaria BOZIENI",
              county: "Neamt",
            },
            {
              id: 2150,
              name: "Primaria BRUSTURI",
              county: "Neamt",
            },
            {
              id: 2151,
              name: "Primaria CEAHLĂU",
              county: "Neamt",
            },
            {
              id: 2152,
              name: "Primaria CÎNDEŞTI",
              county: "Neamt",
            },
            {
              id: 2153,
              name: "Primaria CORDUN",
              county: "Neamt",
            },
            {
              id: 2154,
              name: "Primaria COSTIŞA",
              county: "Neamt",
            },
            {
              id: 2155,
              name: "Primaria CRĂCĂOANI",
              county: "Neamt",
            },
            {
              id: 2156,
              name: "Primaria DĂMUC",
              county: "Neamt",
            },
            {
              id: 2157,
              name: "Primaria DOBRENI",
              county: "Neamt",
            },
            {
              id: 2158,
              name: "Primaria DOCHIA",
              county: "Neamt",
            },
            {
              id: 2159,
              name: "Primaria DOLJEŞTI",
              county: "Neamt",
            },
            {
              id: 2160,
              name: "Primaria DRAGOMIREŞTI",
              county: "Neamt",
            },
            {
              id: 2161,
              name: "Primaria DRĂGĂNEŞTI",
              county: "Neamt",
            },
            {
              id: 2162,
              name: "Primaria DULCEŞTI",
              county: "Neamt",
            },
            {
              id: 2163,
              name: "Primaria DUMBRAVA ROŞIE",
              county: "Neamt",
            },
            {
              id: 2164,
              name: "Primaria FARCAŞA",
              county: "Neamt",
            },
            {
              id: 2165,
              name: "Primaria FĂUREI",
              county: "Neamt",
            },
            {
              id: 2166,
              name: "Primaria GÂDINŢI",
              county: "Neamt",
            },
            {
              id: 2167,
              name: "Primaria GHERĂEŞTI",
              county: "Neamt",
            },
            {
              id: 2168,
              name: "Primaria GHINDĂOANI",
              county: "Neamt",
            },
            {
              id: 2169,
              name: "Primaria GIROV",
              county: "Neamt",
            },
            {
              id: 2170,
              name: "Primaria GÎRCINA",
              county: "Neamt",
            },
            {
              id: 2171,
              name: "Primaria GRINŢIEŞ",
              county: "Neamt",
            },
            {
              id: 2172,
              name: "Primaria GRUMĂZEŞTI",
              county: "Neamt",
            },
            {
              id: 2173,
              name: "Primaria HANGU",
              county: "Neamt",
            },
            {
              id: 2174,
              name: "Primaria HORIA",
              county: "Neamt",
            },
            {
              id: 2175,
              name: "Primaria ICUŞEŞTI",
              county: "Neamt",
            },
            {
              id: 2176,
              name: "Primaria ION CREANGĂ",
              county: "Neamt",
            },
            {
              id: 2177,
              name: "Primaria MĂRGINENI",
              county: "Neamt",
            },
            {
              id: 2178,
              name: "Primaria MOLDOVENI",
              county: "Neamt",
            },
            {
              id: 2179,
              name: "Primaria NEGREŞTI",
              county: "Neamt",
            },
            {
              id: 2180,
              name: "Primaria ONICENI",
              county: "Neamt",
            },
            {
              id: 2181,
              name: "Primaria PĂSTRĂVENI",
              county: "Neamt",
            },
            {
              id: 2182,
              name: "Primaria PÂNCEŞTI",
              county: "Neamt",
            },
            {
              id: 2183,
              name: "Primaria PETRICANI",
              county: "Neamt",
            },
            {
              id: 2184,
              name: "Primaria PIATRA ŞOIMULUI",
              county: "Neamt",
            },
            {
              id: 2185,
              name: "Primaria PIPIRIG",
              county: "Neamt",
            },
            {
              id: 2186,
              name: "Primaria PÎNGĂRAŢI",
              county: "Neamt",
            },
            {
              id: 2187,
              name: "Primaria PODOLENI",
              county: "Neamt",
            },
            {
              id: 2188,
              name: "Primaria POIANA TEIULUI",
              county: "Neamt",
            },
            {
              id: 2189,
              name: "Primaria POIENARI",
              county: "Neamt",
            },
            {
              id: 2190,
              name: "Primaria RĂUCEŞTI",
              county: "Neamt",
            },
            {
              id: 2191,
              name: "Primaria RĂZBOIENI",
              county: "Neamt",
            },
            {
              id: 2192,
              name: "Primaria REDIU",
              county: "Neamt",
            },
            {
              id: 2193,
              name: "Primaria ROMÂNI",
              county: "Neamt",
            },
            {
              id: 2194,
              name: "Primaria RUGINOASA",
              county: "Neamt",
            },
            {
              id: 2195,
              name: "Primaria SAGNA",
              county: "Neamt",
            },
            {
              id: 2196,
              name: "Primaria SĂBĂOANI",
              county: "Neamt",
            },
            {
              id: 2197,
              name: "Primaria SĂVINEŞTI",
              county: "Neamt",
            },
            {
              id: 2198,
              name: "Primaria SECUIENI",
              county: "Neamt",
            },
            {
              id: 2199,
              name: "Primaria STĂNIŢA",
              county: "Neamt",
            },
            {
              id: 2200,
              name: "Primaria ŞTEFAN CEL MARE",
              county: "Neamt",
            },
            {
              id: 2201,
              name: "Primaria TARCĂU",
              county: "Neamt",
            },
            {
              id: 2202,
              name: "Primaria TAŞCA",
              county: "Neamt",
            },
            {
              id: 2203,
              name: "Primaria TAZLĂU",
              county: "Neamt",
            },
            {
              id: 2204,
              name: "Primaria TĂMĂŞENI",
              county: "Neamt",
            },
            {
              id: 2205,
              name: "Primaria TIMIŞEŞTI",
              county: "Neamt",
            },
            {
              id: 2206,
              name: "Primaria TRIFEŞTI",
              county: "Neamt",
            },
            {
              id: 2207,
              name: "Primaria TUPILAŢI",
              county: "Neamt",
            },
            {
              id: 2208,
              name: "Primaria ŢIBUCANI",
              county: "Neamt",
            },
            {
              id: 2209,
              name: "Primaria URECHENI",
              county: "Neamt",
            },
            {
              id: 2210,
              name: "Primaria VALEA URSULUI",
              county: "Neamt",
            },
            {
              id: 2211,
              name: "Primaria VĂLENI",
              county: "Neamt",
            },
            {
              id: 2212,
              name: "Primaria VÎNĂTORI-NEAMŢ",
              county: "Neamt",
            },
            {
              id: 2213,
              name: "Primaria ZĂNEŞTI",
              county: "Neamt",
            },
            {
              id: 2214,
              name: "Primaria MUNICIPIUL SLATINA",
              county: "Olt",
            },
            {
              id: 2215,
              name: "Primaria MUNICIPIUL CARACAL",
              county: "Olt",
            },
            {
              id: 2216,
              name: "Primaria ORAŞ BALŞ",
              county: "Olt",
            },
            {
              id: 2217,
              name: "Primaria ORAŞ CORABIA",
              county: "Olt",
            },
            {
              id: 2218,
              name: "Primaria ORAŞ DRĂGĂNEŞTI-OLT",
              county: "Olt",
            },
            {
              id: 2219,
              name: "Primaria ORAŞ PIATRA-OLT",
              county: "Olt",
            },
            {
              id: 2220,
              name: "Primaria ORAŞ POTCOAVA",
              county: "Olt",
            },
            {
              id: 2221,
              name: "Primaria ORAŞ SCORNICEŞTI",
              county: "Olt",
            },
            {
              id: 2222,
              name: "Primaria BALDOVINEŞTI",
              county: "Olt",
            },
            {
              id: 2223,
              name: "Primaria BĂBICIU",
              county: "Olt",
            },
            {
              id: 2224,
              name: "Primaria BĂLTENI",
              county: "Olt",
            },
            {
              id: 2225,
              name: "Primaria BĂRĂŞTI",
              county: "Olt",
            },
            {
              id: 2226,
              name: "Primaria BÎRZA",
              county: "Olt",
            },
            {
              id: 2227,
              name: "Primaria BOBICEŞTI",
              county: "Olt",
            },
            {
              id: 2228,
              name: "Primaria BRASTAVĂŢU",
              county: "Olt",
            },
            {
              id: 2229,
              name: "Primaria BREBENI",
              county: "Olt",
            },
            {
              id: 2230,
              name: "Primaria BRÎNCOVENI",
              county: "Olt",
            },
            {
              id: 2231,
              name: "Primaria BUCINIŞU",
              county: "Olt",
            },
            {
              id: 2232,
              name: "Primaria CĂLUI",
              county: "Olt",
            },
            {
              id: 2233,
              name: "Primaria CEZIENI",
              county: "Olt",
            },
            {
              id: 2234,
              name: "Primaria CILIENI",
              county: "Olt",
            },
            {
              id: 2235,
              name: "Primaria CÎRLOGANI",
              county: "Olt",
            },
            {
              id: 2236,
              name: "Primaria COLONEŞTI",
              county: "Olt",
            },
            {
              id: 2237,
              name: "Primaria CORBU",
              county: "Olt",
            },
            {
              id: 2238,
              name: "Primaria COTEANA",
              county: "Olt",
            },
            {
              id: 2239,
              name: "Primaria CRÎMPOIA",
              county: "Olt",
            },
            {
              id: 2240,
              name: "Primaria CUNGREA",
              county: "Olt",
            },
            {
              id: 2241,
              name: "Primaria CURTIŞOARA",
              county: "Olt",
            },
            {
              id: 2242,
              name: "Primaria DĂNEASA",
              county: "Olt",
            },
            {
              id: 2243,
              name: "Primaria DEVESELU",
              county: "Olt",
            },
            {
              id: 2244,
              name: "Primaria DOBREŢU",
              county: "Olt",
            },
            {
              id: 2245,
              name: "Primaria DOBROSLOVENI",
              county: "Olt",
            },
            {
              id: 2246,
              name: "Primaria DOBROTEASA",
              county: "Olt",
            },
            {
              id: 2247,
              name: "Primaria DOBRUN",
              county: "Olt",
            },
            {
              id: 2248,
              name: "Primaria DRĂGHICENI",
              county: "Olt",
            },
            {
              id: 2249,
              name: "Primaria FĂGEŢELU",
              county: "Olt",
            },
            {
              id: 2250,
              name: "Primaria FĂLCOIU",
              county: "Olt",
            },
            {
              id: 2251,
              name: "Primaria FĂRCAŞELE",
              county: "Olt",
            },
            {
              id: 2252,
              name: "Primaria GĂNEASA",
              county: "Olt",
            },
            {
              id: 2253,
              name: "Primaria GĂVĂNEŞTI",
              county: "Olt",
            },
            {
              id: 2254,
              name: "Primaria GHIMPEŢENI",
              county: "Olt",
            },
            {
              id: 2255,
              name: "Primaria GIUVĂRĂŞTI",
              county: "Olt",
            },
            {
              id: 2256,
              name: "Primaria GÎRCOV",
              county: "Olt",
            },
            {
              id: 2257,
              name: "Primaria GOSTAVĂŢU",
              county: "Olt",
            },
            {
              id: 2258,
              name: "Primaria GRĂDINARI",
              county: "Olt",
            },
            {
              id: 2259,
              name: "Primaria GRĂDINILE",
              county: "Olt",
            },
            {
              id: 2260,
              name: "Primaria GROJDIBODU",
              county: "Olt",
            },
            {
              id: 2261,
              name: "Primaria GURA PADINII",
              county: "Olt",
            },
            {
              id: 2262,
              name: "Primaria IANCA",
              county: "Olt",
            },
            {
              id: 2263,
              name: "Primaria IANCU JIANU",
              county: "Olt",
            },
            {
              id: 2264,
              name: "Primaria ICOANA",
              county: "Olt",
            },
            {
              id: 2265,
              name: "Primaria IPOTESTI",
              county: "Olt",
            },
            {
              id: 2266,
              name: "Primaria IZBICENI",
              county: "Olt",
            },
            {
              id: 2267,
              name: "Primaria IZVOARELE",
              county: "Olt",
            },
            {
              id: 2268,
              name: "Primaria LELEASCA",
              county: "Olt",
            },
            {
              id: 2269,
              name: "Primaria MĂRUNŢEI",
              county: "Olt",
            },
            {
              id: 2270,
              name: "Primaria MIHĂEŞTI",
              county: "Olt",
            },
            {
              id: 2271,
              name: "Primaria MILCOV",
              county: "Olt",
            },
            {
              id: 2272,
              name: "Primaria MORUNGLAV",
              county: "Olt",
            },
            {
              id: 2273,
              name: "Primaria MOVILENI",
              county: "Olt",
            },
            {
              id: 2274,
              name: "Primaria NICOLAE TITULESCU",
              county: "Olt",
            },
            {
              id: 2275,
              name: "Primaria OBÎRŞIA",
              county: "Olt",
            },
            {
              id: 2276,
              name: "Primaria OBOGA",
              county: "Olt",
            },
            {
              id: 2277,
              name: "Primaria OPORELU",
              county: "Olt",
            },
            {
              id: 2278,
              name: "Primaria OPTAŞI-MĂGURA",
              county: "Olt",
            },
            {
              id: 2279,
              name: "Primaria ORLEA",
              county: "Olt",
            },
            {
              id: 2280,
              name: "Primaria OSICA DE JOS",
              county: "Olt",
            },
            {
              id: 2281,
              name: "Primaria OSICA DE SUS",
              county: "Olt",
            },
            {
              id: 2282,
              name: "Primaria PÂRŞCOVENI",
              county: "Olt",
            },
            {
              id: 2283,
              name: "Primaria PERIEŢI",
              county: "Olt",
            },
            {
              id: 2284,
              name: "Primaria PLEŞOIU",
              county: "Olt",
            },
            {
              id: 2285,
              name: "Primaria POBORU",
              county: "Olt",
            },
            {
              id: 2286,
              name: "Primaria PRISEACA",
              county: "Olt",
            },
            {
              id: 2287,
              name: "Primaria RADOMIREŞTI",
              county: "Olt",
            },
            {
              id: 2288,
              name: "Primaria REDEA",
              county: "Olt",
            },
            {
              id: 2289,
              name: "Primaria ROTUNDA",
              county: "Olt",
            },
            {
              id: 2290,
              name: "Primaria RUSĂNEŞTI",
              county: "Olt",
            },
            {
              id: 2291,
              name: "Primaria SÂRBII - MĂGURA",
              county: "Olt",
            },
            {
              id: 2292,
              name: "Primaria SCĂRIŞOARA",
              county: "Olt",
            },
            {
              id: 2293,
              name: "Primaria SCHITU",
              county: "Olt",
            },
            {
              id: 2294,
              name: "Primaria SEACA",
              county: "Olt",
            },
            {
              id: 2295,
              name: "Primaria SÎMBUREŞTI",
              county: "Olt",
            },
            {
              id: 2296,
              name: "Primaria SLĂTIOARA",
              county: "Olt",
            },
            {
              id: 2297,
              name: "Primaria SPINENI",
              county: "Olt",
            },
            {
              id: 2298,
              name: "Primaria SPRÎNCENATA",
              county: "Olt",
            },
            {
              id: 2299,
              name: "Primaria STOENEŞTI",
              county: "Olt",
            },
            {
              id: 2300,
              name: "Primaria STOICĂNEŞTI",
              county: "Olt",
            },
            {
              id: 2301,
              name: "Primaria STREJEŞTI",
              county: "Olt",
            },
            {
              id: 2302,
              name: "Primaria STUDINA",
              county: "Olt",
            },
            {
              id: 2303,
              name: "Primaria ŞERBĂNEŞTI",
              county: "Olt",
            },
            {
              id: 2304,
              name: "Primaria ŞOPÂRLIŢA",
              county: "Olt",
            },
            {
              id: 2305,
              name: "Primaria ŞTEFAN CEL MARE",
              county: "Olt",
            },
            {
              id: 2306,
              name: "Primaria TĂTULEŞTI",
              county: "Olt",
            },
            {
              id: 2307,
              name: "Primaria TESLUI",
              county: "Olt",
            },
            {
              id: 2308,
              name: "Primaria TIA MARE",
              county: "Olt",
            },
            {
              id: 2309,
              name: "Primaria TOPANA",
              county: "Olt",
            },
            {
              id: 2310,
              name: "Primaria TRAIAN",
              county: "Olt",
            },
            {
              id: 2311,
              name: "Primaria TUFENI",
              county: "Olt",
            },
            {
              id: 2312,
              name: "Primaria URZICA",
              county: "Olt",
            },
            {
              id: 2313,
              name: "Primaria VALEA MARE",
              county: "Olt",
            },
            {
              id: 2314,
              name: "Primaria VĂDASTRA",
              county: "Olt",
            },
            {
              id: 2315,
              name: "Primaria VĂDĂSTRIŢA",
              county: "Olt",
            },
            {
              id: 2316,
              name: "Primaria VĂLENI",
              county: "Olt",
            },
            {
              id: 2317,
              name: "Primaria VERGULEASA",
              county: "Olt",
            },
            {
              id: 2318,
              name: "Primaria VIŞINA",
              county: "Olt",
            },
            {
              id: 2319,
              name: "Primaria VIŞINA NOUĂ",
              county: "Olt",
            },
            {
              id: 2320,
              name: "Primaria VITOMIREŞTI",
              county: "Olt",
            },
            {
              id: 2321,
              name: "Primaria VÎLCELE",
              county: "Olt",
            },
            {
              id: 2322,
              name: "Primaria VLĂDILA",
              county: "Olt",
            },
            {
              id: 2323,
              name: "Primaria VOINEASA",
              county: "Olt",
            },
            {
              id: 2324,
              name: "Primaria VULPENI",
              county: "Olt",
            },
            {
              id: 2325,
              name: "Primaria VULTUREŞTI",
              county: "Olt",
            },
            {
              id: 2326,
              name: "Primaria MUNICIPIUL PLOIEŞTI",
              county: "Prahova",
            },
            {
              id: 2327,
              name: "Primaria MUNICIPIUL CÂMPINA",
              county: "Prahova",
            },
            {
              id: 2328,
              name: "Primaria ORAŞ AZUGA",
              county: "Prahova",
            },
            {
              id: 2329,
              name: "Primaria ORAŞ BĂICOI",
              county: "Prahova",
            },
            {
              id: 2330,
              name: "Primaria ORAŞ BOLDEŞTI-SCĂENI",
              county: "Prahova",
            },
            {
              id: 2331,
              name: "Primaria ORAŞ BREAZA",
              county: "Prahova",
            },
            {
              id: 2332,
              name: "Primaria ORAŞ BUŞTENI",
              county: "Prahova",
            },
            {
              id: 2333,
              name: "Primaria ORAŞ COMARNIC",
              county: "Prahova",
            },
            {
              id: 2334,
              name: "Primaria ORAŞ MIZIL",
              county: "Prahova",
            },
            {
              id: 2335,
              name: "Primaria ORAŞ PLOPENI",
              county: "Prahova",
            },
            {
              id: 2336,
              name: "Primaria ORAŞ SINAIA",
              county: "Prahova",
            },
            {
              id: 2337,
              name: "Primaria ORAŞ SLĂNIC",
              county: "Prahova",
            },
            {
              id: 2338,
              name: "Primaria ORAŞ URLAŢI",
              county: "Prahova",
            },
            {
              id: 2339,
              name: "Primaria ORAŞ VĂLENII DE MUNTE",
              county: "Prahova",
            },
            {
              id: 2340,
              name: "Primaria ADUNAŢI",
              county: "Prahova",
            },
            {
              id: 2341,
              name: "Primaria ALBEŞTI-PALEOLOGU",
              county: "Prahova",
            },
            {
              id: 2342,
              name: "Primaria ALUNIŞ",
              county: "Prahova",
            },
            {
              id: 2343,
              name: "Primaria APOSTOLACHE",
              county: "Prahova",
            },
            {
              id: 2344,
              name: "Primaria ARICEŞTII RAHTIVANI",
              county: "Prahova",
            },
            {
              id: 2345,
              name: "Primaria ARICEŞTII ZELETIN",
              county: "Prahova",
            },
            {
              id: 2346,
              name: "Primaria BABA ANA",
              county: "Prahova",
            },
            {
              id: 2347,
              name: "Primaria BALTA DOAMNEI",
              county: "Prahova",
            },
            {
              id: 2348,
              name: "Primaria BĂLŢEŞTI",
              county: "Prahova",
            },
            {
              id: 2349,
              name: "Primaria BĂNEŞTI",
              county: "Prahova",
            },
            {
              id: 2350,
              name: "Primaria BĂRCĂNEŞTI",
              county: "Prahova",
            },
            {
              id: 2351,
              name: "Primaria BĂTRÂNI",
              county: "Prahova",
            },
            {
              id: 2352,
              name: "Primaria BERCENI",
              county: "Prahova",
            },
            {
              id: 2353,
              name: "Primaria BERTEA",
              county: "Prahova",
            },
            {
              id: 2354,
              name: "Primaria BLEJOI",
              county: "Prahova",
            },
            {
              id: 2355,
              name: "Primaria BOLDEŞTI-GRADIŞTEA",
              county: "Prahova",
            },
            {
              id: 2356,
              name: "Primaria BRAZI",
              county: "Prahova",
            },
            {
              id: 2357,
              name: "Primaria BREBU",
              county: "Prahova",
            },
            {
              id: 2358,
              name: "Primaria BUCOV",
              county: "Prahova",
            },
            {
              id: 2359,
              name: "Primaria CĂLUGĂRENI",
              county: "Prahova",
            },
            {
              id: 2360,
              name: "Primaria CĂRBUNEŞTI",
              county: "Prahova",
            },
            {
              id: 2361,
              name: "Primaria CEPTURA",
              county: "Prahova",
            },
            {
              id: 2362,
              name: "Primaria CERAŞU",
              county: "Prahova",
            },
            {
              id: 2363,
              name: "Primaria CHIOJDEANCA",
              county: "Prahova",
            },
            {
              id: 2364,
              name: "Primaria CIORANI",
              county: "Prahova",
            },
            {
              id: 2365,
              name: "Primaria COCORASTII COLT",
              county: "Prahova",
            },
            {
              id: 2366,
              name: "Primaria COCORĂŞTII MISLII",
              county: "Prahova",
            },
            {
              id: 2367,
              name: "Primaria COLCEAG",
              county: "Prahova",
            },
            {
              id: 2368,
              name: "Primaria CORNU",
              county: "Prahova",
            },
            {
              id: 2369,
              name: "Primaria COSMINELE",
              county: "Prahova",
            },
            {
              id: 2370,
              name: "Primaria DRAJNA",
              county: "Prahova",
            },
            {
              id: 2371,
              name: "Primaria DRĂGĂNEŞTI",
              county: "Prahova",
            },
            {
              id: 2372,
              name: "Primaria DUMBRAVA",
              county: "Prahova",
            },
            {
              id: 2373,
              name: "Primaria DUMBRĂVEŞTI",
              county: "Prahova",
            },
            {
              id: 2374,
              name: "Primaria FÂNTÂNELE",
              county: "Prahova",
            },
            {
              id: 2375,
              name: "Primaria FILIPEŞTII DE PĂDURE",
              county: "Prahova",
            },
            {
              id: 2376,
              name: "Primaria FILIPEŞTII DE TÎRG",
              county: "Prahova",
            },
            {
              id: 2377,
              name: "Primaria FLOREŞTI",
              county: "Prahova",
            },
            {
              id: 2378,
              name: "Primaria FULGA",
              county: "Prahova",
            },
            {
              id: 2379,
              name: "Primaria GHERGHIŢA",
              county: "Prahova",
            },
            {
              id: 2380,
              name: "Primaria GORGOTA",
              county: "Prahova",
            },
            {
              id: 2381,
              name: "Primaria GORNET",
              county: "Prahova",
            },
            {
              id: 2382,
              name: "Primaria GORNET-CRICOV",
              county: "Prahova",
            },
            {
              id: 2383,
              name: "Primaria GURA VADULUI",
              county: "Prahova",
            },
            {
              id: 2384,
              name: "Primaria GURA VITIOAREI",
              county: "Prahova",
            },
            {
              id: 2385,
              name: "Primaria IORDĂCHEANU",
              county: "Prahova",
            },
            {
              id: 2386,
              name: "Primaria IZVOARELE",
              county: "Prahova",
            },
            {
              id: 2387,
              name: "Primaria JUGURENI",
              county: "Prahova",
            },
            {
              id: 2388,
              name: "Primaria LAPOŞ",
              county: "Prahova",
            },
            {
              id: 2389,
              name: "Primaria LIPĂNEŞTI",
              county: "Prahova",
            },
            {
              id: 2390,
              name: "Primaria MĂGURELE",
              county: "Prahova",
            },
            {
              id: 2391,
              name: "Primaria MĂGURENI",
              county: "Prahova",
            },
            {
              id: 2392,
              name: "Primaria MĂNECIU",
              county: "Prahova",
            },
            {
              id: 2393,
              name: "Primaria MĂNEŞTI",
              county: "Prahova",
            },
            {
              id: 2394,
              name: "Primaria OLARI",
              county: "Prahova",
            },
            {
              id: 2395,
              name: "Primaria PĂCUREŢI",
              county: "Prahova",
            },
            {
              id: 2396,
              name: "Primaria PĂULEŞTI",
              county: "Prahova",
            },
            {
              id: 2397,
              name: "Primaria PLOPU",
              county: "Prahova",
            },
            {
              id: 2398,
              name: "Primaria PODENII NOI",
              county: "Prahova",
            },
            {
              id: 2399,
              name: "Primaria POIANA CÂMPINA",
              county: "Prahova",
            },
            {
              id: 2400,
              name: "Primaria POIENARII BURCHII",
              county: "Prahova",
            },
            {
              id: 2401,
              name: "Primaria POSEŞTI",
              county: "Prahova",
            },
            {
              id: 2402,
              name: "Primaria PREDEAL-SĂRARI",
              county: "Prahova",
            },
            {
              id: 2403,
              name: "Primaria PROVIŢA DE JOS",
              county: "Prahova",
            },
            {
              id: 2404,
              name: "Primaria PROVIŢA DE SUS",
              county: "Prahova",
            },
            {
              id: 2405,
              name: "Primaria PUCHENII MARI",
              county: "Prahova",
            },
            {
              id: 2406,
              name: "Primaria RÎFOV",
              county: "Prahova",
            },
            {
              id: 2407,
              name: "Primaria SALCIA",
              county: "Prahova",
            },
            {
              id: 2408,
              name: "Primaria SĂLCIILE",
              county: "Prahova",
            },
            {
              id: 2409,
              name: "Primaria SCORŢENI",
              county: "Prahova",
            },
            {
              id: 2410,
              name: "Primaria SECĂRIA",
              county: "Prahova",
            },
            {
              id: 2411,
              name: "Primaria SÎNGERU",
              county: "Prahova",
            },
            {
              id: 2412,
              name: "Primaria STARCHIOJD",
              county: "Prahova",
            },
            {
              id: 2413,
              name: "Primaria SURANI",
              county: "Prahova",
            },
            {
              id: 2414,
              name: "Primaria ŞIRNA",
              county: "Prahova",
            },
            {
              id: 2415,
              name: "Primaria ŞOIMARI",
              county: "Prahova",
            },
            {
              id: 2416,
              name: "Primaria ŞOTRILE",
              county: "Prahova",
            },
            {
              id: 2417,
              name: "Primaria ŞTEFEŞTI",
              county: "Prahova",
            },
            {
              id: 2418,
              name: "Primaria TALEA",
              county: "Prahova",
            },
            {
              id: 2419,
              name: "Primaria TĂTARU",
              county: "Prahova",
            },
            {
              id: 2420,
              name: "Primaria TEIŞANI",
              county: "Prahova",
            },
            {
              id: 2421,
              name: "Primaria TELEGA",
              county: "Prahova",
            },
            {
              id: 2422,
              name: "Primaria TINOSU",
              county: "Prahova",
            },
            {
              id: 2423,
              name: "Primaria TÎRGŞORU VECHI",
              county: "Prahova",
            },
            {
              id: 2424,
              name: "Primaria TOMŞANI",
              county: "Prahova",
            },
            {
              id: 2425,
              name: "Primaria VADU SĂPAT",
              county: "Prahova",
            },
            {
              id: 2426,
              name: "Primaria VALEA CĂLUGĂREASCĂ",
              county: "Prahova",
            },
            {
              id: 2427,
              name: "Primaria VALEA DOFTANEI",
              county: "Prahova",
            },
            {
              id: 2428,
              name: "Primaria VĂRBILĂU",
              county: "Prahova",
            },
            {
              id: 2429,
              name: "Primaria VÎLCĂNEŞTI",
              county: "Prahova",
            },
            {
              id: 2430,
              name: "Primaria MUNICIPIUL SATU MARE",
              county: "Satu Mare",
            },
            {
              id: 2431,
              name: "Primaria MUNICIPIUL CAREI",
              county: "Satu Mare",
            },
            {
              id: 2432,
              name: "Primaria ORAŞ ARDUD",
              county: "Satu Mare",
            },
            {
              id: 2433,
              name: "Primaria ORAŞ LIVADA",
              county: "Satu Mare",
            },
            {
              id: 2434,
              name: "Primaria ORAŞ NEGREŞTI-OAŞ",
              county: "Satu Mare",
            },
            {
              id: 2435,
              name: "Primaria ORAŞ TĂŞNAD",
              county: "Satu Mare",
            },
            {
              id: 2436,
              name: "Primaria ACÎŞ",
              county: "Satu Mare",
            },
            {
              id: 2437,
              name: "Primaria AGRIŞ",
              county: "Satu Mare",
            },
            {
              id: 2438,
              name: "Primaria ANDRID",
              county: "Satu Mare",
            },
            {
              id: 2439,
              name: "Primaria APA",
              county: "Satu Mare",
            },
            {
              id: 2440,
              name: "Primaria BĂTARCI",
              county: "Satu Mare",
            },
            {
              id: 2441,
              name: "Primaria BELTIUG",
              county: "Satu Mare",
            },
            {
              id: 2442,
              name: "Primaria BERVENI",
              county: "Satu Mare",
            },
            {
              id: 2443,
              name: "Primaria BIXAD",
              county: "Satu Mare",
            },
            {
              id: 2444,
              name: "Primaria BÎRSĂU",
              county: "Satu Mare",
            },
            {
              id: 2445,
              name: "Primaria BOGDAND",
              county: "Satu Mare",
            },
            {
              id: 2446,
              name: "Primaria BOTIZ",
              county: "Satu Mare",
            },
            {
              id: 2447,
              name: "Primaria CĂLINEŞTI-OAŞ",
              county: "Satu Mare",
            },
            {
              id: 2448,
              name: "Primaria CĂMĂRZANA",
              county: "Satu Mare",
            },
            {
              id: 2449,
              name: "Primaria CĂMIN",
              county: "Satu Mare",
            },
            {
              id: 2450,
              name: "Primaria CĂPLENI",
              county: "Satu Mare",
            },
            {
              id: 2451,
              name: "Primaria CĂUAŞ",
              county: "Satu Mare",
            },
            {
              id: 2452,
              name: "Primaria CEHAL",
              county: "Satu Mare",
            },
            {
              id: 2453,
              name: "Primaria CERTEZE",
              county: "Satu Mare",
            },
            {
              id: 2454,
              name: "Primaria CIUMEŞTI",
              county: "Satu Mare",
            },
            {
              id: 2455,
              name: "Primaria CRAIDOROLŢ",
              county: "Satu Mare",
            },
            {
              id: 2456,
              name: "Primaria CRUCIŞOR",
              county: "Satu Mare",
            },
            {
              id: 2457,
              name: "Primaria CULCIU",
              county: "Satu Mare",
            },
            {
              id: 2458,
              name: "Primaria DOBA",
              county: "Satu Mare",
            },
            {
              id: 2459,
              name: "Primaria DOROLŢ",
              county: "Satu Mare",
            },
            {
              id: 2460,
              name: "Primaria FOIENI",
              county: "Satu Mare",
            },
            {
              id: 2461,
              name: "Primaria GHERŢA MICĂ",
              county: "Satu Mare",
            },
            {
              id: 2462,
              name: "Primaria HALMEU",
              county: "Satu Mare",
            },
            {
              id: 2463,
              name: "Primaria HODOD",
              county: "Satu Mare",
            },
            {
              id: 2464,
              name: "Primaria HOMOROADE",
              county: "Satu Mare",
            },
            {
              id: 2465,
              name: "Primaria LAZURI",
              county: "Satu Mare",
            },
            {
              id: 2466,
              name: "Primaria MEDIEŞU AURIT",
              county: "Satu Mare",
            },
            {
              id: 2467,
              name: "Primaria MICULA",
              county: "Satu Mare",
            },
            {
              id: 2468,
              name: "Primaria MOFTIN",
              county: "Satu Mare",
            },
            {
              id: 2469,
              name: "Primaria ODOREU",
              county: "Satu Mare",
            },
            {
              id: 2470,
              name: "Primaria ORAŞU NOU",
              county: "Satu Mare",
            },
            {
              id: 2471,
              name: "Primaria PĂULEŞTI",
              county: "Satu Mare",
            },
            {
              id: 2472,
              name: "Primaria PETREŞTI",
              county: "Satu Mare",
            },
            {
              id: 2473,
              name: "Primaria PIR",
              county: "Satu Mare",
            },
            {
              id: 2474,
              name: "Primaria PIŞCOLT",
              county: "Satu Mare",
            },
            {
              id: 2475,
              name: "Primaria POMI",
              county: "Satu Mare",
            },
            {
              id: 2476,
              name: "Primaria PORUMBEŞTI",
              county: "Satu Mare",
            },
            {
              id: 2477,
              name: "Primaria RACŞA",
              county: "Satu Mare",
            },
            {
              id: 2478,
              name: "Primaria SANISLĂU",
              county: "Satu Mare",
            },
            {
              id: 2479,
              name: "Primaria SANTĂU",
              county: "Satu Mare",
            },
            {
              id: 2480,
              name: "Primaria SĂCĂŞENI",
              county: "Satu Mare",
            },
            {
              id: 2481,
              name: "Primaria SĂUCA",
              county: "Satu Mare",
            },
            {
              id: 2482,
              name: "Primaria SOCOND",
              county: "Satu Mare",
            },
            {
              id: 2483,
              name: "Primaria SUPUR",
              county: "Satu Mare",
            },
            {
              id: 2484,
              name: "Primaria TARNA MARE",
              county: "Satu Mare",
            },
            {
              id: 2485,
              name: "Primaria TEREBEŞTI",
              county: "Satu Mare",
            },
            {
              id: 2486,
              name: "Primaria TIREAM",
              county: "Satu Mare",
            },
            {
              id: 2487,
              name: "Primaria TÎRŞOLŢ",
              county: "Satu Mare",
            },
            {
              id: 2488,
              name: "Primaria TURŢ",
              county: "Satu Mare",
            },
            {
              id: 2489,
              name: "Primaria TURULUNG",
              county: "Satu Mare",
            },
            {
              id: 2490,
              name: "Primaria URZICENI",
              county: "Satu Mare",
            },
            {
              id: 2491,
              name: "Primaria VALEA VINULUI",
              county: "Satu Mare",
            },
            {
              id: 2492,
              name: "Primaria VAMA",
              county: "Satu Mare",
            },
            {
              id: 2493,
              name: "Primaria VETIŞ",
              county: "Satu Mare",
            },
            {
              id: 2494,
              name: "Primaria VIILE SATU MARE",
              county: "Satu Mare",
            },
            {
              id: 2495,
              name: "Primaria MUNICIPIUL ZALĂU",
              county: "Salaj",
            },
            {
              id: 2496,
              name: "Primaria ORAŞ CEHU SILVANIEI",
              county: "Salaj",
            },
            {
              id: 2497,
              name: "Primaria ORAŞ JIBOU",
              county: "Salaj",
            },
            {
              id: 2498,
              name: "Primaria ORAŞ ŞIMLEU SILVANIEI",
              county: "Salaj",
            },
            {
              id: 2499,
              name: "Primaria AGRIJ",
              county: "Salaj",
            },
            {
              id: 2500,
              name: "Primaria ALMAŞU",
              county: "Salaj",
            },
            {
              id: 2501,
              name: "Primaria BĂBENI",
              county: "Salaj",
            },
            {
              id: 2502,
              name: "Primaria BĂLAN",
              county: "Salaj",
            },
            {
              id: 2503,
              name: "Primaria BĂNIŞOR",
              county: "Salaj",
            },
            {
              id: 2504,
              name: "Primaria BENESAT",
              county: "Salaj",
            },
            {
              id: 2505,
              name: "Primaria BOBOTA",
              county: "Salaj",
            },
            {
              id: 2506,
              name: "Primaria BOCŞA",
              county: "Salaj",
            },
            {
              id: 2507,
              name: "Primaria BOGHIŞ",
              county: "Salaj",
            },
            {
              id: 2508,
              name: "Primaria BUCIUMI",
              county: "Salaj",
            },
            {
              id: 2509,
              name: "Primaria CAMĂR",
              county: "Salaj",
            },
            {
              id: 2510,
              name: "Primaria CARASTELEC",
              county: "Salaj",
            },
            {
              id: 2511,
              name: "Primaria CHIEŞD",
              county: "Salaj",
            },
            {
              id: 2512,
              name: "Primaria CIZER",
              county: "Salaj",
            },
            {
              id: 2513,
              name: "Primaria COŞEIU",
              county: "Salaj",
            },
            {
              id: 2514,
              name: "Primaria CRASNA",
              county: "Salaj",
            },
            {
              id: 2515,
              name: "Primaria CREACA",
              county: "Salaj",
            },
            {
              id: 2516,
              name: "Primaria CRISTOLŢ",
              county: "Salaj",
            },
            {
              id: 2517,
              name: "Primaria CRIŞENI",
              county: "Salaj",
            },
            {
              id: 2518,
              name: "Primaria CUZĂPLAC",
              county: "Salaj",
            },
            {
              id: 2519,
              name: "Primaria DOBRIN",
              county: "Salaj",
            },
            {
              id: 2520,
              name: "Primaria DRAGU",
              county: "Salaj",
            },
            {
              id: 2521,
              name: "Primaria FILDU DE JOS",
              county: "Salaj",
            },
            {
              id: 2522,
              name: "Primaria GÎLGĂU",
              county: "Salaj",
            },
            {
              id: 2523,
              name: "Primaria GÎRBOU",
              county: "Salaj",
            },
            {
              id: 2524,
              name: "Primaria HALMĂŞD",
              county: "Salaj",
            },
            {
              id: 2525,
              name: "Primaria HERECLEAN",
              county: "Salaj",
            },
            {
              id: 2526,
              name: "Primaria HIDA",
              county: "Salaj",
            },
            {
              id: 2527,
              name: "Primaria HOROATU CRASNEI",
              county: "Salaj",
            },
            {
              id: 2528,
              name: "Primaria ILEANDA",
              county: "Salaj",
            },
            {
              id: 2529,
              name: "Primaria IP",
              county: "Salaj",
            },
            {
              id: 2530,
              name: "Primaria LETCA",
              county: "Salaj",
            },
            {
              id: 2531,
              name: "Primaria LOZNA",
              county: "Salaj",
            },
            {
              id: 2532,
              name: "Primaria MARCA",
              county: "Salaj",
            },
            {
              id: 2533,
              name: "Primaria MĂERIŞTE",
              county: "Salaj",
            },
            {
              id: 2534,
              name: "Primaria MESEŞENII DE JOS",
              county: "Salaj",
            },
            {
              id: 2535,
              name: "Primaria MIRŞID",
              county: "Salaj",
            },
            {
              id: 2536,
              name: "Primaria NĂPRADEA",
              county: "Salaj",
            },
            {
              id: 2537,
              name: "Primaria NUŞFALĂU",
              county: "Salaj",
            },
            {
              id: 2538,
              name: "Primaria PERICEI",
              county: "Salaj",
            },
            {
              id: 2539,
              name: "Primaria PLOPIŞ",
              county: "Salaj",
            },
            {
              id: 2540,
              name: "Primaria POIANA BLENCHII",
              county: "Salaj",
            },
            {
              id: 2541,
              name: "Primaria ROMÂNAŞI",
              county: "Salaj",
            },
            {
              id: 2542,
              name: "Primaria RUS",
              county: "Salaj",
            },
            {
              id: 2543,
              name: "Primaria SĂLĂŢIG",
              county: "Salaj",
            },
            {
              id: 2544,
              name: "Primaria SÎG",
              county: "Salaj",
            },
            {
              id: 2545,
              name: "Primaria SÎNMIHAIU ALMAŞULUI",
              county: "Salaj",
            },
            {
              id: 2546,
              name: "Primaria SOMEŞ-ODORHEI",
              county: "Salaj",
            },
            {
              id: 2547,
              name: "Primaria SURDUC",
              county: "Salaj",
            },
            {
              id: 2548,
              name: "Primaria ŞAMŞUD",
              county: "Salaj",
            },
            {
              id: 2549,
              name: "Primaria ŞĂRMĂŞAG",
              county: "Salaj",
            },
            {
              id: 2550,
              name: "Primaria ŞIMIŞNA",
              county: "Salaj",
            },
            {
              id: 2551,
              name: "Primaria TREZNEA",
              county: "Salaj",
            },
            {
              id: 2552,
              name: "Primaria VALCĂU DE JOS",
              county: "Salaj",
            },
            {
              id: 2553,
              name: "Primaria VÎRŞOLŢ",
              county: "Salaj",
            },
            {
              id: 2554,
              name: "Primaria ZALHA",
              county: "Salaj",
            },
            {
              id: 2555,
              name: "Primaria ZIMBOR",
              county: "Salaj",
            },
            {
              id: 2556,
              name: "Primaria MUNICIPIUL SIBIU",
              county: "Sibiu",
            },
            {
              id: 2557,
              name: "Primaria MUNICIPIUL MEDIAŞ",
              county: "Sibiu",
            },
            {
              id: 2558,
              name: "Primaria ORAŞ AGNITA",
              county: "Sibiu",
            },
            {
              id: 2559,
              name: "Primaria ORAŞ AVRIG",
              county: "Sibiu",
            },
            {
              id: 2560,
              name: "Primaria ORAŞ CISNĂDIE",
              county: "Sibiu",
            },
            {
              id: 2561,
              name: "Primaria ORAŞ COPŞA MICĂ",
              county: "Sibiu",
            },
            {
              id: 2562,
              name: "Primaria ORAŞ DUMBRĂVENI",
              county: "Sibiu",
            },
            {
              id: 2563,
              name: "Primaria ORAŞ MIERCUREA SIBIULUI",
              county: "Sibiu",
            },
            {
              id: 2564,
              name: "Primaria ORAŞ OCNA SIBIULUI",
              county: "Sibiu",
            },
            {
              id: 2565,
              name: "Primaria ORAŞ SĂLIŞTE",
              county: "Sibiu",
            },
            {
              id: 2566,
              name: "Primaria ORAŞ TĂLMACIU",
              county: "Sibiu",
            },
            {
              id: 2567,
              name: "Primaria ALMA",
              county: "Sibiu",
            },
            {
              id: 2568,
              name: "Primaria ALŢINA",
              county: "Sibiu",
            },
            {
              id: 2569,
              name: "Primaria APOLDU DE JOS",
              county: "Sibiu",
            },
            {
              id: 2570,
              name: "Primaria ARPAŞU DE JOS",
              county: "Sibiu",
            },
            {
              id: 2571,
              name: "Primaria AŢEL",
              county: "Sibiu",
            },
            {
              id: 2572,
              name: "Primaria AXENTE SEVER",
              county: "Sibiu",
            },
            {
              id: 2573,
              name: "Primaria BAZNA",
              county: "Sibiu",
            },
            {
              id: 2574,
              name: "Primaria BIERTAN",
              county: "Sibiu",
            },
            {
              id: 2575,
              name: "Primaria BÎRGHIŞ",
              county: "Sibiu",
            },
            {
              id: 2576,
              name: "Primaria BLĂJEL",
              county: "Sibiu",
            },
            {
              id: 2577,
              name: "Primaria BOIŢA",
              county: "Sibiu",
            },
            {
              id: 2578,
              name: "Primaria BRATEIU",
              county: "Sibiu",
            },
            {
              id: 2579,
              name: "Primaria BRĂDENI",
              county: "Sibiu",
            },
            {
              id: 2580,
              name: "Primaria BRUIU",
              county: "Sibiu",
            },
            {
              id: 2581,
              name: "Primaria CHIRPĂR",
              county: "Sibiu",
            },
            {
              id: 2582,
              name: "Primaria CÎRŢA",
              county: "Sibiu",
            },
            {
              id: 2583,
              name: "Primaria CÎRŢIŞOARA",
              county: "Sibiu",
            },
            {
              id: 2584,
              name: "Primaria CRISTIAN",
              county: "Sibiu",
            },
            {
              id: 2585,
              name: "Primaria DÎRLOS",
              county: "Sibiu",
            },
            {
              id: 2586,
              name: "Primaria GURA RÎULUI",
              county: "Sibiu",
            },
            {
              id: 2587,
              name: "Primaria HOGHILAG",
              county: "Sibiu",
            },
            {
              id: 2588,
              name: "Primaria IACOBENI",
              county: "Sibiu",
            },
            {
              id: 2589,
              name: "Primaria JINA",
              county: "Sibiu",
            },
            {
              id: 2590,
              name: "Primaria LASLEA",
              county: "Sibiu",
            },
            {
              id: 2591,
              name: "Primaria LOAMNEŞ",
              county: "Sibiu",
            },
            {
              id: 2592,
              name: "Primaria LUDOŞ",
              county: "Sibiu",
            },
            {
              id: 2593,
              name: "Primaria MARPOD",
              county: "Sibiu",
            },
            {
              id: 2594,
              name: "Primaria MERGHINDEAL",
              county: "Sibiu",
            },
            {
              id: 2595,
              name: "Primaria MICĂSASA",
              county: "Sibiu",
            },
            {
              id: 2596,
              name: "Primaria MIHĂILENI",
              county: "Sibiu",
            },
            {
              id: 2597,
              name: "Primaria MOŞNA",
              county: "Sibiu",
            },
            {
              id: 2598,
              name: "Primaria NOCRICH",
              county: "Sibiu",
            },
            {
              id: 2599,
              name: "Primaria ORLAT",
              county: "Sibiu",
            },
            {
              id: 2600,
              name: "Primaria PĂUCA",
              county: "Sibiu",
            },
            {
              id: 2601,
              name: "Primaria POIANA SIBIULUI",
              county: "Sibiu",
            },
            {
              id: 2602,
              name: "Primaria POPLACA",
              county: "Sibiu",
            },
            {
              id: 2603,
              name: "Primaria PORUMBACU DE JOS",
              county: "Sibiu",
            },
            {
              id: 2604,
              name: "Primaria RACOVIŢA",
              county: "Sibiu",
            },
            {
              id: 2605,
              name: "Primaria RĂŞINARI",
              county: "Sibiu",
            },
            {
              id: 2606,
              name: "Primaria RÎU SADULUI",
              county: "Sibiu",
            },
            {
              id: 2607,
              name: "Primaria ROŞIA",
              county: "Sibiu",
            },
            {
              id: 2608,
              name: "Primaria SADU",
              county: "Sibiu",
            },
            {
              id: 2609,
              name: "Primaria SLIMNIC",
              county: "Sibiu",
            },
            {
              id: 2610,
              name: "Primaria ŞEICA MARE",
              county: "Sibiu",
            },
            {
              id: 2611,
              name: "Primaria ŞEICA MICĂ",
              county: "Sibiu",
            },
            {
              id: 2612,
              name: "Primaria ŞELIMBĂR",
              county: "Sibiu",
            },
            {
              id: 2613,
              name: "Primaria ŞURA MARE",
              county: "Sibiu",
            },
            {
              id: 2614,
              name: "Primaria ŞURA MICĂ",
              county: "Sibiu",
            },
            {
              id: 2615,
              name: "Primaria TILIŞCA",
              county: "Sibiu",
            },
            {
              id: 2616,
              name: "Primaria TÎRNAVA",
              county: "Sibiu",
            },
            {
              id: 2617,
              name: "Primaria TURNU ROŞU",
              county: "Sibiu",
            },
            {
              id: 2618,
              name: "Primaria VALEA VIILOR",
              county: "Sibiu",
            },
            {
              id: 2619,
              name: "Primaria VURPĂR",
              county: "Sibiu",
            },
            {
              id: 2620,
              name: "Primaria MUNICIPIUL SUCEAVA",
              county: "Suceava",
            },
            {
              id: 2621,
              name: "Primaria MUNICIPIUL CÂMPULUNG MOLDOVENESC",
              county: "Suceava",
            },
            {
              id: 2622,
              name: "Primaria MUNICIPIUL FĂLTICENI",
              county: "Suceava",
            },
            {
              id: 2623,
              name: "Primaria MUNICIPIUL RĂDĂUŢI",
              county: "Suceava",
            },
            {
              id: 2624,
              name: "Primaria MUNICIPIUL VATRA DORNEI",
              county: "Suceava",
            },
            {
              id: 2625,
              name: "Primaria ORAŞ BROŞTENI",
              county: "Suceava",
            },
            {
              id: 2626,
              name: "Primaria ORAŞ CAJVANA",
              county: "Suceava",
            },
            {
              id: 2627,
              name: "Primaria ORAŞ DOLHASCA",
              county: "Suceava",
            },
            {
              id: 2628,
              name: "Primaria ORAŞ FRASIN",
              county: "Suceava",
            },
            {
              id: 2629,
              name: "Primaria ORAŞ GURA HUMORULUI",
              county: "Suceava",
            },
            {
              id: 2630,
              name: "Primaria ORAŞ LITENI",
              county: "Suceava",
            },
            {
              id: 2631,
              name: "Primaria ORAŞ MILIŞĂUŢI",
              county: "Suceava",
            },
            {
              id: 2632,
              name: "Primaria ORAŞ SALCEA",
              county: "Suceava",
            },
            {
              id: 2633,
              name: "Primaria ORAŞ SIRET",
              county: "Suceava",
            },
            {
              id: 2634,
              name: "Primaria ORAŞ SOLCA",
              county: "Suceava",
            },
            {
              id: 2635,
              name: "Primaria ORAŞ VICOVU DE SUS",
              county: "Suceava",
            },
            {
              id: 2636,
              name: "Primaria ADÂNCATA",
              county: "Suceava",
            },
            {
              id: 2637,
              name: "Primaria ARBORE",
              county: "Suceava",
            },
            {
              id: 2638,
              name: "Primaria BAIA",
              county: "Suceava",
            },
            {
              id: 2639,
              name: "Primaria BĂLĂCEANA",
              county: "Suceava",
            },
            {
              id: 2640,
              name: "Primaria BĂLCĂUŢI",
              county: "Suceava",
            },
            {
              id: 2641,
              name: "Primaria BERCHIŞEŞTI",
              county: "Suceava",
            },
            {
              id: 2642,
              name: "Primaria BILCA",
              county: "Suceava",
            },
            {
              id: 2643,
              name: "Primaria BOGDĂNEŞTI",
              county: "Suceava",
            },
            {
              id: 2644,
              name: "Primaria BOROAIA",
              county: "Suceava",
            },
            {
              id: 2645,
              name: "Primaria BOSANCI",
              county: "Suceava",
            },
            {
              id: 2646,
              name: "Primaria BOTOŞANA",
              county: "Suceava",
            },
            {
              id: 2647,
              name: "Primaria BREAZA",
              county: "Suceava",
            },
            {
              id: 2648,
              name: "Primaria BRODINA",
              county: "Suceava",
            },
            {
              id: 2649,
              name: "Primaria BUNEŞTI",
              county: "Suceava",
            },
            {
              id: 2650,
              name: "Primaria BURLA",
              county: "Suceava",
            },
            {
              id: 2651,
              name: "Primaria CACICA",
              county: "Suceava",
            },
            {
              id: 2652,
              name: "Primaria CALAFINDEŞTI",
              county: "Suceava",
            },
            {
              id: 2653,
              name: "Primaria CAPU CÂMPULUI",
              county: "Suceava",
            },
            {
              id: 2654,
              name: "Primaria CIOCĂNEŞTI",
              county: "Suceava",
            },
            {
              id: 2655,
              name: "Primaria CIPRIAN PORUMBESCU",
              county: "Suceava",
            },
            {
              id: 2656,
              name: "Primaria CÎRLIBABA",
              county: "Suceava",
            },
            {
              id: 2657,
              name: "Primaria COMĂNEŞTI",
              county: "Suceava",
            },
            {
              id: 2658,
              name: "Primaria CORNU LUNCII",
              county: "Suceava",
            },
            {
              id: 2659,
              name: "Primaria COŞNA",
              county: "Suceava",
            },
            {
              id: 2660,
              name: "Primaria CRUCEA",
              county: "Suceava",
            },
            {
              id: 2661,
              name: "Primaria DĂRMĂNEŞTI",
              county: "Suceava",
            },
            {
              id: 2662,
              name: "Primaria DOLHEŞTI",
              county: "Suceava",
            },
            {
              id: 2663,
              name: "Primaria DORNA CANDRENILOR",
              county: "Suceava",
            },
            {
              id: 2664,
              name: "Primaria DORNA-ARINI",
              county: "Suceava",
            },
            {
              id: 2665,
              name: "Primaria DORNEŞTI",
              county: "Suceava",
            },
            {
              id: 2666,
              name: "Primaria DRĂGOIEŞTI",
              county: "Suceava",
            },
            {
              id: 2667,
              name: "Primaria DRĂGUŞENI",
              county: "Suceava",
            },
            {
              id: 2668,
              name: "Primaria DUMBRĂVENI",
              county: "Suceava",
            },
            {
              id: 2669,
              name: "Primaria FÂNTÂNA MARE",
              county: "Suceava",
            },
            {
              id: 2670,
              name: "Primaria FÎNTÎNELE",
              county: "Suceava",
            },
            {
              id: 2671,
              name: "Primaria FORĂŞTI",
              county: "Suceava",
            },
            {
              id: 2672,
              name: "Primaria FRĂTĂUŢII NOI",
              county: "Suceava",
            },
            {
              id: 2673,
              name: "Primaria FRĂTĂUŢII VECHI",
              county: "Suceava",
            },
            {
              id: 2674,
              name: "Primaria FRUMOSU",
              county: "Suceava",
            },
            {
              id: 2675,
              name: "Primaria FUNDU MOLDOVEI",
              county: "Suceava",
            },
            {
              id: 2676,
              name: "Primaria GĂLĂNEŞTI",
              county: "Suceava",
            },
            {
              id: 2677,
              name: "Primaria GRĂMEŞTI",
              county: "Suceava",
            },
            {
              id: 2678,
              name: "Primaria GRĂNICEŞTI",
              county: "Suceava",
            },
            {
              id: 2679,
              name: "Primaria HĂNŢEŞTI",
              county: "Suceava",
            },
            {
              id: 2680,
              name: "Primaria HÂRTOP",
              county: "Suceava",
            },
            {
              id: 2681,
              name: "Primaria HORODNIC DE JOS",
              county: "Suceava",
            },
            {
              id: 2682,
              name: "Primaria HORODNIC DE SUS",
              county: "Suceava",
            },
            {
              id: 2683,
              name: "Primaria HORODNICENI",
              county: "Suceava",
            },
            {
              id: 2684,
              name: "Primaria IACOBENI",
              county: "Suceava",
            },
            {
              id: 2685,
              name: "Primaria IASLOVĂŢ",
              county: "Suceava",
            },
            {
              id: 2686,
              name: "Primaria ILIŞEŞTI",
              county: "Suceava",
            },
            {
              id: 2687,
              name: "Primaria IPOTEŞTI",
              county: "Suceava",
            },
            {
              id: 2688,
              name: "Primaria IZVOARELE SUCEVEI",
              county: "Suceava",
            },
            {
              id: 2689,
              name: "Primaria MARGINEA",
              county: "Suceava",
            },
            {
              id: 2690,
              name: "Primaria MĂLINI",
              county: "Suceava",
            },
            {
              id: 2691,
              name: "Primaria MĂNĂSTIREA HUMORULUI",
              county: "Suceava",
            },
            {
              id: 2692,
              name: "Primaria MITOCU DRAGOMIRNEI",
              county: "Suceava",
            },
            {
              id: 2693,
              name: "Primaria MOARA",
              county: "Suceava",
            },
            {
              id: 2694,
              name: "Primaria MOLDOVA-SULIŢA",
              county: "Suceava",
            },
            {
              id: 2695,
              name: "Primaria MOLDOVIŢA",
              county: "Suceava",
            },
            {
              id: 2696,
              name: "Primaria MUŞENIŢA",
              county: "Suceava",
            },
            {
              id: 2697,
              name: "Primaria OSTRA",
              county: "Suceava",
            },
            {
              id: 2698,
              name: "Primaria PANACI",
              county: "Suceava",
            },
            {
              id: 2699,
              name: "Primaria PĂLTINOASA",
              county: "Suceava",
            },
            {
              id: 2700,
              name: "Primaria PĂTRĂUŢI",
              county: "Suceava",
            },
            {
              id: 2701,
              name: "Primaria PÎRTEŞTII DE JOS",
              county: "Suceava",
            },
            {
              id: 2702,
              name: "Primaria POIANA STAMPEI",
              county: "Suceava",
            },
            {
              id: 2703,
              name: "Primaria POIENI-SOLCA",
              county: "Suceava",
            },
            {
              id: 2704,
              name: "Primaria POJORÎTA",
              county: "Suceava",
            },
            {
              id: 2705,
              name: "Primaria PREUTEŞTI",
              county: "Suceava",
            },
            {
              id: 2706,
              name: "Primaria PUTNA",
              county: "Suceava",
            },
            {
              id: 2707,
              name: "Primaria RĂDĂŞENI",
              county: "Suceava",
            },
            {
              id: 2708,
              name: "Primaria RÎŞCA",
              county: "Suceava",
            },
            {
              id: 2709,
              name: "Primaria SADOVA",
              county: "Suceava",
            },
            {
              id: 2710,
              name: "Primaria SATU MARE",
              county: "Suceava",
            },
            {
              id: 2711,
              name: "Primaria SIMINICEA",
              county: "Suceava",
            },
            {
              id: 2712,
              name: "Primaria SLATINA",
              county: "Suceava",
            },
            {
              id: 2713,
              name: "Primaria STRAJA",
              county: "Suceava",
            },
            {
              id: 2714,
              name: "Primaria STROIEŞTI",
              county: "Suceava",
            },
            {
              id: 2715,
              name: "Primaria STULPICANI",
              county: "Suceava",
            },
            {
              id: 2716,
              name: "Primaria SUCEVIŢA",
              county: "Suceava",
            },
            {
              id: 2717,
              name: "Primaria ŞARU DORNEI",
              county: "Suceava",
            },
            {
              id: 2718,
              name: "Primaria ŞCHEIA",
              county: "Suceava",
            },
            {
              id: 2719,
              name: "Primaria ŞERBĂUŢI",
              county: "Suceava",
            },
            {
              id: 2720,
              name: "Primaria TODIREŞTI",
              county: "Suceava",
            },
            {
              id: 2721,
              name: "Primaria UDEŞTI",
              county: "Suceava",
            },
            {
              id: 2722,
              name: "Primaria ULMA",
              county: "Suceava",
            },
            {
              id: 2723,
              name: "Primaria VADU MOLDOVEI",
              county: "Suceava",
            },
            {
              id: 2724,
              name: "Primaria VALEA MOLDOVEI",
              county: "Suceava",
            },
            {
              id: 2725,
              name: "Primaria VAMA",
              county: "Suceava",
            },
            {
              id: 2726,
              name: "Primaria VATRA MOLDOVIŢEI",
              county: "Suceava",
            },
            {
              id: 2727,
              name: "Primaria VEREŞTI",
              county: "Suceava",
            },
            {
              id: 2728,
              name: "Primaria VICOVU DE JOS",
              county: "Suceava",
            },
            {
              id: 2729,
              name: "Primaria VOITINEL",
              county: "Suceava",
            },
            {
              id: 2730,
              name: "Primaria VOLOVĂŢ",
              county: "Suceava",
            },
            {
              id: 2731,
              name: "Primaria VULTUREŞTI",
              county: "Suceava",
            },
            {
              id: 2732,
              name: "Primaria ZAMOSTEA",
              county: "Suceava",
            },
            {
              id: 2733,
              name: "Primaria ZVORIŞTEA",
              county: "Suceava",
            },
            {
              id: 2734,
              name: "Primaria MUNICIPIUL ALEXANDRIA",
              county: "Teleorman",
            },
            {
              id: 2735,
              name: "Primaria MUNICIPIUL ROŞIORI DE VEDE",
              county: "Teleorman",
            },
            {
              id: 2736,
              name: "Primaria MUNICIPIUL TURNU MAGURELE",
              county: "Teleorman",
            },
            {
              id: 2737,
              name: "Primaria ORAŞ VIDELE",
              county: "Teleorman",
            },
            {
              id: 2738,
              name: "Primaria ORAŞ ZIMNICEA",
              county: "Teleorman",
            },
            {
              id: 2739,
              name: "Primaria BALACI",
              county: "Teleorman",
            },
            {
              id: 2740,
              name: "Primaria BĂBĂIŢA",
              county: "Teleorman",
            },
            {
              id: 2741,
              name: "Primaria BECIU",
              county: "Teleorman",
            },
            {
              id: 2742,
              name: "Primaria BEUCA",
              county: "Teleorman",
            },
            {
              id: 2743,
              name: "Primaria BLEJEŞTI",
              county: "Teleorman",
            },
            {
              id: 2744,
              name: "Primaria BOGDANA",
              county: "Teleorman",
            },
            {
              id: 2745,
              name: "Primaria BOTOROAGA",
              county: "Teleorman",
            },
            {
              id: 2746,
              name: "Primaria BRAGADIRU",
              county: "Teleorman",
            },
            {
              id: 2747,
              name: "Primaria BRÎNCENI",
              county: "Teleorman",
            },
            {
              id: 2748,
              name: "Primaria BUJORENI",
              county: "Teleorman",
            },
            {
              id: 2749,
              name: "Primaria BUJORU",
              county: "Teleorman",
            },
            {
              id: 2750,
              name: "Primaria BUZESCU",
              county: "Teleorman",
            },
            {
              id: 2751,
              name: "Primaria CĂLINEŞTI",
              county: "Teleorman",
            },
            {
              id: 2752,
              name: "Primaria CĂLMĂŢUIU",
              county: "Teleorman",
            },
            {
              id: 2753,
              name: "Primaria CĂLMĂŢUIU DE SUS",
              county: "Teleorman",
            },
            {
              id: 2754,
              name: "Primaria CERVENIA",
              county: "Teleorman",
            },
            {
              id: 2755,
              name: "Primaria CIOLĂNEŞTI",
              county: "Teleorman",
            },
            {
              id: 2756,
              name: "Primaria CIUPERCENI",
              county: "Teleorman",
            },
            {
              id: 2757,
              name: "Primaria CONŢEŞTI",
              county: "Teleorman",
            },
            {
              id: 2758,
              name: "Primaria COSMEŞTI",
              county: "Teleorman",
            },
            {
              id: 2759,
              name: "Primaria CRÂNGU",
              county: "Teleorman",
            },
            {
              id: 2760,
              name: "Primaria CREVENICU",
              county: "Teleorman",
            },
            {
              id: 2761,
              name: "Primaria CRÎNGENI",
              county: "Teleorman",
            },
            {
              id: 2762,
              name: "Primaria DIDEŞTI",
              county: "Teleorman",
            },
            {
              id: 2763,
              name: "Primaria DOBROTEŞTI",
              county: "Teleorman",
            },
            {
              id: 2764,
              name: "Primaria DRACEA",
              county: "Teleorman",
            },
            {
              id: 2765,
              name: "Primaria DRĂCŞENEI",
              county: "Teleorman",
            },
            {
              id: 2766,
              name: "Primaria DRĂGĂNEŞTI DE VEDE",
              county: "Teleorman",
            },
            {
              id: 2767,
              name: "Primaria DRĂGĂNEŞTI-VLAŞCA",
              county: "Teleorman",
            },
            {
              id: 2768,
              name: "Primaria FÂNTÂNELE",
              county: "Teleorman",
            },
            {
              id: 2769,
              name: "Primaria FRĂSINET",
              county: "Teleorman",
            },
            {
              id: 2770,
              name: "Primaria FRUMOASA",
              county: "Teleorman",
            },
            {
              id: 2771,
              name: "Primaria FURCULEŞTI",
              county: "Teleorman",
            },
            {
              id: 2772,
              name: "Primaria GĂLĂTENI",
              county: "Teleorman",
            },
            {
              id: 2773,
              name: "Primaria GRATIA",
              county: "Teleorman",
            },
            {
              id: 2774,
              name: "Primaria ISLAZ",
              county: "Teleorman",
            },
            {
              id: 2775,
              name: "Primaria IZVOARELE",
              county: "Teleorman",
            },
            {
              id: 2776,
              name: "Primaria LISA",
              county: "Teleorman",
            },
            {
              id: 2777,
              name: "Primaria LIŢA",
              county: "Teleorman",
            },
            {
              id: 2778,
              name: "Primaria LUNCA",
              county: "Teleorman",
            },
            {
              id: 2779,
              name: "Primaria MAVRODIN",
              county: "Teleorman",
            },
            {
              id: 2780,
              name: "Primaria MĂGURA",
              county: "Teleorman",
            },
            {
              id: 2781,
              name: "Primaria MĂLDĂENI",
              county: "Teleorman",
            },
            {
              id: 2782,
              name: "Primaria MERENI",
              county: "Teleorman",
            },
            {
              id: 2783,
              name: "Primaria MÎRZĂNEŞTI",
              county: "Teleorman",
            },
            {
              id: 2784,
              name: "Primaria MOŞTENI",
              county: "Teleorman",
            },
            {
              id: 2785,
              name: "Primaria NANOV",
              county: "Teleorman",
            },
            {
              id: 2786,
              name: "Primaria NĂSTURELU",
              county: "Teleorman",
            },
            {
              id: 2787,
              name: "Primaria NECŞEŞTI",
              county: "Teleorman",
            },
            {
              id: 2788,
              name: "Primaria NENCIULEŞTI",
              county: "Teleorman",
            },
            {
              id: 2789,
              name: "Primaria OLTENI",
              county: "Teleorman",
            },
            {
              id: 2790,
              name: "Primaria ORBEASCA",
              county: "Teleorman",
            },
            {
              id: 2791,
              name: "Primaria PERETU",
              county: "Teleorman",
            },
            {
              id: 2792,
              name: "Primaria PIATRA",
              county: "Teleorman",
            },
            {
              id: 2793,
              name: "Primaria PIETROŞANI",
              county: "Teleorman",
            },
            {
              id: 2794,
              name: "Primaria PLOPII-SLĂVITEŞTI",
              county: "Teleorman",
            },
            {
              id: 2795,
              name: "Primaria PLOSCA",
              county: "Teleorman",
            },
            {
              id: 2796,
              name: "Primaria POENI",
              county: "Teleorman",
            },
            {
              id: 2797,
              name: "Primaria POROSCHIA",
              county: "Teleorman",
            },
            {
              id: 2798,
              name: "Primaria PURANI",
              county: "Teleorman",
            },
            {
              id: 2799,
              name: "Primaria PUTINEIU",
              county: "Teleorman",
            },
            {
              id: 2800,
              name: "Primaria RĂDOIEŞTI",
              county: "Teleorman",
            },
            {
              id: 2801,
              name: "Primaria RĂSMIREŞTI",
              county: "Teleorman",
            },
            {
              id: 2802,
              name: "Primaria SAELELE",
              county: "Teleorman",
            },
            {
              id: 2803,
              name: "Primaria SALCIA",
              county: "Teleorman",
            },
            {
              id: 2804,
              name: "Primaria SĂCENI",
              county: "Teleorman",
            },
            {
              id: 2805,
              name: "Primaria SCRIOAŞTEA",
              county: "Teleorman",
            },
            {
              id: 2806,
              name: "Primaria SCURTU MARE",
              county: "Teleorman",
            },
            {
              id: 2807,
              name: "Primaria SEACA",
              county: "Teleorman",
            },
            {
              id: 2808,
              name: "Primaria SEGARCEA-VALE",
              county: "Teleorman",
            },
            {
              id: 2809,
              name: "Primaria SFINŢEŞTI",
              county: "Teleorman",
            },
            {
              id: 2810,
              name: "Primaria SILIŞTEA",
              county: "Teleorman",
            },
            {
              id: 2811,
              name: "Primaria SILIŞTEA-GUMEŞTI",
              county: "Teleorman",
            },
            {
              id: 2812,
              name: "Primaria SÎRBENI",
              county: "Teleorman",
            },
            {
              id: 2813,
              name: "Primaria SLOBOZIA MÂNDRA",
              county: "Teleorman",
            },
            {
              id: 2814,
              name: "Primaria SMÎRDIOASA",
              county: "Teleorman",
            },
            {
              id: 2815,
              name: "Primaria STEJARU",
              county: "Teleorman",
            },
            {
              id: 2816,
              name: "Primaria SUHAIA",
              county: "Teleorman",
            },
            {
              id: 2817,
              name: "Primaria ŞTOROBĂNEASA",
              county: "Teleorman",
            },
            {
              id: 2818,
              name: "Primaria TALPA",
              county: "Teleorman",
            },
            {
              id: 2819,
              name: "Primaria TĂTĂRĂŞTII DE JOS",
              county: "Teleorman",
            },
            {
              id: 2820,
              name: "Primaria TĂTĂRĂŞTII DE SUS",
              county: "Teleorman",
            },
            {
              id: 2821,
              name: "Primaria TRAIAN",
              county: "Teleorman",
            },
            {
              id: 2822,
              name: "Primaria TRIVALEA-MOŞTENI",
              county: "Teleorman",
            },
            {
              id: 2823,
              name: "Primaria TROIANUL",
              county: "Teleorman",
            },
            {
              id: 2824,
              name: "Primaria ŢIGĂNEŞTI",
              county: "Teleorman",
            },
            {
              id: 2825,
              name: "Primaria UDA-CLOCOCIOV",
              county: "Teleorman",
            },
            {
              id: 2826,
              name: "Primaria VEDEA",
              county: "Teleorman",
            },
            {
              id: 2827,
              name: "Primaria VIIŞOARA",
              county: "Teleorman",
            },
            {
              id: 2828,
              name: "Primaria VITĂNEŞTI",
              county: "Teleorman",
            },
            {
              id: 2829,
              name: "Primaria VÎRTOAPE",
              county: "Teleorman",
            },
            {
              id: 2830,
              name: "Primaria ZÎMBREASCA",
              county: "Teleorman",
            },
            {
              id: 2831,
              name: "Primaria MUNICIPIUL TIMIŞOARA",
              county: "Timis",
            },
            {
              id: 2832,
              name: "Primaria MUNICIPIUL LUGOJ",
              county: "Timis",
            },
            {
              id: 2833,
              name: "Primaria ORAŞ BUZIAŞ",
              county: "Timis",
            },
            {
              id: 2834,
              name: "Primaria ORAŞ CIACOVA",
              county: "Timis",
            },
            {
              id: 2835,
              name: "Primaria ORAŞ DETA",
              county: "Timis",
            },
            {
              id: 2836,
              name: "Primaria ORAŞ FĂGET",
              county: "Timis",
            },
            {
              id: 2837,
              name: "Primaria ORAŞ GĂTAIA",
              county: "Timis",
            },
            {
              id: 2838,
              name: "Primaria ORAŞ JIMBOLIA",
              county: "Timis",
            },
            {
              id: 2839,
              name: "Primaria ORAŞ RECAŞ",
              county: "Timis",
            },
            {
              id: 2840,
              name: "Primaria ORAŞ SÂNNICOLAU MARE",
              county: "Timis",
            },
            {
              id: 2841,
              name: "Primaria BALINŢ",
              county: "Timis",
            },
            {
              id: 2842,
              name: "Primaria BANLOC",
              county: "Timis",
            },
            {
              id: 2843,
              name: "Primaria BARA",
              county: "Timis",
            },
            {
              id: 2844,
              name: "Primaria BEBA VECHE",
              county: "Timis",
            },
            {
              id: 2845,
              name: "Primaria BECICHERECU MIC",
              county: "Timis",
            },
            {
              id: 2846,
              name: "Primaria BELINŢ",
              county: "Timis",
            },
            {
              id: 2847,
              name: "Primaria BETHAUSEN",
              county: "Timis",
            },
            {
              id: 2848,
              name: "Primaria BILED",
              county: "Timis",
            },
            {
              id: 2849,
              name: "Primaria BIRDA",
              county: "Timis",
            },
            {
              id: 2850,
              name: "Primaria BÎRNA",
              county: "Timis",
            },
            {
              id: 2851,
              name: "Primaria BOGDA",
              county: "Timis",
            },
            {
              id: 2852,
              name: "Primaria BOLDUR",
              county: "Timis",
            },
            {
              id: 2853,
              name: "Primaria BRESTOVĂŢ",
              county: "Timis",
            },
            {
              id: 2854,
              name: "Primaria BUCOVĂŢ",
              county: "Timis",
            },
            {
              id: 2855,
              name: "Primaria CĂRPINIŞ",
              county: "Timis",
            },
            {
              id: 2856,
              name: "Primaria CENAD",
              county: "Timis",
            },
            {
              id: 2857,
              name: "Primaria CENEI",
              county: "Timis",
            },
            {
              id: 2858,
              name: "Primaria CHECEA",
              county: "Timis",
            },
            {
              id: 2859,
              name: "Primaria CHEVEREŞU MARE",
              county: "Timis",
            },
            {
              id: 2860,
              name: "Primaria COMLOŞU MARE",
              county: "Timis",
            },
            {
              id: 2861,
              name: "Primaria COŞTEIU",
              county: "Timis",
            },
            {
              id: 2862,
              name: "Primaria CRICIOVA",
              county: "Timis",
            },
            {
              id: 2863,
              name: "Primaria CURTEA",
              county: "Timis",
            },
            {
              id: 2864,
              name: "Primaria DAROVA",
              county: "Timis",
            },
            {
              id: 2865,
              name: "Primaria DENTA",
              county: "Timis",
            },
            {
              id: 2866,
              name: "Primaria DUDEŞTII NOI",
              county: "Timis",
            },
            {
              id: 2867,
              name: "Primaria DUDEŞTII VECHI",
              county: "Timis",
            },
            {
              id: 2868,
              name: "Primaria DUMBRAVA",
              county: "Timis",
            },
            {
              id: 2869,
              name: "Primaria DUMBRĂVIŢA",
              county: "Timis",
            },
            {
              id: 2870,
              name: "Primaria FIBIŞ",
              county: "Timis",
            },
            {
              id: 2871,
              name: "Primaria FÎRDEA",
              county: "Timis",
            },
            {
              id: 2872,
              name: "Primaria FOENI",
              county: "Timis",
            },
            {
              id: 2873,
              name: "Primaria GAVOJDIA",
              county: "Timis",
            },
            {
              id: 2874,
              name: "Primaria GHILAD",
              county: "Timis",
            },
            {
              id: 2875,
              name: "Primaria GHIRODA",
              county: "Timis",
            },
            {
              id: 2876,
              name: "Primaria GHIZELA",
              county: "Timis",
            },
            {
              id: 2877,
              name: "Primaria GIARMATA",
              county: "Timis",
            },
            {
              id: 2878,
              name: "Primaria GIERA",
              county: "Timis",
            },
            {
              id: 2879,
              name: "Primaria GIROC",
              county: "Timis",
            },
            {
              id: 2880,
              name: "Primaria GIULVĂZ",
              county: "Timis",
            },
            {
              id: 2881,
              name: "Primaria GOTTLOB",
              county: "Timis",
            },
            {
              id: 2882,
              name: "Primaria IECEA MARE",
              county: "Timis",
            },
            {
              id: 2883,
              name: "Primaria JAMU MARE",
              county: "Timis",
            },
            {
              id: 2884,
              name: "Primaria JEBEL",
              county: "Timis",
            },
            {
              id: 2885,
              name: "Primaria LENAUHEIM",
              county: "Timis",
            },
            {
              id: 2886,
              name: "Primaria LIEBLING",
              county: "Timis",
            },
            {
              id: 2887,
              name: "Primaria LIVEZILE",
              county: "Timis",
            },
            {
              id: 2888,
              name: "Primaria LOVRIN",
              county: "Timis",
            },
            {
              id: 2889,
              name: "Primaria MARGINA",
              county: "Timis",
            },
            {
              id: 2890,
              name: "Primaria MAŞLOC",
              county: "Timis",
            },
            {
              id: 2891,
              name: "Primaria MĂNĂŞTIUR",
              county: "Timis",
            },
            {
              id: 2892,
              name: "Primaria MORAVIŢA",
              county: "Timis",
            },
            {
              id: 2893,
              name: "Primaria MOŞNIŢA NOUĂ",
              county: "Timis",
            },
            {
              id: 2894,
              name: "Primaria NĂDRAG",
              county: "Timis",
            },
            {
              id: 2895,
              name: "Primaria NIŢCHIDORF",
              county: "Timis",
            },
            {
              id: 2896,
              name: "Primaria OHABA LUNGĂ",
              county: "Timis",
            },
            {
              id: 2897,
              name: "Primaria ORŢIŞOARA",
              county: "Timis",
            },
            {
              id: 2898,
              name: "Primaria OTELEC",
              county: "Timis",
            },
            {
              id: 2899,
              name: "Primaria PARŢA",
              county: "Timis",
            },
            {
              id: 2900,
              name: "Primaria PĂDURENI",
              county: "Timis",
            },
            {
              id: 2901,
              name: "Primaria PECIU NOU",
              county: "Timis",
            },
            {
              id: 2902,
              name: "Primaria PERIAM",
              county: "Timis",
            },
            {
              id: 2903,
              name: "Primaria PESAC",
              county: "Timis",
            },
            {
              id: 2904,
              name: "Primaria PIETROASA",
              county: "Timis",
            },
            {
              id: 2905,
              name: "Primaria PIŞCHIA",
              county: "Timis",
            },
            {
              id: 2906,
              name: "Primaria RACOVIŢA",
              county: "Timis",
            },
            {
              id: 2907,
              name: "Primaria REMETEA MARE",
              county: "Timis",
            },
            {
              id: 2908,
              name: "Primaria SACOŞU TURCESC",
              county: "Timis",
            },
            {
              id: 2909,
              name: "Primaria SARAVALE",
              county: "Timis",
            },
            {
              id: 2910,
              name: "Primaria SATCHINEZ",
              county: "Timis",
            },
            {
              id: 2911,
              name: "Primaria SĂCĂLAZ",
              county: "Timis",
            },
            {
              id: 2912,
              name: "Primaria SÂNPETRU MARE",
              county: "Timis",
            },
            {
              id: 2913,
              name: "Primaria SECAŞ",
              county: "Timis",
            },
            {
              id: 2914,
              name: "Primaria SÎNANDREI",
              county: "Timis",
            },
            {
              id: 2915,
              name: "Primaria SÎNMIHAIU ROMÂN",
              county: "Timis",
            },
            {
              id: 2916,
              name: "Primaria ŞAG",
              county: "Timis",
            },
            {
              id: 2917,
              name: "Primaria ŞANDRA",
              county: "Timis",
            },
            {
              id: 2918,
              name: "Primaria ŞTIUCA",
              county: "Timis",
            },
            {
              id: 2919,
              name: "Primaria TEREMIA MARE",
              county: "Timis",
            },
            {
              id: 2920,
              name: "Primaria TOMEŞTI",
              county: "Timis",
            },
            {
              id: 2921,
              name: "Primaria TOMNATIC",
              county: "Timis",
            },
            {
              id: 2922,
              name: "Primaria TOPOLOVĂŢU MARE",
              county: "Timis",
            },
            {
              id: 2923,
              name: "Primaria TORMAC",
              county: "Timis",
            },
            {
              id: 2924,
              name: "Primaria TRAIAN VUIA",
              county: "Timis",
            },
            {
              id: 2925,
              name: "Primaria UIVAR",
              county: "Timis",
            },
            {
              id: 2926,
              name: "Primaria VARIAŞ",
              county: "Timis",
            },
            {
              id: 2927,
              name: "Primaria VĂLCANI",
              county: "Timis",
            },
            {
              id: 2928,
              name: "Primaria VICTOR VLAD DELAMARINA",
              county: "Timis",
            },
            {
              id: 2929,
              name: "Primaria VOITEG",
              county: "Timis",
            },
            {
              id: 2930,
              name: "Primaria MUNICIPIUL TULCEA",
              county: "Tulcea",
            },
            {
              id: 2931,
              name: "Primaria ORAŞ BABADAG",
              county: "Tulcea",
            },
            {
              id: 2932,
              name: "Primaria ORAŞ ISACCEA",
              county: "Tulcea",
            },
            {
              id: 2933,
              name: "Primaria ORAŞ MĂCIN",
              county: "Tulcea",
            },
            {
              id: 2934,
              name: "Primaria ORAŞ SULINA",
              county: "Tulcea",
            },
            {
              id: 2935,
              name: "Primaria BAIA",
              county: "Tulcea",
            },
            {
              id: 2936,
              name: "Primaria BEIDAUD",
              county: "Tulcea",
            },
            {
              id: 2937,
              name: "Primaria BEŞTEPE",
              county: "Tulcea",
            },
            {
              id: 2938,
              name: "Primaria C.A. ROSETTI",
              county: "Tulcea",
            },
            {
              id: 2939,
              name: "Primaria CARCALIU",
              county: "Tulcea",
            },
            {
              id: 2940,
              name: "Primaria CASIMCEA",
              county: "Tulcea",
            },
            {
              id: 2941,
              name: "Primaria CEAMURLIA DE JOS",
              county: "Tulcea",
            },
            {
              id: 2942,
              name: "Primaria CEATALCHIOI",
              county: "Tulcea",
            },
            {
              id: 2943,
              name: "Primaria CERNA",
              county: "Tulcea",
            },
            {
              id: 2944,
              name: "Primaria CHILIA VECHE",
              county: "Tulcea",
            },
            {
              id: 2945,
              name: "Primaria CIUCUROVA",
              county: "Tulcea",
            },
            {
              id: 2946,
              name: "Primaria CRIŞAN",
              county: "Tulcea",
            },
            {
              id: 2947,
              name: "Primaria DĂENI",
              county: "Tulcea",
            },
            {
              id: 2948,
              name: "Primaria DOROBANŢU",
              county: "Tulcea",
            },
            {
              id: 2949,
              name: "Primaria FRECĂŢEI",
              county: "Tulcea",
            },
            {
              id: 2950,
              name: "Primaria GRECI",
              county: "Tulcea",
            },
            {
              id: 2951,
              name: "Primaria GRINDU",
              county: "Tulcea",
            },
            {
              id: 2952,
              name: "Primaria HAMCEARCA",
              county: "Tulcea",
            },
            {
              id: 2953,
              name: "Primaria HORIA",
              county: "Tulcea",
            },
            {
              id: 2954,
              name: "Primaria I.C.BRĂTIANU",
              county: "Tulcea",
            },
            {
              id: 2955,
              name: "Primaria IZVOARELE",
              county: "Tulcea",
            },
            {
              id: 2956,
              name: "Primaria JIJILA",
              county: "Tulcea",
            },
            {
              id: 2957,
              name: "Primaria JURILOVCA",
              county: "Tulcea",
            },
            {
              id: 2958,
              name: "Primaria LUNCAVIŢA",
              county: "Tulcea",
            },
            {
              id: 2959,
              name: "Primaria MAHMUDIA",
              county: "Tulcea",
            },
            {
              id: 2960,
              name: "Primaria MALIUC",
              county: "Tulcea",
            },
            {
              id: 2961,
              name: "Primaria MIHAI BRAVU",
              county: "Tulcea",
            },
            {
              id: 2962,
              name: "Primaria MIHAIL KOGĂLNICEANU",
              county: "Tulcea",
            },
            {
              id: 2963,
              name: "Primaria MURIGHIOL",
              county: "Tulcea",
            },
            {
              id: 2964,
              name: "Primaria NALBANT",
              county: "Tulcea",
            },
            {
              id: 2965,
              name: "Primaria NICULIŢEL",
              county: "Tulcea",
            },
            {
              id: 2966,
              name: "Primaria NUFĂRU",
              county: "Tulcea",
            },
            {
              id: 2967,
              name: "Primaria OSTROV",
              county: "Tulcea",
            },
            {
              id: 2968,
              name: "Primaria PARDINA",
              county: "Tulcea",
            },
            {
              id: 2969,
              name: "Primaria PECENEAGA",
              county: "Tulcea",
            },
            {
              id: 2970,
              name: "Primaria SARICHIOI",
              county: "Tulcea",
            },
            {
              id: 2971,
              name: "Primaria SFÎNTU GHEORGHE",
              county: "Tulcea",
            },
            {
              id: 2972,
              name: "Primaria SLAVA CERCHEZĂ",
              county: "Tulcea",
            },
            {
              id: 2973,
              name: "Primaria SMÎRDAN",
              county: "Tulcea",
            },
            {
              id: 2974,
              name: "Primaria SOMOVA",
              county: "Tulcea",
            },
            {
              id: 2975,
              name: "Primaria STEJARU",
              county: "Tulcea",
            },
            {
              id: 2976,
              name: "Primaria TOPOLOG",
              county: "Tulcea",
            },
            {
              id: 2977,
              name: "Primaria TURCOAIA",
              county: "Tulcea",
            },
            {
              id: 2978,
              name: "Primaria VALEA NUCARILOR",
              county: "Tulcea",
            },
            {
              id: 2979,
              name: "Primaria VALEA TEILOR",
              county: "Tulcea",
            },
            {
              id: 2980,
              name: "Primaria VĂCĂRENI",
              county: "Tulcea",
            },
            {
              id: 2981,
              name: "Primaria MUNICIPIUL VASLUI",
              county: "Vaslui",
            },
            {
              id: 2982,
              name: "Primaria MUNICIPIUL BÎRLAD",
              county: "Vaslui",
            },
            {
              id: 2983,
              name: "Primaria MUNICIPIUL HUŞI",
              county: "Vaslui",
            },
            {
              id: 2984,
              name: "Primaria ORAŞ MURGENI",
              county: "Vaslui",
            },
            {
              id: 2985,
              name: "Primaria ORAŞ NEGREŞTI",
              county: "Vaslui",
            },
            {
              id: 2986,
              name: "Primaria ALBEŞTI",
              county: "Vaslui",
            },
            {
              id: 2987,
              name: "Primaria ALEXANDRU VLAHUŢĂ",
              county: "Vaslui",
            },
            {
              id: 2988,
              name: "Primaria ARSURA",
              county: "Vaslui",
            },
            {
              id: 2989,
              name: "Primaria BANCA",
              county: "Vaslui",
            },
            {
              id: 2990,
              name: "Primaria BĂCANI",
              county: "Vaslui",
            },
            {
              id: 2991,
              name: "Primaria BĂCEŞTI",
              county: "Vaslui",
            },
            {
              id: 2992,
              name: "Primaria BĂLTENI",
              county: "Vaslui",
            },
            {
              id: 2993,
              name: "Primaria BEREZENI",
              county: "Vaslui",
            },
            {
              id: 2994,
              name: "Primaria BLĂGEŞTI",
              county: "Vaslui",
            },
            {
              id: 2995,
              name: "Primaria BOGDANA",
              county: "Vaslui",
            },
            {
              id: 2996,
              name: "Primaria BOGDĂNEŞTI",
              county: "Vaslui",
            },
            {
              id: 2997,
              name: "Primaria BOGDĂNIŢA",
              county: "Vaslui",
            },
            {
              id: 2998,
              name: "Primaria BOŢEŞTI",
              county: "Vaslui",
            },
            {
              id: 2999,
              name: "Primaria BUNEŞTI-AVEREŞTI",
              county: "Vaslui",
            },
            {
              id: 3000,
              name: "Primaria CIOCANI",
              county: "Vaslui",
            },
            {
              id: 3001,
              name: "Primaria CODĂEŞTI",
              county: "Vaslui",
            },
            {
              id: 3002,
              name: "Primaria COROIEŞTI",
              county: "Vaslui",
            },
            {
              id: 3003,
              name: "Primaria COSTEŞTI",
              county: "Vaslui",
            },
            {
              id: 3004,
              name: "Primaria COZMEŞTI",
              county: "Vaslui",
            },
            {
              id: 3005,
              name: "Primaria CREŢEŞTI",
              county: "Vaslui",
            },
            {
              id: 3006,
              name: "Primaria DĂNEŞTI",
              county: "Vaslui",
            },
            {
              id: 3007,
              name: "Primaria DELENI",
              county: "Vaslui",
            },
            {
              id: 3008,
              name: "Primaria DELEŞTI",
              county: "Vaslui",
            },
            {
              id: 3009,
              name: "Primaria DIMITRIE CANTEMIR",
              county: "Vaslui",
            },
            {
              id: 3010,
              name: "Primaria DODEŞTI",
              county: "Vaslui",
            },
            {
              id: 3011,
              name: "Primaria DRAGOMIREŞTI",
              county: "Vaslui",
            },
            {
              id: 3012,
              name: "Primaria DRÎNCENI",
              county: "Vaslui",
            },
            {
              id: 3013,
              name: "Primaria DUDA-EPURENI",
              county: "Vaslui",
            },
            {
              id: 3014,
              name: "Primaria DUMEŞTI",
              county: "Vaslui",
            },
            {
              id: 3015,
              name: "Primaria EPURENI",
              county: "Vaslui",
            },
            {
              id: 3016,
              name: "Primaria FĂLCIU",
              county: "Vaslui",
            },
            {
              id: 3017,
              name: "Primaria FEREŞTI",
              county: "Vaslui",
            },
            {
              id: 3018,
              name: "Primaria FRUNTIŞENI",
              county: "Vaslui",
            },
            {
              id: 3019,
              name: "Primaria GĂGEŞTI",
              county: "Vaslui",
            },
            {
              id: 3020,
              name: "Primaria GHERGHEŞTI",
              county: "Vaslui",
            },
            {
              id: 3021,
              name: "Primaria GÎRCENI",
              county: "Vaslui",
            },
            {
              id: 3022,
              name: "Primaria GRIVIŢA",
              county: "Vaslui",
            },
            {
              id: 3023,
              name: "Primaria HOCENI",
              county: "Vaslui",
            },
            {
              id: 3024,
              name: "Primaria IANA",
              county: "Vaslui",
            },
            {
              id: 3025,
              name: "Primaria IBĂNEŞTI",
              county: "Vaslui",
            },
            {
              id: 3026,
              name: "Primaria IVĂNEŞTI",
              county: "Vaslui",
            },
            {
              id: 3027,
              name: "Primaria IVEŞTI",
              county: "Vaslui",
            },
            {
              id: 3028,
              name: "Primaria LAZA",
              county: "Vaslui",
            },
            {
              id: 3029,
              name: "Primaria LIPOVĂŢ",
              county: "Vaslui",
            },
            {
              id: 3030,
              name: "Primaria LUNCA BANULUI",
              county: "Vaslui",
            },
            {
              id: 3031,
              name: "Primaria MĂLUŞTENI",
              county: "Vaslui",
            },
            {
              id: 3032,
              name: "Primaria MICLEŞTI",
              county: "Vaslui",
            },
            {
              id: 3033,
              name: "Primaria MUNTENII DE JOS",
              county: "Vaslui",
            },
            {
              id: 3034,
              name: "Primaria MUNTENII DE SUS",
              county: "Vaslui",
            },
            {
              id: 3035,
              name: "Primaria OLTENEŞTI",
              county: "Vaslui",
            },
            {
              id: 3036,
              name: "Primaria OŞEŞTI",
              county: "Vaslui",
            },
            {
              id: 3037,
              name: "Primaria PĂDURENI",
              county: "Vaslui",
            },
            {
              id: 3038,
              name: "Primaria PERIENI",
              county: "Vaslui",
            },
            {
              id: 3039,
              name: "Primaria POCHIDIA",
              county: "Vaslui",
            },
            {
              id: 3040,
              name: "Primaria POGANA",
              county: "Vaslui",
            },
            {
              id: 3041,
              name: "Primaria POGONEŞTI",
              county: "Vaslui",
            },
            {
              id: 3042,
              name: "Primaria POIENEŞTI",
              county: "Vaslui",
            },
            {
              id: 3043,
              name: "Primaria PUIEŞTI",
              county: "Vaslui",
            },
            {
              id: 3044,
              name: "Primaria PUNGEŞTI",
              county: "Vaslui",
            },
            {
              id: 3045,
              name: "Primaria PUŞCAŞI",
              county: "Vaslui",
            },
            {
              id: 3046,
              name: "Primaria RAFAILA",
              county: "Vaslui",
            },
            {
              id: 3047,
              name: "Primaria REBRICEA",
              county: "Vaslui",
            },
            {
              id: 3048,
              name: "Primaria ROŞIEŞTI",
              county: "Vaslui",
            },
            {
              id: 3049,
              name: "Primaria SOLEŞTI",
              county: "Vaslui",
            },
            {
              id: 3050,
              name: "Primaria STĂNILEŞTI",
              county: "Vaslui",
            },
            {
              id: 3051,
              name: "Primaria ŞTEFAN CEL MARE",
              county: "Vaslui",
            },
            {
              id: 3052,
              name: "Primaria ŞULETEA",
              county: "Vaslui",
            },
            {
              id: 3053,
              name: "Primaria TANACU",
              county: "Vaslui",
            },
            {
              id: 3054,
              name: "Primaria TĂCUTA",
              county: "Vaslui",
            },
            {
              id: 3055,
              name: "Primaria TĂTĂRĂNI",
              county: "Vaslui",
            },
            {
              id: 3056,
              name: "Primaria TODIREŞTI",
              county: "Vaslui",
            },
            {
              id: 3057,
              name: "Primaria TUTOVA",
              county: "Vaslui",
            },
            {
              id: 3058,
              name: "Primaria VĂLENI",
              county: "Vaslui",
            },
            {
              id: 3059,
              name: "Primaria VETRIŞOAIA",
              county: "Vaslui",
            },
            {
              id: 3060,
              name: "Primaria VIIŞOARA",
              county: "Vaslui",
            },
            {
              id: 3061,
              name: "Primaria VINDEREI",
              county: "Vaslui",
            },
            {
              id: 3062,
              name: "Primaria VOINEŞTI",
              county: "Vaslui",
            },
            {
              id: 3063,
              name: "Primaria VULTUREŞTI",
              county: "Vaslui",
            },
            {
              id: 3064,
              name: "Primaria VUTCANI",
              county: "Vaslui",
            },
            {
              id: 3065,
              name: "Primaria ZĂPODENI",
              county: "Vaslui",
            },
            {
              id: 3066,
              name: "Primaria ZORLENI",
              county: "Vaslui",
            },
            {
              id: 3067,
              name: "Primaria MUNICIPIUL RÂMNICU VÂLCEA",
              county: "Valcea",
            },
            {
              id: 3068,
              name: "Primaria MUNICIPIUL DRĂGĂŞANI",
              county: "Valcea",
            },
            {
              id: 3069,
              name: "Primaria ORAŞ BĂBENI",
              county: "Valcea",
            },
            {
              id: 3070,
              name: "Primaria ORAŞ BĂILE GOVORA",
              county: "Valcea",
            },
            {
              id: 3071,
              name: "Primaria ORAŞ BĂILE OLĂNEŞTI",
              county: "Valcea",
            },
            {
              id: 3072,
              name: "Primaria ORAŞ BĂLCEŞTI",
              county: "Valcea",
            },
            {
              id: 3073,
              name: "Primaria ORAŞ BERBEŞTI",
              county: "Valcea",
            },
            {
              id: 3074,
              name: "Primaria ORAŞ BREZOI",
              county: "Valcea",
            },
            {
              id: 3075,
              name: "Primaria ORAŞ CĂLIMĂNEŞTI",
              county: "Valcea",
            },
            {
              id: 3076,
              name: "Primaria ORAŞ HOREZU",
              county: "Valcea",
            },
            {
              id: 3077,
              name: "Primaria ORAŞ OCNELE MARI",
              county: "Valcea",
            },
            {
              id: 3078,
              name: "Primaria ALUNU",
              county: "Valcea",
            },
            {
              id: 3079,
              name: "Primaria AMĂRĂŞTI",
              county: "Valcea",
            },
            {
              id: 3080,
              name: "Primaria BĂRBĂTEŞTI",
              county: "Valcea",
            },
            {
              id: 3081,
              name: "Primaria BERISLĂVEŞTI",
              county: "Valcea",
            },
            {
              id: 3082,
              name: "Primaria BOIŞOARA",
              county: "Valcea",
            },
            {
              id: 3083,
              name: "Primaria BUDEŞTI",
              county: "Valcea",
            },
            {
              id: 3084,
              name: "Primaria BUJORENI",
              county: "Valcea",
            },
            {
              id: 3085,
              name: "Primaria BUNEŞTI",
              county: "Valcea",
            },
            {
              id: 3086,
              name: "Primaria CERNIŞOARA",
              county: "Valcea",
            },
            {
              id: 3087,
              name: "Primaria CÎINENI",
              county: "Valcea",
            },
            {
              id: 3088,
              name: "Primaria COPĂCENI",
              county: "Valcea",
            },
            {
              id: 3089,
              name: "Primaria COSTEŞTI",
              county: "Valcea",
            },
            {
              id: 3090,
              name: "Primaria CREŢENI",
              county: "Valcea",
            },
            {
              id: 3091,
              name: "Primaria DĂEŞTI",
              county: "Valcea",
            },
            {
              id: 3092,
              name: "Primaria DĂNICEI",
              county: "Valcea",
            },
            {
              id: 3093,
              name: "Primaria DICULEŞTI",
              county: "Valcea",
            },
            {
              id: 3094,
              name: "Primaria DRĂGOEŞTI",
              county: "Valcea",
            },
            {
              id: 3095,
              name: "Primaria FĂUREŞTI",
              county: "Valcea",
            },
            {
              id: 3096,
              name: "Primaria FÎRTĂŢEŞTI",
              county: "Valcea",
            },
            {
              id: 3097,
              name: "Primaria FRÎNCEŞTI",
              county: "Valcea",
            },
            {
              id: 3098,
              name: "Primaria GALICEA",
              county: "Valcea",
            },
            {
              id: 3099,
              name: "Primaria GHIOROIU",
              county: "Valcea",
            },
            {
              id: 3100,
              name: "Primaria GLĂVILE",
              county: "Valcea",
            },
            {
              id: 3101,
              name: "Primaria GOLEŞTI",
              county: "Valcea",
            },
            {
              id: 3102,
              name: "Primaria GRĂDIŞTEA",
              county: "Valcea",
            },
            {
              id: 3103,
              name: "Primaria GUŞOENI",
              county: "Valcea",
            },
            {
              id: 3104,
              name: "Primaria IONEŞTI",
              county: "Valcea",
            },
            {
              id: 3105,
              name: "Primaria LALOŞU",
              county: "Valcea",
            },
            {
              id: 3106,
              name: "Primaria LĂCUSTENI",
              county: "Valcea",
            },
            {
              id: 3107,
              name: "Primaria LĂDEŞTI",
              county: "Valcea",
            },
            {
              id: 3108,
              name: "Primaria LĂPUŞATA",
              county: "Valcea",
            },
            {
              id: 3109,
              name: "Primaria LIVEZI",
              county: "Valcea",
            },
            {
              id: 3110,
              name: "Primaria LUNGEŞTI",
              county: "Valcea",
            },
            {
              id: 3111,
              name: "Primaria MALAIA",
              county: "Valcea",
            },
            {
              id: 3112,
              name: "Primaria MATEEŞTI",
              county: "Valcea",
            },
            {
              id: 3113,
              name: "Primaria MĂCIUCA",
              county: "Valcea",
            },
            {
              id: 3114,
              name: "Primaria MĂDULARI",
              county: "Valcea",
            },
            {
              id: 3115,
              name: "Primaria MĂLDĂREŞTI",
              county: "Valcea",
            },
            {
              id: 3116,
              name: "Primaria MIHĂEŞTI",
              county: "Valcea",
            },
            {
              id: 3117,
              name: "Primaria MILCOIU",
              county: "Valcea",
            },
            {
              id: 3118,
              name: "Primaria MITROFANI",
              county: "Valcea",
            },
            {
              id: 3119,
              name: "Primaria MUEREASCA",
              county: "Valcea",
            },
            {
              id: 3120,
              name: "Primaria NICOLAE BĂLCESCU",
              county: "Valcea",
            },
            {
              id: 3121,
              name: "Primaria OLANU",
              county: "Valcea",
            },
            {
              id: 3122,
              name: "Primaria ORLEŞTI",
              county: "Valcea",
            },
            {
              id: 3123,
              name: "Primaria OTEŞANI",
              county: "Valcea",
            },
            {
              id: 3124,
              name: "Primaria PĂUSEŞTI-MĂGLAŞI",
              county: "Valcea",
            },
            {
              id: 3125,
              name: "Primaria PĂUŞEŞTI",
              county: "Valcea",
            },
            {
              id: 3126,
              name: "Primaria PERIŞANI",
              county: "Valcea",
            },
            {
              id: 3127,
              name: "Primaria PESCEANA",
              county: "Valcea",
            },
            {
              id: 3128,
              name: "Primaria PIETRARI",
              county: "Valcea",
            },
            {
              id: 3129,
              name: "Primaria POPEŞTI",
              county: "Valcea",
            },
            {
              id: 3130,
              name: "Primaria PRUNDENI",
              county: "Valcea",
            },
            {
              id: 3131,
              name: "Primaria RACOVIŢA",
              county: "Valcea",
            },
            {
              id: 3132,
              name: "Primaria ROEŞTI",
              county: "Valcea",
            },
            {
              id: 3133,
              name: "Primaria ROŞIILE",
              county: "Valcea",
            },
            {
              id: 3134,
              name: "Primaria RUNCU",
              county: "Valcea",
            },
            {
              id: 3135,
              name: "Primaria SĂLĂTRUCEL",
              county: "Valcea",
            },
            {
              id: 3136,
              name: "Primaria SCUNDU",
              county: "Valcea",
            },
            {
              id: 3137,
              name: "Primaria SINEŞTI",
              county: "Valcea",
            },
            {
              id: 3138,
              name: "Primaria SLĂTIOARA",
              county: "Valcea",
            },
            {
              id: 3139,
              name: "Primaria STĂNEŞTI",
              county: "Valcea",
            },
            {
              id: 3140,
              name: "Primaria STOENEŞTI",
              county: "Valcea",
            },
            {
              id: 3141,
              name: "Primaria STOILEŞTI",
              county: "Valcea",
            },
            {
              id: 3142,
              name: "Primaria STROEŞTI",
              county: "Valcea",
            },
            {
              id: 3143,
              name: "Primaria SUTEŞTI",
              county: "Valcea",
            },
            {
              id: 3144,
              name: "Primaria ŞIRINEASA",
              county: "Valcea",
            },
            {
              id: 3145,
              name: "Primaria ŞTEFĂNEŞTI",
              county: "Valcea",
            },
            {
              id: 3146,
              name: "Primaria ŞUŞANI",
              county: "Valcea",
            },
            {
              id: 3147,
              name: "Primaria TETOIU",
              county: "Valcea",
            },
            {
              id: 3148,
              name: "Primaria TITEŞTI",
              county: "Valcea",
            },
            {
              id: 3149,
              name: "Primaria TOMŞANI",
              county: "Valcea",
            },
            {
              id: 3150,
              name: "Primaria VAIDEENI",
              county: "Valcea",
            },
            {
              id: 3151,
              name: "Primaria VALEA MARE",
              county: "Valcea",
            },
            {
              id: 3152,
              name: "Primaria VLĂDEŞTI",
              county: "Valcea",
            },
            {
              id: 3153,
              name: "Primaria VOICEŞTI",
              county: "Valcea",
            },
            {
              id: 3154,
              name: "Primaria VOINEASA",
              county: "Valcea",
            },
            {
              id: 3155,
              name: "Primaria ZĂTRENI",
              county: "Valcea",
            },
            {
              id: 3156,
              name: "Primaria MUNICIPIUL FOCŞANI",
              county: "Vrancea",
            },
            {
              id: 3157,
              name: "Primaria MUNICIPIUL ADJUD",
              county: "Vrancea",
            },
            {
              id: 3158,
              name: "Primaria ORAŞ MĂRĂŞEŞTI",
              county: "Vrancea",
            },
            {
              id: 3159,
              name: "Primaria ORAŞ ODOBEŞTI",
              county: "Vrancea",
            },
            {
              id: 3160,
              name: "Primaria ORAŞ PANCIU",
              county: "Vrancea",
            },
            {
              id: 3161,
              name: "Primaria ANDREIAŞU DE JOS",
              county: "Vrancea",
            },
            {
              id: 3162,
              name: "Primaria BĂLEŞTI",
              county: "Vrancea",
            },
            {
              id: 3163,
              name: "Primaria BÂRSEŞTI",
              county: "Vrancea",
            },
            {
              id: 3164,
              name: "Primaria BILIEŞTI",
              county: "Vrancea",
            },
            {
              id: 3165,
              name: "Primaria BOGHEŞTI",
              county: "Vrancea",
            },
            {
              id: 3166,
              name: "Primaria BOLOTEŞTI",
              county: "Vrancea",
            },
            {
              id: 3167,
              name: "Primaria BORDEŞTI",
              county: "Vrancea",
            },
            {
              id: 3168,
              name: "Primaria BROŞTENI",
              county: "Vrancea",
            },
            {
              id: 3169,
              name: "Primaria CHIOJDENI",
              county: "Vrancea",
            },
            {
              id: 3170,
              name: "Primaria CIORĂŞTI",
              county: "Vrancea",
            },
            {
              id: 3171,
              name: "Primaria CÎMPINEANCA",
              county: "Vrancea",
            },
            {
              id: 3172,
              name: "Primaria CÎMPURI",
              county: "Vrancea",
            },
            {
              id: 3173,
              name: "Primaria CÎRLIGELE",
              county: "Vrancea",
            },
            {
              id: 3174,
              name: "Primaria CORBIŢA",
              county: "Vrancea",
            },
            {
              id: 3175,
              name: "Primaria COTEŞTI",
              county: "Vrancea",
            },
            {
              id: 3176,
              name: "Primaria DUMBRĂVENI",
              county: "Vrancea",
            },
            {
              id: 3177,
              name: "Primaria DUMITREŞTI",
              county: "Vrancea",
            },
            {
              id: 3178,
              name: "Primaria FITIONEŞTI",
              county: "Vrancea",
            },
            {
              id: 3179,
              name: "Primaria GAROAFA",
              county: "Vrancea",
            },
            {
              id: 3180,
              name: "Primaria GOLEŞTI",
              county: "Vrancea",
            },
            {
              id: 3181,
              name: "Primaria GOLOGANU",
              county: "Vrancea",
            },
            {
              id: 3182,
              name: "Primaria GUGEŞTI",
              county: "Vrancea",
            },
            {
              id: 3183,
              name: "Primaria GURA CALIŢEI",
              county: "Vrancea",
            },
            {
              id: 3184,
              name: "Primaria HOMOCEA",
              county: "Vrancea",
            },
            {
              id: 3185,
              name: "Primaria JARIŞTEA",
              county: "Vrancea",
            },
            {
              id: 3186,
              name: "Primaria JITIA",
              county: "Vrancea",
            },
            {
              id: 3187,
              name: "Primaria MĂICĂNEŞTI",
              county: "Vrancea",
            },
            {
              id: 3188,
              name: "Primaria MERA",
              county: "Vrancea",
            },
            {
              id: 3189,
              name: "Primaria MILCOVUL",
              county: "Vrancea",
            },
            {
              id: 3190,
              name: "Primaria MOVILIŢA",
              county: "Vrancea",
            },
            {
              id: 3191,
              name: "Primaria NĂNEŞTI",
              county: "Vrancea",
            },
            {
              id: 3192,
              name: "Primaria NĂRUJA",
              county: "Vrancea",
            },
            {
              id: 3193,
              name: "Primaria NEGRILEŞTI",
              county: "Vrancea",
            },
            {
              id: 3194,
              name: "Primaria NEREJU",
              county: "Vrancea",
            },
            {
              id: 3195,
              name: "Primaria NISTOREŞTI",
              county: "Vrancea",
            },
            {
              id: 3196,
              name: "Primaria OBREJIŢA",
              county: "Vrancea",
            },
            {
              id: 3197,
              name: "Primaria PALTIN",
              county: "Vrancea",
            },
            {
              id: 3198,
              name: "Primaria PĂULEŞTI",
              county: "Vrancea",
            },
            {
              id: 3199,
              name: "Primaria PĂUNEŞTI",
              county: "Vrancea",
            },
            {
              id: 3200,
              name: "Primaria PLOSCUŢENI",
              county: "Vrancea",
            },
            {
              id: 3201,
              name: "Primaria POIANA CRISTEI",
              county: "Vrancea",
            },
            {
              id: 3202,
              name: "Primaria POPEŞTI",
              county: "Vrancea",
            },
            {
              id: 3203,
              name: "Primaria PUFEŞTI",
              county: "Vrancea",
            },
            {
              id: 3204,
              name: "Primaria RĂCOASA",
              county: "Vrancea",
            },
            {
              id: 3205,
              name: "Primaria RĂSTOACA",
              county: "Vrancea",
            },
            {
              id: 3206,
              name: "Primaria REGHIU",
              county: "Vrancea",
            },
            {
              id: 3207,
              name: "Primaria RUGINEŞTI",
              county: "Vrancea",
            },
            {
              id: 3208,
              name: "Primaria SIHLEA",
              county: "Vrancea",
            },
            {
              id: 3209,
              name: "Primaria SLOBOZIA BRADULUI",
              county: "Vrancea",
            },
            {
              id: 3210,
              name: "Primaria SLOBOZIA CIORĂŞTI",
              county: "Vrancea",
            },
            {
              id: 3211,
              name: "Primaria SOVEJA",
              county: "Vrancea",
            },
            {
              id: 3212,
              name: "Primaria SPULBER",
              county: "Vrancea",
            },
            {
              id: 3213,
              name: "Primaria STRĂOANE",
              county: "Vrancea",
            },
            {
              id: 3214,
              name: "Primaria SURAIA",
              county: "Vrancea",
            },
            {
              id: 3215,
              name: "Primaria TĂNĂSOAIA",
              county: "Vrancea",
            },
            {
              id: 3216,
              name: "Primaria TĂTĂRANU",
              county: "Vrancea",
            },
            {
              id: 3217,
              name: "Primaria TÂMBOEŞTI",
              county: "Vrancea",
            },
            {
              id: 3218,
              name: "Primaria TULNICI",
              county: "Vrancea",
            },
            {
              id: 3219,
              name: "Primaria ŢIFEŞTI",
              county: "Vrancea",
            },
            {
              id: 3220,
              name: "Primaria URECHEŞTI",
              county: "Vrancea",
            },
            {
              id: 3221,
              name: "Primaria VALEA SĂRII",
              county: "Vrancea",
            },
            {
              id: 3222,
              name: "Primaria VIDRA",
              county: "Vrancea",
            },
            {
              id: 3223,
              name: "Primaria VINTILEASCA",
              county: "Vrancea",
            },
            {
              id: 3224,
              name: "Primaria VIZANTEA-LIVEZI",
              county: "Vrancea",
            },
            {
              id: 3225,
              name: "Primaria VÎNĂTORI",
              county: "Vrancea",
            },
            {
              id: 3226,
              name: "Primaria VÎRTEŞCOIU",
              county: "Vrancea",
            },
            {
              id: 3227,
              name: "Primaria VRÎNCIOAIA",
              county: "Vrancea",
            },
            {
              id: 3228,
              name: "Primaria VULTURU",
              county: "Vrancea",
            },
            {
              id: 3229,
              name: "Primaria BUCUREŞTI SECTORUL 1",
              county: "Bucuresti",
            },
            {
              id: 3230,
              name: "Primaria BUCUREŞTI SECTORUL 2",
              county: "Bucuresti",
            },
            {
              id: 3231,
              name: "Primaria BUCUREŞTI SECTORUL 3",
              county: "Bucuresti",
            },
            {
              id: 3232,
              name: "Primaria BUCUREŞTI SECTORUL 4",
              county: "Bucuresti",
            },
            {
              id: 3233,
              name: "Primaria BUCUREŞTI SECTORUL 5",
              county: "Bucuresti",
            },
            {
              id: 3234,
              name: "Primaria BUCUREŞTI SECTORUL 6",
              county: "Bucuresti",
            },
          ],
        };

        resolve(res.data);
      }, 500);
    });
  } else {
    // TODO uncomment after CORS is enabled
    return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/institutions/county')
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
