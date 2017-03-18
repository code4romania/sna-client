import * as React from 'react';
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');
import {ContentHeader} from '../../components/ContentHeader/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicator/index';
import {ApplicationState} from '../../redux/application_state';
import {loadMinistriesStatsConfig} from "../../redux/modules/stats/index";
import {
  currentIndicatorTitle, areIndicatorsLoaded, areMinistriesStatsLoaded,
} from "../../selectors/index";
import {MinistryBarChart} from "../../components/BarChart/ministries_bar_chart";
import {MinistriesScatterChart} from "../../components/ScatterChart/ministries_scatter_chart";
import {CommonFilters} from "../../components/Section/filters";
import {MyLocation, RouteParams} from "../../helpers/url_helper";

const style = require('./style.css');

export type ChartType = "bar" | "scatter" | "map";

interface Props {
  areIndicatorsLoaded: boolean;
  areMinistriesStatsLoaded: boolean;
  indicatorTitle?: string;
  params?: RouteParams;
  location?: MyLocation;
}

interface DispatchProps {
}
@asyncConnect([
  loadIndicatorsConfig(), loadMinistriesStatsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    areMinistriesStatsLoaded: areMinistriesStatsLoaded(state),
    indicatorTitle: currentIndicatorTitle(state),
  }),
)
export class MinistryOverview extends React.Component<Props & DispatchProps, any> {
  public static contextTypes = {
    router: React.PropTypes.object,
  };

  public render() {
    return (
      <div className={style.MinistryOverview}>
        <ContentHeader parentTitle="Prezentare generală ministere" title={this.props.indicatorTitle} />

        <div className={style.main}>

          <CommonFilters location={this.props.location}/>

          <div className={"row " + style.content}>
            <div className={"col-md-5 " + style.ministry_filter}>
              <div className={style.title}>Date afișate</div>
              <div>
                Ministry selector
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
      return <MinistryBarChart />;
    } else {
      return <MinistriesScatterChart />;
    }
  }
}
