import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from './components/Loading';
import { ProtectedRoute, WithLayoutRoute } from './routers';

import { PublicLayout } from './layouts';



// Register - Login
const Register = lazy(() => import('./pages/Public/Register'));
const Login = lazy(() => import('./pages/Public/Login'));

// Public
const HomePage = lazy(() => import('./pages/Public/home/Home.js'));
const Details = lazy(() => import('./pages/Public/details/Details.js'));
const BookShow = lazy(() => import('./pages/Public/bookshow/BookShow.js'));
const BookingsPage = lazy(() => import('./pages/Public/Bookings/BookingsPage.js'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />


          <ProtectedRoute
            exact
            path="/home"
            layout={PublicLayout}
            component={HomePage}
          />
          <ProtectedRoute
            exact
            path="/userbookings/:id"
            layout={PublicLayout}
            layoutProps={{ withFooter: false }}
            component={BookingsPage}
          />
          <WithLayoutRoute
            exact
            path="/"
            layout={PublicLayout}
            component={Login}
          />
          <ProtectedRoute
            exact
            path="/movie/:id"
            layout={PublicLayout}
            layoutProps={{ withFooter: false }}
            component={Details}
          />
          <ProtectedRoute
            exact
            path="/movie/booking/:id"
            layout={PublicLayout}
            layoutProps={{ withFooter: false }}
            component={BookShow}
          />
         
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
