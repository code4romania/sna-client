import * as React from 'react';

import {Box} from '../Section/box';
import {LineChart} from '../Charts/line_chart';
import {
  MixedVerticalBarChartMediumReferenceLinearScaleLabels,
} from '../../containers/Indicators/indicator1_one_year_grouping';

// const style = require('./style.css');

export interface MixedVerticalBarChartMediumReferenceLinearScaleProps extends
  MixedVerticalBarChartMediumReferenceLinearScaleLabels {
  value: number;
  average: number;
}

export const MixedVerticalBarChartMediumReferenceLinearScale = (props:
  MixedVerticalBarChartMediumReferenceLinearScaleProps) => (
  <Box className="small_box">
    <div className="title">
      {props.title}
    </div>
    <div>
      <div className="box_bar">
        <div className="stacked_bar">
          <div className="bar">
            <div className="value" style={{height: props.value + '%'}}/>
          </div>
        </div>
        <span className="value">{props.value}</span>
        <span className="percent">%</span>
      </div>
      <LineChart width={230}
                 height={46}
                 value={props.value}
                 avg={props.average}/>
    </div>
  </Box>
);
