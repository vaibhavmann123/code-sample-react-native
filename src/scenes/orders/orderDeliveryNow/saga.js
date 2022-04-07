//Imports:Dependinces
import {takeEvery, put} from 'redux-saga/effects';

//Actions
import * as actionsType from '_redux/actions/ActionsType';
//API
import {SingleOrderById, UpdateOrder} from '_services/apiConts';
import {getCall, postCall} from '_services/apiCalls';

//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getOrderByIdSuccess} from './action';

//Watcher: Increase Counter Async

function* fetchOrderByIdRequested({payload}) {
  try {
    const headers = {
      token: `${yield AsyncStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      accept: 'application/json',
    };
    const orderId = payload.orderId;
    const res = yield getCall(SingleOrderById + orderId, {headers});
    // console.log('dataaaa', res.data);
    if (res.status === 200) {
      payload.onSuccess && payload.onSuccess(res.data.response);
      yield put(getOrderByIdSuccess(res.data.response));
    }
  } catch (err) {
    // console.log(err);
  }
}

function* updaeOrderRequested({payload}) {
  // console.log('payload...', payload);
  try {
    const headers = {
      token: `${yield AsyncStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      accept: 'application/json',
    };
    // console.log('payload.data', payload.data);
    const res = yield postCall(UpdateOrder, payload.data, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      // console.log('res.status', res.data);
      payload.onSuccess(res.data);
    }
  } catch (err) {
    // console.log(err);
  }
}

export default function* orderByIdSaga() {
  yield takeEvery(
    actionsType.FETCH_ORDER_BY_ID_REQUESTED,
    fetchOrderByIdRequested,
  );
  yield takeEvery(actionsType.UPDATE_ORDER_REQUESTED, updaeOrderRequested);
}
