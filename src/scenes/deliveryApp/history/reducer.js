import {
  FETCH_DRIVER_ORDER_STATUS_DELIVERED_REQUESTED,
  FETCH_DRIVER_ORDER_STATUS_DELIVERED_SUCCESS,
} from '_redux/actions/ActionsType';

const INITIAL_STATE = {
  driverDeliveredOrder: [],
};

const driverOrderForDeliveredReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DRIVER_ORDER_STATUS_DELIVERED_REQUESTED:
      return {
        ...state,
        driverDeliveredOrder: [],
      };
    case FETCH_DRIVER_ORDER_STATUS_DELIVERED_SUCCESS:
      return {
        ...state,
        driverDeliveredOrder: action.payload,
      };
    default:
      return state;
  }
};
export default driverOrderForDeliveredReducer;
