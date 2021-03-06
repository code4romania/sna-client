import * as React from 'react';
import {IndexRoute, Route} from 'react-router';

import {App, Home, About} from 'containers';
import AdministrationSidebar from '../components/Sidebar/administration_sidebar';
import MinistriesSidebar from '../components/Sidebar/ministries_sidebar';
import AnticorruptionAdminsSidebar from '../components/Sidebar/anticorruption_sidebar';
import Sidebar from '../components/Sidebar/index';
import CountiesSidebar from '../components/Sidebar/counties_sidebar';
import {MinistryOverview} from '../containers/MinistryOverview/index';
import {CountyOverview} from '../containers/CountyOverview/index';
import {AnticorruptionAdminsOverview} from '../containers/AnticorruptionAdminsOverview/index';
import {MinistriesIndicatorsMain} from '../containers/Indicators/ministry_indicators_main';
import {AnticorruptionAdminsIndicatorsMain} from '../containers/Indicators/anticorruption_admins_indicators_main';
import {CountiesIndicatorsMain} from '../containers/Indicators/counties_indicators_main';

/* tslint:disable:max-line-length */
export default (
  <Route path={process.env.BASE_URL} component={App}>
    <IndexRoute components={{main: Home, sidebar: Sidebar}} />
    <Route path='about' components={{main: About, sidebar: Sidebar}} />
    <Route path='selectAdministration/:id' components={{main: Home, sidebar: AdministrationSidebar}} />
    <Route path='report/:id/1' components={{main: MinistryOverview, sidebar: MinistriesSidebar}} />
    <Route path='report/:id/1/:mid' components={{main: MinistriesIndicatorsMain, sidebar: MinistriesSidebar}} />
    <Route path='report/:id/2' components={{main: AnticorruptionAdminsOverview, sidebar: AnticorruptionAdminsSidebar}} />
    <Route path='report/:id/2/:mid' components={{main: AnticorruptionAdminsIndicatorsMain, sidebar: AnticorruptionAdminsSidebar}} />
    <Route path='report/:id/3' components={{main: CountyOverview, sidebar: CountiesSidebar}} />
    <Route path='report/:id/3/:mid' components={{main: CountiesIndicatorsMain, sidebar: CountiesSidebar}} />
  </Route>
);
/* tslint:enable:max-line-length */
