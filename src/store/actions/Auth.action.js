import ACTIONS from '../actionTypes';

const accessTokenAction = () => {
  return {
    type: ACTIONS.AUTH.GET_ACCESS_TOKEN,
  };
};

export { accessTokenAction };
