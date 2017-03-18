import {COUNTIES} from "../components/Sidebar/counties_sidebar";
import {ApplicationState, MStatEntry} from "../redux/application_state";
import {createSelector} from "reselect";
import {
  areCountiesStatsLoaded, currentCategory, currentYearStr, cstats, paramIndicatorId, currentYear,
  cstatsData,
} from "./index";
import {Map, List} from "immutable";

export const selectedCounties = (state: ApplicationState) => state.selectedCounties;
export const countiesFilterData = createSelector(
  selectedCounties,
  (selected) => COUNTIES.map((c) => ({checked: selected.has(c.id), label: c.name, value: c.id})),
);

const COLORS = ["#CFE1F6", "#A6CFEF", "#4990E2", "#1B73BD", "#062A6D"];

// {legend: {"#abc": "0-12"}, colorMap: {}}
// Simple arrangement, 20% of max value, so we get 5 colors
export const countyMapChartData = createSelector(
  areCountiesStatsLoaded, paramIndicatorId, currentCategory, currentYearStr, cstats,
  (loaded, indId, category, year, rows) => {
    if (!loaded || !category) {
      return {colorMap: {zz: "#ccc"}, legend: [["#CFE1F6", "0-0"]]};
    }

    const entries = rows.filter((item) => item.i_id === indId && item.c_id === category.id);
    const valueMap = Map<number, number>(entries.map((entry) => [entry.m_id, entry.v[year]]));
    const maxValue = valueMap.max() + 1;
    const countyMap = Map<number, string>(COUNTIES.map((c) => [c.id, c.nameId]));
    const legendMap = COLORS.map(
      (v, i) => [v, `${Math.round(maxValue / 100 * (i * 20))}-${Math.round(maxValue / 100 * ((i + 1) * 20)) - 1}`],
    );

    return {
      colorMap: Map<string, string>(valueMap.keySeq().map((k) => {
        const value = valueMap.get(k);
        const idx = Math.floor(value * 100 / maxValue / 20);
        return [countyMap.get(k), COLORS[idx]];
      })).toJS(),
      legend: legendMap,
    };
  },
);

const countiesMap = Map<number, string>(COUNTIES.map((c) => [c.id, c.name]));

// [{name:string,value:number}]
export const countyBarChartData = createSelector(
  areCountiesStatsLoaded, paramIndicatorId, currentCategory, currentYearStr, cstats, selectedCounties,
  (loaded, indId, category, year, rows, selectedIds) => {

    if (!loaded || !category) {
      return [];
    }

    const all = selectedIds.size === 0;
    const entries = rows.filter((item) => (
      item.i_id === indId && item.c_id === category.id && (all || selectedIds.has(item.m_id))
    ));
    return entries.map((entry) => ({name: countiesMap.get(entry.m_id), value: entry.v[year]})).toArray()
      .sort((a, b) => -1 * (a.value - b.value));
  },
);

const populationStats = createSelector(
  areCountiesStatsLoaded, cstatsData, currentYearStr,
  (loaded, data, year) => {
    if (!loaded) {
      return Map();
    }

    return Map<number, number>(data.population.map((e) => [e.m_id, e.v[year]]));
  },
);

// data [{x:"populationCount", y: 'statValue', z: "CountyName"}]
export const countiesScatterChartData = createSelector(
  areCountiesStatsLoaded, paramIndicatorId, currentCategory, currentYear, cstats, populationStats, selectedCounties,
  (loaded, indId, category, year, rows: List<MStatEntry>, population: Map<number, number>, selectedIds) => {
    if (!loaded || !category) {
      return [];
    }

    const all = selectedIds.size === 0;
    const y = year.toString();
    const entries = rows.filter((item) => (
      item.i_id === indId && item.c_id === category.id && (all || selectedIds.has(item.m_id))
    ));
    return entries.map((entry) => (
      {z: countiesMap.get(entry.m_id), x: population.get(entry.m_id), y: entry.v[y]}
    )).toArray();
  },
);
