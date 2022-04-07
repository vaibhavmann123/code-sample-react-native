// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
//API
import {OrderStatusReady} from '_services/apiConts';
// import {getOrdersSuccess} from './action';
import {getCall} from '_services/apiCalls';
//Actions
import {fetchOrderStatusReadySucess} from './action';

//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* orderStatusReadyRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('Readyheadre', payload);
  try {
    const res = yield getCall(OrderStatusReady, {headers});
    // console.log('Readyres', res);
    if (res.status === 200) {
      payload.onSuccess(res.data);
      yield put(fetchOrderStatusReadySucess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

export default function* orderStatusReadySaga() {
  yield takeEvery(
    actionType.FETCH_ORDERS_STATUS_READY_REQUESTED,
    orderStatusReadyRequest,
  );
}
