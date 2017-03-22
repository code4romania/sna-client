import * as React from 'react';
import {ComposedChart, Tooltip, YAxis, XAxis, Area, Bar} from "recharts";
import {ApplicationState} from "../../redux/application_state";
import {areMinistriesStatsLoaded} from "../../selectors/index";
const { connect } = require('react-redux');

const data = [
  {year: 2012, value: 10, v2: 5},
  {year: 2013, value: 12, v2: 8},
  {year: 2014, value: 21, v2: 10},
  {year: 2015, value: 15, v2: 10},
  {year: 2016, value: 17, v2: 12},
];

interface Props {
  areStatsLoaded?: boolean;
  data?: any;
  width: number;
  height: number;
  showTwoAreas?: boolean;
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
      <ComposedChart width={this.props.width} height={this.props.height} data={data}
                 margin={{top: 0, right: 15, left: 20, bottom: 0}}>
        <XAxis dataKey="year" tickLine={false}
               tick={{fontFamily: "Roboto", fontSize: "11px", color: "#93A6B1"}} />
        <YAxis hide={true} />
        <Tooltip/>

        <Bar dataKey='value' barSize={1} fill='#4990E2'/>
        <Area type='linear' dot={{ stroke: '#4990E2', strokeWidth: 2, r: 3, fill: "#fff", fillOpacity: 1 }}
              dataKey='value' stroke='#4990E2' fill='#CFE1F6' fillOpacity={0.43}/>
        {this.props.showTwoAreas && <Area dataKey="v2" fill="#24B47E" stroke='none' fillOpacity={0.3}/>}
      </ComposedChart>
    );
  }
}
