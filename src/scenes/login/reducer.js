import {LOGIN_FAILED, LOGIN_SUCCESS} from '_redux/actions/ActionsType';

const INITIAL_STATE = {
  loginResponse: {},
  error: {},
  isLoader: true,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: action.payload,
        error: '',
        isLoader: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginResponse: '',
        error: action.payload,
        isLoader: true,
      };

    default:
      return state;
  }
};
export default loginReducer;
