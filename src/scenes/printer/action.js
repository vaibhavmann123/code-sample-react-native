import * as actionType from '../../redux/actions/ActionsType';

export function printerConnectionRequest(payload) {
  return {type: actionType.PRINTER_CONNECTED_REQUEST, payload};
}

export function printerConnectionSuccess(data) {
  return {type: actionType.PRINTER_CONNECTED_SUCCESS, data};
}
export function printerConnectionFail(error) {
  return {type: actionType.PRINTER_CONNECTED_FAILED, error};
}

export function addPrinterRequest(payload) {
  return {type: actionType.ADD_PRINTER_REQUEST, payload};
}

export function addPrinterSucess(data) {
  return {type: actionType.ADD_PRINTER_SUCCESS, data};
}

export function addPrinterFail(error) {
  return {type: actionType.ADD_PRINTER_FAILED, error};
}

export function updatePrinter(payload) {
  return {type: actionType.UPDATE_PRINTER_ITEM, payload};
}

// GET ALL PRINTERLIST

export function fetchPrinterList(payload) {
  return {type: actionType.ALL_PRINTERLIST_REQUEST, payload};
}
export function fetchPrinterListSucess(data) {
  return {type: actionType.ALL_PRINTERLIST_SUCCESS, data};
}
export function fetchPrinterListFail(error) {
  return {type: actionType.ALL_PRINTERLIST_FAILED, error};
}
