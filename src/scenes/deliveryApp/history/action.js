import * as actionType from '_redux/actions/ActionsType';

export function fetchDriverOrderForDeliveredRequested(payload) {
  return {
    type: actionType.FETCH_DRIVER_ORDER_STATUS_DELIVERED_REQUESTED,
    payload,
  };
}
export function fetchDriverOrderForDeliveredSuccess(data) {
  return {
    type: actionType.FETCH_DRIVER_ORDER_STATUS_DELIVERED_SUCCESS,
    payload: data,
  };
}
export function fetchDriverOrderForDeliveredFail(error) {
  return {
    type: actionType.FETCH_DRIVER_ORDER_STATUS_DELIVERED_FAILED,
    payload: error,
  };
}
