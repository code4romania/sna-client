import {Map} from 'immutable';  // , List
import {createSelector} from 'reselect';

// import {COUNTIES} from '../components/Sidebar/counties_sidebar';
// import {ApplicationState} from '../redux/application_state';  // , MStatEntry, CStats, CStat
import {
  areCountiesStatsLoaded,
  cstats, paramCategoryId,
  currentIndicator,
  areCountiesLoaded,
  counties,
  currentYear,  // currentCategory, currentYearStr, selectedCounties,
} from './index';  // cstatsData

const COLORS = ['#CFE1F6', '#A6CFEF', '#4990E2', '#1B73BD', '#062A6D'];

// {legend: {"#abc": "0-12"}, colorMap: {}}
// Simple arrangement, 20% of max value, so we get 5 colors
export const countyMapChartData = createSelector(
  areCountiesStatsLoaded, areCountiesLoaded, paramCategoryId, currentIndicator, currentYear, cstats, counties,
  (loaded, countiesLoaded, categId, crtIndicator, crtYear, rows, counties) => {
    if (!loaded || !crtIndicator || !countiesLoaded) {
      return {
        colorMap: {zz: "#ccc"},
        legend: [["#CFE1F6", "0-0"]],
      };
    }

    // const entries = rows.filter((item) => item.i_id === categId && item.c_id === crtIndicator.id);

    const vMap = [];
    rows.forEach((county) => {
      county.answers.forEach((category) => {
        if (category.stepId === categId) {
          category.indicators.forEach((indicator) => {
            if (indicator.indicatorId === crtIndicator.id) {
              const currentYearValObj = indicator.values.find((valObj) => valObj.year === crtYear);

              // TODO check if null is ok as a value
              vMap.push([county.institutionId, currentYearValObj ? currentYearValObj.value : null]);
            }
          });
        }
      });
    });
    const valueMap = Map<number, number>(vMap);
    const maxValue = valueMap.max() + 1;
    const countyMap = Map<number, string>(counties.map((c) => [c.id, c.name.toLowerCase()]));
    const legendMap = COLORS.map(
      (v, i) => [
        v,
        `${Math.round(maxValue / 100 * (i * 20))}-${Math.round(maxValue / 100 * ((i + 1) * 20)) - 1}`,
      ],
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

// [{name:string,value:number}]
// export const countyBarChartData = createSelector(  // TODO remove duplication with the other bar chart data selectors
//   areCountiesStatsLoaded,
//   paramCategoryId,
//   currentIndicator,
//   currentYear,
//   cstats,
//   selectedCounties,
//   (loaded, categId, crtIndicator, crtYear, rows, selectedIds) => {
//     if (!loaded || !crtIndicator) {
//       return [];
//     }
//
//     const all = selectedIds.size === 0;
//     // const entries = rows.filter((item) => (
//     //   item.i_id === categId && item.c_id === crtIndicator.id && (all || selectedIds.has(item.m_id))
//     // ));
//     // return entries.map((entry) => ({name: countiesMap.get(entry.m_id), value: entry.v[crtYearStr]})).toArray()
//     //   .sort((a, b) => -1 * (a.value - b.value));
//
//     const entries = rows.filter((cStat) => all || selectedIds.has(cStat.institutionId));
//
//     // current year, current indicator, current step(category)
//     const mappedValuesArr = [];
//     // console.log(categId, currentIndicator.id, year);
//     entries
//       .forEach((entry) => {
//         // console.log(entry);
//         return entry.answers
//           .filter((categData) => categData.stepId === categId)
//           .forEach((categData) => {
//             // console.log(categData);
//             return categData.indicators
//               .filter((indicatorData) => indicatorData.indicatorId === crtIndicator.id)
//               .forEach((indicatorData) => {
//                 // console.log(indicatorData);
//                 return indicatorData.values
//                   .filter((indicatorValue) => indicatorValue.year === crtYear)
//                   .forEach((indicatorValue) => {
//                     // console.log(indicatorValue);
//                     return mappedValuesArr.push({
//                       name: entry.name,
//                       value: indicatorValue.value,  // parseInt(indicatorValue.value, 10),
//                     });
//                   });
//               });
//           });
//
//         // return {
//         //   // name: ministries.get(entry.m_id).name, // TODO treat properly later
//         //   // value: entry.v[year],
//         //   name: entry.name,
//         //   value: 300,
//         // },
//       });
//     // .toArray()
//
//     // console.log(mappedValuesArr);
//
//     return mappedValuesArr
//       .sort((a, b) => b.value - a.value);
//   },
// );

// const populationStats = createSelector(
//   areCountiesLoaded, counties, currentYear,
//   (loaded, data, year) => {
//     if (!loaded) {
//       return Map();
//     }
//
//     return Map<number, number>(data.map((e) => {
//       const selectedYearPopulationData = e.population.find((p) => p.year === year);
//       return [e.id, selectedYearPopulationData && selectedYearPopulationData.population];
//     }));
//   },
// );

// const countiesMap = Map<number, string>(COUNTIES.map((c) => [c.id, c.name]));  // TODO uncomment and refactor

// data [{x:"populationCount", y: 'statValue', z: "CountyName"}]
// export const countiesScatterChartData = createSelector(  // TODO uncomment?
//   areCountiesStatsLoaded,
//   areCountiesLoaded,
//   counties,
//   paramCategoryId,
//   currentIndicator,
//   currentYear,
//   cstats,
//   populationStats,
//   selectedCounties,
//   (loaded,
//    loadedCounties,
//    counties,
//    categId,
//    currentIndicator,
//    year,
//    rows: CStat[],
//    population: Map<number, string>,
//    selectedIds) => {  // rows: List<CStat>
//     if (!loaded || !currentIndicator || !loadedCounties) {
//       return [];
//     }
//
//     console.log(rows);
//     console.log(population);
//
//     const all = selectedIds.size === 0;
//     const y = year; // .toString();
//     // const entries = rows.filter((item) => (  // category, indicator, county
//     //   item.i_id === categId && item.c_id === category.id && (all || selectedIds.has(item.m_id))
//     // ));
//     //
//     // return entries.map((entry) => (
//     //   {z: countiesMap.get(entry.m_id), x: population.get(entry.m_id), y: entry.v[y]}
//     // )).toArray();
//
//     // same as for the ministriesScatterChartData
//     const entries = rows.filter((cStat) => all || selectedIds.has(cStat.institutionId));
//
//     const countyMap = Map<number, string>(counties.map((c) => [c.id, c.name.toLowerCase()]));
//
//     // current year, current indicator, current step(category)
//     const mappedValuesArr = [];
//     // console.log(categId, currentIndicator.id, year);
//     entries
//       .forEach((entry) => {
//         // console.log(entry);
//         return entry.answers
//           .filter((categData) => categData.stepId === categId)
//           .forEach((categData) => {
//             // console.log(categData);
//             return categData.indicators
//               .filter((indicatorData) => indicatorData.indicatorId === currentIndicator.id)
//               .forEach((indicatorData) => {
//                 // console.log(indicatorData);
//                 return indicatorData.values
//                   .filter((indicatorValue) => indicatorValue.year === y)
//                   .forEach((indicatorValue) => {
//                     // console.log(indicatorValue);
//                     return mappedValuesArr.push({
//                       z: countyMap.get(entry.institutionId),
//                       x: parseInt(population.get(entry.institutionId), 10),
//                       y: indicatorValue.value,  // parseFloat(
//                     });
//                   });
//               });
//           });
//       });
//
//     return mappedValuesArr;
//   },
// );
