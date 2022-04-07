export const Login = 'loginAccess';
export const GetOrders = '/store/getOrders';
export const OrderStatusPending = 'store/getOrders?order_status=pending';
export const OrderStatusHold = 'store/getOrders?order_status=hold';
export const OrderStatusProcessing = 'store/getOrders?order_status=processing';
export const OrderStatusReady = 'store/getOrders?order_status=ready';
export const SingleOrderById = 'store/getSingleOrderClone/';
export const UpdateOrder = 'store/updateOrder';
export const UserDetail = 'store/getUserDetails';
export const MenuItem = 'store/storeItemCat';
export const UpdateMenuItem = '/store/updateMenuItem';
export const DeliveryBoy = '/store/delivery-boy';
export const AssignDeliveryBoy = '/store/assignDeliveryBoy';
export const allReadyOrder = '/driver/getOrderList?order_status=ready';
export const driverOrderDelivery = '/driver/getOrderList?order_status=delivery';
export const driverOrderDelivered =
  '/driver/getOrderList?order_status=delivered';
export const driverOrderUpdate = '/driver/updateOrder';
export const UpdatePaymentStatus = '/driver/updatePaymentStatus';

//Printer
export const addPrinter = '/store/addPrinter';
export const printerList = 'store/getPrinters';
export const updatePrinter = '/store/updatePrinter';
