import { adminSession } from 'constants.js';
import { setCookie, getCookie, deleteCookie } from '../utils/CookieFunc';

const setSession = (data, cookieName = adminSession) => {
  setCookie(cookieName, JSON.stringify(data), 24 * 60 * 60); // store token for 30 days
};

const getSession = (cookieName = adminSession) => {
  let sessionData;
  try {
    sessionData = JSON.parse(getCookie(cookieName)) || {};
  } catch (e) {
    sessionData = {};
    setSession(sessionData); // set it empty
  }
  return sessionData;
};

const deleteSession = (cookieName = adminSession) => {
  deleteCookie(cookieName);
};

const redirectToLogin = () => {
  const urlParts = window.location.pathname.split('/');
  window.location.assign(`/${urlParts[1]}`);
};

const isUserLoggedIn = (cookieName = adminSession) => {
  const { accessToken } = getSession(cookieName);
  if (accessToken) {
    return true;
  }
  return false;
};

const logout = (cookieName = adminSession) => {
  deleteSession(cookieName);
  redirectToLogin();
};

export { setSession, getSession, deleteSession, isUserLoggedIn, logout, redirectToLogin };
