// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
//API
import {DeliveryBoy, AssignDeliveryBoy} from '_services/apiConts';
// import {getOrdersSuccess} from './action';
import {getCall, postCall} from '_services/apiCalls';
//Actions
import {fetchDeliveryBoySuccess} from './action';

//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* fetchDeliveryBoyRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  try {
    const res = yield getCall(DeliveryBoy, {headers});
    if (res.status === 200) {
      payload.onSuccess(res.data.response);
      yield put(fetchDeliveryBoySuccess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {}
}
function* AssignDeliveryBoyRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  };
  try {
    const res = yield postCall(AssignDeliveryBoy, payload.data, {headers});
    if (res.status === 200) {
      payload.onSuccess(res);
    } else {
    }
  } catch (err) {}
}

export default function* deliveryBoySaga() {
  yield takeEvery(
    actionType.FETCH_DELIVERY_BOY_REQUESTED,
    fetchDeliveryBoyRequest,
  );
  yield takeEvery(actionType.ASSIGN_DELIVERY_BOY, AssignDeliveryBoyRequest);
}
