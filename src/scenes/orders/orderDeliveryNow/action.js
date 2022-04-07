import * as actionType from '_redux/actions/ActionsType';

export function getOrderByIdRequested(payload) {
  return {type: actionType.FETCH_ORDER_BY_ID_REQUESTED, payload};
}

export function getOrderByIdSuccess(data) {
  return {type: actionType.FETCH_ORDER_BY_ID_SUCCESS, payload: data};
}

export function getOrderByIdFail(error) {
  return {type: actionType.FETCH_ORDER_BY_ID_FAILED, payload: error};
}

export function updateOrder(payload) {
  return {type: actionType.UPDATE_ORDER_REQUESTED, payload};
}
