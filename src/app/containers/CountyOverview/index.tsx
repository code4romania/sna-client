import * as React from 'react';
import {Set} from "immutable";
import {Dispatch} from "react-redux";
import {ContentHeader} from '../../components/ContentHeader/index';
import {CommonFilters} from "../../components/Section/filters";
import {MyLocation, RouteParams} from "../../helpers/url_helper";
import {loadIndicatorsConfig} from "../../redux/modules/indicator/index";
import {ApplicationState} from "../../redux/application_state";
import {currentIndicatorTitle, areCountiesStatsLoaded, paramChart} from "../../selectors/index";
import {loadCountiesStatsConfig} from "../../redux/modules/stats/index";
import {CheckboxGroup, CheckBoxOptions} from "../../components/CheckboxGroup/index";
import {MapChart} from "../../components/MapChart/index";
import {ChartType} from "../MinistryOverview/index";
import {countyMapChartData, countiesFilterData, selectedCounties} from "../../selectors/counties";
import {CountyColorMap} from "../../components/RomaniaMap/index";
import {Checkbox} from "../../components/Checkbox/index";
import {reset, selectCounty, deselectCounty} from "../../redux/modules/filters/selected_counties";
import {CountyBarChart} from "../../components/BarChart/counties_bar_chart";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');

const style = require('./style.css');

interface Props {
  areStatsLoaded?: boolean;
  indicatorTitle?: string;
  params?: RouteParams;
  location?: MyLocation;
  selectedCounties: Set<number>;
  countiesFilterData?: CheckBoxOptions[];
  mapData?: {colorMap: CountyColorMap, legend: string[][]};
  chartType?: ChartType;
}

interface DispatchProps {
  onAction?: (action: Redux.Action) => void;
}

@asyncConnect([
  loadIndicatorsConfig(), loadCountiesStatsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areCountiesStatsLoaded(state),
    indicatorTitle: currentIndicatorTitle(state),
    countiesFilterData: countiesFilterData(state),
    selectedCounties: selectedCounties(state),
    mapData: countyMapChartData(state),
    chartType: paramChart(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class CountyOverview extends React.Component<Props & DispatchProps, any> {
  public render(): JSX.Element {
    return (
      <div className={style.CountyOverview}>
        <ContentHeader parentTitle="Prezentare generală administrații locale" title={this.props.indicatorTitle} />

        <div className={style.main}>
          <CommonFilters location={this.props.location} showMapIcon={true} />
          {this.renderMap()}
          {this.renderContent()}
        </div>
      </div>
    );
  }

  private renderMap(): JSX.Element | null {
    if (this.props.chartType !== "map") {
      return null;
    }

    if (!this.props.areStatsLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className="row">
        <div className="col-md-10">
          <MapChart />
        </div>
        <div className="col-md-2">
          {this.renderLegend()}
          <div className={style.valueType}>Număr sesizări</div>
        </div>
      </div>
    );
  }

  private renderLegend(): JSX.Element[] {
    const {legend} = this.props.mapData;
    return legend.map((elem) => {
      const color = elem[0];
      const range  = elem[1];
      return (<div key={range} className={style.legendRow}>
        <span className={style.legendBox} style={{backgroundColor: color}} />
        <span className={style.legendLabel}>{range}</span>
      </div>);
    });
  }

  private renderContent(): JSX.Element | null {
    if (this.props.chartType === "map") {
      return null;
    }

    return (
      <div className="row">
        <div className="col-md-5">
          <div className={style.title}>Date afișate</div>
          <div className={style.countyFilter}>
            <div className={style.selectAll}>
              <Checkbox value="0" label="Afișează toate județele" checked={this.props.selectedCounties.size === 0}
                        onChange={this.onSelectAll.bind(this)} />
            </div>
            <div>Sau afișează doar județele...</div>
            <CheckboxGroup
              options={this.props.countiesFilterData}
              columns={2}
              onChange={this.onSelectCounty.bind(this)} />
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

  private onSelectAll() {
    this.props.onAction(reset());
  }

  private onSelectCounty(option: CheckBoxOptions) {
    if (option.checked) {
      this.props.onAction(selectCounty(option.value));
    } else {
      this.props.onAction(deselectCounty(option.value));
    }
  }

  private chartElement(): JSX.Element {
    if (!this.props.areStatsLoaded) {
      return <div>Loading</div>;
    }

    if (this.props.chartType === "bar") {
      return <CountyBarChart />;
    } else {
      return <div>TODO</div>;
      {/*return <CountiesScatterChart />;*/}
    }
  }
}
