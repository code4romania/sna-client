import * as Reselect from "reselect";
import {Map} from "immutable";
import * as _ from "lodash";
import {paramIndicatorId, mstats, paramMinistryId, currentYearStr} from "./index";

export type CategoryId = number;
export type MaxAvg = { max: number; avg: number };

// map<category_id, number>
export const categoryStatsForYear = Reselect.createSelector(
  paramMinistryId, currentYearStr, paramIndicatorId, mstats,
  (mId, year, indId, rows) => {
    const entries = rows.filter((item) => item.i_id === indId && item.m_id === mId);
    return Map<CategoryId, number>(entries.map((entry) => [entry.c_id, entry.v[year]]));
  },
);

// max, average for all ministries in one year
export const categoryMaxAvgStatsForYear = Reselect.createSelector(
  currentYearStr, paramIndicatorId, mstats,
  (year, indId, rows) => {
    const entries = rows.filter((item) => item.i_id === indId);

    const values = {};

    entries.forEach((entry) => {
      if (!values[entry.c_id]) {
        values[entry.c_id] = [];
      }
      values[entry.c_id].push(entry.v[year] || 0);
    });

    return Map<CategoryId, MaxAvg>(Object.keys(values).map((categoryId) => {
      const numbers = values[categoryId];
      const max = _.max(numbers);
      const avg = _.sum(numbers) / numbers.length;
      return [parseInt(categoryId, 10), { max, avg }];
    }));
  },
);
