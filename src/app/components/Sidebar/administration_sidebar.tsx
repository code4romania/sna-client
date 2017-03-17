import * as React from 'react';
import {Link} from 'react-router';
import {BackLink} from '../BackLink/index';
import {RouterParams, mreportPath, ireportPath, creportPath} from '../../helpers/url_helper';

const style = require('./style.css');

interface Props {
  params: RouterParams;
  location?: any;
}

export class AdministationSidebar extends React.Component<Props, {}> {
  public render() {
    const indId = parseInt(this.props.params.id, 10);

    return (
      <div className={style.Sidebar}>
        <BackLink link={{...this.props.location, pathname: '/'}} />
        <div className={style.title}>
          Tip administrare
        </div>
        <ul className={style.adminType}>
          <li>
            <Link to={mreportPath(indId, null, this.props.location.query)}>
              Ministere
            </Link>
          </li>
          <li>
            <Link to={ireportPath(indId, null, this.props.location.query)}>
              Independente și anticorupție
            </Link>
          </li>
          <li>
            <Link to={creportPath(indId, null, this.props.location.query)}>
              Administrații locale
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
