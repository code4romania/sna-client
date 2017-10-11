import * as React from 'react';
import sizeMe from 'react-sizeme';
const {connect} = require('react-redux');

import {ApplicationState} from '../../redux/application_state';
import {areCountiesStatsLoaded} from '../../selectors/index';
import {countyMapChartData} from '../../selectors/counties';
import {CountyColorMap, RomaniaMap} from '../RomaniaMap/index';
// import {ResponsiveBrowser} from '../../models/responsiveBrowser';
import {ResizeMeData} from '../../models/resizeMeData';

interface Props {
  areStatsLoaded?: boolean;
  data?: { colorMap: CountyColorMap, legend: string[][] };
  // browser?: ResponsiveBrowser;
  size?: ResizeMeData;
}

@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areCountiesStatsLoaded(state),
    data: countyMapChartData(state),
    // browser: state.browser,
  }),
)
class MapChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {data, areStatsLoaded, size} = this.props;  // browser,

    if (!areStatsLoaded) {
      return <noscript/>;
    }

    // const width = (browser.lessThan.medium && browser.width !== browser.breakpoints.small)
    //   ? browser.width - 30
    //   : 700;

    const width = size.width
      ? size.width  // - 30
      : 700;

    return (
      <div>
        <RomaniaMap width={width} colorMap={data.colorMap}/>
      </div>
    );
  }
}

const sizeMeHOC = sizeMe({noPlaceholder: true});

export default sizeMeHOC(MapChart);
