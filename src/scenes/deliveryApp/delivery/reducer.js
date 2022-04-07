import {
  FETCH_DRIVER_ORDER_STATUS_DELIVERY_REQUESTED,
  FETCH_DRIVER_ORDER_STATUS_DELIVERY_SUCCESS,
} from '_redux/actions/ActionsType';

const INITIAL_STATE = {
  driverOrderDelivery: [],
};

const driverDeliveryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DRIVER_ORDER_STATUS_DELIVERY_REQUESTED:
      return {
        ...state,
        driverOrderDelivery: [],
      };
    case FETCH_DRIVER_ORDER_STATUS_DELIVERY_SUCCESS:
      return {
        ...state,
        driverOrderDelivery: action.payload,
      };
    default:
      return state;
  }
};
export default driverDeliveryReducer;
