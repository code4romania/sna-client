import * as React from 'react';

const style = require('./style.css');

interface Props {
  text: string;
}

export const Badge = (props: Props) => (
  <span className={style.Badge} data-badge={props.text} />
);
