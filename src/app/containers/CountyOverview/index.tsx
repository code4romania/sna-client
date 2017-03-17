import * as React from 'react';
import {ContentHeader} from '../../components/ContentHeader/index';
import {CommonFilters} from "../../components/Section/filters";
import {MyLocation, RouteParams} from "../../helpers/url_helper";
import {loadIndicatorsConfig} from "../../redux/modules/indicator/index";
import {ApplicationState} from "../../redux/application_state";
import {currentIndicatorTitle, areCountiesStatsLoaded, countiesFilterData} from "../../selectors/index";
import {loadCountiesStatsConfig} from "../../redux/modules/stats/index";
import {CheckboxGroup, CheckBoxOptions} from "../../components/CheckboxGroup/index";
import {MapChart} from "../../components/MapChart/index";
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');

const style = require('./style.css');

interface Props {
  areStatsLoaded?: boolean;
  indicatorTitle?: string;
  params?: RouteParams;
  location?: MyLocation;
  countiesFilterData?: CheckBoxOptions[];
}

@asyncConnect([
  loadIndicatorsConfig(), loadCountiesStatsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areStatsLoaded: areCountiesStatsLoaded(state),
    indicatorTitle: currentIndicatorTitle(state),
    countiesFilterData: countiesFilterData(state),
  }),
)
export class CountyOverview extends React.Component<Props, any> {
  public render(): JSX.Element {
    const handleToogleCounty = (option) => {
      console.log(option);
    };

    return (
      <div className={style.CountyOverview}>
        <ContentHeader parentTitle="Prezentare generală administrații locale" title={this.props.indicatorTitle} />
        <div className={style.main}>

          <CommonFilters location={this.props.location}/>

          <div className={"row " + style.content}>
            <div className={"col-md-5 " + style.ministry_filter}>
              <div className={style.title}>Date afișate</div>
              <div>
                <CheckboxGroup
                  options={this.props.countiesFilterData}
                  columns={2}
                  onChange={handleToogleCounty} />
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
    if (!this.props.areStatsLoaded) {
      return <div>Loading</div>;
    }

    let chart = this.props.location.query.chart;

    if (!chart) {
      chart = "map";
    }

    if (chart === "map") {
      return <MapChart />;
    } else if (chart === "bar") {
      return <div>TODO</div>;
      // return <CountiesBarChart />;
    } else {
      return <div>TODO</div>;
      {/*return <CountiesScatterChart />;*/}
    }
  }
}
