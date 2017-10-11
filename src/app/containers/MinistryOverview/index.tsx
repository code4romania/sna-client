import * as React from 'react';
import {Set} from 'immutable';
import {Dispatch} from 'react-redux';
const {asyncConnect} = require('redux-connect');
const {connect} = require('react-redux');

import {ContentHeader} from '../../components/ContentHeader/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicators/index';
import {ApplicationState} from '../../redux/application_state';
import {loadMinistriesStatsConfig} from '../../redux/modules/stats/index';
import {
  currentCategoryTitle,
  areIndicatorsLoaded,
  areMinistryStatsLoaded,
  selectedMinistries,
  ministriesFilterData,
  areCategoriesLoaded,
} from '../../selectors/index';
import AdministrationBarChart from '../../components/BarChart/ministries_bar_chart';
import AdministrationsScatterChart from '../../components/ScatterChart/ministries_scatter_chart';
import {CommonFilters, DispatchProps} from '../../components/Section/filters';
import {MyLocation, RouteParams} from '../../helpers/url_helper';
import {CheckBoxOptions} from '../../components/CheckboxGroup/index';
import {AdminFilter} from '../CountyOverview/admin_filter';
import {
  resetMinistry,
  selectMinistry,
  deselectMinistry,
} from '../../redux/modules/filters/selected_ministries';
import {ADMINISTRATION_TYPE} from '../../constants/index';
import {ResponsiveBrowser} from '../../models/responsiveBrowser';
import {loadCategoriesConfig} from '../../redux/modules/categories/index';

const style = require('./style.css');

export type ChartType = 'bar' | 'scatter' | 'map';

interface Props {
  areCategoriesLoaded: boolean;
  areIndicatorsLoaded: boolean;
  areMinistriesStatsLoaded: boolean;
  indicatorTitle: string;
  selectedMinistries: Set<number>;
  ministriesFilterData: CheckBoxOptions[];
  params: RouteParams;
  location: MyLocation;
  browser: ResponsiveBrowser;
}

@asyncConnect([
  loadCategoriesConfig(),
  loadIndicatorsConfig(),
  loadMinistriesStatsConfig(),
])
@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    ...ownProps,
    areCategoriesLoaded: areCategoriesLoaded(state),
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    areMinistriesStatsLoaded: areMinistryStatsLoaded(state),
    indicatorTitle: currentCategoryTitle(state),
    selectedMinistries: selectedMinistries(state),
    ministriesFilterData: ministriesFilterData(state),
    browser: state.browser,
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class MinistryOverview extends React.Component<Props & DispatchProps, any> {
  // public static contextTypes = {
  //   router: React.PropTypes.object,
  // };
  // private chartColumnElement: HTMLElement;
  // private refHandlers = {
  //   chartColumn: (ref) => this.chartColumnElement = ref,
  // };

  constructor(props) {
    super(props);
    this.onSelectMinistry = this.onSelectMinistry.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
  }

  // public componentWillMount() {
  //   // needed for computing the chart column's suitable width
  //   setTimeout(() => {
  //     this.forceUpdate();
  //   }, 10);
  // }

  public render(): JSX.Element {
    const {indicatorTitle, location, selectedMinistries, ministriesFilterData, browser} = this.props;

    const displayedData = (
      <div key='0' className={'col-xs-12 col-sm-5 ' + style.ministry_filter}>
        <div className={style.title}>Date afișate</div>
        <div>
          <AdminFilter type='ministerele'
                       areAllChecked={selectedMinistries.size === 0}
                       columns={1}
                       data={ministriesFilterData}
                       onSelectOne={this.onSelectMinistry}
                       onSelectAll={this.onSelectAll} />
        </div>
      </div>
    );
    //  ref={this.refHandlers.chartColumn}
    const noOfNotices = (
      <div key='1' className={'col-xs-12 col-sm-7 ' + style.chart_display}>
        <div className={style.title}>Număr sesizări</div>
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
      <div className={'container ' + style.MinistryOverview}>
        <ContentHeader parentTitle='Prezentare generală ministere'
                       title={indicatorTitle} />

        <div className={'row ' + style.main}>
          <CommonFilters location={location}/>

          <div className={'col-xs-12 ' + style.content}>
            <div className='row'>
              {rowContent}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // { /* columnWidth={this.chartColumnElement && this.chartColumnElement.offsetWidth} */ }
  // { /* columnWidth={this.chartColumnElement && this.chartColumnElement.offsetWidth} */ }
  private chartElement(): JSX.Element {
    if (!this.props.areMinistriesStatsLoaded) {
      return <div>Se încarcă</div>;
    }

    let chart = this.props.location.query.chart;

    if (!chart) {
      chart = 'bar';
    }

    if (chart === 'bar') {
      return (
        <AdministrationBarChart type={ADMINISTRATION_TYPE.MINISTRY} />
      );
    } else {
      return (
        <AdministrationsScatterChart type={ADMINISTRATION_TYPE.MINISTRY} />
      );
    }
  }

  private onSelectAll() {
    this.props.onAction(resetMinistry());
  }

  private onSelectMinistry(option: CheckBoxOptions) {
    if (option.checked) {
      this.props.onAction(selectMinistry(option.value));
    } else {
      this.props.onAction(deselectMinistry(option.value));
    }
  }
}
