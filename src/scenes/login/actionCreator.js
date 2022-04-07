import * as actionType from '_redux/actions/ActionsType';

export const loginRequested = payload => {
  return {type: actionType.LOGIN_REQUESTED, payload};
};

export const loginSuccess = data => {
  return {type: actionType.LOGIN_SUCCESS, payload: data};
};

export const loginFail = error => {
  return {type: actionType.LOGIN_FAILED, payload: error};
};
export const loginout = () => {
  return {type: actionType.LOGOUT_REQUESTED, payload: {}};
};
