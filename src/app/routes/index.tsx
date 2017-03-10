import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, About, Help } from 'containers';
import {AdministationSidebar} from '../components/Sidebar/administration_sidebar';
import {MinistriesSidebar} from '../components/Sidebar/ministries_sidebar';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="help" component={Help} />
    <Route path="report/:id/1(/:mid)" components={{main: Home, sidebar: MinistriesSidebar}} />
    <Route path="selectAdministration/:id/1" components={{main: Home, sidebar: MinistriesSidebar}} />
    <Route path="selectAdministration/:id/2" component={Home} />
    <Route path="selectAdministration/:id/3" component={Home} />
    <Route path="selectAdministration/:id" components={{main: Home, sidebar: AdministationSidebar}} />
  </Route>
);
