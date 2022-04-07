// Import depencendiences
import {takeEvery, put} from 'redux-saga/effects';
import * as actionType from '_redux/actions/ActionsType';
import * as consts from '_utils/conts';
//API
import {GetOrders, OrderStatusPending} from '_services/apiConts';
// import {getOrdersSuccess} from './action';
import {getCall} from '_services/apiCalls';
//Actions
import {
  fetchOrderStatusPendingSucess,
  orderStatusPendingRequested,
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
    const res = yield getCall(OrderStatusPending, {headers});
    // console.log('res', res);
    if (res.status === 200) {
      payload.onSuccess(res.data);
      yield put(fetchOrderStatusPendingSucess(res.data));
      // yield put(orderStatusPendingRequested);
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

function* moreOrderStatusPendingRequest({payload}) {
  const headers = {
    token: `${yield AsyncStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  // console.log('moreHeader', payload);
  try {
    const res = yield getCall(payload.nextPageOrders, {headers});
    // console.log('MoreRes', res);
    if (res.status === 200) {
      payload.onSuccess(res.data);
      yield put(fetchOrderStatusPendingSucess(res.data));
      // yield put(orderStatusPendingRequested);
    } else {
      payload.onFail(res.data);
    }
  } catch (err) {
    // console.log('err', err);
  }
}

export default function* orderStatusPendingSaga() {
  yield takeEvery(
    actionType.FETCH_ORDERS_STATUS_PENDING_REQUESTED,
    orderStatusPendingRequest,
  );
  yield takeEvery(
    actionType.FETCH_MORE_ORDER_REQUESTED,
    moreOrderStatusPendingRequest,
  );
}

// function* getOrderRequested({payload}) {
//   const headers = {
//     token: `${yield AsyncStorage.getItem('token')}`,
//     'Content-Type': 'application/json',
//     accept: 'application/json',
//   };
//   console.log('headre', payload);
//   try {
//     const res = yield getCall(GetOrders, {headers});
//     console.log('res', res);
//     if (res.status === 200) {
//       payload.onSuccess(res.data);
//       yield put(getOrdersSuccess(res.data));
//     } else {
//       payload.onFail(res.data);
//     }
//   } catch (err) {
//     console.log('err', err);
//   }
// }

// export default function* getOrderSaga() {
//   yield takeEvery(actionType.GET_ORDERS_REQUESTED, getOrderRequested);
// }
