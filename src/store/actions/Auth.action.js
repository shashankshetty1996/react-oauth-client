import ACTIONS from '../actionTypes';

const accessTokenSuccessAction = data => ({
  type: ACTIONS.AUTH.GET_ACCESS_TOKEN_SUCCESS,
  data,
});

const accessTokenFailureAction = () => ({
  type: ACTIONS.AUTH.GET_ACCESS_TOKEN_FAIL,
});

export { accessTokenSuccessAction, accessTokenFailureAction };
