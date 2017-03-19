import * as React from 'react';
import {Bar, Tooltip, YAxis, XAxis, BarChart} from "recharts";
import {BarLabel} from "../BarLabel/index";
import {ApplicationState} from "../../redux/application_state";
import {areMinistriesStatsLoaded, ministryBarChartData} from "../../selectors/index";
const { connect } = require('react-redux');

interface Props {
  areStatsLoaded?: boolean;
  data?: any;
}

@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areMinistriesStatsLoaded(state),
    data: ministryBarChartData(state),
  }),
)
export class MinistryBarChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {data, areStatsLoaded} = this.props;

    if (!areStatsLoaded) {
      return <noscript/>;
    }

    return (
      <BarChart width={700} height={data.length * 45} data={data}
                layout="vertical"
                maxBarSize={250}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis type="number" hide={true}/>
        <YAxis type="category" dataKey="name" hide={true} />
        {/*<CartesianGrid strokeDasharray="3 3"/>*/}
        <Tooltip/>
        {/*<Legend />*/}
        <Bar dataKey="value" fill="#4990E2" label={<BarLabel />} name="numar de sesizări"/>
      </BarChart>
    );
  }
}
