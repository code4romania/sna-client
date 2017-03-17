import * as React from 'react';
import {Tooltip, YAxis, ZAxis, XAxis, ScatterChart, Scatter} from "recharts";
import {areMinistriesStatsLoaded, ministriesScatterChartData} from "../../selectors/index";
import {ApplicationState} from "../../redux/application_state";
import {MyTooltip} from "./index";
const { connect } = require('react-redux');

interface ScatterEntry {
  x: number;
  y: number;
  z: string;
}

interface Props {
  areMinistriesStatsLoaded?: boolean;
  data?: ScatterEntry[];
}

// TODO show category item type: sesizări, zile, etc
@connect(
  (state: ApplicationState): Props => ({
    areMinistriesStatsLoaded: areMinistriesStatsLoaded(state),
    data: ministriesScatterChartData(state),
  }),
)
export class MinistriesScatterChart extends React.Component<Props, {}> {
  public render() {
    return (
      <ScatterChart width={400} height={400}>
        <XAxis dataKey='x' name='Angajați' stroke="#CFD5D9"/>
        <YAxis dataKey='y' name='Sesizări' stroke="#CFD5D9"/>
        <ZAxis dataKey='z' name='Minister'/>
        <Scatter name='M' data={this.props.data} fill='#4990E2'/>
        <Tooltip content={<MyTooltip/>} cursor={{strokeDasharray: '3 3'}}/>
      </ScatterChart>
    );
  }
}
