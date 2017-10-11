import * as React from 'react';
import {Set} from 'immutable';
import {Dispatch} from 'react-redux';
const {asyncConnect} = require('redux-connect');
const {connect} = require('react-redux');

import {ContentHeader} from '../../components/ContentHeader/index';
import {CommonFilters, DispatchProps} from '../../components/Section/filters';
import {MyLocation, RouteParams} from '../../helpers/url_helper';
import {loadIndicatorsConfig} from '../../redux/modules/indicators/index';
import {ApplicationState} from '../../redux/application_state';
import {
  currentCategoryTitle,
  areIndicatorsLoaded,
  areCountiesStatsLoaded,
  paramChart,
  selectedCounties,
  countiesFilterData,
  areCategoriesLoaded,
} from '../../selectors/index';
import {loadCountiesStatsConfig} from '../../redux/modules/stats/index';
import {CheckBoxOptions} from '../../components/CheckboxGroup/index';
import MapChart from '../../components/MapChart/index';
import {ChartType} from '../MinistryOverview/index';
import {countyMapChartData} from '../../selectors/counties';
import {CountyColorMap} from '../../components/RomaniaMap/index';
import {reset, selectCounty, deselectCounty} from '../../redux/modules/filters/selected_counties';
import CountyBarChart from '../../components/BarChart/counties_bar_chart';
import CountiesScatterChart from '../../components/ScatterChart/counties_scatter_chart';
import {AdminFilter} from './admin_filter';
import {ResponsiveBrowser} from '../../models/responsiveBrowser';
import {loadCategoriesConfig} from '../../redux/modules/categories/index';

const style = require('./style.css');

interface Props {
  areCategoriesLoaded: boolean;
  areIndicatorsLoaded: boolean;
  areStatsLoaded: boolean;
  indicatorTitle: string;
  params?: RouteParams;
  location?: MyLocation;
  selectedCounties: Set<number>;
  countiesFilterData: CheckBoxOptions[];
  mapData: {colorMap: CountyColorMap, legend: string[][]};
  chartType: ChartType;
  browser: ResponsiveBrowser;
}

@asyncConnect([
  loadCategoriesConfig(),
  loadIndicatorsConfig(),
  loadCountiesStatsConfig(),
])
@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    ...ownProps,
    areCategoriesLoaded: areCategoriesLoaded(state),
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    areStatsLoaded: areCountiesStatsLoaded(state),
    indicatorTitle: currentCategoryTitle(state),
    countiesFilterData: countiesFilterData(state),
    selectedCounties: selectedCounties(state),
    mapData: countyMapChartData(state),
    chartType: paramChart(state),
    browser: state.browser,
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class CountyOverview extends React.Component<Props & DispatchProps, any> {
  // private chartColumnElement: HTMLElement;
  // private refHandlers = {
  //   chartColumn: (ref) => this.chartColumnElement = ref,
  // };

  constructor(props) {
    super(props);
    this.onSelectCounty = this.onSelectCounty.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
  }

  // public componentWillReceiveProps() {
  //   // needed for computing the chart column's suitable width
  //   setTimeout(() => {
  //     this.forceUpdate();
  //   }, 10);
  // }

  public render(): JSX.Element {
    const {indicatorTitle, location} = this.props;

    return (
      <div className={'container ' + style.CountyOverview}>
        <ContentHeader parentTitle='Prezentare generală administrații locale'
                       title={indicatorTitle} />

        <div className={'row ' + style.main}>
          <CommonFilters location={location}
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
      return <div>Se încarcă</div>;
    }

    return (
      <div className='col-xs-12'>
        <div className='row'>
          <div className='col-xs-12 col-sm-10'>
            <MapChart />
          </div>
          <div className='col-xs-12 col-sm-2'>
            <div className={style.valueType}>Număr sesizări</div>
            <div className={style.legendGroup}>
              {this.renderLegend()}
            </div>
          </div>
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
    const {chartType, selectedCounties, countiesFilterData, browser} = this.props;

    if (chartType === 'map') {
      return null;
    }

    const displayedData = (
      <div key='0' className='col-xs-12 col-sm-5'>
        <div className={style.title}>Date afișate</div>
        <AdminFilter type='județele'
                     areAllChecked={selectedCounties.size === 0}
                     columns={2}
                     data={countiesFilterData}
                     onSelectOne={this.onSelectCounty}
                     onSelectAll={this.onSelectAll} />
      </div>
    );
    //  ref={this.refHandlers.chartColumn}
    //  className={style.title}
    //  className={style.chart}
    const noOfNotices = (
      <div key='1' className={'col-xs-12 col-sm-7'}>
        <div>Număr sesizări</div>
        <div>
          {this.chartElement()}
        </div>
      </div>
    );
    const smaller = (browser.lessThan.medium && browser.width !== browser.breakpoints.small);

    const rowContent = smaller
      ? [noOfNotices, <div key='2' className='col-xs-12'>&nbsp;</div>, displayedData]
      : [displayedData, noOfNotices];

    return (
      <div className={'col-xs-12 ' + style.content}>
        <div className='row' style={{flexGrow: 1}}>
          {rowContent}
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
      return <div>Se încarcă</div>;
    }

    if (this.props.chartType === 'bar') {
      return <CountyBarChart />;  //  columnWidth={this.chartColumnElement && this.chartColumnElement.offsetWidth}
    } else {
      return <CountiesScatterChart />;  // columnWidth={this.chartColumnElement && this.chartColumnElement.offsetWidth}
    }
  }
}
