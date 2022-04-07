// import actionType from '_redux/actions/ActionsType';
import * as actionType from '../../../redux/actions/ActionsType';

// FETCH ORDER STATUS PENDING

export function orderStatusPendingRequested(payload) {
  return {type: actionType.FETCH_ORDERS_STATUS_PENDING_REQUESTED, payload};
}
export function fetchOrderStatusPendingSucess(data) {
  return {type: actionType.FETCH_ORDERS_STATUS_PENDING_SUCCESS, data};
}

export function fetchOrderStatusPendingFail(error) {
  return {type: actionType.FETCH_ORDERS_STATUS_PENDING_FAILED, error};
}
export function fetchMoreOrderRequested(payload) {
  return {type: actionType.FETCH_MORE_ORDER_REQUESTED, payload};
}

// GET ALL ORDERS

export function getOrdersRequested(payload) {
  return {type: actionType.GET_ORDERS_REQUESTED, payload};
}

export function getOrdersSuccess(data) {
  return {type: actionType.GET_ORDERS_SUCCESS, payload: data};
}

export function getOrderFailed(error) {
  return {type: actionType.GET_ORDERS_FAILED, payload: error};
}
