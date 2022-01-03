import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import { Settings } from './pages/settings/Settings';
import { LandingPage } from './pages/LandingPage';
import { UserProvider } from './context/user/UserProvider';

export function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <UserProvider>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/settings" component={Settings} />
        <Route path="/" component={LandingPage} />
        <Route path="*" > 404 no found</Route>
      </Switch>
    </UserProvider>
  );
}