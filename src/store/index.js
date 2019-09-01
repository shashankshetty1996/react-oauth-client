import { createStore, compose } from 'redux';

import rootReducers from './rootReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null || compose;

const store = createStore(rootReducers, composeEnhancers());

export default store;
