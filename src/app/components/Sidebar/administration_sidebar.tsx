import * as React from 'react';
import {Link} from 'react-router';
import {BackLink} from '../BackLink/index';

const style = require('./style.css');

interface RouterParams {
  id: string;
}

interface Props {
  params: RouterParams;
}

export class AdministationSidebar extends React.Component<Props, {}> {
  public render() {
    const indId = this.props.params.id;

    return (<div className={style.Sidebar}>
      <BackLink link="/" />
      <div className={style.title}>
        Tip administrare
      </div>
      <ul className={style.adminType}>
        <li>
          <Link to={`/report/${indId}/1`}>
            Ministere
          </Link>
        </li>
        <li>
          <Link to={`/report/${indId}/2`}>
            Independente și anticorupție
          </Link>
        </li>
        <li>
          <Link to={`/report/${indId}/3`}>
            Administrații locale
          </Link>
        </li>
      </ul>
    </div>);
  }
}
