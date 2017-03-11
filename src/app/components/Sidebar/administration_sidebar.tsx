import * as React from 'react';
import {Link} from 'react-router';
import {BackLink} from '../BackLink/index';
import {report_path} from '../../helpers/url_helper';

export const ADMIN_TYPE_MINISTRIES = 1;
export const ADMIN_TYPE_OTHER = 2;
export const ADMIN_TYPE_COUNTIES = 3;

const style = require('./style.css');

interface RouterParams {
  id: string;
}

interface Props {
  params: RouterParams;
}

export class AdministationSidebar extends React.Component<Props, {}> {
  public render() {
    const indId = parseInt(this.props.params.id, 10);

    return (<div className={style.Sidebar}>
      <BackLink link="/" />
      <div className={style.title}>
        Tip administrare
      </div>
      <ul className={style.adminType}>
        <li>
          <Link to={report_path(indId, ADMIN_TYPE_MINISTRIES)}>
            Ministere
          </Link>
        </li>
        <li>
          <Link to={report_path(indId, ADMIN_TYPE_OTHER)}>
            Independente și anticorupție
          </Link>
        </li>
        <li>
          <Link to={report_path(indId, ADMIN_TYPE_COUNTIES)}>
            Administrații locale
          </Link>
        </li>
      </ul>
    </div>);
  }
}
