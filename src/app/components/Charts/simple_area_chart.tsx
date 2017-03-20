import * as React from 'react';
import {AreaChart, Tooltip, YAxis, XAxis, Area} from "recharts";
import {ApplicationState} from "../../redux/application_state";
import {areMinistriesStatsLoaded} from "../../selectors/index";
const { connect } = require('react-redux');

const data = [
  {year: 2012, value: 10},
  {year: 2013, value: 12},
  {year: 2014, value: 21},
  {year: 2015, value: 15},
  {year: 2016, value: 17},
];

interface Props {
  areStatsLoaded?: boolean;
  data?: any;
  width: number;
  height: number;
}

@connect(
  (state: ApplicationState, ownProps: Props): Props => ({...ownProps,
    areStatsLoaded: areMinistriesStatsLoaded(state),
    data: null,
  }),
)
export class SimpleAreaChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    // const {areStatsLoaded} = this.props;
    //
    // if (!areStatsLoaded) {
    //   return <noscript/>;
    // }

    return (
      <AreaChart width={this.props.width} height={this.props.height} data={data}
                 margin={{top: 0, right: 15, left: 20, bottom: 0}}>
        <XAxis dataKey="year" tickLine={false}
               tick={{fontFamily: "Roboto", fontSize: "11px", color: "#93A6B1"}} />
        <YAxis hide={true} />
        <Tooltip/>
        <Area type='liniar' dataKey='value' stroke='#8884d8' fill='#CFE1F6' fillOpacity={0.43}/>
      </AreaChart>
    );
  }
}
