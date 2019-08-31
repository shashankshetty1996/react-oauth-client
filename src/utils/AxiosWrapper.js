import axios from 'axios';
import { getSession, logout } from '../services/AuthService';

class AxiosWrapper {
  constructor(sessionCookie) {
    this.sessionCookie = sessionCookie;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.interceptors.response.use(response => response, this.handleAPIError);
  }

  getAuthHeader = () => {
    const sessionData = getSession(this.sessionCookie);
    if (Object.keys(sessionData).length) {
      const { accessToken: token } = sessionData;
      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common.Authorization;
      }
    }

    return {};
  };

  _ajax = ({ method, url, data = {}, headers }) => {
    const requestHeaders = { ...headers, ...this.getAuthHeader() };
    return axios({ method, url, data, headers: requestHeaders })
      .then(response => response)
      .catch(error => error.response);
  };

  postData = (url, data, headers) => this._ajax({ method: 'post', url, data, headers });

  getData = (url, data, headers) => this._ajax({ method: 'get', url, data, headers });

  putData = (url, data) => this._ajax({ method: 'put', url, data });

  deleteData = (url, data) => this._ajax({ method: 'delete', url, data });

  patchData = (url, data) => this._ajax({ method: 'patch', url, data });

  handleAPIError = error => {
    if (error.response && error.response.status === 401) {
      // logout user in this case
      logout(this.sessionCookie, this.rememberMeCookie);
    } else {
      return Promise.reject(error);
    }
    return false;
  };
}

export default AxiosWrapper;
