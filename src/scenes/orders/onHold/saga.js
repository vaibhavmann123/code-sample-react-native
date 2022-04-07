// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
//API
import {OrderStatusHold} from '_services/apiConts';
// import {getOrdersSuccess} from './action';
import {getCall} from '_services/apiCalls';
//Actions
import {
  fetchOrderStatusHoldSucess,
  // getOrdersRequested,
} from './action';

//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* orderStatusPendingRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('headre', payload);
  try {
    const res = yield getCall(OrderStatusHold, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      // console.log('hold', res);
      payload.onSuccess(res.data);
      yield put(fetchOrderStatusHoldSucess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

export default function* orderStatusHoldSaga() {
  yield takeEvery(
    actionType.FETCH_ORDERS_STATUS_HOLD_REQUESTED,
    orderStatusPendingRequest,
  );
}
