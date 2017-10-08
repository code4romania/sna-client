import * as React from 'react';
import {Set} from 'immutable';
import {Dispatch} from 'react-redux';
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');

import {ContentHeader} from '../../components/ContentHeader/index';
import {CommonFilters, DispatchProps} from '../../components/Section/filters';
import {MyLocation, RouteParams} from '../../helpers/url_helper';
import {loadIndicatorsConfig} from '../../redux/modules/indicators/index';
import {ApplicationState} from '../../redux/application_state';
import {
  currentCategoryTitle,
  areCountiesStatsLoaded,
  paramChart,
  selectedCounties,
  countiesFilterData,
} from '../../selectors/index';
import {loadCountiesStatsConfig} from '../../redux/modules/stats/index';
import {CheckBoxOptions} from '../../components/CheckboxGroup/index';
import {MapChart} from '../../components/MapChart/index';
import {ChartType} from '../MinistryOverview/index';
import {countyMapChartData} from '../../selectors/counties';
import {CountyColorMap} from '../../components/RomaniaMap/index';
import {reset, selectCounty, deselectCounty} from '../../redux/modules/filters/selected_counties';
import {CountyBarChart} from '../../components/BarChart/counties_bar_chart';
import {CountiesScatterChart} from '../../components/ScatterChart/counties_scatter_chart';
import {AdminFilter} from './admin_filter';

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

@asyncConnect([
  loadIndicatorsConfig(),
  loadCountiesStatsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areCountiesStatsLoaded(state),
    indicatorTitle: currentCategoryTitle(state),
    countiesFilterData: countiesFilterData(state),
    selectedCounties: selectedCounties(state),
    mapData: countyMapChartData(state),
    chartType: paramChart(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class CountyOverview extends React.Component<Props & DispatchProps, any> {
  constructor(props) {
    super(props);
    this.onSelectCounty = this.onSelectCounty.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div className={style.CountyOverview}>
        <ContentHeader parentTitle='Prezentare generală administrații locale'
                       title={this.props.indicatorTitle} />

        <div className={style.main}>
          <CommonFilters location={this.props.location}
                         showMapIcon={true} />
          {this.renderMap()}
          {this.renderContent()}
        </div>
      </div>
    );
  }

  private renderMap(): JSX.Element | null {
    if (this.props.chartType !== 'map') {
      return null;
    }

    if (!this.props.areStatsLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className='row'>
        <div className='col-md-10 col-sm-10'>
          <MapChart />
        </div>
        <div className='col-md-2 col-sm-2'>
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
      const range = elem[1];

      return (
        <div key={range} className={style.legendRow}>
          <span className={style.legendBox} style={{backgroundColor: color}} />
          <span className={style.legendLabel}>{range}</span>
        </div>
      );
    });
  }

  private renderContent(): JSX.Element | null {
    if (this.props.chartType === 'map') {
      return null;
    }

    return (
      <div className='row'>
        <div className='col-md-5'>
          <div className={style.title}>Date afișate</div>
          <AdminFilter type='județele'
                       areAllChecked={this.props.selectedCounties.size === 0}
                       columns={2}
                       data={this.props.countiesFilterData}
                       onSelectOne={this.onSelectCounty}
                       onSelectAll={this.onSelectAll} />
        </div>
        <div className='col-md-7'>
          <div className={style.title}>Număr sesizări</div>
          <div className={style.chart}>
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

    if (this.props.chartType === 'bar') {
      return <CountyBarChart />;
    } else {
      return <CountiesScatterChart />;
    }
  }
}
