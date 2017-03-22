import * as React from 'react';

const s = require('./style.css');

interface Props {
  width: number;
  height: number;
  value: number; // percents
  avg: number; // percents
}

export function LineChart(props: Props) {
  return (
    <div className={s.LineChart} style={{width: props.width, height: props.height}}>
      <div className={s.line}/>
      <div className={s.circle} style={{left: `${props.value}%`}}/>
      <div className={s.avg_tick}  style={{left: `${props.avg}%`}}/>
      <div className={s.avg_title} style={{left: `${props.avg}%`}}>
        <div className={s.avg_text}>media<br/>ministere</div>
      </div>
    </div>
  );
}
