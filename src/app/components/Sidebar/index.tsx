import * as React from 'react';
import {Link} from 'react-router';
import {List} from 'immutable';
import {Dispatch} from 'react-redux';
const {connect} = require('react-redux');
const {asyncConnect} = require('redux-connect');

import {Indicator} from '../../models/indicator';
import {Badge} from '../Badge/index';
import {ApplicationState} from '../../redux/application_state';
import {loadIndicatorsConfig} from '../../redux/modules/indicator/index';
import {selAdminPath, MyLocation} from '../../helpers/url_helper';
import {areIndicatorsLoaded, indicators /* location */} from '../../selectors/index';
import {DispatchProps} from '../Section/filters';
import SidebarWrapper from '../sidebarWrapper/index';

const style = require('./style.css');

interface SidebarProps {
  areIndicatorsLoaded?: boolean;
  indicators?: List<Indicator>;
  location?: MyLocation;
}

@asyncConnect([
  loadIndicatorsConfig(),
])
@connect(
  (state: ApplicationState): SidebarProps  => ({
    areIndicatorsLoaded: areIndicatorsLoaded(state),
    indicators: indicators(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class HomeSidebar extends React.Component<SidebarProps & DispatchProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { areIndicatorsLoaded } = this.props;

    let content = null;
    /* tslint:disable:no-unused-expression */
    this.props.location && this.props.location.query && delete this.props.location.query.category_id; // TODO ~
    /* tslint:enable:no-unused-expression */

    const link = (indicator) => selAdminPath(indicator.id, this.props.location && this.props.location.query); // TODO ~

    if (!areIndicatorsLoaded) {
      content = <li key='0'>Se încarcă</li>;
    } else {
      content = this.props.indicators.map((indicator: Indicator) => {
        return (
          <li key={indicator.id}><Badge text={indicator.id.toString()}/>
            <Link to={link(indicator)}>{indicator.name}</Link>
          </li>
        );
      });
    }

    return (
      <div className={style.Sidebar}>
        <div className={style.spacer} />
        <div className={style.title}>
          Indicatori SNA
        </div>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

export default SidebarWrapper(HomeSidebar);
