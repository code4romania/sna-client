import * as React from 'react';
const { connect } = require('react-redux');
import {Dispatch} from 'react-redux';
import {push} from 'react-router-redux';
// const jquery = require('jquery');  // stub dep needed by bootstrap-slider
import ReactBootstrapSlider from 'react-bootstrap-slider';
import {DispatchProps, filterStyle} from './filters';
import {ApplicationState} from '../../redux/application_state';
import {currentYear, years} from '../../selectors/index';
// import {OrderedSet} from 'immutable';
import {MyLocation} from '../../helpers/url_helper';
import {commonStyle} from '../../containers/App/index';

interface YearFiltersProps {
  location: MyLocation;
  year?: number;
  years?: number[]; // OrderedSet<number>
  disabled?: boolean;
}

@connect(
  (state: ApplicationState, ownProps: YearFiltersProps): YearFiltersProps => ({
    ...ownProps,
    year: currentYear(state),
    years: years(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class YearFilters extends React.Component<YearFiltersProps & DispatchProps, any> {
  constructor(props) {
    super(props);
    this.fireChangeYear = this.fireChangeYear.bind(this);
  }

  public render() {
    const { year, years } = this.props;

    // <!-- .first() ; .last(); .toArray() ; .toArray()-->
    return (
      <div className={filterStyle.year_slider}>
        <div className={`slider-title ${commonStyle.title}`}>Anul afișat</div>
        <ReactBootstrapSlider min={years[0]} max={years[years.length - 1]} tooltip='hide'
                              ticks={years}
                              disabled={this.props.disabled ? 'disabled' : ''}
                              ticks_labels={years}
                              handleChange={this.fireChangeYear} value={year} />
      </div>
    );
  }

  private fireChangeYear(event: any) {
    const {query, pathname} = this.props.location;
    this.props.onAction(push({pathname, query: {...query, year: event.target.value}}));
  }
}
