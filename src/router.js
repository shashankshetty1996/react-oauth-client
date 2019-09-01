import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Loader } from './component';

const LoaderComponent = () => <Loader />;

const AsyncLogin = Loadable({
  loader: () => import('./containers/Login/Login'),
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
        <Route path="/" component={AsyncHome} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default router;
