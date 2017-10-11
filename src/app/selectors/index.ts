import {Map, OrderedMap} from 'immutable'; // OrderedSet, List,
import {createSelector} from 'reselect';

import {
  isContentLoaded, ApplicationState, CStats, MStats,
  LoadEntryState, AStats, // MStatEntry; MStat
} from '../redux/application_state'; // MStats,
import {
  parseCategoryId,
  parseAdminTypeId,
  parseAdminId,
  ADMIN_TYPE_MINISTRIES,
  ADMIN_TYPE_ANTICORRUPTION_ADMINS,
  ADMIN_TYPE_COUNTIES,
} from '../helpers/url_helper';
import {Indicator} from '../models/indicator';
import {Ministry} from '../models/ministry';
import {AnticorruptionAdmin} from '../models/anticorruption';
import {CountyAdmin, County} from '../models/county';
import {Category} from "../models/category";
// import {selectedCounties} from "./counties";

export const areCategoriesLoaded = (state) => (state.reduxAsyncConnect.categories ||
  isContentLoaded(state.reduxAsyncConnect.loadState.categories));
export const areIndicatorsLoaded = (state) => (state.reduxAsyncConnect.indicators ||
  isContentLoaded(state.reduxAsyncConnect.loadState.indicators));
export const areCountiesLoaded = (state) => (state.reduxAsyncConnect.counties ||
  isContentLoaded(state.reduxAsyncConnect.loadState.counties));
export const areMinistryAdminsLoaded = (state) => (state.reduxAsyncConnect.ministryAdmins ||
  isContentLoaded(state.reduxAsyncConnect.loadState.ministryAdmins));
export const areAnticorruptionAdminsLoaded = (state) => (state.reduxAsyncConnect.anticorruptionAdmins ||
  isContentLoaded(state.reduxAsyncConnect.loadState.anticorruptionAdmins));
export const areCountyAdminsLoaded = (state) => (state.reduxAsyncConnect.countyAdmins ||
  isContentLoaded(state.reduxAsyncConnect.loadState.countyAdmins));
export const areMinistryStatsLoaded = (state) => state.reduxAsyncConnect.ministriesStats ||
  isContentLoaded(state.reduxAsyncConnect.loadState.ministriesStats);
export const areAnticorruptionStatsLoaded = (state) => state.reduxAsyncConnect.anticorruptionStats ||
  isContentLoaded(state.reduxAsyncConnect.loadState.anticorruptionStats);
export const areCountiesStatsLoaded = (state) => state.reduxAsyncConnect.countiesStats ||
  isContentLoaded(state.reduxAsyncConnect.loadState.countiesStats);

const categoriesState = (state) => state.reduxAsyncConnect.categories; // List()
const indicatorsState = (state) => state.reduxAsyncConnect.indicators; // List()
const countiesState = (state) => state.reduxAsyncConnect.counties; // List()
const ministryAdminsState = (state) => state.reduxAsyncConnect.ministryAdmins;
const anticorruptionAdminsState = (state) => state.reduxAsyncConnect.anticorruptionAdmins;
const countyAdminsState = (state) => state.reduxAsyncConnect.countyAdmins;

export const mstatsData = (state: ApplicationState): MStats => state.reduxAsyncConnect.ministriesStats;
export const astatsData = (state: ApplicationState): AStats => state.reduxAsyncConnect.anticorruptionStats;
export const cstatsData = (state: ApplicationState): CStats => state.reduxAsyncConnect.countiesStats;

export const paramCategoryId = (state) => parseCategoryId(state.routing.locationBeforeTransitions.pathname);
const paramAdminTypeId = (state) => parseAdminTypeId(state.routing.locationBeforeTransitions.pathname);
export const paramAdminId = (state) => parseAdminId(state.routing.locationBeforeTransitions.pathname);
export const paramIndicatorId = (state) =>
  parseInt(state.routing.locationBeforeTransitions.query.indicator_id, 10) || 0;
export const paramYear = (state) => parseInt(state.routing.locationBeforeTransitions.query.year, 10) || 0;
export const chart = (state) => state.routing.locationBeforeTransitions.query.chart;
export const location = (state) => state.routing.locationBeforeTransitions;

export const paramChart = createSelector(
  paramAdminTypeId, chart,
  (adminTypeId, chart) => {
    if (!chart) {
      return adminTypeId === ADMIN_TYPE_COUNTIES ? 'map' : 'bar';
    } else {
      return chart;
    }
});

export const categories = createSelector(
  areCategoriesLoaded, categoriesState,
  (loaded, items) => ( loaded ?  items : ([] as Category[])),
);

export const indicators = createSelector(
  areIndicatorsLoaded, indicatorsState,
  (loaded, items) => ( loaded ?  items : ([] as Indicator[])),
);

export const counties = createSelector(
  areCountiesLoaded, countiesState,
  (loaded, items) => ( loaded ?  items : ([] as County[])),
);

export const ministryAdmins = createSelector(
  areMinistryAdminsLoaded, ministryAdminsState,
  (loaded, data): OrderedMap<number, Ministry> => {
    if (loaded) {
      return OrderedMap<number, Ministry>(data.map((m) => [m.id, m]));
    } else {
      return OrderedMap<number, Ministry>([]);
    }
  },
);

export const anticorruptionAdmins = createSelector<
    ApplicationState,
    OrderedMap<number, AnticorruptionAdmin>,
    LoadEntryState,
    AnticorruptionAdmin[]
  >(
  areAnticorruptionAdminsLoaded, anticorruptionAdminsState,
  (loaded, data): OrderedMap<number, AnticorruptionAdmin> => {
    if (loaded && data) {
      return OrderedMap<number, AnticorruptionAdmin>(data.map((m) => [m.id, m]));
    } else {
      return OrderedMap<number, AnticorruptionAdmin>([]);
    }
  },
);

export const countyAdmins = createSelector<
  ApplicationState,
  OrderedMap<number, CountyAdmin>,
  LoadEntryState,
  CountyAdmin[]
  >(
  areCountyAdminsLoaded, countyAdminsState,
  (loaded, data): OrderedMap<number, CountyAdmin> => {
    if (loaded && data) {
      return OrderedMap<number, CountyAdmin>(data.map((m) => [m.id, m]));
    } else {
      return OrderedMap<number, CountyAdmin>([]);
    }
  },
);

export const currentCategory = createSelector(
  categories, paramCategoryId,
  (items: Category[], id) => items.find((i) => i.id === id) || items[0],  // : List<>; .first()
);

export const currentCategoryTitle = createSelector(
  areCategoriesLoaded, currentCategory,
  (loaded, category) => ( (loaded && category) ?  `${category.id}. ${category.name}` : 'Se încarcă'),
);

export const currentIndicators = createSelector(
  areIndicatorsLoaded, indicators, paramCategoryId,
  (loaded, indicators, id): Indicator[] => (
    loaded ? indicators.filter((i) => i.step === id) : null
  ),
);

export const currentIndicator = createSelector(
  areIndicatorsLoaded, currentIndicators, paramIndicatorId,
  (loaded, currentIndicators, id): Indicator => (
    loaded ? currentIndicators.find((i) => i.id === id) || currentIndicators[0] : null // List(
  ),
);

export const mstats = createSelector(
  areMinistryStatsLoaded, mstatsData,
  (loaded, data: MStats) => loaded ? data : [], // .stats; List(
);

export const astats = createSelector(
  areAnticorruptionStatsLoaded, astatsData,
  (loaded, data: AStats) => loaded ? data : [],
);

export const cstats = createSelector(
  areCountiesStatsLoaded, cstatsData,
  (loaded, data: CStats) => loaded ? data : [],
);

export const years = createSelector(
  paramAdminTypeId,
  areMinistryStatsLoaded,
  areCountiesStatsLoaded,
  areAnticorruptionStatsLoaded,
  mstats,
  cstats,
  astats,
  (adminTypeId,
   mLoaded,
   cLoaded,
   aLoaded,
   mRows: MStats,
   cRows: CStats,
   aRows: AStats) => { // MStatEntry; List<MStat>; : OrderedSet<number>
    let loaded;
    let rows;
    switch (adminTypeId) {
      case ADMIN_TYPE_MINISTRIES: {
        loaded = mLoaded;
        rows = mRows;
        break;
      }
      case ADMIN_TYPE_ANTICORRUPTION_ADMINS: {
        loaded = aLoaded;
        rows = aRows;
        break;
      }
      case ADMIN_TYPE_COUNTIES: {
        loaded = cLoaded;
        rows = cRows;
        break;
      }
      default: {
        loaded = false;
      }
    }

    if (loaded && rows) {  //  && mRows
      // const rows = adminTypeId === ADMIN_TYPE_COUNTIES ? cRows : mRows;
      // console.log(rows);
      // return rows[0].employees.map((e) => parseInt(e.year, 10));
      return rows[0].answers[0].indicators[0].values.map((e) => parseInt(e.year, 10));
        // .toOrderedSet() as OrderedSet<number>;
    } else {
      return [];
      // return OrderedSet([]);
    }
  },
);

export const currentYear = createSelector(
  years, paramYear,
  (items, y): number => {
    // if (items.has(y)) {
    if (items.includes(y)) {
      return y;
    } else {
      // return items.last();
      return items[items.length - 1];
    }
  },
);

export const currentYearStr = createSelector(
  currentYear,
  (y) => y && y.toString(),
);

export const selectedMinistries = (state: ApplicationState) => state.selectedMinistries;
export const selectedAnticorruptionAdmins = (state: ApplicationState) => state.selectedAnticorruptionAdmins;
export const selectedCounties = (state: ApplicationState) => state.selectedCounties;

export const currentMinistry = createSelector(
  paramAdminId, ministryAdmins,
  (id, map) => map.get(id),
);

export const currentAnticorruptionAdmin = createSelector(
  paramAdminId, anticorruptionAdmins,
  (id, map) => map.get(id),
);

export const currentCounty = createSelector(
  paramAdminId, countyAdmins,
  (id, map) => map.get(id),
);

// TODO type params
function getAdministrationFilterData(loaded, data, selected) {
  return (loaded && data)
    ? data.map((m) => ({
      checked: selected.has(m.institutionId),
      label: m.name,
      value: m.institutionId,
    }))
    : [];
}

export const ministriesFilterData = createSelector(
  areMinistryStatsLoaded, mstatsData, selectedMinistries,
  (loaded, data, selected) => getAdministrationFilterData(loaded, data, selected),
);

export const anticorruptionAdminsFilterData = createSelector(
  areAnticorruptionStatsLoaded, astatsData, selectedAnticorruptionAdmins,
  (loaded, data, selected) => getAdministrationFilterData(loaded, data, selected),
);

// TODO uncomment?
// export const countiesFilterData = createSelector(
//   areCountiesLoaded, selectedCounties, counties,
//   (loaded, selected, counties) => {
//     if (!loaded) {
//       return [];
//     }
//
//     return counties.map((c) => ({checked: selected.has(c.id), label: c.name, value: c.id}));
//   },
// );

export const countiesFilterData = createSelector(
  areCountiesStatsLoaded, cstatsData, selectedCounties,
  (loaded, data, selected) => getAdministrationFilterData(loaded, data, selected),
);

// TODO type params
function getBarChartData(loaded,
                         categId,
                         currentIndicator,
                         year,
                         rows,
                         selectedIds) {  // ministries: OrderedMap<number, Ministry>
  if (!loaded || !currentIndicator || !rows) {
    return [];
  }

  const all = selectedIds.size === 0;

  // const entries = rows.filter((item) => item.i_id === categId && // TODO treat properly later
  //   item.c_id === category.id && (all || selectedIds.has(item.m_id)));

  // const entries = rows.filter((item) =>
  // !!(item && categId && year && category && ministries && all && selectedIds));

  // all or selected ministries
  // same as for the ministriesScatterChartData
  const entries = rows.filter((stat) => all || selectedIds.has(stat.institutionId));

  // current year, current indicator, current step(category)
  const mappedValuesArr = [];
  // console.log(categId, currentIndicator.id, year);
  entries
    .forEach((entry) => {
      // console.log(entry);
      return entry.answers
        .filter((categData) => categData.stepId === categId)
        .forEach((categData) => {
          // console.log(categData);
          return categData.indicators
            .filter((indicatorData) => indicatorData.indicatorId === currentIndicator.id)
            .forEach((indicatorData) => {
              // console.log(indicatorData);
              return indicatorData.values
                .filter((indicatorValue) => indicatorValue.year === year)
                .forEach((indicatorValue) => {
                  // console.log(indicatorValue);
                  return mappedValuesArr.push({
                    name: entry.name,
                    value: parseInt(indicatorValue.value, 10) || null,  // TODO remove parseInt
                  });
                });
            });
        });

      // return {
      //   // name: ministries.get(entry.m_id).name,
      //   // value: entry.v[year],
      //   name: entry.name,
      //   value: 300,
      // },
    });
  // .toArray()

  // console.log(mappedValuesArr);

  return mappedValuesArr
    .sort((a, b) => b.value - a.value);
}

export const ministryBarChartData = createSelector(
  areMinistryStatsLoaded,
  paramCategoryId,
  currentIndicator,
  currentYear,
  mstats,
  selectedMinistries,
  (loaded,
   categId,
   currentIndicator,
   year,
   rows,
   selectedIds) => getBarChartData(loaded,
    categId,
    currentIndicator,
    year,
    rows,
    selectedIds),
);

export const anticorruptionAdminsBarChartData = createSelector(
  areAnticorruptionStatsLoaded,
  paramCategoryId,
  currentIndicator,
  currentYear,
  astats,
  selectedAnticorruptionAdmins,
  (loaded,
   categId,
   currentIndicator,
   year,
   rows,
   selectedIds) => getBarChartData(loaded,
    categId,
    currentIndicator,
    year,
    rows,
    selectedIds),
);

export const countyBarChartData = createSelector(
  areCountiesStatsLoaded,
  paramCategoryId,
  currentIndicator,
  currentYear,
  cstats,
  selectedCounties,
  (loaded,
   categId,
   currentIndicator,
   year,
   rows,
   selectedIds) => getBarChartData(loaded,
    categId,
    currentIndicator,
    year,
    rows,
    selectedIds),
);

function getInstitutionEmployeeStats(loaded, data, year) {
  if (!(loaded && data && year)) {
    return Map();
  }

  // return Map<number, number>(data.employees.map((e) => [e.m_id, e.v[year]]));
  return Map<number, string>(data.map((e) => {
      const yearStats = e.employees.find((empl) => empl.year === year);  //  + ""
      const yearValue = yearStats ? yearStats.value : null;

      return [
        e.institutionId,
        yearValue,
      ];
    }),
  );
}

const ministriesEmployeeStats = createSelector(
  areMinistryStatsLoaded, mstatsData, currentYear,  // Str
  (loaded, data, year) => getInstitutionEmployeeStats(loaded, data, year),
);

const anticoruptionAdminsEmployeeStats = createSelector(
  areAnticorruptionStatsLoaded, astatsData, currentYear,  // Str
  (loaded, data, year) => getInstitutionEmployeeStats(loaded, data, year),
);

const countiesEmployeeStats = createSelector(
  areCountiesStatsLoaded, cstatsData, currentYear,  // Str
  (loaded, data, year) => getInstitutionEmployeeStats(loaded, data, year),
);

// TODO type params
function getScatterChartData(loaded,
                             categId,
                             currentIndicator,
                             year,
                             rows,
                             estats,
                             selectedIds) {
  if (!loaded || !currentIndicator) {
    return [];
  }
  const all = selectedIds.size === 0;

  // TODO treat properly later
  // const entries = rows.filter((item) => item.i_id === categId && item.c_id === category.id &&
  //   (all || selectedIds.has(item.m_id)));
  // const entries = rows.filter((item) => !!(item && category && categId && ministries && all && year));

  // same as for the ministryBarChartData
  const entries = rows.filter((mStat) => all || selectedIds.has(mStat.institutionId));

  // return entries.map((entry) => (
  //   // {z: ministries.get(entry.m_id).name, x: estats.get(entry.m_id), y: entry.v[y]} // TODO treat properly later
  //   {
  //     z: entry.name,
  //     x: estats.find((e) => e[0] === entry.institutionId),
  //     y: estats.find((e) => e[0] === entry.institutionId)[1],
  //   }
  // ));
  //   // .toArray();

  // current year, current indicator, current step(category)
  const mappedValuesArr = [];
  // console.log(categId, currentIndicator.id, year);
  entries
    .forEach((entry) => {
      // console.log(entry);
      return entry.answers
        .filter((categData) => categData.stepId === categId)
        .forEach((categData) => {
          // console.log(categData);
          return categData.indicators
            .filter((indicatorData) => indicatorData.indicatorId === currentIndicator.id)
            .forEach((indicatorData) => {
              // console.log(indicatorData);
              return indicatorData.values
                .filter((indicatorValue) => indicatorValue.year === year)
                .forEach((indicatorValue) => {
                  // console.log(indicatorValue);
                  return mappedValuesArr.push({
                    z: entry.name,
                    x: parseInt((estats.get(entry.institutionId) as string), 10) || null,  // TODO remove parseInt
                    y: parseInt(indicatorValue.value, 10) || null,  // TODO remove parseInt
                  });
                });
            });
        });

      // return {
      //   // name: ministries.get(entry.m_id).name, // TODO treat properly later
      //   // value: entry.v[year],
      //   name: entry.name,
      //   value: 300,
      // },
    });
  // .toArray()

  // console.log(mappedValuesArr);

  return mappedValuesArr;
}

// data [{x:'employeeCount',y: 'statValue',z: 'MinistryName'}]
export const ministriesScatterChartData = createSelector(
  // areMinistryStatsLoaded,
  // paramCategoryId,
  // currentCategory,
  // currentYearStr,
  // mstats,
  // ministryAdmins,
  // ministriesEmployeeStats,
  // selectedMinistries,
  // (loaded,
  //  categId,
  //  category,
  //  year,
  //  rows: MStats,
  //  ministries: OrderedMap<number, Ministry>, // List<MStat>
  //  estats: Map<number, number>,
  //  selectedIds) => {
  areMinistryStatsLoaded,
  paramCategoryId,
  currentIndicator,
  currentYear,
  mstats,
  // ministryAdmins,
  ministriesEmployeeStats,
  selectedMinistries,
  (loaded,
   categId,
   currentIndicator,
   year,
   rows: MStats,
   estats,
   selectedIds) => getScatterChartData(loaded,
    categId,
    currentIndicator,
    year,
    rows,
    estats,
    selectedIds),  // ministries: OrderedMap<number, Ministry>
);

export const anticorruptionAdminsScatterChartData = createSelector(
  areAnticorruptionStatsLoaded,
  paramCategoryId,
  currentIndicator,
  currentYear,
  astats,
  // ministryAdmins,
  anticoruptionAdminsEmployeeStats,
  selectedAnticorruptionAdmins,
  (loaded,
   categId,
   currentIndicator,
   year,
   rows: AStats,
   estats,
   selectedIds) => getScatterChartData(loaded,
    categId,
    currentIndicator,
    year,
    rows,
    estats,
    selectedIds),
);

export const countiesScatterChartData = createSelector(
  areCountiesStatsLoaded,
  paramCategoryId,
  currentIndicator,
  currentYear,
  cstats,
  // ministryAdmins,
  countiesEmployeeStats,
  selectedCounties,
  (loaded,
   categId,
   currentIndicator,
   year,
   rows: CStats,
   estats,
   selectedIds) => getScatterChartData(loaded,
    categId,
    currentIndicator,
    year,
    rows,
    estats,
    selectedIds),
);
