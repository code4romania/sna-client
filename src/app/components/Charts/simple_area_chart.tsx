import * as React from 'react';
import {ComposedChart, Tooltip, YAxis, XAxis, Area, Bar} from "recharts";

const s = require('./style.css');

export interface AreaChartValue {
  year: number;
  value1: number;
  value2?: number;
}

// TODO remove
// const mockData = [
//   {year: 2012, value: 10, v2: 5},
//   {year: 2013, value: 12, v2: 8},
//   {year: 2014, value: 21, v2: 10},
//   {year: 2015, value: 15, v2: 10},
//   {year: 2016, value: 17, v2: 12},
// ];

interface Props {
  areStatsLoaded?: boolean;
  data?: AreaChartValue[];
  width: number;
  height: number;
  showTwoAreas?: boolean;
}

const CustomTooltip  = React.createClass({
  // propTypes: {
  //   type: React.PropTypes.string,
  //   payload: React.PropTypes.array,
  //   label: React.PropTypes.string,
  // },
  //
  // getIntroOfPage(label) {
  //   if (label === 'Page A') {
  //     return "Page A is about men's clothing";
  //   } else if (label === 'Page B') {
  //     return "Page B is about women's dress";
  //   } else if (label === 'Page C') {
  //     return "Page C is about women's bag";
  //   } else if (label === 'Page D') {
  //     return "Page D is about household goods";
  //   } else if (label === 'Page E') {
  //     return "Page E is about food";
  //   } else if (label === 'Page F') {
  //     return "Page F is about baby food";
  //   }
  // },

  // recharts-default-tooltip
  //
  // margin: 0px;
  // padding: 10px;
  // background-color: rgb(255, 255, 255);
  // border: 1px solid rgb(204, 204, 204);
  // white-space: nowrap;

      // p.recharts-tooltip-label
      // ul.recharts-tooltip-item-list

// {/*<div className="custom-tooltip">*/}
// {/*<p className="label">{`${label} : ${payload[0].value}`}</p>*/}
// {/*<p className="intro">{this.getIntroOfPage(label)}</p>*/}
// {/*<p className="desc">Anything you want can be displayed here.</p>*/}
// {/*</div>*/}

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label, separator } = this.props;
      // console.log(label);
      // console.log(payload);
      // console.log(this.props);
      return (
      <div className={s.Tooltip}>
        <p className={s.tooltipLabel}>An: {label}</p>
        <ul className={s.tooltipItemList}>
          <li>Valoare{payload[2] ? ' 1' : null}{separator}{payload[0].value}</li>{/*payload[0].dataKey*/}
          {payload[2] ? <li>Valoare 2{separator}{payload[2].value}</li> : null}
        </ul>
      </div>
      );
    }

    return null;
  },
});

export class SimpleAreaChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {data, showTwoAreas} = this.props;
    // const chartData = data; // ? data : mockData;

    // console.log(data);

    return (
      <ComposedChart width={this.props.width} height={this.props.height} data={data}
                 margin={{top: 5, right: 15, left: 20, bottom: 0}}>
        <XAxis dataKey="year" tickLine={false}
               tick={{fontFamily: "Roboto", fontSize: "11px", color: "#93A6B1"}} />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip/>}/>
        <Bar dataKey='value1' barSize={1} fill='#4990E2'/>
        <Area type='linear' dot={{ stroke: '#4990E2', strokeWidth: 2, r: 3, fill: "#fff", fillOpacity: 1 }}
              dataKey='value1' stroke='#4990E2' fill='#CFE1F6' fillOpacity={0.43}/>
        {showTwoAreas && <Area dataKey="value2" fill="#24B47E" stroke='none' fillOpacity={0.3}/>}
      </ComposedChart>
    );
  }
}
