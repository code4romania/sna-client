import * as React from 'react';
import {MyLocation, RouteParams} from "../../helpers/url_helper";
import {YearFilters} from "../../components/Section/year_filter";

interface Props {
  location?: MyLocation;
  params?: RouteParams;
}

export class IndicatorsMain extends React.Component<Props, any> {
  public render() {
    return (
      <div>
        <YearFilters location={this.props.location} />

      </div>
    );
  }
}
