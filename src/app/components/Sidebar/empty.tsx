import * as React from 'react';
import {Link} from 'react-router';
import {BackLink} from '../BackLink/index';
import {MyLocation, selAdminPath, RouterParams, ireportPath} from '../../helpers/url_helper';
import {ChartIcon} from '../ChartIcon/index';

const style = require('./style.css');

interface Props {
  params: RouterParams;
  location?: MyLocation;
}

// for "Independende și Anticorupție"
export class EmptySidebar extends React.Component<Props, {}> {
  public render() {
    const indId = parseInt(this.props.params.id, 10);

    const items = [
    ];

    const menus = items.map((i) => (
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
          <div>Instituția</div>
          <div className={style.viewAll}>
            <ChartIcon />
            <Link to={ireportPath(indId, null, this.props.location.query)}>
              Prezentare Generală
            </Link>
          </div>
        </div>
<<<<<<< 3dc1eb7ba1fd20bf4bc997f90ee6fc20037deea9
        </div>
=======
>>>>>>> 764261665bc98203544f3eee574222a0b3953b64

        <ul className={style.adminType}>
          {menus}
        </ul>
      </div>
    );
  }
}
