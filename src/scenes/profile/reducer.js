import {
  FETCH_USER_DETAIL_REQUESTED,
  FETCH_USER_DETAIL_SUCCESS,
} from '../../redux/actions/ActionsType';
const INITIAL_STATE = {
  userDetails: [],
};

const userDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_DETAIL_REQUESTED:
      return {
        ...state,
        userDetails: [],
        isLoader: true,
      };
    case FETCH_USER_DETAIL_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        isLoader: false,
      };
    default:
      return state;
  }
};
export default userDetailsReducer;
