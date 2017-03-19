import * as React from 'react';
import {filterStyle} from "./filters";

interface Props {
  children?: any;
}

export function Box(props: Props) {
  return (
    <div className={filterStyle.box}>
      {props.children}
    </div>
  );
}
