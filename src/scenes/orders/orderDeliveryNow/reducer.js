import {
  FETCH_ORDER_BY_ID_REQUESTED,
  FETCH_ORDER_BY_ID_SUCCESS,
  FETCH_ORDER_BY_ID_FAILED,
} from '_redux/actions/ActionsType';

const INITIAL_STATE = {
  singleOrderDetails: {},
};

const orderByIdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDER_BY_ID_REQUESTED:
      return {
        ...state,
        singleOrderDetails: {},
      };
    case FETCH_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        singleOrderDetails: action.payload ? action.payload.order || {} : {},
      };

    default:
      return state;
  }
};

export default orderByIdReducer;
