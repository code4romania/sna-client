import * as React from 'react';
import {Link} from 'react-router';
import {BackLink} from '../BackLink/index';
import {report_path} from '../../helpers/url_helper';
import {ADMIN_TYPE_OTHER} from './administration_sidebar';
import {ChartIcon} from '../ChartIcon/index';

const style = require('./style.css');

interface RouterParams {
  id: string;
}

interface Props {
  params: RouterParams;
}

export class EmptySidebar extends React.Component<Props, {}> {
  public render() {
    const indId = parseInt(this.props.params.id, 10);

    const items = [
    ];

    const menus = items.map((i) => <li key={`item-${i.id}`}>
      <Link to={report_path(indId, ADMIN_TYPE_OTHER, i.id)}>
        {i.name}
      </Link>
    </li>);

    return (<div className={style.Sidebar}>
      <BackLink link={`/selectAdministration/${indId}`} />
      <div className={style.title}>
        <div>Județul</div>
        <div className={style.viewAll}>
          <ChartIcon />
          <Link to={report_path(indId, ADMIN_TYPE_OTHER)}>
            Prezentare Generală
          </Link>
        </div>
      </div>

      <ul className={style.adminType}>
        {menus}
      </ul>
    </div>);
  }
}
