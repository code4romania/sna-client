import * as React from 'react';
import {Link} from 'react-router';
import {OrderedMap} from 'immutable';
const {connect} = require('react-redux');
const {asyncConnect} = require('redux-connect');

import SidebarWrapper from '../sidebarWrapper/index';
import {BackLink} from '../BackLink/index';
import {selAdminPath, MyLocation, creportPath} from '../../helpers/url_helper';
import {ChartIcon} from '../ChartIcon/index';
// import {County} from '../../models/county';
import {County, CountyAdmin} from '../../models/county';
import {ApplicationState} from '../../redux/application_state';
import {loadCountyAdminsConfig} from '../../redux/modules/institutions/county';
import {areCountiesLoaded, areCountyAdminsLoaded, counties, countyAdmins} from '../../selectors/index';
import {loadCountiesConfig} from "../../redux/modules/counties/index";

const style = require('./style.css');
// export const COUNTIES = require('./counties.json').map((json, idx) => new County(idx + 1, json.code, json.name));

interface RouterParams {
  id: string;
}

interface Props {
  params?: RouterParams;
  location?: MyLocation;
  counties?: County[];
  countyAdmins?: OrderedMap<number, CountyAdmin>;
  areCountiesLoaded?: boolean;
  areCountyAdminsLoaded?: boolean;
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
  }),
)
class CountiesSidebar extends React.Component<Props, {}> {
  public render() {
    if (!this.props.areCountiesLoaded) {
      return (<div>Loading</div>);
    }

    const indId = parseInt(this.props.params.id, 10);

    const menus = this.props.counties.map((c) => (  // TODO replace counties with countyAdmins.toIndexedSeq().
      <li key={`item-${c.id}`}>
        <Link to={creportPath(indId, c.id, this.props.location.query)}>
          {c.name}
        </Link>
      </li>
      ),
    );

    return (
      <div className={style.Sidebar}>
        <BackLink link={selAdminPath(indId, this.props.location.query)}/>
        <div className={style.title}>
          <div>Județul</div>
          <div className={style.viewAll}>
            <ChartIcon />
            <Link to={creportPath(indId, null, this.props.location.query)}>
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
