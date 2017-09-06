// import {INDICATOR1_TYPES} from './indicator1_types';
import {
  DptDoughnutChartLabels,
  MediumReferenceLinearScaleLabels,
  MixedVerticalBarChartMediumReferenceLinearScaleLabels,
  NominalScaleLabels,
  INDICATOR1_ONE_YEAR_GROUPING,
} from './indicator1_one_year_grouping';

// export interface DptDoughnutChartLabels {
//   title: string;
//   desc1: string;
//   valueTitle: string;
//   desc2: string;
// }
//
// export interface MediumReferenceLinearScaleLabels {
//   title: string;
//   note: string;
//   desc: string;
// }
//
// export interface MixedVerticalBarChartMediumReferenceLinearScaleLabels {
//   title: string;
// }
//
// export interface NominalScaleLabels {
//   title: string;
// }

export const INDICATOR1_ALL_YEARS_GROUPING: Array<{
  categoryId: number;
  indicatorGrouping: Array<{
    indicators: number[];
    indicatorType: string;
    labels: (DptDoughnutChartLabels
      | MediumReferenceLinearScaleLabels
      | MixedVerticalBarChartMediumReferenceLinearScaleLabels
      | NominalScaleLabels);
  }>
}> = INDICATOR1_ONE_YEAR_GROUPING;
