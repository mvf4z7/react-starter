import React from 'react';
import { Router, Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Info from './components/info';

// Declare routes
var routes = (
  <Route name='app' path='/' handler={ App }>
    <Route name='home' path='/' handler={ Home }/>
    <Route name='info' path='/info' handler={ Info }/>
    <DefaultRoute handler={ Home }/>
  </Route>
);

export default routes;
