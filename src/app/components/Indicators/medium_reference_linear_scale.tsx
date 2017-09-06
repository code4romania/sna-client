import * as React from 'react';

import {Box} from '../Section/box';
import {LineChart} from '../Charts/line_chart';
import { MediumReferenceLinearScaleLabels } from '../../containers/Indicators/indicator1_one_year_grouping';

// const style = require('./style.css');

export interface MediumReferenceLinearScaleProps extends MediumReferenceLinearScaleLabels {
  value: number;
  percentValue: number;
  percentAverage: number;
  big: boolean;
}

export const MediumReferenceLinearScale = (props: MediumReferenceLinearScaleProps) => (
  <Box className={props.big ? "big_box" : "small_box"}>
    <div className="title">{props.title}</div>
    <div className="note">{props.note}</div>
    <div>
      <div className="big_value">{props.value}</div>
      <div className="big_value_desc">{props.desc}</div>
      <LineChart width={230}
                 height={46}
                 value={props.percentValue}
                 avg={props.percentAverage}/>
    </div>
  </Box>
);
