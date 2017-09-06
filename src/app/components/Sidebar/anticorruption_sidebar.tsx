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
  ireportPath,
} from '../../helpers/url_helper';
import {ChartIcon} from '../ChartIcon/index';
import {ApplicationState} from '../../redux/application_state';
import {
  anticorruptionAdmins,
  areAnticorruptionAdminsLoaded,
} from '../../selectors/index';
import SidebarWrapper from '../sidebarWrapper/index';
import {AnticorruptionAdmin} from '../../models/anticorruption';
import {loadAnticorruptionAdminsConfig} from '../../redux/modules/institutions/anticorruption';

const style = require('./style.css');

interface Props {
  params?: RouteParams;
  location?: MyLocation;
  anticorruptionAdmins?: OrderedMap<number, AnticorruptionAdmin>;
  areAnticorruptionAdminsLoaded?: boolean;
}

@asyncConnect([
  loadAnticorruptionAdminsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    areAnticorruptionAdminsLoaded: areAnticorruptionAdminsLoaded(state),
    anticorruptionAdmins: anticorruptionAdmins(state),
  }),
)
class AnticorruptionAdminsSidebar extends React.Component<Props, {}> {
  public render() {
    if (!this.props.areAnticorruptionAdminsLoaded) {
      return (<div>Loading</div>);
    }

    const indId = parseInt(this.props.params.id, 10);

    const menus = this.props.anticorruptionAdmins.toIndexedSeq().map((i) => (
      <li key={`item-${i.id}`}>
        <Link to={ireportPath(indId, i.id, this.props.location.query)}>
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
            <Link to={ireportPath(indId, null, this.props.location.query)}>
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

export default SidebarWrapper(AnticorruptionAdminsSidebar);
