import * as actionType from '_redux/actions/ActionsType';

export function fetchDriverOrderDeliveryRequested(payload) {
  return {
    type: actionType.FETCH_DRIVER_ORDER_STATUS_DELIVERY_REQUESTED,
    payload,
  };
}
export function fetchDriverOrderDeliverySuccess(data) {
  return {
    type: actionType.FETCH_DRIVER_ORDER_STATUS_DELIVERY_SUCCESS,
    payload: data,
  };
}
export function fetchDriverOrderDeliveryFail(error) {
  return {
    type: actionType.FETCH_DRIVER_ORDER_STATUS_DELIVERY_FAILED,
    payload: error,
  };
}
export function updateDriverOrderDeliverToDelivered(payload) {
  return {
    type: actionType.UPDATE_DRIVER_ORDER_STATUS_DELIVER_TO_DELIVERED_REQUESTED,
    payload,
  };
}
export function updatePaymentStatusRequested(payload) {
  return {type: actionType.UPDATE_PAYMENT_STATUS_REQUESTED, payload};
}
