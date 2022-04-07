// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
//API
import {MenuItem, UpdateMenuItem} from '_services/apiConts';
import {getCall, postCall} from '_services/apiCalls';
//Actions
import {fetchMenuItemSuccess} from './action';
//ASYNC
import AsyncStorage from '@react-native-async-storage/async-storage';

function* fetchMenuItemRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  try {
    const res = yield getCall(MenuItem, {headers});
    if (res.status === 200) {
      payload.onSuccess(res.data);
      yield put(fetchMenuItemSuccess(res.data));
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

function* updateMenuItemRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  try {
    const res = yield postCall(UpdateMenuItem, payload.data, {headers});
    // console.log('user', res);
    if (res.status === 200) {
      payload.onSuccess(res.data);
    } else {
    }
  } catch (err) {
    // console.log('err', err);
  }
}

export default function* menuItemSaga() {
  yield takeEvery(actionType.FETCH_MENU_ITEMS_REQUESTED, fetchMenuItemRequest);
  yield takeEvery(
    actionType.UPDATE_MENU_ITEMS_REQUESTED,
    updateMenuItemRequest,
  );
}
