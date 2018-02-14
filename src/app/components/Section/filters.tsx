import * as React from 'react';
// import {OrderedSet} from "immutable";
// import {List} from "immutable";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');
import {Dispatch} from "react-redux";
import {push} from "react-router-redux";
import {DropdownButton} from "react-bootstrap";
import {MenuItem} from "react-bootstrap";

import {ChartIcon, MapIcon, ScatterChartIcon} from "../ChartIcon/index";
import {MyLocation} from "../../helpers/url_helper";
import {loadIndicatorsConfig} from "../../redux/modules/indicators/index";
import {ApplicationState} from "../../redux/application_state";
import {
  areIndicatorsLoaded, currentIndicators, currentIndicator, paramChart,
} from "../../selectors/index";
import {Indicator} from "../../models/indicator";
// import {Category} from "../../models/category";
import {ChartType} from "../../containers/MinistryOverview/index";
import {YearFilters} from "./year_filter";
import {commonStyle} from "../../containers/App/index";

export const filterStyle = require('./style.css');

export const PASSIVE_COLOR = "#A5B3BB";

interface FiltersProps {
  location?: MyLocation;
  areIndicatorsLoaded?: boolean;
  currentIndicators?: Indicator[];
  indicator?: Indicator;
  // year?: number;
  // categoryTitle?: string;
  // years?: OrderedSet<number>;
  showMapIcon?: boolean;
  chartType?: ChartType;
}

export interface DispatchProps {
  onAction?: (action: Redux.Action) => void;
}
@asyncConnect([
  loadIndicatorsConfig(),
])
@connect(
  (state: ApplicationState): FiltersProps => ({
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    // categoryTitle: currentCategoryTitle(state),
    currentIndicators: currentIndicators(state),
    indicator: currentIndicator(state),
    chartType: paramChart(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class CommonFilters extends React.Component<FiltersProps & DispatchProps, any> {
  constructor(props) {
    super(props);
    this.fireChangeIndicator = this.fireChangeIndicator.bind(this);
    this.fireChangeChart = this.fireChangeChart.bind(this);
  }

  public render() {
    const { chartType } = this.props;

    return (
      <div className={'col-xs-12 ' + filterStyle.Filters}>
        <div className={filterStyle.indicator}>
          <div className={commonStyle.title}>Statistici pentru întrebarea</div>
          {this.renderCategoryDropdown()}
        </div>

        <div className={filterStyle.params}>
          <YearFilters location={this.props.location} />
          <div className={filterStyle.chart_type}>
            <div className={commonStyle.title}>Tip vizualizare</div>
            <div className={filterStyle.chart_options}>
              {this.chartButton()}
              {this.selectChartButton("bar", ChartIcon, chartType)}
              {this.selectChartButton("scatter", ScatterChartIcon, chartType)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  private chartButton() {
    if (!this.props.showMapIcon) {
      return null;
    }

    return this.selectChartButton("map", MapIcon, this.props.chartType);
  }

  private renderCategoryDropdown(): JSX.Element | null {
    const { areIndicatorsLoaded } = this.props;

    if (!(areIndicatorsLoaded && this.props.indicator)) {
      return null;
    }

    const currentIndicators = this.props.currentIndicators || ([] as Indicator[]);
    const indicator = this.props.indicator;
    const otherIndicators = currentIndicators.filter((i) => i.id !== indicator.id && i.answerType !== 'string');

    return (
      <DropdownButton className={filterStyle.select_indicator}
                      id="ind_indicator"
                      title={indicator.text}
                      onSelect={this.fireChangeIndicator}>
        {otherIndicators.map((i) => <MenuItem key={i.id.toString()} eventKey={i.id}>{i.text}</MenuItem>)}
      </DropdownButton>
    );
  }

  private selectChartButton(chartType: ChartType, Icon: any, selectedType: ChartType) {
    return (
      <button key={chartType} onClick={this.fireChangeChart} data-chart={chartType}
              className={`${filterStyle.button} ${selectedType === chartType ? filterStyle.active : ""}`}>
        <Icon color={selectedType !== chartType ? PASSIVE_COLOR : null} />
      </button>
    );
  }

  private fireChangeChart(event: any) {
    const {chart} = event.target.dataset;
    const {query,  pathname} = this.props.location;

    if (chart === query.chart) {
      return;
    }

    this.props.onAction(push({pathname,  query: {...query,  chart}}));
  }

  private fireChangeIndicator(eventKey: any) {
    const {query, pathname} = this.props.location;
    this.props.onAction(push({pathname,  query: {...query,  indicator_id: eventKey}}));
  }
}
