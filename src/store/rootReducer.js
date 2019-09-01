import { combineReducers } from 'redux';

import auth from './reducers/Auth.reducer';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
