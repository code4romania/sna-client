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
} from '../../selectors/index';
import {AdministrationBarChart} from '../../components/BarChart/ministries_bar_chart';
import {AdministrationsScatterChart} from '../../components/ScatterChart/ministries_scatter_chart';
import {CommonFilters, DispatchProps} from '../../components/Section/filters';
import {MyLocation, RouteParams} from '../../helpers/url_helper';
import {CheckBoxOptions} from '../../components/CheckboxGroup/index';
import {AdminFilter} from '../CountyOverview/admin_filter';
import {resetMinistry, selectMinistry, deselectMinistry} from '../../redux/modules/filters/selected_ministries';
import {ADMINISTRATION_TYPE} from "../../constants/index";

const style = require('./style.css');

export type ChartType = 'bar' | 'scatter' | 'map';

interface Props {
  areIndicatorsLoaded: boolean;
  areMinistriesStatsLoaded: boolean;
  indicatorTitle: string;
  selectedMinistries: Set<number>;
  ministriesFilterData: CheckBoxOptions[];
  params: RouteParams;
  location: MyLocation;
}

@asyncConnect([
  loadIndicatorsConfig(),
  loadMinistriesStatsConfig(),
])
@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    ...ownProps,
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    areMinistriesStatsLoaded: areMinistryStatsLoaded(state),
    indicatorTitle: currentCategoryTitle(state),
    selectedMinistries: selectedMinistries(state),
    ministriesFilterData: ministriesFilterData(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class  MinistryOverview extends React.Component<Props & DispatchProps, any> {
  public static contextTypes = {
    router: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.onSelectMinistry = this.onSelectMinistry.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
  }

  public render() {
    return (
      <div className={style.MinistryOverview}>
        <ContentHeader parentTitle="Prezentare generală ministere"
                       title={this.props.indicatorTitle} />

        <div className={style.main}>

          <CommonFilters location={this.props.location}/>

          <div className={"row " + style.content}>
            <div className={"col-md-5 " + style.ministry_filter}>
              <div className={style.title}>Date afișate</div>
              <div>
                <AdminFilter type="ministerele"
                             areAllChecked={this.props.selectedMinistries.size === 0}
                             columns={1}
                             data={this.props.ministriesFilterData}
                             onSelectOne={this.onSelectMinistry}
                             onSelectAll={this.onSelectAll} />
              </div>
            </div>
            <div className={"col-md-7 " + style.chart_display}>
              <div className={style.title}>Număr sesizări</div>
              <div>
                {this.chartElement()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private chartElement(): JSX.Element {
    if (!this.props.areMinistriesStatsLoaded) {
      return <div>Loading</div>;
    }

    let chart = this.props.location.query.chart;

    if (!chart) {
      chart = "bar";
    }

    if (chart === "bar") {
      return <AdministrationBarChart type={ADMINISTRATION_TYPE.MINISTRY} />;
    } else {
      return <AdministrationsScatterChart type={ADMINISTRATION_TYPE.MINISTRY}/>;
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
