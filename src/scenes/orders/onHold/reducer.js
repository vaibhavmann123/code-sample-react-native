import {
  FETCH_ORDERS_STATUS_HOLD_REQUESTED,
  FETCH_ORDERS_STATUS_HOLD_SUCCESS,
} from '../../../redux/actions/ActionsType';

const INITIAL_STATE = {
  // orders: [],
  holdOrders: [],
};

const orderStatusHoldReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDERS_STATUS_HOLD_REQUESTED:
      return {
        ...state,
        holdOrders: [],
        isLoader: true,
      };
    case FETCH_ORDERS_STATUS_HOLD_SUCCESS:
      return {
        ...state,
        holdOrders: action.payload,
        isLoader: false,
      };
    default:
      return state;
  }
};
export default orderStatusHoldReducer;
