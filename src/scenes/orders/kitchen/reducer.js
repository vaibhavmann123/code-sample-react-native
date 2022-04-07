import {
  FETCH_ORDERS_STATUS_PROCESSING_REQUESTED,
  FETCH_ORDERS_STATUS_PROCESSING_SUCCESS,
} from '../../../redux/actions/ActionsType';

const INITIAL_STATE = {
  processingOrders: [],
};

const orderStatusProcessingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDERS_STATUS_PROCESSING_REQUESTED:
      return {
        ...state,
        processingOrders: [],
        isLoader: true,
      };
    case FETCH_ORDERS_STATUS_PROCESSING_SUCCESS:
      return {
        ...state,
        processingOrders: action.payload,
        isLoader: false,
      };
    default:
      return state;
  }
};
export default orderStatusProcessingReducer;
