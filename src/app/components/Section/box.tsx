import * as React from 'react';
import {filterStyle} from "./filters";

interface Props {
  children?: any;
  className: string;
}

export function Box(props: Props) {
  return (
    <div className={`${filterStyle.box} ${props.className || ""}`}>
      {props.children}
    </div>
  );
}
