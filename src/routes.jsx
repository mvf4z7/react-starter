import React from 'react';
import { Router, Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';

// Declare routes
var routes = (
  <Route name='app' path='/' handler={ App }>
    <Route name='home' handler={ Home }/>
  </Route>
);

export default routes;
