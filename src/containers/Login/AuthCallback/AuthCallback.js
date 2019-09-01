/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOGIN } from '../../../constants';
import { accessTokenAction } from '../../../store/actions/Auth.action';

const AuthCallback = props => {
  const { history, location, accessTokenSuccess } = props;

  useEffect(() => {
    const authResponse = getParamsInHash();

    if (authResponse.accessToken) handleLoginSuccess(authResponse);
  }, []);

  const handleLoginSuccess = authResponse => {
    accessTokenSuccess(authResponse);
    const { opener } = window;
    const { SUCCESS_MESSAGE } = LOGIN;
    const origin = `${window.location.protocol}//${window.location.host}`;

    // checks if the instance of parent window is available.
    if (opener) {
      opener.postMessage(SUCCESS_MESSAGE, origin);
      window.close();
    } else {
      history.push('/');
    }
  };

  const getParamsInHash = () => {
    return location.search
      .substring(1)
      .split('&')
      .reduce((acc, curr) => {
        const [key, value] = curr.split('=');
        return { ...acc, [key]: value };
      }, {});
  };

  return <div>This is what you are going to see man</div>;
};

AuthCallback.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  accessTokenSuccess: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  accessTokenSuccess: data => dispatch(accessTokenAction(data)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AuthCallback)
);
