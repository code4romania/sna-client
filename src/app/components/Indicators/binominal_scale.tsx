import * as React from 'react';

import {Box} from '../Section/box';
import {BinominalScaleLabels} from '../../containers/Indicators/indicator1_one_year_grouping';

export interface BinominalScaleProps extends BinominalScaleLabels {
  value: string;
}

function BinominalScale(props: BinominalScaleProps) {
  const {title, value} = props;

  /* tslint:disable:max-line-length */
  const [color, icon] = (value && value.toLowerCase()) === 'da'
    ? ['#24B47E', (
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
        <defs>
          <clipPath id="a">
            <path clipRule="evenodd" d="M-727-542H553V577H-727z"/>
          </clipPath>
        </defs>
        <g clipPath="url(#a)">
          <path fill="#24B47E" d="M13.5 27C20.956 27 27 20.956 27 13.5S20.956 0 13.5 0 0 6.044 0 13.5 6.044 27 13.5 27z"/>
        </g>
        <defs>
          <clipPath id="b">
            <path clipRule="evenodd" d="M-727-542H553V577H-727z"/>
          </clipPath>
        </defs>
        <g clipPath="url(#b)">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M8 12.517l4 4L19.517 9"/>
        </g>
      </svg>
    )]
    : ['#E64467', (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
          <defs>
            <clipPath id="a">
              <path clipRule="evenodd" d="M-720-2004H560V232H-720z"/>
            </clipPath></defs>
          <g clipPath="url(#a)">
            <path fill="#E74468" d="M13.5 27C20.956 27 27 20.956 27 13.5S20.956 0 13.5 0 0 6.044 0 13.5 6.044 27 13.5 27z"/>
          </g>
          <defs>
            <clipPath id="b">
              <path clipRule="evenodd" d="M-720-2004H560V232H-720z"/>
            </clipPath>
          </defs>
          <g clipPath="url(#b)">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M7.5 7.5l12.042 12.042"/>
          </g>
          <defs>
            <clipPath id="c">
              <path clipRule="evenodd" d="M-720-2004H560V232H-720z"/>
            </clipPath>
          </defs>
          <g clipPath="url(#c)">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M19.5 7.5L7.458 19.542"/>
          </g>
        </svg>
    )];
  /* tslint:enable:max-line-length */

  return (
      <Box className='small_box'>
        <div className='title'>{title}</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {icon}
          <span className='big_value' style={{color}}>&nbsp;{value && value.toUpperCase()}</span>
        </div>
      </Box>
  );
}

export default BinominalScale;
