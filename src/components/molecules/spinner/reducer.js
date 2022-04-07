import * as actionType from '_redux/actions/ActionsType';

const INTIAL_STATE = {
  isLoading: false,
  message: '',
};

export default spinnerReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SPINNER_START:
      return {
        ...state,
        isLoading: true,
        message: action.payload,
      };
    case actionType.SPINNER_STOP:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
