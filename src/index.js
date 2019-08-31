import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import AxiosWrapper from './utils/AxiosWrapper';
import { adminSession } from './constants';

ReactDOM.render(<App />, document.getElementById('root'));
window.axios = new AxiosWrapper(adminSession);
