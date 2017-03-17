import * as React from 'react';
import {ContentHeader} from '../../components/ContentHeader/index';
import {CommonFilters} from "../../components/Section/filters";
import {MyLocation, RouteParams} from "../../helpers/url_helper";
import {loadIndicatorsConfig} from "../../redux/modules/indicator/index";
import {ApplicationState} from "../../redux/application_state";
import {areIndicatorsLoaded, currentIndicatorTitle} from "../../selectors/index";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');

const style = require('./style.css');

interface Props {
  areIndicatorsLoaded: boolean;
  indicatorTitle?: string;
  params?: RouteParams;
  location?: MyLocation;
}

@asyncConnect([
  loadIndicatorsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    indicatorTitle: currentIndicatorTitle(state),
  }),
)
export class CountyOverview extends React.Component<Props, any> {
  public render(): JSX.Element {
    return (
      <div className={style.CountyOverview}>
        <ContentHeader parentTitle="Prezentare generală administrații locale" title={this.props.indicatorTitle} />
        <div className={style.main}>

          <CommonFilters location={this.props.location}/>

          <div className={"row " + style.content}>
            <div className={"col-md-5 " + style.ministry_filter}>
              <div className={style.title}>Date afișate</div>
              <div>
                County selector
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
    return <div>TODO</div>;

    // if (!this.props.areStatsLoaded) {
    // }
    //
    // let chart = this.props.location.query.chart;
    //
    // if (!chart) {
    //   chart = "map";
    // }

    // if (chart === "map") {
    //   <RomaniaMap width={500} colorMap={map} />
    // } else if (chart === "bar") {
    //   return <CountiesBarChart />;
    // } else {
    //   return <CountiesScatterChart />;
    // }
  }
}
