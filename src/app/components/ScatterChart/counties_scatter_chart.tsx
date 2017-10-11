import * as React from 'react';
import {Tooltip, YAxis, ZAxis, XAxis, ScatterChart, Scatter} from 'recharts';
import sizeMe from 'react-sizeme';
const {connect} = require('react-redux');

import {ApplicationState} from '../../redux/application_state';
import {
  MyTooltip,
  chartStyle,
} from './index';
import {ScatterEntry} from './ministries_scatter_chart';
import {
  areCountiesStatsLoaded,
  countiesScatterChartData,
} from '../../selectors/index';
// import {ResponsiveBrowser} from '../../models/responsiveBrowser';
import {ResizeMeData} from "../../models/resizeMeData";

interface Props {
  data?: ScatterEntry[];
  areStatsLoaded?: boolean;
  yTitle?: string;
  // browser?: ResponsiveBrowser;
  size?: ResizeMeData;
}

// TODO use abstract AdministrationsScatterChart component
// TODO show category item type: sesizări, zile, etc
@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areCountiesStatsLoaded(state),
    data: countiesScatterChartData(state),
    // browser: state.browser,
  }),
)
class CountiesScatterChart extends React.Component<Props, {}> {
  public render() {
    const {data, areStatsLoaded, size} = this.props;  // browser,

    if (!areStatsLoaded) {
      return <noscript/>;
    }

    // const smaller = (browser.lessThan.medium && browser.width !== browser.breakpoints.small);

    // const width = smaller
    //   ? browser.width - 30
    //   : (size.width
    //       ? size.width - 30
    //       : 400);

    const width = size.width
      ? size.width // - 30
      : 400;

    const height = 400;
    const yTitle = this.props.yTitle || 'Sesizări';
    const xTitle = 'Număr locuitori / județ';

    return (
      <div style={{width: '100%'}}>
        <ScatterChart width={width} height={height}>
          <XAxis dataKey='x' name={xTitle} stroke='#CFD5D9'/>
          <YAxis dataKey='y' name={yTitle} stroke='#CFD5D9'/>
          <ZAxis dataKey='z' name='Județ'/>
          <Scatter name='M' data={data} fill='#4990E2'/>
          <Tooltip content={<MyTooltip/>} cursor={{strokeDasharray: '3 3'}}/>
          <text className={chartStyle.xtitle} textAnchor='end' transform='rotate(-90)' y='80' dy='.2em'>{yTitle}</text>
          <g transform={`translate(0, ${height})`}>
            <text className={chartStyle.xtitle} textAnchor='end' y='-40' x={width}>{xTitle}</text>
          </g>
        </ScatterChart>
      </div>
    );
  }
}

const sizeMeHOC = sizeMe({ noPlaceholder: true });

export default sizeMeHOC(CountiesScatterChart);
