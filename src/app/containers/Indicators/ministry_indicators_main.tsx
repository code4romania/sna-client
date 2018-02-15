import * as React from 'react';
import {Dispatch} from 'react-redux';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

import {MyLocation, RouteParams} from '../../helpers/url_helper';
import {YearFilters} from '../../components/Section/year_filter';
import {CustomContentHeader} from '../../components/ContentHeader/index';
import {Ministry} from '../../models/ministry';
import {Checkbox} from '../../components/Checkbox/index';
import {ApplicationState} from '../../redux/application_state';
import {
  currentCategoryTitle,
  areMinistryStatsLoaded,
  currentMinistry,
  currentCategory,
  areCategoriesLoaded,
  areIndicatorsLoaded,
} from '../../selectors/index';
import {changeAllYears} from '../../redux/reducers';
import {DispatchProps} from '../../components/Section/filters';
import {Indicator1AllYears} from './indicator1_all_years';
import {loadMinistriesStatsConfig} from '../../redux/modules/stats/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicators/index';
import {Indicator1OneYear} from './indicator1_one_year';
import {Category} from '../../models/category';
import {ADMINISTRATION_TYPE} from '../../constants/index';
import {loadCategoriesConfig} from '../../redux/modules/categories/index';

export const s = require('./style.css');

interface Props {
  areCategoriesLoaded: boolean;
  areIndicatorsLoaded: boolean;
  areMinistriesStatsLoaded: boolean;
  location?: MyLocation;
  params?: RouteParams;
  selectedMinistry: Ministry;
  areAllYearsSelected: boolean;
  currentCategory: Category;
  areStatsLoaded: boolean;
  categoryTitle: string;
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
    areStatsLoaded: areMinistryStatsLoaded(state),
    categoryTitle: currentCategoryTitle(state),
    selectedMinistry: currentMinistry(state),
    currentCategory: currentCategory(state),
    areAllYearsSelected: state.areAllYearsSelected,
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class MinistriesIndicatorsMain extends React.Component<Props & DispatchProps, any> {
  constructor(props) {
    super(props);
    this.fireAllYearSelected = this.fireAllYearSelected.bind(this);
  }

  public render() {
    if (!this.props.areStatsLoaded) {
      return null;
    }

    const {areAllYearsSelected} = this.props;

    return (
      <div className={'container ' + s.Indicators}>
        <CustomContentHeader parentTitle={this.props.selectedMinistry && this.props.selectedMinistry.name}>
          {this.props.categoryTitle}
        </CustomContentHeader>

        <div className="main_content">
          <div className="row filters">
            <div className="col-sm-8">
              <YearFilters location={this.props.location} disabled={areAllYearsSelected} />
            </div>
            <div className="col-sm-4">
              <Checkbox value="0" label="Afișează toți anii" checked={areAllYearsSelected}
                        onChange={this.fireAllYearSelected} />
            </div>
          </div>
          {this.renderContent()}
        </div>
      </div>
    );
  }

  private renderContent(): JSX.Element {
    if (!this.props.currentCategory) {
      return null;
    }

    if (this.props.areAllYearsSelected) {
      return (
        <Indicator1AllYears type={ADMINISTRATION_TYPE.MINISTRY} />
      );
    } else {
      return (
        <Indicator1OneYear type={ADMINISTRATION_TYPE.MINISTRY} />
      );
    }
  }

  private fireAllYearSelected(option) {
    this.props.onAction(changeAllYears(option.checked));
  }
}
