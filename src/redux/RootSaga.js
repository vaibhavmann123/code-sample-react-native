// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas

import loginSaga from '_scenes/login/saga';
import orderStatusPendingSaga from '_scenes/orders/reception/saga';
import orderStatusProcessingSaga from '_scenes/orders/kitchen/saga';
import orderStatusHoldSaga from '_scenes/orders/onHold/saga';
import orderStatusReadySaga from '_scenes/orders/ready/saga';
import orderByIdSaga from '_scenes/orders/orderDeliveryNow/saga';
import userDetailsSaga from '_scenes/profile/saga';
import menuItemSaga from '_scenes/inventory/saga';
import deliveryBoySaga from '_scenes/deliveryBoy/saga';
import allReadyOrderListSaga from '_scenes/deliveryApp/deliveryActions/saga';
import driverDeliverySaga from '_scenes/deliveryApp/delivery/saga';
import fetchDriverOrderForDeliveredSaga from '_scenes/deliveryApp/history/saga';
import fetchPrinterConntionSaga from '../scenes/printer/saga';

export function* rootSaga() {
  yield all([
    loginSaga(),
    orderStatusPendingSaga(),
    orderByIdSaga(),
    orderStatusProcessingSaga(),
    orderStatusHoldSaga(),
    orderStatusReadySaga(),
    userDetailsSaga(),
    menuItemSaga(),
    deliveryBoySaga(),
    allReadyOrderListSaga(),
    driverDeliverySaga(),
    fetchDriverOrderForDeliveredSaga(),
    fetchPrinterConntionSaga(),
  ]);
}
