import {
  ADD_PRINTER_REQUEST,
  ADD_PRINTER_SUCCESS,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  addPrinter: {},
};

const addPrinterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRINTER_REQUEST:
      return {
        ...state,
        addPrinter: {},
      };
    case ADD_PRINTER_SUCCESS:
      return {
        ...state,
        addPrinter: action.data,
      };
    default:
      return state;
  }
};
export default addPrinterReducer;
