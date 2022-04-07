// import actionType from '_redux/actions/ActionsType';
import * as actionType from '../../../redux/actions/ActionsType';

// FETCH ORDER STATUS READY

export function orderStatusReadyRequested(payload) {
  return {type: actionType.FETCH_ORDERS_STATUS_READY_REQUESTED, payload};
}
export function fetchOrderStatusReadySucess(data) {
  return {type: actionType.FETCH_ORDERS_STATUS_READY_SUCCESS, data};
}

export function fetchOrderStatusReadyFail(error) {
  return {type: actionType.FETCH_ORDERS_STATUS_READY_FAILED, error};
}
