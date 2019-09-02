import ACTIONS from '../actionTypes';

const initialState = {
  data: [],
  initialDataLoaded: false,
};

const User = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case ACTIONS.USER.GET_USER_DETAIL_SUCCESS:
      return { ...state, data: action.data, initialDataLoaded: true };

    case ACTIONS.USER.GET_USER_DETAIL_FAIL:
      return { ...state, initialDataLoaded: false };

    default:
      break;
  }
};

export default User;
