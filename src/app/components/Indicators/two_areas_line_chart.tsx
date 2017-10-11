import * as React from 'react';
import * as _ from 'lodash';
const { connect } = require('react-redux');

// import {DptDoughnutChartLabels} from '../../containers/Indicators/indicator1_one_year_grouping';
// import {PieValue, SimplePieChart} from '../Charts/simple_pie_chart';
// import {DptDoughnutChartProps} from './dpt_doughnut_chart';
import {Box} from '../Section/box';
import {AreaChartValue, SimpleAreaChart} from '../Charts/simple_area_chart';
import {DptDoughnutChartLabels} from '../../containers/Indicators/indicator1_one_year_grouping';
import {ResponsiveBrowser} from '../../models/responsiveBrowser';
import {ApplicationState} from '../../redux/application_state';

// // const style = require('./style.css');
//
export interface TwoAreasLineChartProps extends DptDoughnutChartLabels {
  leftValue: AreaChartValue[];
  // centerValue: AreaChartValue[];
  rightValue: AreaChartValue[];
}

interface Props extends TwoAreasLineChartProps {
  browser?: ResponsiveBrowser;
}

@connect(
  (state: ApplicationState, ownProps: TwoAreasLineChartProps): Props => ({
    ...ownProps,
    browser: state.browser,
  }),
)
export class TwoAreasLineChart extends React.Component<Props, {}> {
  public render() {
    const {leftValue, rightValue, desc1, desc2, title, browser} = this.props;

    const width = (browser.lessThan.medium && browser.width !== browser.breakpoints.small)
      ? browser.width - 2 * 20 - 2 * 15
      : 297;

    return (
      <Box className="big_box">
        <div className="title">{title}</div>
        <div className="two_cols">
          <div className="legend">
            <div className="legend_row"><span className="circle1"/> {desc1}</div>
            <div className="legend_row"><span className="circle2"/> {desc2}</div>
          </div>
          <div>
            <SimpleAreaChart width={width} height={148}
                             showTwoAreas={true}
                             data={combineData(leftValue, rightValue)}/>
          </div>
        </div>
      </Box>
    );
  }
}

// v2 smaller chart values, green
function combineData(v1: AreaChartValue[], v2: AreaChartValue[]): AreaChartValue[] {
  const v2map = _.groupBy(v2, "year");
  return v1.map((elem) => (({
    ...elem,
    value2: v2map[elem.year][0].value1,
  } as AreaChartValue)));
}
