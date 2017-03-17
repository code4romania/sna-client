import * as React from 'react';
import {OrderedSet} from "immutable";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');
import {Dispatch} from "react-redux";
import {push} from "react-router-redux";
import {DropdownButton} from "react-bootstrap";
import {MenuItem} from "react-bootstrap";
import {ScatterChartIcon} from "../ScatterChartIcon/index";
import {ChartIcon} from "../ChartIcon/index";
import ReactBootstrapSlider from "react-bootstrap-slider";
import {MyLocation} from "../../helpers/url_helper";
import {loadIndicatorsConfig} from "../../redux/modules/indicator/index";
import {ApplicationState} from "../../redux/application_state";
import {
  areIndicatorsLoaded, currentIndicatorTitle, currentIndicator, currentCategory,
  currentYear, years,
} from "../../selectors/index";
import {Indicator, Category} from "../../models/indicator";
import {ChartType} from "../../containers/MinistryOverview/index";

const style = require('./style.css');

export const PASSIVE_COLOR = "#A5B3BB";

interface FiltersProps {
  location?: MyLocation;
  areIndicatorsLoaded?: boolean;
  indicator?: Indicator;
  category?: Category;
  year?: number;
  indicatorTitle?: string;
  years?: OrderedSet<number>;
}

interface DispatchProps {
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
    year: currentYear(state),
    years: years(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class CommonFilters extends React.Component<FiltersProps & DispatchProps, any> {
  public render() {
    const { year, years } = this.props;
    let chart = this.props.location.query.chart;

    if (!chart) {
      chart = "bar";
    }

    return (
      <div className={style.Filters}>
        <div className={style.category}>
          <div className={style.title}>Indicator vizualizat</div>
          {this.renderCategoryDropdown()}
        </div>

        <div className={style.params}>
          <div className={style.year_slider}>
            <div className={style.title}>Anul afișat</div>
            <ReactBootstrapSlider min={years.first()} max={years.last()} tooltip="hide"
                                  ticks={years.toArray()}
                                  ticks_labels={years.toArray()}
                                  handleChange={this.fireChangeYear.bind(this)} value={year} />
          </div>
          <div className={style.chart_type}>
            <div className={style.title}>Tip vizualizare</div>
            <div className={style.chart_options}>
              {this.selectChartButton("bar", ChartIcon, chart)}
              {this.selectChartButton("scatter", ScatterChartIcon, chart)}
            </div>
          </div>
        </div>
      </div>
    );
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
        className={style.select_category}
        id="ind_category" title={category.name}
        onSelect={this.fireChangeCategory.bind(this)}>
        {otherCategories.map((c) => <MenuItem key={c.id.toString()} eventKey={c.id}>{c.name}</MenuItem>)}
      </DropdownButton>
    );
  }

  private selectChartButton(chartType: ChartType, Icon: any, selectedType: ChartType) {
    return (
      <button key={chartType} onClick={this.fireChangeChart.bind(this)} data-chart={chartType}
              className={`${style.button} ${selectedType === chartType ? style.active : ""}`}>
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

  private fireChangeYear(event: any) {
    const {query, pathname} = this.props.location;
    this.props.onAction(push({pathname, query: {...query, year: event.target.value}}));
  }

  private fireChangeCategory(eventKey: number) {
    const {query, pathname} = this.props.location;
    this.props.onAction(push({pathname, query: {...query, category_id: eventKey}}));
  }
}
