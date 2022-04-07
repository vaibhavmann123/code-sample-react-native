import * as actionType from '../../redux/actions/ActionsType';

//FETCH DELIVERY BOY

export function fetchDeliveryBoyRequested(payload) {
  return {type: actionType.FETCH_DELIVERY_BOY_REQUESTED, payload};
}

export function fetchDeliveryBoySuccess(data) {
  return {type: actionType.FETCH_DELIVERY_BOY_SUCCESS, payload: data};
}

export function fetchDeliveryBoyFailed(error) {
  return {type: actionType.FETCH_DELIVERY_BOY_FAILED, payload: error};
}

export function assignDeliveryBoy(data) {
  return {type: actionType.ASSIGN_DELIVERY_BOY, payload: data};
}
