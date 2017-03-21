import * as React from 'react';
import {PieChart, Pie, Cell} from "recharts";
import {ApplicationState} from "../../redux/application_state";
import {areMinistriesStatsLoaded} from "../../selectors/index";
const { connect } = require('react-redux');

const data = [{ name: 'Group A', value: 75 }, { name: 'Group B', value: 25 }];
const COLORS = ['#4990E2', '#4DD6D0'];

interface Props {
  areStatsLoaded?: boolean;
  data?: any;
  width: number;
  height: number;
  valueTitle: string;
}

@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    ...ownProps,
    areStatsLoaded: areMinistriesStatsLoaded(state),
    data: null,
  }),
)
export class SimplePieChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {width, height, valueTitle} = this.props;

    return (
      <PieChart width={width} height={height}>
        <Pie data={data}
             innerRadius={54}
             outerRadius={60}
             startAngle={90}
             endAngle={360 + 90}
             paddingAngle={2}>
          {data.map((_, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
        </Pie>
        <text x={width / 2} y={height / 2 + 20} textAnchor="middle"
              fill="#0D2B3E" fontSize={62} fontFamily="Roboto Slab" fontWeight={300}>56</text>
        <text x={width / 2} y={height / 2 + 40} textAnchor="middle"
              fill="#516178" fontSize={15} fontFamily="Roboto">{valueTitle}</text>
      </PieChart>
    );
  }
}
