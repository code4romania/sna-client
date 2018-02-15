import * as React from 'react';
import * as _ from 'lodash';
import {Map} from 'immutable';
const {connect} = require('react-redux');

import {ApplicationState} from '../../redux/application_state';
import {
  anticorruptionAdminCategoryStatsForYear,
  IndicatorId,
  MaxAvg,
  ministryCategoryStatsForYear,
  ministryCategoryMaxAvgStatsForYear,
  anticorruptionAdminCategoryMaxAvgStatsForYear,
  countyCategoryStatsForYear,
  countyCategoryMaxAvgStatsForYear,
} from '../../selectors/indicators';
import {currentCategory} from '../../selectors/index';
import {Category} from '../../models/category';
import {
  INDICATOR1_ONE_YEAR_GROUPING,
  DptDoughnutChartLabels,
  MediumReferenceLinearScaleLabels, BinominalScaleLabels,
} from './indicator1_one_year_grouping';
import {INDICATOR1_TYPES} from './indicator1_types';
import {
  DptDoughnutChart,
  DptDoughnutChartProps,
} from '../../components/Indicators/dpt_doughnut_chart';
import MediumReferenceLinearScale,
  {
  MediumReferenceLinearScaleProps,
} from '../../components/Indicators/medium_reference_linear_scale';
import MixedVerticalBarChartMediumReferenceLinearScale,
  {
  MixedVerticalBarChartMediumReferenceLinearScaleProps,
} from '../../components/Indicators/mixed_vertical_bar_chart_medium_reference_linear_scale';
import {
  NominalScale,
  NominalScaleProps,
} from '../../components/Indicators/nominal_scale';
import {chooseByAdministrationType} from '../../helpers/administration_helper';
import BinominalScale, {BinominalScaleProps} from '../../components/Indicators/binominal_scale';

interface Props {
  type?: string;
  currentCategory?: Category;
  categoryStats?: Map<IndicatorId, number>;
  categoryMaxAvgStats?: Map<IndicatorId, MaxAvg>;
}

@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    currentCategory: currentCategory(state),
    categoryStats: chooseByAdministrationType([
       ministryCategoryStatsForYear(state),
       anticorruptionAdminCategoryStatsForYear(state),
       countyCategoryStatsForYear(state),
     ], ownProps.type),
    categoryMaxAvgStats: chooseByAdministrationType([
       ministryCategoryMaxAvgStatsForYear(state),
       anticorruptionAdminCategoryMaxAvgStatsForYear(state),
       countyCategoryMaxAvgStatsForYear(state),
     ], ownProps.type),
  }),
)
export class Indicator1OneYear extends React.Component<Props, any> {  // TODO rename to IndicatorsOneYear
  public render(): JSX.Element {
    const {
      currentCategory,
      categoryStats,
      categoryMaxAvgStats,
    } = this.props;

    if (!(categoryStats && categoryStats.size)) {
      return null;
    }

    const indicatorGroup = INDICATOR1_ONE_YEAR_GROUPING.find((ig) => ig.categoryId === currentCategory.id);

    if (!indicatorGroup) {
      return null;
    }

    const indicatorMappings = indicatorGroup.indicatorGrouping.map((indicator, idx) => {
      switch (indicator.indicatorType) {

        case INDICATOR1_TYPES.DPT_DOUGHNUT_CHART: {
          const labels = (indicator.labels as DptDoughnutChartLabels);
          const props: DptDoughnutChartProps = {
            title: labels.title,
            desc1: labels.desc1,
            valueTitle: labels.valueTitle,
            desc2: labels.desc2,
            leftValue: categoryStats.get(indicator.indicators[0]),
            centerValue: categoryStats.get(indicator.indicators[1]),
            rightValue: indicator.indicators[2]
              ? categoryStats.get(indicator.indicators[2])
              : (categoryStats.get(indicator.indicators[1]) - categoryStats.get(indicator.indicators[0])),
          };

          return <DptDoughnutChart {...props} key={idx}/>;
        }

        case INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE:
        case INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE: {
          const value = categoryStats.get(indicator.indicators[0]);
          const catMaxAvg = categoryMaxAvgStats.get(indicator.indicators[0]);

          if (!catMaxAvg) {
            return null;
          }

          const percentAverage = catMaxAvg.avg * 100 / catMaxAvg.max;
          const percentValue = value * 100 / catMaxAvg.max;
          const labels = (indicator.labels as MediumReferenceLinearScaleLabels);

          const props: MediumReferenceLinearScaleProps = {
            title: labels.title,
            note: labels.note,
            desc: labels.desc,
            value,
            percentValue,
            percentAverage,
            big: indicator.indicatorType === INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE,
          };

          return <MediumReferenceLinearScale {...props} key={idx}/>;
        }

        case INDICATOR1_TYPES.BINOMINAL_SCALE: {
          const value = categoryStats.get(indicator.indicators[0]);

          if (!value) {
            return null;
          }

          const labels = (indicator.labels as BinominalScaleLabels);

          const props: BinominalScaleProps = {
            title: labels.title,
            value: value + '',
          };

          return <BinominalScale {...props} key={idx}/>;
        }

        case INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE: {
          const value = categoryStats.get(indicator.indicators[0]);
          const catMaxAvg = categoryMaxAvgStats.get(indicator.indicators[0]);

          if (!catMaxAvg) {
            return null;
          }

          const average = catMaxAvg.avg;

          const props: MixedVerticalBarChartMediumReferenceLinearScaleProps = {
            title: indicator.labels.title,
            value,
            average,
          };

          return <MixedVerticalBarChartMediumReferenceLinearScale {...props} key={idx}/>;
        }

        case INDICATOR1_TYPES.NOMINAL_SCALE: {
          const value = categoryStats.get(indicator.indicators[0]) + '';

          const props: NominalScaleProps = {
            title: indicator.labels.title,
            value,
          };

          return <NominalScale {...props} key={idx}/>;
        }

        default: {
          return null;
        }
      }
    });

    const wrappedIndicatorMappings = wrapIndicators(indicatorMappings, indicatorGroup);

    return (
      <div>
        {wrappedIndicatorMappings}
      </div>
    );
  }
}

export function getNoOfOccupiedCols(buffer, idx, indicatorGroup) {
  const pastOccupiedColIds = Array(buffer.length)
    .fill(1)
    .map((n, i) => idx - n - i);

  return pastOccupiedColIds
    .reduce((accum, id) => {
      return accum += indicatorGroup.indicatorGrouping[id].indicatorType === INDICATOR1_TYPES.DPT_DOUGHNUT_CHART
        ? 2
        : 1;
    }, 0);
}

export function wrapIndicators(indicatorMappings, indicatorGroup) {
  indicatorMappings = _.filter(indicatorMappings, (i) => !_.isEmpty(i));

  const wrappedIndicatorMappings = [];
  indicatorMappings.reduce((buffer, indicator, idx, arr) => {
    let alreadyIncluded = false;
    if (buffer.length === 0) {
      buffer.push(indicator);
      alreadyIncluded = true;

      if (idx !== arr.length - 1) {
        return buffer;
      }
    }

    const noOfOccupiedCols = getNoOfOccupiedCols(buffer, idx, indicatorGroup);

    if (noOfOccupiedCols === 1 && !alreadyIncluded) {
      buffer.push(indicator);

      if (idx !== arr.length - 1 && getNoOfOccupiedCols(buffer, idx + 1, indicatorGroup) < 3) {
        return buffer;
      }
    } else if (noOfOccupiedCols === 2 && !alreadyIncluded) {
      const indicatorMeta = indicatorGroup.indicatorGrouping[idx];
      if (indicatorMeta.indicatorType !== INDICATOR1_TYPES.DPT_DOUGHNUT_CHART) {
        buffer.push(indicator);

        if (idx !== arr.length - 1 && getNoOfOccupiedCols(buffer, idx + 1, indicatorGroup) < 3) {
          return buffer;
        }
      } else {
        console.error('Please check the grid row\'s items.', idx);
      }
    }

    wrappedIndicatorMappings.push((
      <div className="top_align" key={'lev2_' + idx}>
        {buffer}
      </div>
    ));

    return [];
  }, []);

  return wrappedIndicatorMappings;
}
