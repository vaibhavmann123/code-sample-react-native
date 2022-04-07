import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '../../redux/actions/ActionsType';
import {
  printerConnectionSuccess,
  fetchPrinterListSucess,
  addPrinterSucess,
} from './action';
import {postCall, getCall} from '_services/apiCalls';
import {addPrinter, printerList, updatePrinter} from '_services/apiConts';
//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

function* fetchPrinterConntionRequest({payload}) {
  yield put(printerConnectionSuccess(payload));
}

//add printer saga
function* AddPrinterRequest({payload}) {
  console.log('addprinterPayload', payload);
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  try {
    const res = yield postCall(addPrinter, payload.payload, {headers});
    console.log('resPayload', res);
    if (res.status === 200) {
      payload.onSuccess(res);
      yield put(addPrinterSucess(res.data));
    }
  } catch (err) {}
}

//update printer printer saga
function* UpdatePrinterRequest({payload}) {
  console.log('updateprinterPayload', payload);
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  try {
    const res = yield postCall(updatePrinter, payload.payload, {headers});
    console.log('resPayload', res);
    if (res.status === 200) {
      payload.onSuccess(res);
    }
  } catch (err) {}
}

function* printerListRequest() {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  try {
    const res = yield getCall(printerList, {headers});
    console.log('PrinterListResponse', res.data.response);
    if (res.status === 200) {
      // payload.onSuccess(res.data);
      yield put(fetchPrinterListSucess(res.data.response));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

export default function* fetchPrinterConntionSaga() {
  yield takeEvery(
    actionType.PRINTER_CONNECTED_REQUEST,
    fetchPrinterConntionRequest,
  );
  yield takeEvery(actionType.ADD_PRINTER_REQUEST, AddPrinterRequest);
  yield takeEvery(actionType.ALL_PRINTERLIST_REQUEST, printerListRequest);
  yield takeEvery(actionType.UPDATE_PRINTER_ITEM, UpdatePrinterRequest);
}
