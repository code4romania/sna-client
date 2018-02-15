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
  creportPath,
} from '../../helpers/url_helper';
import {ChartIcon} from '../ChartIcon/index';
import {ApplicationState} from '../../redux/application_state';
import {
  areCountiesLoaded,
  areCountyAdminsLoaded,
  counties,
  countyAdmins,
} from '../../selectors/index';
import SidebarWrapper from '../sidebarWrapper/index';
import {
  County,
  CountyAdmin,
} from '../../models/county';
import {loadCountiesConfig} from '../../redux/modules/counties/index';
import {loadCountyAdminsConfig} from '../../redux/modules/institutions/county';
import {openSidebar} from "../../redux/reducers";
import {DispatchProps} from "../Section/filters";

const style = require('./style.css');

interface Props {
  params?: RouteParams;
  location?: MyLocation;
  counties?: County[];
  countyAdmins?: OrderedMap<number, CountyAdmin>;
  areCountiesLoaded?: boolean;
  areCountyAdminsLoaded?: boolean;
  browser;
}

@asyncConnect([
  loadCountiesConfig(),
  loadCountyAdminsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areCountiesLoaded: areCountiesLoaded(state),
    counties: counties(state),
    areCountyAdminsLoaded: areCountyAdminsLoaded(state),
    countyAdmins: countyAdmins(state),
    browser: state.browser,
  }),
)
class CountiesSidebar extends React.Component<Props & DispatchProps, {}> {
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
    if (!this.props.areCountiesLoaded) {
      return null;
    }

    const indId = parseInt(this.props.params.id, 10);

    // TODO replace counties with countyAdmins.toIndexedSeq().
    const menus = this.props.counties.map((c) => (
      <li key={`item-${c.id}`}>
        <Link to={creportPath(indId, c.id, this.props.location.query)}
              onClick={this.closeSidebar}
              activeStyle={{color: '#337ab7', textDecoration: 'none'}}>
          {c.name}
        </Link>
      </li>
    ));

    return (
      <div className={style.Sidebar}>
        <BackLink link={selAdminPath(indId, this.props.location.query)}/>
        <div className={style.title}>
          <div>Județ</div>
          <div className={style.viewAll}>
            <ChartIcon />
            <Link to={creportPath(indId, null, this.props.location.query)}
                  activeStyle={{color: '#337ab7', textDecoration: 'none'}}>
              Prezentare Generală
            </Link>
          </div>
        </div>
        <ul className={style.countiesType}>
          {menus}
        </ul>
      </div>
    );
  }
}

export default SidebarWrapper(CountiesSidebar);
