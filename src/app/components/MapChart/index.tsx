import * as React from 'react';
import {ApplicationState} from "../../redux/application_state";
import {areCountiesStatsLoaded} from "../../selectors/index";
import {countyMapChartData} from "../../selectors/counties";
import {CountyColorMap, RomaniaMap} from "../RomaniaMap/index";
const { connect } = require('react-redux');

interface Props {
  areStatsLoaded?: boolean;
  data?: {colorMap: CountyColorMap, legend: string[][]};
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

    return (
      <RomaniaMap width={700} colorMap={data.colorMap} />
    );
  }
}
