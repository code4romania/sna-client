import * as React from 'react';
import {Link} from 'react-router';

const style = require('./style.css');

export class AdministationSidebar extends React.Component<{}, {}> {
  public render() {
    return (<div className={style.Sidebar}>
      <div className={style.backLink}>
        <Link to="/">Înapoi</Link>
      </div>
      <div className={style.title}>
        Tip administrare
      </div>
      <ul className={style.adminType}>
        <li>
          <Link to={`/selectAdministration/1/1`}>
            Ministere
          </Link>
        </li>
        <li>
          <Link to={`/selectAdministration/1/2`}>
            Independente și anticorupție
          </Link>
        </li>
        <li>
          <Link to={`/selectAdministration/1/3`}>
            Administrații locale
          </Link>
        </li>
      </ul>
    </div>);
  }
}
