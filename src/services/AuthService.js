import { userSession } from '../constants.js';
import { setCookie, getCookie, deleteCookie } from '../utils/CookieFunc';

const setSession = (data, cookieName = userSession, sessionTime = 1) => {
  setCookie(cookieName, JSON.stringify(data), sessionTime);
};

const getSession = (cookieName = userSession) => {
  let sessionData;
  try {
    sessionData = JSON.parse(getCookie(cookieName)) || {};
  } catch (e) {
    sessionData = {};
    setSession(sessionData); // set it empty
  }
  return sessionData;
};

const deleteSession = (cookieName = userSession) => {
  deleteCookie(cookieName);
};

const redirectToLogin = () => {
  const urlParts = window.location.pathname.split('/');
  window.location.assign(`/${urlParts[1]}`);
};

const isUserLoggedIn = (cookieName = userSession) => {
  const { accessToken } = getSession(cookieName);
  if (accessToken) {
    return true;
  }
  return false;
};

const logout = (cookieName = userSession) => {
  deleteSession(cookieName);
  redirectToLogin();
};

export { setSession, getSession, deleteSession, isUserLoggedIn, logout, redirectToLogin };
