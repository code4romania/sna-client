import * as React from 'react';

const style = require('./style.css');

export const Content = (props) => (
  <div className={style.Content}>
    {props.children}
  </div>
);
