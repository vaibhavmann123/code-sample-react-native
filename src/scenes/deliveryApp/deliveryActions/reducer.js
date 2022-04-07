import {
  FETCH_ALL_PICKUP_ORDER_FOR_DELIVERY_BOY_REQUESTED,
  FETCH_ALL_PICKUP_ORDER_FOR_DELIVERY_BOY_SUCCESS,
} from '_redux/actions/ActionsType';

const INITIAL_STATE = {
  allPickupOrders: [],
};

const allPickupOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_PICKUP_ORDER_FOR_DELIVERY_BOY_REQUESTED:
      return {
        ...state,
        allPickupOrders: [],
      };
    case FETCH_ALL_PICKUP_ORDER_FOR_DELIVERY_BOY_SUCCESS:
      return {
        ...state,
        allPickupOrders: action.payload,
      };
    default:
      return state;
  }
};
export default allPickupOrderReducer;
