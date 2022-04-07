// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
//API
import {driverOrderDelivered} from '_services/apiConts';
import {getCall} from '_services/apiCalls';
import {fetchDriverOrderForDeliveredSuccess} from './action';
//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* fetchDriverOrderForDelivered({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('headre', payload);
  try {
    const res = yield getCall(driverOrderDelivered, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      // console.log('hold', res);
      payload.onSuccess(res.data);
      yield put(fetchDriverOrderForDeliveredSuccess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

export default function* fetchDriverOrderForDeliveredSaga() {
  yield takeEvery(
    actionType.FETCH_DRIVER_ORDER_STATUS_DELIVERED_REQUESTED,
    fetchDriverOrderForDelivered,
  );
}
