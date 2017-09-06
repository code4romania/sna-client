import * as Reselect from "reselect";
import {Map} from "immutable";
import * as _ from "lodash";

import {mstats, paramCategoryId, paramAdminId, currentYear, astats, cstats} from "./index";  // currentYearStr,
// import {YearsStats} from '../redux/application_state';
import {AreaChartValue} from "../components/Charts/simple_area_chart";
import {IndicatorValue} from "../redux/application_state";

export type IndicatorId = number;
export type MaxAvg = { max: number; avg: number };

function getCategoryStatsForYear(institId, year, categId, rows) {
  // TODO treat properly later
  // const entries = rows.filter((item) => item.i_id === categId && item.m_id === institId);
  // return Map<IndicatorId, number>(entries.map((entry) => [entry.c_id, entry.v[year]]));

  const entries = rows.find((item) => item.institutionId === institId);
  if (!entries) {
    return Map<IndicatorId, number>([]);
  }

  const indicatorEntries = entries.answers.find((item) => item.stepId === categId);

  return Map<IndicatorId, number>(indicatorEntries.indicators
    .map((entry) => {

      const entryData = entry.values.find((e) => e.year === year);
      const rawValue = entryData ? entryData.value : null;
      // const numericalValue = rawValue; // parseInt(, 10);

      return [
        entry.indicatorId,
        // (typeof rawValue === 'number') ? rawValue : numericalValue,
        rawValue,
      ];
    }),
  );
}

// map<indicator_id, number>
export const ministryCategoryStatsForYear = Reselect.createSelector(
  paramAdminId, currentYear, paramCategoryId, mstats,
  (institId, year, categId, rows) => getCategoryStatsForYear(institId, year, categId, rows),
);

export const anticorruptionAdminCategoryStatsForYear = Reselect.createSelector(
  paramAdminId, currentYear, paramCategoryId, astats,
  (institId, year, categId, rows) => getCategoryStatsForYear(institId, year, categId, rows),
);

export const countyCategoryStatsForYear = Reselect.createSelector(
  paramAdminId, currentYear, paramCategoryId, cstats,
  (institId, year, categId, rows) => getCategoryStatsForYear(institId, year, categId, rows),
);

function getCategoryMaxAvgStatsForYear(year, categId, rows) {
  // const entries = rows.filter((item) => item.i_id === categId); // TODO treat properly later
  // const entries = rows.filter((item) => !!(item && year && categId));

  // const entries = rows;

  // dict with arrays of values of current year and same indicator(indicatorId is dict key) from all institutions
  const values = {};

  // entries.forEach((entry) => { // TODO treat properly later
  //   if (!values[entry.c_id]) {
  //     values[entry.c_id] = [];
  //   }
  //   values[entry.c_id].push(entry.v[year] || 0);
  // });
  // entries.forEach((entry) => {
  //   values[entry.institutionId] = [];
  // });

  rows.forEach((entry) => {
    return entry.answers
      .filter((category) => category.stepId === categId)
      .forEach((category) => {
        return category.indicators.forEach((indicator) => {
          if (!values[indicator.indicatorId]) {
            values[indicator.indicatorId] = [];
          }

          const indicatorData = indicator.values.find((v) => v.year === year);
          if (indicatorData) {
            values[indicator.indicatorId].push(indicatorData.value);  // parseInt(, 10)
          }
        });
      });
  });

  return Map<IndicatorId, MaxAvg>(Object.keys(values).map((indicatorId) => {
    const numbers = values[indicatorId];
    const max = _.max(numbers);
    const avg = _.sum(numbers) / numbers.length;
    return [parseInt(indicatorId, 10), {max, avg}];
  }));
}

// max, average for all ministries in one year
export const ministryCategoryMaxAvgStatsForYear = Reselect.createSelector(
  currentYear, paramCategoryId, mstats,
  (year, categId, rows) => getCategoryMaxAvgStatsForYear(year, categId, rows),
);

export const anticorruptionAdminCategoryMaxAvgStatsForYear = Reselect.createSelector(
  currentYear, paramCategoryId, astats,
  (year, categId, rows) => getCategoryMaxAvgStatsForYear(year, categId, rows),
);

export const countyCategoryMaxAvgStatsForYear = Reselect.createSelector(
  currentYear, paramCategoryId, cstats,
  (year, categId, rows) => getCategoryMaxAvgStatsForYear(year, categId, rows),
);

function convertYearStats(values: IndicatorValue[]): AreaChartValue[] {
  // return Object.keys(values).map((yearStr) => ({year: parseInt(yearStr, 10), value: values[yearStr]}));
  return values.map((value) => ({
    year: value.year,  // parseInt(, 10)
    value1: value.value,  // parseInt(, 10)
  }));
}

function getCategoryStatsForAllYears(institId, categId, rows) {
  // TODO treat properly later
  // const entries = rows.filter((item) => item.i_id === categId && item.m_id === institId);
  // const entries = rows.filter((item) => !!(item && categId && institId));

  const entries = rows.find((item) => item.institutionId === institId);
  if (!entries) {
    return Map<IndicatorId, AreaChartValue[]>([]);
  }

  const indicatorEntries = entries.answers.find((item) => item.stepId === categId);

  // TODO treat properly later
  // return Map<IndicatorId, AreaChartValue[]>(entries.map((entry) => [entry.c_id, convertYearStats(entry.v)]));
  // return Map<IndicatorId, AreaChartValue[]>(entries.map((entry) => [entry.institutionId, entry.employees]));

  return Map<IndicatorId, AreaChartValue[]>(indicatorEntries.indicators
    .map((indicator) => [indicator.indicatorId, convertYearStats(indicator.values)]));
}

export const ministryCategoryStatsForAllYears = Reselect.createSelector(
  paramAdminId, paramCategoryId, mstats,
  (institId, categId, rows) => getCategoryStatsForAllYears(institId, categId, rows),
);

export const anticorruptionAdminCategoryStatsForAllYears = Reselect.createSelector(
  paramAdminId, paramCategoryId, astats,
  (institId, categId, rows) => getCategoryStatsForAllYears(institId, categId, rows),
);

export const countyCategoryStatsForAllYears = Reselect.createSelector(
  paramAdminId, paramCategoryId, cstats,
  (institId, categId, rows) => getCategoryStatsForAllYears(institId, categId, rows),
);
