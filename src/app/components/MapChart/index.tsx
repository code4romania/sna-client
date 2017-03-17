import * as React from 'react';
import {ApplicationState} from "../../redux/application_state";
import {areCountiesStatsLoaded, countyMapChartData} from "../../selectors/index";
import {CountyColorMap, RomaniaMap} from "../RomaniaMap/index";
const { connect } = require('react-redux');

interface ColorRange {
  [key: string]: string;
}

interface Props {
  areStatsLoaded?: boolean;
  data?: {colorMap: CountyColorMap, legend: ColorRange};
}

@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areCountiesStatsLoaded(state),
    data: countyMapChartData(state),
  }),
)
export class MapChart extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {data, areStatsLoaded} = this.props;

    if (!areStatsLoaded) {
      return <noscript/>;
    }

    console.log('map data', data);

    return (
      <RomaniaMap width={500} colorMap={data.colorMap} />
    );
  }
}
