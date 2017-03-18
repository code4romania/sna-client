import * as React from 'react';
import {ContentHeader} from '../../components/ContentHeader/index';
import {CommonFilters} from "../../components/Section/filters";
import {MyLocation, RouteParams} from "../../helpers/url_helper";
import {loadIndicatorsConfig} from "../../redux/modules/indicator/index";
import {ApplicationState} from "../../redux/application_state";
import {currentIndicatorTitle, areCountiesStatsLoaded} from "../../selectors/index";
import {loadCountiesStatsConfig} from "../../redux/modules/stats/index";
import {CheckboxGroup, CheckBoxOptions} from "../../components/CheckboxGroup/index";
import {MapChart} from "../../components/MapChart/index";
import {ChartType} from "../MinistryOverview/index";
import {countyMapChartData, countiesFilterData} from "../../selectors/counties";
import {CountyColorMap} from "../../components/RomaniaMap/index";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');

const style = require('./style.css');

interface Props {
  areStatsLoaded?: boolean;
  indicatorTitle?: string;
  params?: RouteParams;
  location?: MyLocation;
  countiesFilterData?: CheckBoxOptions[];
  mapData?: {colorMap: CountyColorMap, legend: string[][]};
}

@asyncConnect([
  loadIndicatorsConfig(), loadCountiesStatsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areCountiesStatsLoaded(state),
    indicatorTitle: currentIndicatorTitle(state),
    countiesFilterData: countiesFilterData(state),
    mapData: countyMapChartData(state),
  }),
)
export class CountyOverview extends React.Component<Props, any> {
  public render(): JSX.Element {
    return (
      <div className={style.CountyOverview}>
        <ContentHeader parentTitle="Prezentare generală administrații locale" title={this.props.indicatorTitle} />

        <div className={style.main}>
          <CommonFilters location={this.props.location}/>
          {this.renderMap()}
          {this.renderContent()}
        </div>
      </div>
    );
  }

  private renderMap(): JSX.Element | null {
    if (this.chartType() !== "map") {
      return null;
    }

    if (!this.props.areStatsLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className="row">
        <div className="cold-md-10">
          <MapChart />;
        </div>
        <div className="cold-md-2">
          {this.renderLegend()}
          <div className={style.valueType}>Număr</div>
        </div>
      </div>
    );
  }

  private renderLegend(): JSX.Element[] {
    const {legend} = this.props.mapData;
    return legend.map((elem) => {
      const color = elem[0];
      const range  = elem[1];
      return (<div>
        <span className={style.legendBox} style={{backgrounColor: color}} />
        <span className={style.legendLabel}>{range}</span>
      </div>);
    });
  }

  private renderContent(): JSX.Element | null {
    if (this.chartType() !== "map") {
      return null;
    }

    const handleToogleCounty = (option) => {
      console.log(option);
    };

    return (
      <div className="row">
        <div className="col-md-5">
          <div className={style.title}>Date afișate</div>
          <div>
            <CheckboxGroup
              options={this.props.countiesFilterData}
              columns={2}
              onChange={handleToogleCounty} />
          </div>
        </div>
        <div className="col-md-7">
          <div className={style.title}>Număr sesizări</div>
          <div>
            {this.chartElement()}
          </div>
        </div>
      </div>
    );
  }

  private chartType(): ChartType {
    let chart = this.props.location.query.chart;

    if (!chart) {
      chart = "map";
    }

    return chart;
  }

  private chartElement(): JSX.Element {
    if (!this.props.areStatsLoaded) {
      return <div>Loading</div>;
    }

    const chartType = this.chartType();

    if (chartType === "map") {
      return null;
    }

    if (chartType === "bar") {
      return <div>TODO</div>;
      // return <CountiesBarChart />;
    } else {
      return <div>TODO</div>;
      {/*return <CountiesScatterChart />;*/}
    }
  }
}
