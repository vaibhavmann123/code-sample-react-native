import {TOAST_SUCCESS, TOAST_ERROR} from '_redux/actions/ActionsType';

const INITIAL_STATE = {
  errorMessage: '',
  successMessage: '',
};

const toastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOAST_SUCCESS:
      return {
        successMessage: action.payload,
        errorMessage: '',
      };
    case TOAST_ERROR:
      return {
        errorMessage: action.payload,
        successMessage: '',
      };
    default:
      return state;
  }
};
export default toastReducer;
