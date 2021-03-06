import * as React from 'react';
import {Set} from 'immutable';
import {Dispatch} from 'react-redux';
const {asyncConnect} = require('redux-connect');
const {connect} = require('react-redux');

import {ContentHeader} from '../../components/ContentHeader/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicators/index';
import {ApplicationState} from '../../redux/application_state';
import {loadAnticorruptionStatsConfig} from '../../redux/modules/stats/index';
import {
  currentCategoryTitle,
  areIndicatorsLoaded,
  areAnticorruptionStatsLoaded,
  selectedAnticorruptionAdmins,
  anticorruptionAdminsFilterData,
  areCategoriesLoaded,
} from '../../selectors/index';
import {ADMINISTRATION_TYPE} from '../../constants';
import AdministrationBarChart from '../../components/BarChart/ministries_bar_chart';
import AdministrationsScatterChart from '../../components/ScatterChart/ministries_scatter_chart';
import {CommonFilters, DispatchProps} from '../../components/Section/filters';
import {MyLocation, RouteParams} from '../../helpers/url_helper';
import {CheckBoxOptions} from '../../components/CheckboxGroup/index';
import {AdminFilter} from '../CountyOverview/admin_filter';
import {
  deselectAnticorruptionAdmin,
  selectAnticorruptionAdmin,
  resetAnticorruptionAdmin,
} from '../../redux/modules/filters/selected_anticorruption_admins';
import {loadCategoriesConfig} from '../../redux/modules/categories/index';

const style = require('../MinistryOverview/style.css');

interface Props {
  areCategoriesLoaded: boolean;
  areIndicatorsLoaded: boolean;
  areAnticorruptionAdminsStatsLoaded: boolean;
  indicatorTitle: string;
  selectedAnticorruptionAdmins: Set<number>;
  anticorruptionAdminsFilterData: CheckBoxOptions[];
  params: RouteParams;
  location: MyLocation;
}

@asyncConnect([
  loadCategoriesConfig(),
  loadIndicatorsConfig(),
  loadAnticorruptionStatsConfig(),
])
@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    ...ownProps,
    areCategoriesLoaded: areCategoriesLoaded(state),
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    areAnticorruptionAdminsStatsLoaded: areAnticorruptionStatsLoaded(state),
    indicatorTitle: currentCategoryTitle(state),
    selectedAnticorruptionAdmins: selectedAnticorruptionAdmins(state),
    anticorruptionAdminsFilterData: anticorruptionAdminsFilterData(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class  AnticorruptionAdminsOverview extends React.Component<Props & DispatchProps, any> {
  constructor(props) {
    super(props);
    this.onSelectAnticorruptionAdmin = this.onSelectAnticorruptionAdmin.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
  }

  public render() {
    return (
      <div className={'container ' + style.AnticorruptionAdminsOverview}>
        <ContentHeader parentTitle='Prezentare generală administrații anticorupție'
                       title={this.props.indicatorTitle} />

        <div className={'row ' + style.main}>
          <CommonFilters location={this.props.location}/>

          <div className={'col-xs-12 ' + style.content}>
            <div className='row'>
              <div className={'col-xs-12 col-sm-5 ' + style.ministry_filter}>
                <div className={style.title}>Date afișate</div>
                <div>
                  <AdminFilter type='administrațiile'
                               areAllChecked={this.props.selectedAnticorruptionAdmins.size === 0}
                               columns={1}
                               data={this.props.anticorruptionAdminsFilterData}
                               onSelectOne={this.onSelectAnticorruptionAdmin}
                               onSelectAll={this.onSelectAll} />
                </div>
              </div>
              <div className={'col-xs-12 col-sm-7 ' + style.chart_display}>
                <div className={style.title}>Număr sesizări</div>
                <div>
                  {this.chartElement()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private chartElement(): JSX.Element {
    if (!this.props.areAnticorruptionAdminsStatsLoaded) {
      return null;
    }

    let chart = this.props.location.query.chart;

    if (!chart) {
      chart = 'bar';
    }

    if (chart === 'bar') {
      return (
        <AdministrationBarChart type={ADMINISTRATION_TYPE.ANTICORRUPTION_ADMIN}/>
      );
    } else {
      return (
        <AdministrationsScatterChart type={ADMINISTRATION_TYPE.ANTICORRUPTION_ADMIN}/>
      );
    }
  }

  private onSelectAll() {
    this.props.onAction(resetAnticorruptionAdmin());
  }

  private onSelectAnticorruptionAdmin(option: CheckBoxOptions) {
    if (option.checked) {
      this.props.onAction(selectAnticorruptionAdmin(option.value));
    } else {
      this.props.onAction(deselectAnticorruptionAdmin(option.value));
    }
  }
}
