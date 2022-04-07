import * as actionType from '../../../redux/actions/ActionsType';

export function redirectTo(screen) {
  return {type: actionType.REDIRECT_RQUESTED, payload: screen};
}

export function redirectWithParams(screen, data) {
  return {
    type: actionType.REDIRECT_WITH_PARAMS_RQUESTED,
    payload: {screen, data},
  };
}
