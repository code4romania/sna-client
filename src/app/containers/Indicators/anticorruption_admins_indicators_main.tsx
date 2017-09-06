import * as React from 'react';
import {Dispatch} from 'react-redux';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

import {MyLocation, RouteParams} from '../../helpers/url_helper';
import {YearFilters} from '../../components/Section/year_filter';
import {CustomContentHeader} from '../../components/ContentHeader/index';
import {AnticorruptionAdmin} from '../../models/anticorruption';
// import {Box} from '../../components/Section/box';
import {Checkbox} from '../../components/Checkbox/index';
// import {Indicator} from '../../models/indicator';
import {ApplicationState} from '../../redux/application_state';
import {
  currentCategoryTitle,
  areAnticorruptionStatsLoaded,
  currentAnticorruptionAdmin,
  currentCategory,
} from '../../selectors/index';
import {changeAllYears} from '../../redux/reducers';
import {DispatchProps} from '../../components/Section/filters';
import {Indicator1AllYears} from './indicator1_all_years';
import {loadAnticorruptionStatsConfig} from '../../redux/modules/stats/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicators/index';
import {Indicator1OneYear} from './indicator1_one_year';
import {Category} from "../../models/category";
import {ADMINISTRATION_TYPE} from "../../constants/index";

export const s = require('./style.css');

interface Props {
  location?: MyLocation;
  params?: RouteParams;
  selectedAnticorruptionAdmin: AnticorruptionAdmin;
  areAllYearsSelected: boolean;
  currentCategory: Category;
  areStatsLoaded: boolean;
  categoryTitle: string;
}

@asyncConnect([
  loadIndicatorsConfig(),
  loadAnticorruptionStatsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areAnticorruptionStatsLoaded(state),
    categoryTitle: currentCategoryTitle(state),
    selectedAnticorruptionAdmin: currentAnticorruptionAdmin(state),
    currentCategory: currentCategory(state),
    areAllYearsSelected: state.areAllYearsSelected,
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class AnticorruptionAdminsIndicatorsMain extends React.Component<Props & DispatchProps, any> {
  constructor(props) {
    super(props);
    this.fireAllYearSelected = this.fireAllYearSelected.bind(this);
  }

  public render() {
    if (!this.props.areStatsLoaded) {
      return (<div>Loading</div>);
    }

    const {areAllYearsSelected} = this.props;

    /* tslint:disable:max-line-length */
    return (
      <div className={s.Indicators}>
        <CustomContentHeader parentTitle={this.props.selectedAnticorruptionAdmin && this.props.selectedAnticorruptionAdmin.name}>
          {this.props.categoryTitle}
        </CustomContentHeader>

        <div className="main_content">
          <div className="row filters">
            <div className="col-md-8">
              <YearFilters location={this.props.location} disabled={areAllYearsSelected} />
            </div>
            <div className="col-md-4">
              <Checkbox value="0" label="Afișează toți anii" checked={areAllYearsSelected}
                        onChange={this.fireAllYearSelected} />
            </div>
          </div>
          {this.renderContent()}
        </div>
      </div>
    );
    /* tslint:enable:max-line-length */
  }

  private renderContent(): JSX.Element {
    // console.log(this.props.currentCategory);
    // console.log(this.props.currentCategory.id);
    if (!this.props.currentCategory) {  //  || this.props.currentCategory.id !== 1
      return null;
      // (
      //   <Box>TODO</Box>
      // );
    }

    if (this.props.areAllYearsSelected) {
      return (
        <Indicator1AllYears type={ADMINISTRATION_TYPE.ANTICORRUPTION_ADMIN} />
      );
    } else {
      return (
        <Indicator1OneYear type={ADMINISTRATION_TYPE.ANTICORRUPTION_ADMIN} />
      );
    }
  }

  private fireAllYearSelected(option) {
    this.props.onAction(changeAllYears(option.checked));
  }
}
