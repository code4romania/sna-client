import {Set} from 'immutable';
import {RouterState} from 'react-router-redux';
import {Promise} from 'es6-promise';

import {Indicator} from '../models/indicator';
// import {Ministry} from '../models/ministry';
import {ILocalStorage} from '../models/localStorage';
import {AnticorruptionAdmin} from '../models/anticorruption';
import {County, CountyAdmin} from '../models/county';
import {Ministry} from "../models/ministry";
import {Category} from "../models/category";

export interface ApplicationState {
  routing: RouterState;
  reduxAsyncConnect: AsyncConnectState;
  selectedCounties: Set<number>;
  selectedMinistries: Set<number>;
  selectedAnticorruptionAdmins: Set<number>;
  areAllYearsSelected: boolean;
  isSidebarOpen: boolean;
  localStorage: ILocalStorage;
}

type RemoteContent = 'categories'
  | 'indicators'
  | 'counties'
  | 'ministryAdmins'
  | 'anticorruptionAdmins'
  | 'countyAdmins'
  | 'ministriesStats'
  | 'anticorruptionStats'
  | 'countiesStats';

export interface LoadEntryState {
  error: any;
  loaded: boolean;
  loading: boolean;
}

export interface LoadState {
  loaded: boolean;
  categories?: LoadEntryState;
  indicators?: LoadEntryState;
  counties?: LoadEntryState;
  ministryAdmins?: LoadEntryState;
  anticorruptionAdmins?: LoadEntryState;
  countyAdmins?: LoadEntryState;
  ministriesStats?: LoadEntryState;
  countiesStats?: LoadEntryState;
}

// key year
// export interface YearsStats {
//   [key: string]: number;
// }

export interface IndicatorValue {
  value: number;
  year: number;
}

export interface StatAnswerIndicator {
  indicatorId: number;
  values: IndicatorValue[];
}

export interface StatAnswer {
  stepId: number;
  indicators: StatAnswerIndicator[];
}

// export interface MStatEntry {
//   i_id: number;
//   c_id: number;
//   m_id: number;
//   v: YearsStats;
// }

export interface MStatEmployee {
  value: number;
  year: number;
}

export interface MStat {
  institutionId: number;
  name: string;
  answers: StatAnswer[];
  employees: MStatEmployee[];
}

// export interface MStats {
  // ministries: Ministry[];
  // employees: EmployeeStats[];
  // stats: MStatEntry[];
// }

export type MStats = MStat[];
export type AStat = MStat;
export type AStats = MStat[];
export type CStat = MStat;
export type CStats = MStat[];

// export interface EmployeeStats {
//   m_id: number;
//   v: YearsStats;
// }
//
// interface PopulationEntry {
//   m_id: number;
//   v: YearsStats;
// }

// export type CStatEmployee = MStatEmployee;
//
// export interface CStat {
//   institutionId: number;
//   name: string;
//   answers: StatAnswer[];
//   employees: CStatEmployee[];
// }

// export interface MStats {
// ministries: Ministry[];
// employees: EmployeeStats[];
// stats: MStatEntry[];
// }

// export type CStats = CStat[];

export interface AsyncConnectState {
  loadState: LoadState;
  categories?: Category[];
  indicators?: Indicator[];
  counties?: County[];
  ministryAdmins?: Ministry[];
  anticorruptionAdmins?: AnticorruptionAdmin[];
  countyAdmins?: CountyAdmin[];
  ministriesStats?: MStats;
  anticorruptionStats?: AStats;
  countiesStats?: CStats;
}

export interface AsyncContext {
  store: Redux.Store<ApplicationState>;
}

export interface AsyncLoaderEntry {
  key: RemoteContent;
  promise: (context: AsyncContext) => Promise<any>;
}

export function isContentLoaded(loadState?: LoadEntryState): boolean {
  if (!loadState || loadState.loading) {
    return false;
  }

  return loadState.loaded;
}
