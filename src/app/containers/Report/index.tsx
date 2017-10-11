// import * as React from 'react';
// import {ContentHeader} from '../../components/ContentHeader/index';
// // import {loadIndicatorsConfig} from '../../redux/modules/indicators/index';
// import {ApplicationState, LoadEntryState, isContentLoaded} from '../../redux/application_state';
// // import {Indicator} from '../../models/indicator';
// import {loadCategoriesConfig} from "../../redux/modules/categories/index";
// import {Category} from "../../models/category";
// const { asyncConnect } = require('redux-connect');
// const { connect } = require('react-redux');
//
// interface RouteParams {
//   id: string;
// }
//
// interface ReportProps {
//   loader?: LoadEntryState;
//   categories?: Category[];
//   params?: RouteParams;
// }
//
// @asyncConnect([
//   loadCategoriesConfig(),
// ])
// @connect(
//   (state: ApplicationState): ReportProps  => ({
//     loader: state.reduxAsyncConnect.loadState.categories,
//     categories: state.reduxAsyncConnect.categories,
//   }),
// )
// export class Report extends React.Component<ReportProps, any> {  // TODO remove?
//   public render() {
//     const {loader, params, categories} = this.props;
//
//     if (!categories) {
//       return null;
//     }
//
//     let title = null;
//
//     if (isContentLoaded(loader)) {
//       title = `${params.id}. ${categories[parseInt(params.id, 10) - 1].name}`;
//     }
//
//     return (
//       <div className="select-todo">
//         <ContentHeader parentTitle="Prezentare indicatori SNA" title={title}/>
//         <div>TODO show report</div>
//       </div>
//     );
//   }
// }
