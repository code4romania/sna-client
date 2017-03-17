import * as React from 'react';
import {Link} from 'react-router';
import {BackLink} from '../BackLink/index';
import {selAdminPath, MyLocation, creportPath} from '../../helpers/url_helper';
import {ChartIcon} from '../ChartIcon/index';
import {County} from "../../models/county";

const style = require('./style.css');
export const COUNTIES = require('./counties.json').map((json, idx) => new County(idx + 1, json.code, json.name));

interface RouterParams {
  id: string;
}

interface Props {
  params: RouterParams;
  location?: MyLocation;
}

export class CountiesSidebar extends React.Component<Props, {}> {
  public render() {
    const indId = parseInt(this.props.params.id, 10);

    const menus = COUNTIES.map((c) => <li key={`item-${c.id}`}>
      <Link to={creportPath(indId, c.id, this.props.location.query)}>
        {c.name}
      </Link>
    </li>);

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

          <ul className={style.adminType}>
            {menus}
          </ul>
      </div>
    );
  }
}
