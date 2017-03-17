import {List, Map, OrderedSet} from "immutable";
import {createSelector} from "reselect";
import {isContentLoaded} from "../redux/application_state";
import {Indicator} from "../models/indicator";
import {parseIndicatorId} from "../helpers/url_helper";
import {Ministry} from "../models/ministry";

export const areIndicatorsLoaded = (state) => isContentLoaded(state.reduxAsyncConnect.loadState.indicators);
export const areMinistriesStatsLoaded = (state) => isContentLoaded(state.reduxAsyncConnect.loadState.ministriesStats);
const indicatorsState = (state) => List(state.reduxAsyncConnect.indicators);
const mstatsRaw = (state) => List(state.reduxAsyncConnect.ministriesStats);

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

export const years = createSelector(
  areMinistriesStatsLoaded, mstatsRaw,
  (loaded, rows): OrderedSet<number> => {
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

// TODO load from API
export const ministries = Map<number, Ministry>([
  [1, {id: 1, name: "Ministerul Afacerilor Externe"}],
  [2, {id: 2, name: "Ministerul Afacerilor Interne"}],
]);

export const ministryBarChartData = createSelector(
  areMinistriesStatsLoaded, paramIndicatorId, currentCategory, currentYear, mstatsRaw,
  (loaded, indId, category, year, rows) => {
    if (!loaded || !category) {
      return [];
    }

    const y = year.toString();
    const entries = rows.filter((item) => item.i_id === indId && item.c_id === category.id);
    return entries.map((entry) => ({name: ministries.get(entry.m_id).name, value: entry.v[y]})).toArray();
  },
);
