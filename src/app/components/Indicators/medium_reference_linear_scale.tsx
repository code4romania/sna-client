import * as React from 'react';
import sizeMe from 'react-sizeme';

import {Box} from '../Section/box';
import {LineChart} from '../Charts/line_chart';
import {MediumReferenceLinearScaleLabels} from '../../containers/Indicators/indicator1_one_year_grouping';
import {ResizeMeData} from '../../models/resizeMeData';

export interface MediumReferenceLinearScaleProps extends MediumReferenceLinearScaleLabels {
  value: number;
  percentValue: number;
  percentAverage: number;
  big: boolean;
  size?: ResizeMeData;
}

function MediumReferenceLinearScale(props: MediumReferenceLinearScaleProps) {
  const {big, title, note, value, desc, percentValue, percentAverage, size} = props;

  const width = (size && size.width)
    ? (size.width - 40 < 230)
      ? size.width - 40
      : 230
    : 230;

  return (
      <Box className={big ? 'big_box' : 'small_box'}>
        <div className='title'>{title}</div>
        <div className='note'>{note}</div>
        <div>
          <div className='big_value'>{value}</div>
          <div className='big_value_desc'>{desc}</div>
          <LineChart width={width}
                     height={46}
                     value={percentValue}
                     avg={percentAverage}/>
        </div>
      </Box>
  );
}

export default sizeMe({ noPlaceholder: true })(MediumReferenceLinearScale);
