import * as React from 'react';
import {Link} from 'react-router';
import {BackLink} from '../BackLink/index';
import {selAdminPath, MyLocation, creportPath} from '../../helpers/url_helper';
import {ChartIcon} from '../ChartIcon/index';

const style = require('./style.css');
const COUNTIES = require('./counties.json');

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

    const menus = COUNTIES.map((i, idx) => <li key={`item-${idx + 1}`}>
      <Link to={creportPath(indId, idx + 1, this.props.location.query)}>
        {i.name}
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
