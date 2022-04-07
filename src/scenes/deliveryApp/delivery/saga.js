// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
//API
import {
  driverOrderDelivery,
  driverOrderUpdate,
  UpdatePaymentStatus,
} from '_services/apiConts';
import {getCall, postCall} from '_services/apiCalls';
import {fetchDriverOrderDeliverySuccess} from './action';
//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* driverDelivery({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('headre', payload);
  try {
    const res = yield getCall(driverOrderDelivery, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      // console.log('hold', res);
      payload.onSuccess(res.data);
      yield put(fetchDriverOrderDeliverySuccess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}
function* updateDriverOrderDeliverToDeliveredRequested({payload}) {
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
      // payload.onSuccess(res.data);
    }
  } catch (err) {
    // console.log(err);
  }
}
function* updatePaymentStatusRequested({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('headerssss', headers);
  try {
    // console.log('payload.data', payload.data);
    const res = yield postCall(UpdatePaymentStatus, payload.data, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      // console.log('res.status', res.data);
      payload.onSuccess(res.data);
    }
  } catch (err) {
    // console.log(err);
  }
}

export default function* driverDeliverySaga() {
  yield takeEvery(
    actionType.FETCH_DRIVER_ORDER_STATUS_DELIVERY_REQUESTED,
    driverDelivery,
  );
  yield takeEvery(
    actionType.UPDATE_DRIVER_ORDER_STATUS_DELIVER_TO_DELIVERED_REQUESTED,
    updateDriverOrderDeliverToDeliveredRequested,
  );
  yield takeEvery(
    actionType.UPDATE_PAYMENT_STATUS_REQUESTED,
    updatePaymentStatusRequested,
  );
}
