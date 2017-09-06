import {Action} from 'redux';

// export class County {
//   public nameId: string;
//
//   constructor(public id, public code, public name) {
//     this.nameId = name.toLowerCase()
//       .replace("ă", "a")
//       .replace("ă", "a") // different
//       .replace("â", "a")
//       .replace("î", "i")
//       .replace("ț", "t")
//       .replace("ţ", "t")
//       .replace("ș", "s")
//       .replace("ş", "s") // cedilla
//       .replace(" ", "_")
//       .replace("-", "_");
//   }
// }

export interface Population {
  population: string;
  year: string;
}

export interface County {
  id: number;
  name: string;
  code: string;
  population: Population[];
}

export interface CountyAdmin {
  id: number;
  name: string;
  county: string;
}

export interface CountyState {
  countyAdmins?: CountyAdmin[];
  isFetching?: boolean;
  error?: boolean;
  message?: any;
}

export interface CountyAction extends Action {}

export interface CountySuccessAction extends CountyAction {
  countyAdmins: CountyAdmin[];
}

export interface CountyErrorAction extends CountyAction {
  message: any;
}
