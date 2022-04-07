import {combineReducers} from 'redux';
//REDUCER
import loginReducer from '_scenes/login/reducer';
import toastReducer from '_molecules/toastMessage/reducer';
import spinnerReducer from '_molecules/spinner/reducer';
import redirectReducer from '../components/molecules/redirect/reducer';
import orderStatusPendingReducer from '_scenes/orders/reception/reducer';
import orderStatusProcessingReducer from '_scenes/orders/kitchen/reducer';
import orderStatusHoldReducer from '_scenes/orders/onHold/reducer';
import orderStatusReadyReducer from '_scenes/orders/ready/reducer';
import orderByIdReducer from '_scenes/orders/orderDeliveryNow/reducer';
import userDetailsReducer from '_scenes/profile/reducer';
import menuItemReducer from '_scenes/inventory/reducer';
import deliveryBoyReducer from '_scenes/deliveryBoy/reducer';
//DELIVERY APP
import allPickupOrderReducer from '_scenes/deliveryApp/deliveryActions/reducer';
import driverDeliveryReducer from '_scenes/deliveryApp/delivery/reducer';
import driverOrderForDeliveredReducer from '_scenes/deliveryApp/history/reducer';
import printerReducer from '../scenes/printer/reducer';
//add printer
import addPrinterReducer from '../scenes/printer/addPrinterReducer';
import printerListReducer from '../scenes/printer/printerListReducer';
const appReducer = combineReducers({
  login: loginReducer,
  toast: toastReducer,
  spinner: spinnerReducer,
  redirect: redirectReducer,
  orderStatusPending: orderStatusPendingReducer,
  orderById: orderByIdReducer,
  orderStatusProcessing: orderStatusProcessingReducer,
  orderStatusHold: orderStatusHoldReducer,
  orderStatusReady: orderStatusReadyReducer,
  userdetails: userDetailsReducer,
  menuItem: menuItemReducer,
  deliveryBoy: deliveryBoyReducer,
  allPickupOrder: allPickupOrderReducer,
  driverDelivery: driverDeliveryReducer,
  driverOrderDelivered: driverOrderForDeliveredReducer,
  printer: printerReducer,
  addPrinter: addPrinterReducer,
  printerList: printerListReducer,
});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_REQUESTED') {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
