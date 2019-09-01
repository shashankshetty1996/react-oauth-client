import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isUserLoggedIn } from '../services/AuthService';

import { userSession } from '../constants';

const MainLayoutRoute = ({ component: Component, ...rest }) => {
  /**
   * Check if user is logged in already, else redirect to login page.
   */
  if (!isUserLoggedIn(userSession)) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} component={Component} />;
};

MainLayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default withRouter(MainLayoutRoute);
