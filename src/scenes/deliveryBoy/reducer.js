import {
  FETCH_DELIVERY_BOY_REQUESTED,
  FETCH_DELIVERY_BOY_SUCCESS,
} from '../../redux/actions/ActionsType';

const INITIAL_STATE = {
  deliveryBoy: [],
};

const deliveryBoyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DELIVERY_BOY_REQUESTED:
      return {
        ...state,
        deliveryBoy: [],
        isLoader: true,
      };
    case FETCH_DELIVERY_BOY_SUCCESS:
      return {
        ...state,
        deliveryBoy: action.payload,
        isLoader: false,
      };
    default:
      return state;
  }
};
export default deliveryBoyReducer;
