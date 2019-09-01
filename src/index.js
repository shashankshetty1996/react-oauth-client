import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

import AxiosWrapper from './utils/AxiosWrapper';
import { adminSession } from './constants';

const AppTemplate = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(AppTemplate, document.getElementById('root'));
window.axios = new AxiosWrapper(adminSession);
