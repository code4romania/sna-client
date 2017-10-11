import * as React from 'react';
import {Bar, Tooltip, YAxis, XAxis, BarChart} from 'recharts';
import sizeMe from 'react-sizeme';
const { connect } = require('react-redux');

import {BarLabel} from '../BarLabel/index';
import {ApplicationState} from '../../redux/application_state';
import {
  anticorruptionAdminsBarChartData,
  areAnticorruptionStatsLoaded,
  areMinistryStatsLoaded,
  ministryBarChartData,
} from '../../selectors/index';
import {ADMINISTRATION_TYPE} from '../../constants';
import {ResponsiveBrowser} from '../../models/responsiveBrowser';
import {ResizeMeData} from '../../models/resizeMeData';

interface Props {
  type?: string;
  areStatsLoaded?: boolean;
  data?: any;
  browser?: ResponsiveBrowser;
  size?: ResizeMeData;
}

@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    areStatsLoaded: ownProps.type === ADMINISTRATION_TYPE.MINISTRY
      ? areMinistryStatsLoaded(state)
      : areAnticorruptionStatsLoaded(state),
    data: ownProps.type === ADMINISTRATION_TYPE.MINISTRY
      ? ministryBarChartData(state)
      : anticorruptionAdminsBarChartData(state),
    browser: state.browser,
  }),
)
class AdministrationBarChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {data, areStatsLoaded, browser, size} = this.props;

    if (!areStatsLoaded) {
      return <noscript/>;
    }

    const smaller = (browser.lessThan.medium && browser.width !== browser.breakpoints.small);

    // const width = smaller
    //   ? browser.width - 30
    //   : (size.width
    //       ? size.width - 30
    //       : 700);

    const width = size.width
        ? size.width  // - 30
        : 700;

    return (
      <div style={{width: '100%'}}>
        <BarChart width={width}
                  height={data.length * 45 + 10}
                  data={data}
                  layout='vertical'
                  barCategoryGap={smaller ? 10 : '10%'}
                  maxBarSize={250}
                  margin={{top: 5, right: smaller ? 5 : 100, left: 0, bottom: 5}}>
          <XAxis type='number' hide={true}/>
          <YAxis type='category' dataKey='name' hide={true} />
          <Tooltip/>
          <Bar dataKey='value' fill='#4990E2' label={<BarLabel wrap={smaller}/>} name='Număr de sesizări' />
        </BarChart>
      </div>
    );
  }
}

const sizeMeHOC = sizeMe({ noPlaceholder: true });

export default sizeMeHOC(AdministrationBarChart);
