// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
import * as consts from '_utils/conts';
//API
import {OrderStatusProcessing} from '_services/apiConts';
// import {getOrdersSuccess} from './action';
import {getCall} from '_services/apiCalls';
//Actions
import {
  fetchOrderStatusProcessingSucess,
  // getOrdersRequested,
} from './action';

//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* orderStatusProcessingRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('headre', payload);
  try {
    const res = yield getCall(OrderStatusProcessing, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      payload.onSuccess(res.data);
      yield put(fetchOrderStatusProcessingSucess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

export default function* orderStatusProcessingSaga() {
  yield takeEvery(
    actionType.FETCH_ORDERS_STATUS_PROCESSING_REQUESTED,
    orderStatusProcessingRequest,
  );
}
