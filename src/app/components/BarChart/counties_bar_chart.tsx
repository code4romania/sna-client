import * as React from 'react';
import {Bar, Tooltip, YAxis, XAxis, BarChart} from "recharts";
import {BarLabel} from "../BarLabel/index";
import {ApplicationState} from "../../redux/application_state";
// import {countyBarChartData} from "../../selectors/counties";
import {areCountiesStatsLoaded, countyBarChartData} from "../../selectors/index";
const { connect } = require('react-redux');

interface Props {
  areStatsLoaded?: boolean;
  data?: any;
}

// TODO port settings to abstract bar_chart.tsx file
@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areCountiesStatsLoaded(state),
    data: countyBarChartData(state),
  }),
)
export class CountyBarChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {data, areStatsLoaded} = this.props;

    if (!areStatsLoaded) {
      return <noscript/>;
    }

    return (
      <BarChart width={500} height={data.length * 25} data={data}
                layout="vertical"
                maxBarSize={250}
                margin={{top: 5, right: 0, left: 0, bottom: 5}}>
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
