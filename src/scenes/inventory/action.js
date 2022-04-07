import * as actionType from '../../redux/actions/ActionsType';

export function fetchMenuItemRequested(payload) {
  return {type: actionType.FETCH_MENU_ITEMS_REQUESTED, payload};
}
export function fetchMenuItemSuccess(data) {
  return {type: actionType.FETCH_MENU_ITEMS_SUCCESS, payload: data};
}
export function fetchMenuItemFail(error) {
  return {type: actionType.FETCH_MENU_ITEMS_FAILED, error};
}

export function updateMenuItemRequested(payload) {
  return {type: actionType.UPDATE_MENU_ITEMS_REQUESTED, payload};
}
export function updateMenuItemSuccess(payload) {
  return {type: actionType.UPDATE_MENU_ITEMS_SUCCESS, payload};
}
export function updateMenuItemFail(payload) {
  return {type: actionType.UPDATE_MENU_ITEMS_FAILED, payload};
}
