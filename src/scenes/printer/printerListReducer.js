import {
  ALL_PRINTERLIST_REQUEST,
  ALL_PRINTERLIST_SUCCESS,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  printerList: {},
};

const printerListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_PRINTERLIST_REQUEST:
      return {
        ...state,
        printerList: {},
      };
    case ALL_PRINTERLIST_SUCCESS:
      return {
        ...state,
        printerList: action.data,
      };
    default:
      return state;
  }
};
export default printerListReducer;
