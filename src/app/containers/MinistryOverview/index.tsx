import * as React from 'react';
import {OrderedSet} from "immutable";
import {Dispatch} from "react-redux";
import {push} from "react-router-redux";
import {DropdownButton} from "react-bootstrap";
import {MenuItem} from "react-bootstrap";
import ReactBootstrapSlider from "react-bootstrap-slider";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');
import {ContentHeader} from '../../components/ContentHeader/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicator/index';
import {ApplicationState} from '../../redux/application_state';
import {Indicator, Category} from '../../models/indicator';
import {ChartIcon} from "../../components/ChartIcon/index";
import {ScatterChartIcon} from "../../components/ScatterChartIcon/index";
import {loadMinistriesStatsConfig} from "../../redux/modules/stats/index";
import {
  currentIndicatorTitle, areIndicatorsLoaded, currentIndicator, currentCategory, areMinistriesStatsLoaded, currentYear,
  years,
} from "../../selectors/index";
import {MinistryBarChart} from "../../components/BarChart/ministries_bar_chart";
import {MinistriesScatterChart} from "../../components/ScatterChart/ministries_scatter_chart";

export const PASSIVE_COLOR = "#A5B3BB";

const style = require('./style.css');
type ChartType = "bar" | "scatter";

interface RouteParams {
  id: string;
  mid?: string; // ministry_id
}

interface Props {
  areIndicatorsLoaded: boolean;
  areMinistriesStatsLoaded: boolean;
  indicatorTitle?: string;
  indicator?: Indicator;
  category?: Category;
  year?: number;
  years?: OrderedSet<number>;
  params?: RouteParams;
  location?: any;
}

interface DispatchProps {
  onAction?: (action: Redux.Action) => void;
}
@asyncConnect([
  loadIndicatorsConfig(), loadMinistriesStatsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    areMinistriesStatsLoaded: areMinistriesStatsLoaded(state),
    indicatorTitle: currentIndicatorTitle(state),
    indicator: currentIndicator(state),
    category: currentCategory(state),
    year: currentYear(state),
    years: years(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class MinistryOverview extends React.Component<Props & DispatchProps, any> {
  public static contextTypes = {
    router: React.PropTypes.object,
  };

  public render() {
    let chart = this.props.location.query.chart;

    if (!chart) {
      chart = "bar";
    }

    const { year, years } = this.props;

    return (
      <div className={style.MinistryOverview}>
        <ContentHeader parentTitle="Prezentare generală ministere" title={this.props.indicatorTitle} />

        <div className={style.main}>
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

          <div className={style.content}>
            <div className={style.ministry_filter}>
              <div className={style.title}>Date afișate</div>
              <div>
                Ministry selector
              </div>
            </div>
            <div className={style.chart_display}>
              <div className={style.title}>Număr sesizări</div>
              <div>
                {this.chartElement(chart)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private chartElement(chart: ChartType): JSX.Element {
    if (!this.props.areMinistriesStatsLoaded) {
      return <div>Loading</div>;
    }

    if (chart === "bar") {
      return <MinistryBarChart />;
    } else {
      return <MinistriesScatterChart />;
    }
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
