// import * as React from 'react';
// import {Link} from 'react-router';
//
// import {BackLink} from '../BackLink/index';
// import {MyLocation, selAdminPath, RouteParams, ireportPath} from '../../helpers/url_helper';
// import {ChartIcon} from '../ChartIcon/index';
// import SidebarWrapper from '../sidebarWrapper/index';
//
// const style = require('./style.css');
//
// interface Props {
//   params: RouteParams;
//   location?: MyLocation;
// }
//
// // for "Independența și Anticorupție"
// class EmptySidebar extends React.Component<Props, {}> {  // TODO remove?
//   public render() {
//     const items = [];
//     const indId = parseInt(this.props.params.id, 10);
//     const menus = items.map((i) => (
//       <li key={`item-${i.id}`}>
//         <Link to={ireportPath(indId, i.id, this.props.location.query)}>
//           {i.name}
//         </Link>
//       </li>
//     ));
//
//     return (
//       <div className={style.Sidebar}>
//         <BackLink link={selAdminPath(indId, this.props.location.query)} />
//         <div className={style.title}>
//           <div>Instituția</div>
//           <div className={style.viewAll}>
//             <ChartIcon />
//             <Link to={ireportPath(indId, null, this.props.location.query)}>
//               Prezentare Generală
//             </Link>
//           </div>
//         </div>
//         <ul className={style.adminType}>
//           {menus}
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default SidebarWrapper(EmptySidebar);
