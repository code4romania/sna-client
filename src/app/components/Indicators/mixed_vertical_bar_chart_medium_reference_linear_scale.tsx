import * as React from 'react';
import sizeMe from 'react-sizeme';

import {Box} from '../Section/box';
import {LineChart} from '../Charts/line_chart';
import {
  MixedVerticalBarChartMediumReferenceLinearScaleLabels,
} from '../../containers/Indicators/indicator1_one_year_grouping';
import {ResizeMeData} from '../../models/resizeMeData';

export interface MixedVerticalBarChartMediumReferenceLinearScaleProps extends
  MixedVerticalBarChartMediumReferenceLinearScaleLabels {
    value: number;
    average: number;
    size?: ResizeMeData;
}

function MixedVerticalBarChartMediumReferenceLinearScale(props:
  MixedVerticalBarChartMediumReferenceLinearScaleProps) {
  const {title, value, average, size} = props;

  const width = (size && size.width)
    ? (size.width - 40 < 230)
      ? size.width - 40
      : 230
    : 230;

  return (
    <Box className="small_box">
    <div className="title">
      {title}
    </div>
    <div>
      <div className="box_bar">
        <div className="stacked_bar">
          <div className="bar">
            <div className="value"
                 style={{height: value + '%'}}/>
          </div>
        </div>
        <span className="value">{value}</span>
        <span className="percent">%</span>
      </div>
      <LineChart width={width}
                 height={46}
                 value={value}
                 avg={average}/>
    </div>
  </Box>
  );
}

export default sizeMe({ noPlaceholder: true })(MixedVerticalBarChartMediumReferenceLinearScale);
