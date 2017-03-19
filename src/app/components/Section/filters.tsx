import * as React from 'react';
import {OrderedSet} from "immutable";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');
import {Dispatch} from "react-redux";
import {push} from "react-router-redux";
import {DropdownButton} from "react-bootstrap";
import {MenuItem} from "react-bootstrap";
import {ChartIcon, MapIcon, ScatterChartIcon} from "../ChartIcon/index";
import {MyLocation} from "../../helpers/url_helper";
import {loadIndicatorsConfig} from "../../redux/modules/indicator/index";
import {ApplicationState} from "../../redux/application_state";
import {
  areIndicatorsLoaded, currentIndicatorTitle, currentIndicator, currentCategory, paramChart,
} from "../../selectors/index";
import {Indicator, Category} from "../../models/indicator";
import {ChartType} from "../../containers/MinistryOverview/index";
import {YearFilters} from "./year_filter";
import {commonStyle} from "../../containers/Html/index";

export const filterStyle = require('./style.css');

export const PASSIVE_COLOR = "#A5B3BB";

interface FiltersProps {
  location?: MyLocation;
  areIndicatorsLoaded?: boolean;
  indicator?: Indicator;
  category?: Category;
  year?: number;
  indicatorTitle?: string;
  years?: OrderedSet<number>;
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
    indicatorTitle: currentIndicatorTitle(state),
    indicator: currentIndicator(state),
    category: currentCategory(state),
    chartType: paramChart(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class CommonFilters extends React.Component<FiltersProps & DispatchProps, any> {
  public render() {
    const { chartType } = this.props;

    return (
      <div className={filterStyle.Filters}>
        <div className={filterStyle.category}>
          <div className={commonStyle.title}>Indicator vizualizat</div>
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

    if (!areIndicatorsLoaded) {
      return null;
    }

    const categories = this.props.indicator.categories;
    const category = this.props.category;
    const otherCategories = categories.filter((c) => c.id !== category.id);

    return (
      <DropdownButton
        className={filterStyle.select_category}
        id="ind_category" title={category.name}
        onSelect={this.fireChangeCategory.bind(this)}>
        {otherCategories.map((c) => <MenuItem key={c.id.toString()} eventKey={c.id}>{c.name}</MenuItem>)}
      </DropdownButton>
    );
  }

  private selectChartButton(chartType: ChartType, Icon: any, selectedType: ChartType) {
    return (
      <button key={chartType} onClick={this.fireChangeChart.bind(this)} data-chart={chartType}
              className={`${filterStyle.button} ${selectedType === chartType ? filterStyle.active : ""}`}>
        <Icon color={selectedType !== chartType ? PASSIVE_COLOR : null} />
      </button>
    );
  }

  private fireChangeChart(event: any) {
    const {chart} = event.target.dataset;
    const {query, pathname} = this.props.location;

    if (chart === query.chart) {
      return;
    }

    this.props.onAction(push({pathname, query: {...query, chart}}));
  }

  private fireChangeCategory(eventKey: number) {
    const {query, pathname} = this.props.location;
    this.props.onAction(push({pathname, query: {...query, category_id: eventKey}}));
  }
}
