import * as React from 'react';
import {Indicator} from '../../models/indicator';
import {Badge} from '../Badge/index';
import {ApplicationState} from '../../redux/application_state';
import {Link} from 'react-router';
import {loadIndicatorsConfig} from '../../redux/modules/indicator/index';
import {selAdminPath, MyLocation} from "../../helpers/url_helper";
import {areIndicatorsLoaded, indicators} from "../../selectors/index";
import {List} from "immutable";
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

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
)
export class Sidebar extends React.Component<SidebarProps, {}> {
  public render() {
    const { areIndicatorsLoaded } = this.props;

    let content = null;
    delete this.props.location.query.category_id;

    if (!areIndicatorsLoaded) {
      content = <li key="0">Se încarcă</li>;
    } else {
      content = this.props.indicators.map((indicator: Indicator) => {
        return <li key={indicator.id}><Badge text={indicator.id.toString()}/>
          <Link to={selAdminPath(indicator.id, this.props.location.query)}>{indicator.name}</Link>
          </li>;
      });
    }

    return (<div className={style.Sidebar}>
      <div className={style.spacer} />
      <div className={style.title}>
        Indicatori SNA
      </div>
      <ul>
        {content}
      </ul>
    </div>);
  }
}
