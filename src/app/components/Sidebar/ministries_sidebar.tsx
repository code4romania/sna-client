import * as React from 'react';
import {Link} from 'react-router';
import {BackLink} from '../BackLink/index';
import {report_path} from '../../helpers/url_helper';
import {ADMIN_TYPE_MINISTRIES} from './administration_sidebar';
import {ChartIcon} from '../ChartIcon/index';

const style = require('./style.css');

interface RouterParams {
  id: string;
}

interface Props {
  params: RouterParams;
}

export class MinistriesSidebar extends React.Component<Props, {}> {
  public render() {
    const indId = parseInt(this.props.params.id, 10);

    const items = [
      { id: 1, name: "Ministerul Afacerilor Externe" },
      { id: 2, name: "Ministerul Afacerilor Interne" },
    ];

    const menus = items.map((i) => <li key={`item-${i.id}`}>
      <Link to={report_path(indId, ADMIN_TYPE_MINISTRIES, i.id)}>
        {i.name}
      </Link>
    </li>);

    return (<div className={style.Sidebar}>
      <BackLink link={`/selectAdministration/${indId}`} />
      <div className={style.title}>
        <div>Instituție</div>
        <div className={style.viewAll}>
          <ChartIcon />
          <Link to={report_path(indId, ADMIN_TYPE_MINISTRIES)}>
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
