import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, About, Help } from 'containers';
import {AdministationSidebar} from '../components/Sidebar/administration_sidebar';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="help" component={Help} />
    <Route path="selectAdministration/:id/:type" component={Home} />
    <Route path="selectAdministration/:id" components={{main: Home, sidebar: AdministationSidebar}} />
  </Route>
);
