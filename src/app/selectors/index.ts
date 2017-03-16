import {List, Map} from "immutable";
import {createSelector} from "reselect";
import {isContentLoaded} from "../redux/application_state";
import {Indicator} from "../models/indicator";
import {parseIndicatorId} from "../helpers/url_helper";

export const areIndicatorsLoaded = (state) => isContentLoaded(state.reduxAsyncConnect.loadState.indicators);
export const areMinistriesStatsLoaded = (state) => isContentLoaded(state.reduxAsyncConnect.loadState.ministriesStats);
const indicatorsState = (state) => List(state.reduxAsyncConnect.indicators);
const mstatsRaw = (state) => List(state.reduxAsyncConnect.ministriesStats);

const paramIndicatorId = (state) => parseIndicatorId(state.routing.locationBeforeTransitions.pathname);
export const paramCategoryId = (state) => parseInt(state.routing.locationBeforeTransitions.query.category_id, 10) || 0;

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

// TODO get max year from stats
export const currentYear = (state) => parseInt(state.routing.locationBeforeTransitions.query.year, 10) || 2016;

const ministries = Map([
  [1, "Ministerul Afacerilor Externe"],
  [2, "Ministerul Afacerilor Interne"],
]);

export const ministryBarChartData = createSelector(
  areMinistriesStatsLoaded, paramIndicatorId, paramCategoryId, currentYear, mstatsRaw,
  (loaded, indId, catId, year, rows) => {
    if (!loaded) {
      return [];
    }
    const y = year.toString();
    const entries = rows.filter((item) => item.i_id === indId && item.c_id === catId);
    const result = entries.map((entry) => ({name: ministries.get(entry.m_id), value: entry.v[y]})).toArray();
    console.log('data', result);
    return result;
  },
);
