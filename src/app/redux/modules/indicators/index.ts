import {Promise} from 'es6-promise';

import {
  // IndicatorAction,
  // IndicatorState,
  // Indicator,
  IndicatorErrorAction,
  // IndicatorSuccessAction,
} from '../../../models/indicator';
import {AsyncLoaderEntry, AsyncContext, isContentLoaded} from '../../application_state';

/** Action Types */
// export const GET_REQUEST = 'indicators/GET_REQUEST';
// export const GET_SUCCESS = 'indicators/GET_SUCCESS';
export const GET_FAILURE = 'indicators/GET_FAILURE';

// /** Counter: Initial State */
// const initialState: IndicatorState = {
//   isFetching: true,
// };
//
// /** Reducer */
// export function indicatorsReducer(state = initialState, action: IndicatorAction) {
//   switch (action.type) {
//     case GET_REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true,
//       });
//
//     case GET_SUCCESS:
//       const {indicators} = action as IndicatorSuccessAction;
//       return Object.assign({}, state, {
//         isFetching: false,
//         indicators,
//       });
//
//     case GET_FAILURE:
//       // TODO vitaliel display errors...
//       const {message} = action as IndicatorErrorAction;
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

export function loadIndicatorsConfig(): AsyncLoaderEntry {
  return {
    key: 'indicators',
    promise: (context: AsyncContext) => {
      return loadIndicators(context);
    },
  };
}

/** Async Action Creator */
export function loadIndicators(context: AsyncContext) {
  const {store} = context;
  const {dispatch} = store;

  const loader = store.getState().reduxAsyncConnect.loadState.indicators;

  if (isContentLoaded(loader)) {
    return Promise.resolve(store.getState().reduxAsyncConnect.indicators);
  }

  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = {
          data: [
            {
              id: 1,
              text: "Numele instituției",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 2,
              text: "Este instituţie subordonată",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 3,
              text: "Numele instituției titular",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 4,
              text: "Adresă instituţie",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 5,
              text: "Adresa de e-mail a instituţiei şi a persoanei responsabile cu implementarea" +
              "  strategiei la nivelul instituţiei",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 6,
              text: "Telefon instituţie",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 7,
              text: "Numărul de angajaţi ai instituţiei",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 8,
              text: "Categoriile profesionale ale angajaților",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 9,
              text: "Acte normative care reglementează activităţile instituţiei",
              answerType: "string",
              maxLength: 0,
              step: 0,
            },
            {
              id: 10,
              text: "Care este numărul de sesizări privind încălcările normelor?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 11,
              text: "Care este numărul de sesizări în curs de soluţionare?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 12,
              text: "Care este numărul de sesizări soluţionate?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 13,
              text: "Care este durata procedurilor?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 14,
              text: "Care este numărul de decizii prin care s-a confirmat încălcarea normei?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 15,
              text: "Care este numărul de măsuri dispuse?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 16,
              text: "Prezentați, pe scurt, tipurile măsurilor dispuse",
              answerType: "string",
              maxLength: 0,
              step: 1,
            },
            {
              id: 17,
              text: "Care este numărul de decizii ale comisiei anulate sau modificate în instanţă?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 18,
              text: "Gradul de cunoaştere de către angajaţi a normelor",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 19,
              text: "Care este numărul de activităţi de formare privind normele de conduită?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 20,
              text: "Care este numărul de persoane care au fost instruite prin intermediul" +
              " acţiunilor de formare  profesională?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 21,
              text: "Care este numărul de măsuri administrative adoptate pentru înlăturarea" +
              " cauzelor sau  circumstanţelor care au favorizat încălcarea normelor?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 22,
              text: "Care este numărul persoane per instituţie care au săvârşit abateri disciplinare?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 23,
              text: "Care este numărul de persoane care au săvârşit în mod repetat abateri de la normele  respective?",
              answerType: "integer",
              maxLength: 0,
              step: 1,
            },
            {
              id: 24,
              text: "Care este numărul de persoane care au obligaţia depunerii declaraţiei de avere? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 25,
              text: "Care este numărul de persoane care nu au depus în termen declaraţii de avere? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 26,
              text: "Care este numărul de persoane care nu au depus declaraţii de avere?",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 27,
              text: "Care este numărul de sesizări ale ANI? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 28,
              text: "Care este numărul de decizii ANI ca urmare a sesizărilor transmise de instituţie? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 29,
              text: "Care este numărul de decizii ale ANI puse în aplicare? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 30,
              text: "Care este numărul de hotărâri ale instanţelor de judecată ca urmare a sesizărilor ANI?",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 31,
              text: "Care este numărul de măsuri administrative adoptate pentru" +
              " înlăturarea cauzelor sau circumstanţelor care au favorizat încălcarea" +
              " normelor privind declararea averilor? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 32,
              text: "Care este numărul de consultaţii oferite de persoanele responsabile" +
              " pentru implementarea prevederilor legale privind declaraţiile de avere şi declaraţiile de interese ? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 33,
              text: "Care este gradul de cunoaştere de către angajaţi a normelor privind declararea averilor? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 34,
              text: "Care este numărul de activităţi de formare privind declaraţiile de avere? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 35,
              text: "Care este numărul de persoane care au fost instruite prin" +
              " intermediul acţiunilor de formare profesională? ",
              answerType: "integer",
              maxLength: 0,
              step: 2,
            },
            {
              id: 36,
              text: "Care este numărul de cadouri primite şi înregistrate în registru? ",
              answerType: "integer",
              maxLength: 0,
              step: 3,
            },
            {
              id: 37,
              text: "Care este valoarea fiecărui cadou primit? ",
              answerType: "integer",
              maxLength: 0,
              step: 3,
            },
            {
              id: 38,
              text: "Este publicat anual inventarul pe site-ul instituţiei? ",
              answerType: "string",
              maxLength: 0,
              step: 3,
            },
            {
              id: 39,
              text: "Care este numărul de situaţii în care s-a achiziţionat cadoul? ",
              answerType: "integer",
              maxLength: 0,
              step: 3,
            },
            {
              id: 40,
              text: "Care este valoarea cadourilor achiziţionate? ",
              answerType: "integer",
              maxLength: 0,
              step: 3,
            },
            {
              id: 41,
              text: "Care este valoarea totală a cadourilor primite? ",
              answerType: "integer",
              maxLength: 0,
              step: 3,
            },
            {
              id: 42,
              text: "Care este valoarea bunurilor valorificate? ",
              answerType: "integer",
              maxLength: 0,
              step: 3,
            },
            {
              id: 43,
              text: "Care este numărul de declaraţii de abţinere? ",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 44,
              text: "Care este numărul de situaţii în care superiorul ierarhic a dispus înlocuirea" +
              " persoanei aflată în situaţia de potenţial conflict de interese? ",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 45,
              text: "Care este numărul de sesizări primite de instituţie de la terţe persoane" +
              " cu privire la existenţa unui conflict de interese? ",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 46,
              text: "Care este numărul de decizii ANI prin care s-a constatat starea de conflict de interese?",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 47,
              text: "Care este numărul de sesizări ale parchetului privind posibila săvârşire" +
              " a infracţiunii de conflicte de interese? ",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 48,
              text: "Care este numărul de rechizitorii privind săvârşirea infracţiunii de conflicte de interese?",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 49,
              text: "Care este numărul de condamnări privind săvârşirea infracţiunii de conflicte de interese?",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 50,
              text: "Care este gradul de cunoaştere de către angajaţi a normelor privind conflictul de interese?",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 51,
              text: "Care este numărul de activităţi de formare? ",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 52,
              text: "Care este numărul de persoane care au fost instruite prin intermediul" +
              " acţiunilor de formare profesională? ",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 53,
              text: "Care este numărul proceduri de achiziție analizate?",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 54,
              text: "Care este numărul de avertismente de integritate emise",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 55,
              text: "Care este numărul de conflicte de interese prevenite? ",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 56,
              text: "Care este numărul de şedinţe de consultare",
              answerType: "integer",
              maxLength: 0,
              step: 5,
            },
            {
              id: 57,
              text: "Care este numărul de angajaţi care au beneficiat de consiliere",
              answerType: "integer",
              maxLength: 0,
              step: 5,
            },
            {
              id: 58,
              text: "Care este numărul de speţe? ",
              answerType: "integer",
              maxLength: 0,
              step: 4,
            },
            {
              id: 59,
              text: "Prezentați, pe scurt, tipologiile de dileme etice ",
              answerType: "string",
              maxLength: 100,
              step: 5,
            },
            {
              id: 60,
              text: "Care este gradul de cunoaştere de către angajaţi a normelor privind" +
              " consilierul etic? (chestionar de evaluare) ",
              answerType: "integer",
              maxLength: 0,
              step: 5,
            },
            {
              id: 61,
              text: "Care este gradul de popularizare a rolului consilierului de etică? ",
              answerType: "integer",
              maxLength: 0,
              step: 5,
            },
            {
              id: 62,
              text: "Care este numărul de activităţi de formare?",
              answerType: "integer",
              maxLength: 0,
              step: 5,
            },
            {
              id: 63,
              text: "Care este numărul de persoane care au fost instruite prin intermediul" +
              " acţiunilor de formare profesională? ",
              answerType: "integer",
              maxLength: 0,
              step: 5,
            },
            {
              id: 64,
              text: "Care este numărul de persoane aflate în stare de incompatibilitate?",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 65,
              text: "Care este numărul de sesizări ale ANI formulate de către instituţie? ",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 66,
              text: "Care este numărul de sesizări primite de instituţie de la terţe persoane" +
              " cu privire la existenţa unei incompatibilităţi? ",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 67,
              text: "Care este numărul de decizii ale ANI cu privire la constatarea unor incompatibilităţi",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 68,
              text: "Care este numărul de decizii confirmate de instanță? ",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 69,
              text: "Care este numărul de măsuri administrative adoptate pentru înlăturarea" +
              " cauzelor sau circumstanţelor care au favorizat încălcarea normelor privind incompatibilităţile? ",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 70,
              text: "Care este gradul de cunoaştere de către angajaţi a normelor privind conflictul de interese? ",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 71,
              text: "Care este numărul de activităţi de formare? ",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 72,
              text: "Care este numărul de persoane care au fost instruite prin intermediul" +
              " acţiunilor de formare profesională? ",
              answerType: "integer",
              maxLength: 0,
              step: 6,
            },
            {
              id: 73,
              text: "Care este numărul de proiecte de acte normative adoptate?",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 74,
              text: "Care este numărul de anunţuri publice privind proiectele de acte normative? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 75,
              text: "Care este numărul de recomandări transmise de societatea civilă în procesul" +
              " de transparență decizională asigurat pentru inițierea, modificarea sau" +
              " completarea unor acte normative?",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 76,
              text: "Care este gradul de acceptare şi preluare al recomandărilor formulate de" +
              " societatea civilă cu privire la proiectele de acte normative supuse consultării publice? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 77,
              text: "Care este numărul de proiecte de acte normative modificate în urma procesului de consultare? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 78,
              text: "Care este numărul de propuneri, sugestii sau opinii preluate în forma finală a actului normativ? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 79,
              text: "Care este numărul de răspunsuri la propunerile, sugestiile sau opiniile nepreluate? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 80,
              text: "Care este numărul de şedinţe publice organizate la inițiativa instituției? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 81,
              text: "Care este numărul de participanţi la şedinţele publice?",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 82,
              text: "Care este numărul de cetățeni înscriși în baza de date a instituției pentru" +
              " a fi informați în legătură cu proiectele de acte normative?",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 83,
              text: "Care este numărul de organizații neguvernamentale înscrise în baza de date" +
              " a instituției pentru a fi informate în legătură cu proiectele de acte normative? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 84,
              text: "Care este numărul de ședințe publice organizate la solicitarea societății civile?",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 85,
              text: "Care este numărul de minute publicate, realizate la ședințele publice?",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 86,
              text: "Care este numărul de plângeri în justiţie privind nerespectarea prevederilor" +
              " legale de către instituţie? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 87,
              text: "Care este numărul de sancţiuni dispuse pentru încălcarea obligaţiilor legale",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 88,
              text: "Prezentați, pe scurt, tipul sancţiunilor dispuse pentru încălcarea obligaţiilor legale ",
              answerType: "string",
              maxLength: 100,
              step: 7,
            },
            {
              id: 89,
              text: "Care este numărul de activităţi de pregătire profesională a personalului" +
              " din administraţia publică? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 90,
              text: "Care este numărul de persoane care au fost instruite prin intermediul" +
              " acţiunilor de formare profesională? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 91,
              text: "Care este numărul de rapoarte anuale privind transparența decizională" +
              " disponibile pe site-ul instituției? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 92,
              text: "Care este numărul de părți interesate înscrise în Registrul Unic al" +
              " Transparenței Intereselor la nivelul Guvernului României? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 93,
              text: "Care este numărul de domenii în care s-au înscris părți interesate în" +
              " Registrului Unic al Transparenței Intereselor? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 94,
              text: "Care este numărul de utilizatori ai platformei consultare.gov.ro? ",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 95,
              text: "Care este numărul de întâlniri raportate în RUTI de către factorii de" +
              " decizie vizați de registru, din administrația publică?",
              answerType: "integer",
              maxLength: 0,
              step: 7,
            },
            {
              id: 96,
              text: "Care este numărul de seturi de date publicate în format deschis pe platforma data.gov.ro? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 97,
              text: "Care este numărul de solicitări de informaţii de interes public primite? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 98,
              text: "Care este numărul de răspunsuri comunicate în termenul legal? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 99,
              text: "Care este numărul de răspunsuri formulate cu întârziere, faţă de termenul legal? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 100,
              text: "Care este numărul de solicitări de informaţii de interes public la care nu s-a răspuns? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 101,
              text: "Care este numărul de reclamaţii administrative? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 102,
              text: "Care este numărul de reclamaţii administrative soluţionate favorabil? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 103,
              text: "Care este numărul de plângeri în instanţă? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 104,
              text: "Care este numărul de hotărâri judecătorești definitive şi irevocabile" +
              " pronunțate în favoarea petentului, ca urmare a plângerilor având ca obiect" +
              " comunicarea de informații de interes public? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 105,
              text: "Care este numărul de sancţiuni dispuse pentru încălcarea obligaţiilor legale? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 106,
              text: "Prezentați, pe scurt, tipul sancţiunilor dispuse pentru încălcarea obligaţiilor legale ",
              answerType: "string",
              maxLength: 140,
              step: 8,
            },
            {
              id: 107,
              text: "Care este numărul de activităţi de pregătire profesională a personalului din" +
              " administraţia publică? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 108,
              text: "Care este numărul de persoane care au fost instruite prin intermediul acţiunilor" +
              " de formare profesională? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 109,
              text: "care este numărul de măsuri interne luate pentru îmbunătățirea procesului de" +
              " comunicare a informațiilor de interes public? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 110,
              text: "Prezentați, pe scurt, tipul măsurilor interne luate pentru îmbunătățirea procesului" +
              " de comunicare a informațiilor de interes public ",
              answerType: "string",
              maxLength: 200,
              step: 8,
            },
            {
              id: 111,
              text: "Care este numărul de UAT-uri care au implementat Memorandumul privind creșterea" +
              " transparenței și standardizarea afișării informațiilor de interes public? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 112,
              text: "Care este numărul de instituții publice cuprinse în platforma transparență.gov.ro ?",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 113,
              text: "Există raportul de implementare a Legii nr. 544/2001 pentru ultimul an?",
              answerType: "string",
              maxLength: 0,
              step: 8,
            },
            {
              id: 114,
              text: "Care este numărul de rapoarte anuale de activitate disponibile pe site-ul instituției? ",
              answerType: "integer",
              maxLength: 0,
              step: 8,
            },
            {
              id: 115,
              text: "Care este numărul de sesizări? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 116,
              text: "Care este numărul normelor încălcate (structurate sub forma unui Compendiu)? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 117,
              text: "Prezentați, pe scurt, tipul normelor încălcate ",
              answerType: "string",
              maxLength: 200,
              step: 9,
            },
            {
              id: 118,
              text: "Care este numărul de regulamente interne armonizate cu prevederile legislative? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 119,
              text: "Care este numărul de instituţii în care există persoane special desemnate pentru" +
              " a primi sesizările avertizorilor de integritate? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 120,
              text: "Care este numărul de instituţii în care există implementat un mecanism cu privire" +
              " la protecţia avertizorilor de integritate? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 121,
              text: "Care este numărul de măsuri administrative adoptate pentru înlăturarea cauzelor" +
              " sau circumstanţelor care au favorizat încălcarea normelor, diferenţiat pe tipologii? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 122,
              text: "Care este numărul de situaţii de represalii la locul de munca",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 123,
              text: "Care este numărul de plângeri depuse in instanţă? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 124,
              text: "Care este numărul de situaţii în care au fost acordate compensaţii avertizorilor de integritate? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 125,
              text: "Care este numărul de activităţi de pregătire profesională a personalului din" +
              " administraţia publică? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 126,
              text: "Care este numărul de persoane care au fost instruite prin intermediul acţiunilor" +
              " de formare profesională? ",
              answerType: "integer",
              maxLength: 0,
              step: 9,
            },
            {
              id: 127,
              text: "Care este numărul de persoane desemnate cu repartizarea aleatorie a" +
              " cauzelor/sarcinilor de serviciu? ",
              answerType: "integer",
              maxLength: 0,
              step: 10,
            },
            {
              id: 128,
              text: "Care este numărul de nereguli apărute în sistemul de distribuire aleatorie, diferenţiat" +
              " pe tipologii? ",
              answerType: "integer",
              maxLength: 0,
              step: 10,
            },
            {
              id: 129,
              text: "Care este numărul de măsuri luate de preşedintele instanţei/conducătorul instituţiei" +
              " pentru remedierea neregulilor constatate? ",
              answerType: "integer",
              maxLength: 0,
              step: 10,
            },
            {
              id: 130,
              text: "Care este numărul de regulamente interne care prevăd procedura monitorizării" +
              " situaţiilor de pantouflage?",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 131,
              text: "Care este numărul de instituţii în care există implementat un mecanism cu privire la" +
              " monitorizarea situaţiilor de pantouflage, inclusiv prin desemnarea unor persoane cu" +
              " atribuţii speciale în acest sens? ",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 132,
              text: "Care este numărul de persoane care au desfăşurat activităţi de monitorizare şi control" +
              " cu privire la societăţi comerciale şi care au ieşit din corpul funcţionarilor publici? ",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 133,
              text: "Care este numărul de persoane care îşi desfăşoară activitatea/ dau consultanţă în cadrul" +
              " regiilor autonome, societăţilor comerciale ori în alte unităţi cu scop lucrativ din sectorul public," +
              " în termenul de 3 ani după ieşirea din corpul funcţionarilor publici (dintre acele persoane" +
              " care au interdicţie conform legii)? ",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 134,
              text: "Care este numărul de măsuri adoptate pentru remedierea situaţiilor de pantouflage? ",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 135,
              text: "Care sunt tipurile de măsuri adoptate pentru remedierea situaţiilor de pantouflage? ",
              answerType: "string",
              maxLength: 140,
              step: 11,
            },
            {
              id: 136,
              text: "Care este numărul de încălcări ale prevederilor art. 13 alin (1) constatate?",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 137,
              text: "Care este numărul de solicitări către instanţa de judecată pentru anularea contractului" +
              " de finanţare în caz de încălcare a art. 13 alin. (1)? ",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 138,
              text: "Care este numărul de sancţiuni aplicate de către instanţe?",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 139,
              text: "Care este numărul de societăţi comerciale în care îşi desfăşoară activitatea persoane" +
              " care au derulat anterior activităţi de monitorizare şi control şi care intră sub incidenţa" +
              " art. 13 alin.(1), diferenţiat pe domenii majore de activitate? ",
              answerType: "integer",
              maxLength: 0,
              step: 11,
            },
            {
              id: 140,
              text: "Care este numărul de funcţii sensibile şi funcţiile considerate ca fiind expuse la" +
              " corupţie identificate și inventariate? ",
              answerType: "integer",
              maxLength: 0,
              step: 12,
            },
            {
              id: 141,
              text: "Care este numărul de persoane cărora li s-a aplicat principiul rotației personalului? ",
              answerType: "integer",
              maxLength: 0,
              step: 12,
            },
            {
              id: 142,
              text: "Care este numărul măsuri de control adecvate şi suficiente  pentru administrarea şi" +
              " gestionarea funcţiilor sensibile? ",
              answerType: "integer",
              maxLength: 0,
              step: 12,
            },
          ],
        };

        resolve(res.data);
      }, 500);
    });
  } else {
    // TODO uncomment after CORS is enabled
    // return fetch((process.env.API_URL || 'http://localhost:8889') + '/public/data/indicators.json')
    return fetch((process.env.API_URL || 'http://localhost:8889') + '/api/v1/indicators')
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => {
              return Promise.resolve(res.data);
            });
        } else {
          return res.json()
            .then((res) => dispatch(indicatorsFailure(res)));
        }
      })
      .catch((err) => {
        console.log('main failure', err);
        dispatch(indicatorsFailure(err));
      });
  }
}

// /** Action Creator */
// export function indicatorsRequest(): IndicatorAction {
//   return {
//     type: GET_REQUEST,
//   };
// }
//
// /** Action Creator */
// export function indicatorsSuccess(indicators: Indicator[]): IndicatorSuccessAction {
//   return {
//     type: GET_SUCCESS,
//     indicators,
//   };
// }

/** Action Creator */
export function indicatorsFailure(message: any): IndicatorErrorAction {
  return {
    type: GET_FAILURE,
    message,
  };
}
