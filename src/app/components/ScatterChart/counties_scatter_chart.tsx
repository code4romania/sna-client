import * as React from 'react';
import {Tooltip, YAxis, ZAxis, XAxis, ScatterChart, Scatter} from "recharts";
import {ApplicationState} from "../../redux/application_state";
import {MyTooltip, chartStyle} from "./index";
import {ScatterEntry} from "./ministries_scatter_chart";
import {countiesScatterChartData} from "../../selectors/counties";
const { connect } = require('react-redux');

interface Props {
  data?: ScatterEntry[];
  yTitle?: string;
}

// TODO show category item type: sesizări, zile, etc
@connect(
  (state: ApplicationState): Props => ({
    data: countiesScatterChartData(state),
  }),
)
export class CountiesScatterChart extends React.Component<Props, {}> {
  public render() {
    const yTitle = this.props.yTitle || "Sesizări";
    const xTitle = 'Număr locuitori / județ';
    const width = 460;
    const height = 400;
    return (
      <ScatterChart width={width} height={height}>
        <XAxis dataKey='x' name={xTitle} stroke="#CFD5D9"/>
        <YAxis dataKey='y' name={yTitle} stroke="#CFD5D9"/>
        <ZAxis dataKey='z' name='Județ'/>
        <Scatter name='M' data={this.props.data} fill='#4990E2'/>
        <Tooltip content={<MyTooltip/>} cursor={{strokeDasharray: '3 3'}}/>
        <text className={chartStyle.xtitle} textAnchor="end" transform="rotate(-90)" y="80" dy=".2em">{yTitle}</text>
        <g transform={`translate(0, ${height})`}>
          <text className={chartStyle.xtitle} textAnchor="end" y="-40" x={width}>{xTitle}</text>
        </g>
      </ScatterChart>
    );
  }
}
