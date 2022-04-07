// Imports: Dependencies
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
import * as consts from '_utils/conts';
//API
import {Login} from '_services/apiConts';

import {postCall} from '_services/apiCalls';
//ACTIONS
import {loginSuccess, loginFail} from './actionCreator';
// import {redirectTo} from '../../components/molecules/redirect/action';

//SPINNER
import {spinnerStart, spinnerEnd} from '_molecules/spinner/action';

//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Watcher: Increase Counter Async

function* loginRequested({payload}) {
  try {
    yield put(spinnerStart(consts.LOGIN));
    const data = `phone=${payload.payload.username}&password=${payload.payload.password}&device_token=${payload.payload.device_token}`;
    const res = yield postCall(Login, data, {headers: {}});

    if (res.status === 200) {
      payload.onSuccess(res.data);
      console.log('res.data', res.data.response.token);
      yield AsyncStorage.setItem('token', res.data.response.token);
      // yield put(fetchMenuItemRequested());
      yield put(loginSuccess(res.data));

      // yield put(toastSuccess(consts.LOGIN_SUCCESS));
    } else {
      // yield put(toastError(consts.INVALID_CREDENTIALS));
      yield put(loginFail(res.data));
      payload.onFail(res.data);
    }

    yield put(spinnerEnd());
  } catch (error) {
    // console.log('error', error);
    yield put(spinnerEnd());
  }
}
export default function* loginSaga() {
  yield takeEvery(actionType.LOGIN_REQUESTED, loginRequested);
}
