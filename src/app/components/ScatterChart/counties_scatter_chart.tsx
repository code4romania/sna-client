import * as React from 'react';
import {Tooltip, YAxis, ZAxis, XAxis, ScatterChart, Scatter} from "recharts";
import {ApplicationState} from "../../redux/application_state";
import {MyTooltip} from "./index";
import {ScatterEntry} from "./ministries_scatter_chart";
import {countiesScatterChartData} from "../../selectors/counties";
const { connect } = require('react-redux');

interface Props {
  data?: ScatterEntry[];
}

// TODO show category item type: sesizări, zile, etc
@connect(
  (state: ApplicationState): Props => ({
    data: countiesScatterChartData(state),
  }),
)
export class CountiesScatterChart extends React.Component<Props, {}> {
  public render() {
    return (
      <ScatterChart width={460} height={400}>
        <XAxis dataKey='x' name='Număr locuitor / județ' stroke="#CFD5D9"/>
        <YAxis dataKey='y' name='Sesizări' stroke="#CFD5D9"/>
        <ZAxis dataKey='z' name='Județ'/>
        <Scatter name='M' data={this.props.data} fill='#4990E2'/>
        <Tooltip content={<MyTooltip/>} cursor={{strokeDasharray: '3 3'}}/>
      </ScatterChart>
    );
  }
}
