import * as React from 'react';
import {IndexRoute, Route} from 'react-router';

import {App, Home, About, Help} from 'containers';
import {AdministationSidebar} from '../components/Sidebar/administration_sidebar';
import {MinistriesSidebar} from '../components/Sidebar/ministries_sidebar';
import {Sidebar} from '../components/Sidebar/index';
import {Report} from '../containers/Report/index';
import {CountiesSidebar} from '../components/Sidebar/counties_sidebar';
import {EmptySidebar} from '../components/Sidebar/empty';
import {MinistryOverview} from '../containers/MinistryOverview/index';
import {CountyOverview} from '../containers/CountyOverview/index';
import {IndicatorsMain} from '../containers/Indicators/indicators_main';

export default (
  <Route path='/' component={App}>
    <IndexRoute components={{main: Home, sidebar: Sidebar}} />
    <Route path='about' component={About} />
    <Route path='help' component={Help} />
    <Route path='report/:id/1' components={{main: MinistryOverview, sidebar: MinistriesSidebar}} />
    <Route path='report/:id/1/:mid' components={{main: IndicatorsMain, sidebar: MinistriesSidebar}} />
    <Route path='report/:id/2(/:mid)' components={{main: Report, sidebar: EmptySidebar}} />
    <Route path='report/:id/3(/:mid)' components={{main: CountyOverview, sidebar: CountiesSidebar}} />
    <Route path='selectAdministration/:id' components={{main: Home, sidebar: AdministationSidebar}} />
  </Route>
);
