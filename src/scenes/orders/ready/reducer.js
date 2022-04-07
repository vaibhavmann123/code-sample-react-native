import {
  FETCH_ORDERS_STATUS_READY_REQUESTED,
  FETCH_ORDERS_STATUS_READY_SUCCESS,
} from '../../../redux/actions/ActionsType';

const INITIAL_STATE = {
  readyOrders: [],
};

const orderStatusReadyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDERS_STATUS_READY_REQUESTED:
      return {
        ...state,
        readyOrders: [],
        isLoader: true,
      };
    case FETCH_ORDERS_STATUS_READY_SUCCESS:
      return {
        ...state,
        readyOrders: action.payload,
        isLoader: false,
      };
    default:
      return state;
  }
};
export default orderStatusReadyReducer;
