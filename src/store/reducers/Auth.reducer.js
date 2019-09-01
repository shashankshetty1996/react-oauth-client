import ACTIONS from '../actionTypes';

import { setSession, logout } from '../../services/AuthService';
import { userSession } from '../../constants';

const initialState = {
  isInitialDataLoaded: false,
  isAuthenticated: false,
};

const Auth = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case ACTIONS.AUTH.GET_ACCESS_TOKEN_SUCCESS: {
      setSession({ ...action.data }, userSession);
      return { ...state, isInitialDataLoaded: true, isAuthenticated: true };
    }

    case ACTIONS.AUTH.GET_ACCESS_TOKEN_FAIL: {
      logout(userSession);
      return { ...state, isInitialDataLoaded: true, isAuthenticated: false };
    }

    default:
      return { ...state };
  }
};

export default Auth;
