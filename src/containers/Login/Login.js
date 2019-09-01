import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Button } from '../../component';

import { LOGIN } from '../../constants';
import { openPopupInCenter } from '../../utils/utils';

const Login = props => {
  const { history } = props;
  const { TITLE, SIGN_IN, SUCCESS_MESSAGE } = LOGIN;

  const loginEventListener = event => {
    const origin = `${window.location.protocol}//${window.location.host}`;
    if (event.origin !== origin) return;

    if (event.data === SUCCESS_MESSAGE) {
      unregisterMessageEventListener();
      history.push('/');
    }
  };

  const openLoginPopup = () => {
    registerMessageEventListener();
    openPopupInCenter('https://google.com');
  };

  const registerMessageEventListener = () => {
    window.addEventListener('message', loginEventListener);
  };

  const unregisterMessageEventListener = () => {
    window.removeEventListener('message', loginEventListener);
  };

  return (
    <div className="login">
      <h1 className="title">{TITLE}</h1>
      <Button onClick={openLoginPopup}>{SIGN_IN}</Button>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Login);
