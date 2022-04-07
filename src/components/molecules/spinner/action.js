import * as actionType from '_redux/actions/ActionsType';

export function spinnerStart(payload) {
  return {type: actionType.SPINNER_START, payload};
}
export function spinnerEnd() {
  return {type: actionType.SPINNER_STOP, payload: ''};
}
