import {
  FETCH_MENU_ITEMS_REQUESTED,
  FETCH_MENU_ITEMS_SUCCESS,
  UPDATE_MENU_ITEMS_REQUESTED,
  UPDATE_MENU_ITEMS_SUCCESS,
} from '../../redux/actions/ActionsType';
const INITIAL_STATE = {
  menuItemList: [],
  updateMenuItem: [],
};

const menuItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MENU_ITEMS_REQUESTED:
      return {
        ...state,
        menuItemList: [],
      };
    case FETCH_MENU_ITEMS_SUCCESS:
      return {
        ...state,
        menuItemList: action.payload,
      };
    // case UPDATE_MENU_ITEMS_REQUESTED:
    //   return {
    //     ...state,
    //     updateMenuItem: [],
    //   };
    default:
      return state;
  }
};

export default menuItemReducer;
