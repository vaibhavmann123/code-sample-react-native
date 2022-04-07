// import * as actionType from '_redux/actions/ActionsType';
import * as actionType from '../../../redux/actions/ActionsType';

const INTIAL_STATE = {
  screen: '',
  params: {},
};

export default function redirectReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case actionType.REDIRECT_RQUESTED:
      return {
        screen: action.payload,
        params: {},
      };
    case actionType.REDIRECT_WITH_PARAMS_RQUESTED:
      return {
        screen: action.payload.screen,
        params: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
}
