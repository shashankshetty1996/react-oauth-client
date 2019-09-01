import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Loader } from './component';

import MainLayout from './layout/MainLayoutRoute';

const LoaderComponent = () => <Loader />;

const AsyncLogin = Loadable({
  loader: () => import('./containers/Login/Login'),
  loading: LoaderComponent,
});

const AsyncAuthCallback = Loadable({
  loader: () => import('./containers/Login/AuthCallback/AuthCallback'),
  loading: LoaderComponent,
});

const AsyncHome = Loadable({
  loader: () => import('./containers/Home/Home'),
  loading: LoaderComponent,
});

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={AsyncLogin} />
        <Route path="/authcallback" component={AsyncAuthCallback} />

        <MainLayout path="/" component={AsyncHome} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default router;
