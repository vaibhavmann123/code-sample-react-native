import {
  PRINTER_CONNECTED_REQUEST,
  PRINTER_CONNECTED_SUCCESS,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  connected: [],
};

const printerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case PRINTER_CONNECTED_REQUEST:
    //   return {
    //     ...state,
    //     connected: [],
    //   };
    case PRINTER_CONNECTED_SUCCESS:
      return {
        ...state,
        connected: action.data,
      };
    default:
      return state;
  }
};
export default printerReducer;
