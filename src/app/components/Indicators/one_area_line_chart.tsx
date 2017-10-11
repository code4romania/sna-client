import * as React from 'react';

import {Box} from '../Section/box';
import {AreaChartValue, SimpleAreaChart} from '../Charts/simple_area_chart';
import {MediumReferenceLinearScaleLabels} from '../../containers/Indicators/indicator1_one_year_grouping';

export interface OneAreaLineChartProps extends MediumReferenceLinearScaleLabels {
  value: AreaChartValue[];
  big: boolean;
}

export const OneAreaLineChart = (props: OneAreaLineChartProps) => (
  <Box className={props.big ? "big_box" : "small_box"}>
    <div className="title">{props.title}</div>
    <div className="note">{props.note}</div>
    <div>
      <SimpleAreaChart width={230} height={131} data={props.value}/>
    </div>
  </Box>
);
