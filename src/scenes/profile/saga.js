// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
//API
import {UserDetail} from '_services/apiConts';
// import {getOrdersSuccess} from './action';
import {getCall} from '_services/apiCalls';
//Actions
import {fetchOrderDetailSucess} from './action';
//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* fetchOrderDetailRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('headre', payload);
  try {
    const res = yield getCall(UserDetail, {headers});
    // console.log('user', res);
    if (res.status === 200) {
      payload.onSuccess(res.data);
      yield put(fetchOrderDetailSucess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

export default function* userDetailsSaga() {
  yield takeEvery(
    actionType.FETCH_USER_DETAIL_REQUESTED,
    fetchOrderDetailRequest,
  );
}
