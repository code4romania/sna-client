import * as React from 'react';
import {Bar, Tooltip, YAxis, XAxis, BarChart} from "recharts";
import {BarLabel} from "../BarLabel/index";
import {ApplicationState} from "../../redux/application_state";
import {
  anticorruptionAdminsBarChartData,
  areAnticorruptionStatsLoaded,
  areMinistryStatsLoaded,
  ministryBarChartData,
} from "../../selectors/index";
const { connect } = require('react-redux');
import { ADMINISTRATION_TYPE } from '../../constants';

interface Props {
  type?: string;
  areStatsLoaded?: boolean;
  data?: any;
}

@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    areStatsLoaded: ownProps.type === ADMINISTRATION_TYPE.MINISTRY
      ? areMinistryStatsLoaded(state)
      : areAnticorruptionStatsLoaded(state),
    data: ownProps.type === ADMINISTRATION_TYPE.MINISTRY
      ? ministryBarChartData(state)
      : anticorruptionAdminsBarChartData(state),
  }),
)
export class AdministrationBarChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {data, areStatsLoaded} = this.props;
    // console.log('b--------------');
    // console.log(this.props.type);
    // console.log(areStatsLoaded);
    // console.log(data);

    if (!areStatsLoaded) {
      return <noscript/>;
    }

    return (
      <BarChart width={700}
                height={data.length * 45}
                data={data}
                layout="vertical"
                maxBarSize={250}
                margin={{top: 5, right: 100, left: 0, bottom: 5}}>
        <XAxis type="number" hide={true}/>
        <YAxis type="category" dataKey="name" hide={true} />
        {/*<CartesianGrid strokeDasharray="3 3"/>*/}
        <Tooltip/>
        {/*<Legend />*/}
        <Bar dataKey="value" fill="#4990E2" label={<BarLabel />} name="Număr de sesizări"/>
      </BarChart>
    );
  }
}
