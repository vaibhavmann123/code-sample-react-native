import * as actionType from '../../redux/actions/ActionsType';

//FETCH USER DEATAILS

export function fetchOrderDetailRequested(payload) {
  return {type: actionType.FETCH_USER_DETAIL_REQUESTED, payload};
}
export function fetchOrderDetailSucess(data) {
  return {type: actionType.FETCH_USER_DETAIL_SUCCESS, data};
}
export function fetchOrderDetailfail(error) {
  return {type: actionType.FETCH_USER_DETAIL_FAILED, error};
}
