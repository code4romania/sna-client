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

export class MinistriesSidebar extends React.Component<Props, {}> {
  public render() {
    const indId = this.props.params.id;

    const items = [
      { id: 1, name: "Ministerul Afacerilor Externe" },
      { id: 2, name: "Ministerul Afacerilor Interne" },
    ];

    const menus = items.map((i) => <li>
      <Link to={`/report/${indId}/1/${i.id}`}>
        {i.name}
      </Link>
    </li>);

    return (<div className={style.Sidebar}>
      <BackLink link={`/selectAdministration/${indId}`} />
      <div className={style.title}>
        <div>Instituție</div>
        <div className={style.viewAll}>
          <Link to={`/report/${indId}/1`}>
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
