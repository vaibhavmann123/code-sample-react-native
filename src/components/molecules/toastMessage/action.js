import * as actionType from '_redux/actions/ActionsType';

export const toastSuccess = message => {
  return {type: actionType.TOAST_SUCCESS, payload: message};
};

export const toastError = message => {
  return {type: actionType.TOAST_ERROR, payload: message};
};
