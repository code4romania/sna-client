import * as Reselect from "reselect";
import {Map} from "immutable";
import {paramIndicatorId, mstats, paramMinistryId, currentYearStr} from "./index";

type CategoryId = number;

// map<category_id, number>
export const categoryStatsForYear = Reselect.createSelector(
  paramMinistryId, currentYearStr, paramIndicatorId, mstats,
  (mId, year, indId, rows) => {
    const entries = rows.filter((item) => item.i_id === indId && item.m_id === mId);
    return Map<CategoryId, number>(entries.map((entry) => [entry.c_id, entry.v[year]]));
  },
);
