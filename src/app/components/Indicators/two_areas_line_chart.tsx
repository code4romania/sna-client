import * as React from 'react';
import * as _ from 'lodash';

// import {DptDoughnutChartLabels} from '../../containers/Indicators/indicator1_one_year_grouping';
// import {PieValue, SimplePieChart} from '../Charts/simple_pie_chart';
import {Box} from '../Section/box';
import {AreaChartValue, SimpleAreaChart} from '../Charts/simple_area_chart';
// import {DptDoughnutChartProps} from './dpt_doughnut_chart';
import {DptDoughnutChartLabels} from "../../containers/Indicators/indicator1_one_year_grouping";

// // const style = require('./style.css');
//
export interface TwoAreasLineChartProps extends DptDoughnutChartLabels {
  leftValue: AreaChartValue[];
  // centerValue: AreaChartValue[];
  rightValue: AreaChartValue[];
}

export const TwoAreasLineChart = (props: TwoAreasLineChartProps) => (
  <Box className="big_box">
    <div className="title">{props.title}</div>
      <div className="two_cols">
        <div className="legend">
        <div className="legend_row"><span className="circle1"/> {props.desc1}</div>
        <div className="legend_row"><span className="circle2"/> {props.desc2}</div>
      </div>
      <div>
        <SimpleAreaChart width={297} height={148}
                         showTwoAreas={true}
                         data={combineData(props.leftValue, props.rightValue)}/>
      </div>
    </div>
  </Box>
);

// v2 smaller chart values, green
function combineData(v1: AreaChartValue[], v2: AreaChartValue[]): AreaChartValue[] {
  const v2map = _.groupBy(v2, "year");
  return v1.map((elem) => (({
    ...elem,
    value2: v2map[elem.year][0].value1,
  } as AreaChartValue)));
}
