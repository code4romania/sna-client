import * as React from 'react';

const style = require('./style.css');

export const Sidebar = () => (
  <div className={style.Sidebar}>
    <div className={style.title}>
      Indicatori SNA
    </div>
    <div>
      <ul>
        <li>Indicator 1</li>
        <li>Indicator 2</li>
        <li>Indicator 3</li>
        <li>Indicator 4</li>
      </ul>
    </div>
  </div>
);
