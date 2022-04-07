// import actionType from '_redux/actions/ActionsType';
import * as actionType from '_redux/actions/ActionsType';

// FETCH ORDER STATUS PENDING

export function orderStatusHoldRequested(payload) {
  return {type: actionType.FETCH_ORDERS_STATUS_HOLD_REQUESTED, payload};
}
export function fetchOrderStatusHoldSucess(data) {
  return {type: actionType.FETCH_ORDERS_STATUS_HOLD_SUCCESS, data};
}

export function fetchOrderStatusHoldFail(error) {
  return {type: actionType.FETCH_ORDERS_STATUS_HOLD_FAILED, error};
}
