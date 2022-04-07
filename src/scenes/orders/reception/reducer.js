import {
  FETCH_ORDERS_STATUS_PENDING_REQUESTED,
  FETCH_ORDERS_STATUS_PENDING_SUCCESS,
  FETCH_MORE_ORDER_REQUESTED,
} from '../../../redux/actions/ActionsType';

const INITIAL_STATE = {
  // orders: [],
  pendingOrders: [],
  moreOrder: [],
};

const orderStatusPendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDERS_STATUS_PENDING_REQUESTED:
      return {
        ...state,
        pendingOrders: [],
        isLoader: true,
      };
    case FETCH_ORDERS_STATUS_PENDING_SUCCESS:
      return {
        ...state,
        pendingOrders: action.payload,
        isLoader: false,
      };
    case FETCH_MORE_ORDER_REQUESTED:
      return {
        ...state,
        moreOrder: action.payload,
      };
    default:
      return state;
  }
};
export default orderStatusPendingReducer;

//GET ALL ORDERS REDUCER

// const getOrderReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case GET_ORDERS_REQUESTED:
//       return {
//         ...state,
//         orders: [],
//         isLoader: true,
//       };
//     case GET_ORDERS_SUCCESS:
//       return {
//         ...state,
//         orders: action.payload,
//         isLoader: false,
//       };
//     default:
//       return state;
//   }
// };
// export default getOrderReducer;
