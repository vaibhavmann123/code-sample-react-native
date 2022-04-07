// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
//API
import {allReadyOrder, driverOrderUpdate} from '_services/apiConts';
import {getCall, postCall} from '_services/apiCalls';
import {fetchAllOrderForDeliveryBoySuccess} from './action';
//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* allReadyOrderList({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('headre', payload);
  try {
    const res = yield getCall(allReadyOrder, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      // console.log('hold', res);
      payload.onSuccess(res.data);
      yield put(fetchAllOrderForDeliveryBoySuccess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}
function* updateDriverOrderReadToDeliverRequested({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('headerssss', headers);
  try {
    // console.log('payload.data', payload.data);
    const res = yield postCall(driverOrderUpdate, payload.data, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      // console.log('res.status', res.data);
      payload.onSuccess(res.data);
    }
  } catch (err) {
    // console.log(err);
  }
}
export default function* allReadyOrderListSaga() {
  yield takeEvery(
    actionType.FETCH_ALL_PICKUP_ORDER_FOR_DELIVERY_BOY_REQUESTED,
    allReadyOrderList,
  );
  yield takeEvery(
    actionType.UPDATE_DRIVER_ORDER_STATUS_READY_DELIVER_REQUESTED,
    updateDriverOrderReadToDeliverRequested,
  );
}
