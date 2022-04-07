import * as actionType from '../../../redux/actions/ActionsType';

// FETCH ORDER STATUS PROCESSING

export function orderStatusProcessingRequested(payload) {
  return {type: actionType.FETCH_ORDERS_STATUS_PROCESSING_REQUESTED, payload};
}
export function fetchOrderStatusProcessingSucess(data) {
  return {type: actionType.FETCH_ORDERS_STATUS_PROCESSING_SUCCESS, data};
}

export function fetchOrderStatusProcessingFail(error) {
  return {type: actionType.FETCH_ORDERS_STATUS_PROCESSING_FAILED, error};
}
