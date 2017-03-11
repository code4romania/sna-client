import * as React from 'react';

interface Props {
  color?: string;
}

/* tslint:disable:max-line-length jsx-self-close */
export const ChartIcon = (props: Props) => {
  const color = props.color ? props.color : "#4990E2";

  return <svg width="24px" height="24px" viewBox="93 95 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
       transform="translate(94, 96)">
      <path d="M1.5,0.5 L1.5,20.5" stroke={color} strokeLinecap="square"></path>
      <path
        d="M3,8.00247329 C3,7.44882258 3.44335318,7 4.0093689,7 L5.9906311,7 C6.54809015,7 7,7.45576096 7,8.00247329 L7,19 L3,19 L3,8.00247329 Z"
        fill={color}></path>
      <path
        d="M8,4.00087166 C8,3.4481055 8.44335318,3 9.0093689,3 L10.9906311,3 C11.5480902,3 12,3.44463086 12,4.00087166 L12,19 L8,19 L8,4.00087166 Z"
        fill={color}></path>
      <path
        d="M13,11.9970301 C13,11.4463856 13.4433532,11 14.0093689,11 L15.9906311,11 C16.5480902,11 17,11.4530363 17,11.9970301 L17,19 L13,19 L13,11.9970301 Z"
        fill={color}></path>
      <path
        d="M18,16.9989566 C18,16.4472481 18.4433532,16 19.0093689,16 L20.9906311,16 C21.5480902,16 22,16.4426603 22,16.9989566 L22,19 L18,19 L18,16.9989566 Z"
        fill={color}></path>
      <path d="M21.5,20.5 L1.5,20.5" stroke={color} strokeLinecap="square"></path>
    </g>
  </svg>;
};
