import * as actionType from '_redux/actions/ActionsType';

export function fetchAllOrderForDeliveryBoyRequested(payload) {
  return {
    type: actionType.FETCH_ALL_PICKUP_ORDER_FOR_DELIVERY_BOY_REQUESTED,
    payload,
  };
}
export function fetchAllOrderForDeliveryBoySuccess(data) {
  return {
    type: actionType.FETCH_ALL_PICKUP_ORDER_FOR_DELIVERY_BOY_SUCCESS,
    payload: data,
  };
}
export function fetchAllOrderForDeliveryBoyFail(error) {
  return {
    type: actionType.FETCH_ALL_PICKUP_ORDER_FOR_DELIVERY_BOY_FAILED,
    payload: error,
  };
}
export function updateOrderReadyToDeliver(payload) {
  return {
    type: actionType.UPDATE_DRIVER_ORDER_STATUS_READY_DELIVER_REQUESTED,
    payload,
  };
}
