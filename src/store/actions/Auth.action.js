import ACTIONS from '../actionTypes';

const accessTokenAction = data => {
  return {
    type: ACTIONS.AUTH.GET_ACCESS_TOKEN_SUCCESS,
    data,
  };
};

export { accessTokenAction };
