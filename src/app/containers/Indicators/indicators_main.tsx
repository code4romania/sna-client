import * as React from 'react';
import {MyLocation, RouteParams} from "../../helpers/url_helper";
import {YearFilters} from "../../components/Section/year_filter";
import {CustomContentHeader} from "../../components/ContentHeader/index";
import {Ministry} from "../../models/ministry";
import {Box} from "../../components/Section/box";
import {Checkbox} from "../../components/Checkbox/index";
import {Indicator} from "../../models/indicator";
import {ApplicationState} from "../../redux/application_state";
import {Dispatch} from "react-redux";
import {
  currentIndicatorTitle, areMinistriesStatsLoaded, currentMinistry,
  currentIndicator,
} from "../../selectors/index";
import {changeAllYears} from "../../redux/reducers";
import {DispatchProps} from "../../components/Section/filters";
import {Indicator1AllYears} from "./indicator1_all_years";
import {loadMinistriesStatsConfig} from "../../redux/modules/stats/index";
import {loadIndicatorsConfig} from "../../redux/modules/indicator/index";
import {Indicator1OneYear} from "./indicator1_one_year";
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

export const s = require('./style.css');

interface Props {
  location?: MyLocation;
  params?: RouteParams;
  selectedMinistry: Ministry;
  areAllYearsSelected: boolean;
  currentIndicator: Indicator;
  areStatsLoaded: boolean;
  indicatorTitle: string;
}

@asyncConnect([
  loadIndicatorsConfig(), loadMinistriesStatsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areMinistriesStatsLoaded(state),
    indicatorTitle: currentIndicatorTitle(state),
    selectedMinistry: currentMinistry(state),
    currentIndicator: currentIndicator(state),
    areAllYearsSelected: state.areAllYearsSelected,
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class IndicatorsMain extends React.Component<Props & DispatchProps, any> {
  public render() {
    if (!this.props.areStatsLoaded) {
      return (<div>Loading</div>);
    }

    const {areAllYearsSelected} = this.props;

    return (
      <div className={s.Indicators}>
        <CustomContentHeader parentTitle={this.props.selectedMinistry.name}>
          {this.props.indicatorTitle}
        </CustomContentHeader>

        <div className="main_content">
          <div className="row filters">
            <div className="col-md-8">
              <YearFilters location={this.props.location} disabled={areAllYearsSelected} />
            </div>
            <div className="col-md-4">
              <Checkbox value="0" label="Afișează toți anii" checked={areAllYearsSelected}
                        onChange={this.fireAllYearSelected.bind(this)} />
            </div>
          </div>
          {this.renderContent()}
        </div>
      </div>
    );
  }

  private renderContent(): JSX.Element {
    if (!this.props.currentIndicator || this.props.currentIndicator.id !== 1) {
      return (
        <Box>TODO</Box>
      );
    }

    if (this.props.areAllYearsSelected) {
      return (
        <Indicator1AllYears />
      );
    } else {
      return (
        <Indicator1OneYear />
      );
    }
  }

  private fireAllYearSelected(option) {
    this.props.onAction(changeAllYears(option.checked));
  }
}
