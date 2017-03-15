import * as React from 'react';
import {DropdownButton} from "react-bootstrap";
import {MenuItem} from "react-bootstrap";
import ReactBootstrapSlider from "react-bootstrap-slider";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');

import {ContentHeader} from '../../components/ContentHeader/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicator/index';
import {ApplicationState, LoadEntryState, isContentLoaded} from '../../redux/application_state';
import {Indicator} from '../../models/indicator';
import {report_path} from "../../helpers/url_helper";
import {ADMIN_TYPE_MINISTRIES} from "../../components/Sidebar/administration_sidebar";
import {ChartIcon} from "../../components/ChartIcon/index";
import {ScatterChartIcon} from "../../components/ScatterChartIcon/index";
import {SimpleBarChart} from "../../components/BarChart/index";
import {SimpleScatterChart} from "../../components/ScatterChart/index";

export const PASSIVE_COLOR = "#A5B3BB";

const style = require('./style.css');
type ChartType = "bar" | "scatter";

interface RouteParams {
  id: string;
  mid?: string; // ministry_id
}

interface Props {
  loader?: LoadEntryState;
  indicators?: Indicator[];
  params?: RouteParams;
  location?: any;
}

@asyncConnect([
  loadIndicatorsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    loader: state.reduxAsyncConnect.loadState.indicators,
    indicators: state.reduxAsyncConnect.indicators,
  }),
)
export class MinistryOverview extends React.Component<Props, any> {
  public static contextTypes = {
    router: React.PropTypes.object,
  };

  public render() {
    const yearStr = this.props.location.query.year;
    let chart = this.props.location.query.chart;

    if (!chart) {
      chart = "bar";
    }

    const year = yearStr ? parseInt(yearStr, 10) : 2016;

    return (
      <div className={style.MinistryOverview}>
        <ContentHeader parentTitle="Prezentare generală ministere" title={this.title()}/>

        <div className={style.main}>
          <div className={style.category}>
            <div className={style.title}>Indicator vizualizat</div>
            {this.renderIndicatorDropdown()}
          </div>

          <div className={style.params}>
            <div className={style.year_slider}>
              <div className={style.title}>Anul afișat</div>
              <ReactBootstrapSlider min={2011} max={2016} handleChange={this.fireChangeYear.bind(this)} value={year} />
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
    if (chart === "bar") {
      return <SimpleBarChart />;
    } else {
      return <SimpleScatterChart />;
    }
  }

  private title(): string {
    const { loader, params } = this.props;

    let title = "Loading";

    if (isContentLoaded(loader)) {
      title = `${params.id}. ${this.activeIndicator().name}`;
    }

    return title;
  }

  private renderIndicatorDropdown(): JSX.Element | null {
    const { loader, location } = this.props;

    if (!isContentLoaded(loader)) {
      return null;
    }

    const activeCategory = parseInt(location.query.category_id || "0", 10);
    const categories = this.activeIndicator().categories;
    let category = null;

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === activeCategory) {
        category = categories[i];
        break;
      }
    }

    if (category === null) {
      category = categories[0];
    }

    const otherCategories = categories.filter((c) => c.id !== category.id);

    return <DropdownButton
      className={style.select_category}
      id="ind_category" title={category.name}
      onSelect={this.fireChangeCategory.bind(this)}>
      {otherCategories.map((c) => <MenuItem key={c.id.toString()} eventKey={c.id}>{c.name}</MenuItem>)}
    </DropdownButton>;
  }

  private activeIndicator(): Indicator {
    const { params, indicators } = this.props;
    return indicators[parseInt(params.id, 10) - 1];
  }

  private selectChartButton(chartType: ChartType, Icon: any, selectedType: ChartType) {
    return <button key={chartType} onClick={this.fireChangeChart.bind(this)} data-chart={chartType}
      className={`${style.button} ${selectedType === chartType ? style.active : ""}`}>
      <Icon color={selectedType !== chartType ? PASSIVE_COLOR : null} />
    </button>;
  }

  private fireChangeChart(event: any) {
    const {chart} = event.target.dataset;
    const query = this.props.location.query;

    if (chart === query.chart) {
      return;
    }

    this.context.router.push({
      pathname: this.path(),
      query: Object.assign({}, query, {chart}),
    });
  }

  private fireChangeYear(event: any) {
    this.context.router.push({
      pathname: this.path(),
      query: Object.assign({}, this.props.location.query, {year: event.target.value}),
    });
  }

  private fireChangeCategory(eventKey: number) {
    this.context.router.push({
      pathname: this.path(),
      query: Object.assign({}, this.props.location.query, {category_id: eventKey}),
    });
  }

  private path(): string {
    const {id, mid} = this.props.params;
    return report_path(parseInt(id, 10), ADMIN_TYPE_MINISTRIES, mid && parseInt(mid, 10));
  }
}
