import * as React from 'react';
import {Tooltip, YAxis, ZAxis, XAxis, ScatterChart, Scatter} from "recharts";
import {
  anticorruptionAdminsScatterChartData,
  areAnticorruptionStatsLoaded,
  areMinistryStatsLoaded,
  ministriesScatterChartData,
} from "../../selectors/index";
import {ApplicationState} from "../../redux/application_state";
import {MyTooltip, chartStyle} from "./index";
const { connect } = require('react-redux');
import { ADMINISTRATION_TYPE } from '../../constants';

export interface ScatterEntry {
  x: number;
  y: number;
  z: string;
}

interface Props {
  type?: string;
  areStatsLoaded?: boolean;
  data?: ScatterEntry[];
}

// TODO show category item type: sesizări, zile, etc
@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    areStatsLoaded: ownProps.type === ADMINISTRATION_TYPE.MINISTRY
      ? areMinistryStatsLoaded(state)
      : areAnticorruptionStatsLoaded(state),
    data: ownProps.type === ADMINISTRATION_TYPE.MINISTRY
      ? ministriesScatterChartData(state)
      : anticorruptionAdminsScatterChartData(state),
  }),
)
export class AdministrationsScatterChart extends React.Component<Props, {}> {
  public render() {
    const {data, type, areStatsLoaded} = this.props;
    // console.log('s--------------');
    // console.log(type);
    // console.log(areStatsLoaded);
    // console.log(data);

    if (!areStatsLoaded) {
      return <noscript/>;
    }

    const width = 400;
    const height = 400;
    const xTitle = 'Angajați';
    const yTitle = 'Sesizări';

    return (
      <ScatterChart width={width} height={height}>
        <XAxis dataKey='x' name={xTitle} stroke="#CFD5D9"/>
        <YAxis dataKey='y' name={yTitle} stroke="#CFD5D9"/>
        <ZAxis dataKey='z' name={type === ADMINISTRATION_TYPE.MINISTRY ? 'Minister' : 'Administrație'}/>
        <Scatter name='M' data={data} fill='#4990E2'/>
        <Tooltip content={<MyTooltip/>} cursor={{strokeDasharray: '3 3'}}/>
        <text className={chartStyle.xtitle} textAnchor="end" transform="rotate(-90)" y="80" dy=".2em">{yTitle}</text>
        <g transform={`translate(0, ${height})`}>
          <text className={chartStyle.xtitle} textAnchor="end" y="-40" x={width}>{xTitle}</text>
        </g>
      </ScatterChart>
    );
  }
}
