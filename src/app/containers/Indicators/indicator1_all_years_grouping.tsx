import {
  DptDoughnutChartLabels,
  MediumReferenceLinearScaleLabels,
  MixedVerticalBarChartMediumReferenceLinearScaleLabels,
  NominalScaleLabels,
  INDICATOR1_ONE_YEAR_GROUPING,
} from './indicator1_one_year_grouping';

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
