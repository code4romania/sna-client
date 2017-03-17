import {List, Map, OrderedSet, OrderedMap} from "immutable";
import {createSelector} from "reselect";
import {isContentLoaded, MStatEntry, MStats, ApplicationState} from "../redux/application_state";
import {Indicator} from "../models/indicator";
import {parseIndicatorId} from "../helpers/url_helper";
import {Ministry} from "../models/ministry";

export const areIndicatorsLoaded = (state) => isContentLoaded(state.reduxAsyncConnect.loadState.indicators);
export const areMinistriesStatsLoaded = (state) => isContentLoaded(state.reduxAsyncConnect.loadState.ministriesStats);
const indicatorsState = (state) => List(state.reduxAsyncConnect.indicators);
const mstatsData = (state: ApplicationState): MStats => state.reduxAsyncConnect.ministriesStats;

const paramIndicatorId = (state) => parseIndicatorId(state.routing.locationBeforeTransitions.pathname);
export const paramCategoryId = (state) => parseInt(state.routing.locationBeforeTransitions.query.category_id, 10) || 0;
export const paramYear = (state) => parseInt(state.routing.locationBeforeTransitions.query.year, 10) || 0;

export const indicators = createSelector(
  areIndicatorsLoaded, indicatorsState,
  (loaded, items) => ( loaded ?  items : List([])),
);

export const currentIndicator = createSelector(
  indicators, paramIndicatorId,
  (items: List<Indicator>, id) => items.find((i) => i.id === id) || items.first(),
);

export const currentIndicatorTitle = createSelector(
  areIndicatorsLoaded, currentIndicator,
  (loaded, indicator) => ( loaded ?  `${indicator.id}. ${indicator.name}` : "Loading"),
);

export const currentCategory = createSelector(
  areIndicatorsLoaded, currentIndicator, paramCategoryId,
  (loaded, indicator, id) => (
    loaded ? List(indicator.categories).find((c) => c.id === id) || indicator.categories[0] : null
  ),
);

const mstats = createSelector(
  areMinistriesStatsLoaded, mstatsData,
  (loaded, data: MStats) => List(loaded ? data.stats : []),
);

export const years = createSelector(
  areMinistriesStatsLoaded, mstats,
  (loaded, rows: List<MStatEntry>): OrderedSet<number> => {
    if (loaded) {
      return rows.flatMap(
        (e) => Object.keys(e.v).map((y) => parseInt(y, 10)),
      ).toOrderedSet() as OrderedSet<number>;
    } else {
      return OrderedSet([2016]);
    }
  },
);

export const currentYear = createSelector(
  years, paramYear,
  (items, y): number => {
    if (items.has(y)) {
      return y;
    } else {
      return items.last();
    }
  },
);

export const ministries = createSelector(
  areMinistriesStatsLoaded, mstatsData,
  (loaded, data): OrderedMap<number, Ministry> => {
    if (loaded) {
      return OrderedMap<number, Ministry>(data.ministries.map((m) => [m.id, m]));
    } else {
      return OrderedMap<number, Ministry>([]);
    }
  },
);

export const currentYearStr = createSelector(
  currentYear,
  (y) => y.toString(),
);

export const ministryBarChartData = createSelector(
  areMinistriesStatsLoaded, paramIndicatorId, currentCategory, currentYearStr, mstats, ministries,
  (loaded, indId, category, year, rows: List<MStatEntry>, ministries: OrderedMap<number, Ministry>) => {
    if (!loaded || !category) {
      return [];
    }

    const entries = rows.filter((item) => item.i_id === indId && item.c_id === category.id);
    return entries.map((entry) => ({name: ministries.get(entry.m_id).name, value: entry.v[year]})).toArray();
  },
);

const employeeStats = createSelector(
  areMinistriesStatsLoaded, mstatsData, currentYearStr,
  (loaded, data, year) => {
    if (!loaded) {
      return Map();
    }

    return Map<number, number>(data.employees.map((e) => [e.m_id, e.v[year]]));
  },
);

// data [{x:"employeeCount",y: 'statValue',z: "MinistryName"}]
export const ministriesScatterChartData = createSelector(
  areMinistriesStatsLoaded, paramIndicatorId, currentCategory, currentYear, mstats, ministries, employeeStats,
  (loaded, indId, category, year, rows: List<MStatEntry>, ministries: OrderedMap<number, Ministry>,
   estats: Map<number, number>) => {
    if (!loaded || !category) {
      return [];
    }

    const y = year.toString();
    const entries = rows.filter((item) => item.i_id === indId && item.c_id === category.id);
    return entries.map((entry) => (
      {z: ministries.get(entry.m_id).name, x: estats.get(entry.m_id), y: entry.v[y]}
    )).toArray();
  },
);
