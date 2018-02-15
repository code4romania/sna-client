import * as React from 'react';
import {Link} from 'react-router';
import {OrderedMap} from 'immutable';
const {connect} = require('react-redux');
const {asyncConnect} = require('redux-connect');

import {BackLink} from '../BackLink/index';
import {
  selAdminPath,
  MyLocation,
  RouteParams,
  mreportPath,
} from '../../helpers/url_helper';
import {ChartIcon} from '../ChartIcon/index';
import {ApplicationState} from '../../redux/application_state';
import {
  areMinistryStatsLoaded,
  ministryAdmins,
} from '../../selectors/index';
import SidebarWrapper from '../sidebarWrapper/index';
import {Ministry} from '../../models/ministry';
import {loadMinistriesConfig} from '../../redux/modules/institutions/ministry';
import {DispatchProps} from "../Section/filters";
import {openSidebar} from "../../redux/reducers";
import {ResponsiveBrowser} from "../../models/responsiveBrowser";

const style = require('./style.css');

interface Props {
  params?: RouteParams;
  location?: MyLocation;
  ministries?: OrderedMap<number, Ministry>;
  areMinistriesStatsLoaded?: boolean;
  browser: ResponsiveBrowser;
}

@asyncConnect([
  loadMinistriesConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areMinistriesStatsLoaded: areMinistryStatsLoaded(state),
    ministries: ministryAdmins(state),
    browser: state.browser,
  }),
)
class MinistriesSidebar extends React.Component<Props & DispatchProps, {}> {
  constructor(props) {
    super(props);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  private closeSidebar(event: any) {
    const {browser} = this.props;
    const smaller = (browser.lessThan.medium && browser.width !== browser.breakpoints.small);

    if (smaller) {
      event.preventDefault();
      this.props.onAction(openSidebar(false));
    }
  }

  public render() {
    if (!this.props.areMinistriesStatsLoaded) {
      return null;
    }

    const indId = parseInt(this.props.params.id, 10);

    const menus = this.props.ministries.toIndexedSeq().map((i) => (
      <li key={`item-${i.id}`}>
        <Link to={mreportPath(indId, i.id, this.props.location.query)}
              onClick={this.closeSidebar}
              activeStyle={{color: '#337ab7', textDecoration: 'none'}}>
          {i.name}
        </Link>
      </li>
    ));

    return (
      <div className={style.Sidebar}>
        <BackLink link={selAdminPath(indId, this.props.location.query)} />
        <div className={style.title}>
          <div>Instituție</div>
          <div className={style.viewAll}>
            <ChartIcon />
            <Link to={mreportPath(indId, null, this.props.location.query)}
                  activeStyle={{color: '#337ab7', textDecoration: 'none'}}>
              Prezentare Generală
            </Link>
          </div>
        </div>
        <ul className={style.adminType}>
          {menus}
        </ul>
      </div>
    );
  }
}

export default SidebarWrapper(MinistriesSidebar);
