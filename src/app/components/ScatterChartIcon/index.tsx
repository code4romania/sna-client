import * as React from 'react';

interface Props {
  color?: string;
}

/* tslint:disable:max-line-length jsx-self-close */
export const ScatterChartIcon = (props: Props) => {
  const color = props.color ? props.color : "#4990E2";

  return <svg width="24" height="24" viewBox="872 311 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd" transform="translate(873 312)">
      <ellipse fill={color} cx="19.5" cy="4.5" rx="1.5" ry="1.5"/>
      <ellipse fill={color} cx="5.5" cy="14.5" rx="1.5" ry="1.5"/>
      <ellipse fill={color} cx="11.5" cy="11.5" rx="1.5" ry="1.5"/>
      <circle fill={color} cx="17.5" cy="14.5" r="1.5"/>
      <path d="M1.5.5v20M21.5 20.5h-20" stroke={color} strokeLinecap="square"/></g>
  </svg>;
};
