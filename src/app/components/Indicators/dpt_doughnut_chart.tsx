import * as React from 'react';
import * as _ from 'lodash';

import {DptDoughnutChartLabels} from '../../containers/Indicators/indicator1_one_year_grouping';
import {PieValue, SimplePieChart} from '../Charts/simple_pie_chart';
import {Box} from '../Section/box';

// const style = require('./style.css');

export interface DptDoughnutChartProps extends DptDoughnutChartLabels {
  leftValue: number;
  centerValue: number;
  rightValue: number;
}

function getFormattedNumber(value) {
  if (!_.isNumber(value)) {
    return value;
  }

  return _.round(value, 2);
}

export const DptDoughnutChart = (props: DptDoughnutChartProps) => (
  <Box className="big_box">
    <div className="title">{props.title}</div>
    <div className="pie_row">
      <div className="pie_desc blue">
        <div className="number">{getFormattedNumber(props.leftValue)}</div>
        <div className="desc">{props.desc1}</div>
      </div>
      <SimplePieChart width={150}
                      height={150}
                      valueTitle={props.valueTitle}
                      data={pieData(getFormattedNumber(props.leftValue), getFormattedNumber(props.rightValue))}
                      total={props.centerValue}/>
      <div className="pie_desc green">
        <div className="number">{getFormattedNumber(props.rightValue)}</div>
        <div className="desc">{props.desc2}</div>
      </div>
    </div>
  </Box>
);

function pieData(max: number, min: number): PieValue[] {
  return [{name: "A", value: max}, {name: "B", value: min}];
}
