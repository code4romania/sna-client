import * as React from 'react';

const s = require('./style.css');

interface Props {
  areStatsLoaded?: boolean;
  data?: any;
  // width: number;
  // height: number;
  // value: number; // percents
  // avg: number; // percents
}

export class LineChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    // const {width, height, valueTitle} = this.props;

    return (
      <div className={s.LineChart} style={{width: 230, height: 46}}>
        <div className={s.line}/>
        <div className={s.circle}/>
        <div className={s.avg_tick}/>
        <div className={s.avg_title}>media<br/>ministere</div>
      </div>
    );
  }
}
