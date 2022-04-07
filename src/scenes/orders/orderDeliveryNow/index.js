import React, {useState, useEffect} from 'react';
import {TextInput, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getOrderByIdRequested, updateOrder} from './action';
import {orderStatusPendingRequested} from '../reception/action';
import {HeaderComponent} from '_atoms';
import {OrderDetailById, PrimaryButton} from '_organisms';
import {TimeOptionModal} from '_molecules';
import moment from 'moment';
import {View} from 'react-native';
import {NetPrinter} from 'react-native-thermal-receipt-printer';

export default function DeliveryNow(props) {
  const dispatch = useDispatch();
  const isConnected = useSelector(state => state.printer);

  const [orderDetailById, setOrderDetailById] = useState({}),
    [isVisibleModal, setIsVisibleModal] = useState(false),
    [isReminderVisibleModal, setIsReminderVisibleModal] = useState(false),
    [port, setport] = useState(9100);
  // [currentPrinter, setcurrentPrinter] = useState(),
  // [host, sethost] = useState('192.168.0.33'),
  // [host2, sethost2] = useState('192.168.0.33'),
  // [error, setError] = useState(null),
  // [error2, setError2] = useState(null),
  // [currentPrinter2, setcurrentPrinter2] = useState();

  // [printerIp, setPrinterIp] = useState('');

  // [printHeader, setPrintHeader] = useState('');

  useEffect(() => {
    getOrderById();
  }, []);

  useEffect(() => {
    NetPrinter.init();
    // _connectPrinter();
  }, []);

  function orderStatusPendingRequest() {
    const onSuccess = data => {
      data &&
        setOrders(() => {
          return [...data.response.orders.data];
        });
    };

    const onFail = () => {};
    dispatch(orderStatusPendingRequested({onSuccess, onFail}));
  }

  function getOrderById() {
    const orderId = props.route.params.order_id;
    const onSuccess = res => {
      res.order &&
        setOrderDetailById(() => {
          return {...res.order};
        });
      // console.log('res11', res);
    };
    const onFail = () => {};
    dispatch(getOrderByIdRequested({orderId, onSuccess, onFail}));
  }

  const handleSendToKitchen = () => {
    console.log('orderDetailByIdorderDetailById', orderDetailById);
    setIsVisibleModal(true);
  };

  const handleSendToHold = () => {
    setIsReminderVisibleModal(true);
  };
  const updateToHold = time => {
    var rTime = moment().add(time, 'minutes').format('HHmmss');
    // console.log('rTime', rTime);
    const requestBody = {
      order_status: 'hold',
      order_id: props.route.params.order_id,
      set_preparing_time: 0,
      set_remainder_time: rTime,
    };

    const onSuccess = res => {
      // console.log('res11', res);
      setIsReminderVisibleModal(false);
      props.navigation.navigate('OnHold');
    };
    const onFail = () => {};
    dispatch(updateOrder({data: requestBody, onSuccess, onFail, ...props}));
  };

  const handleUpdateOrder = time => {
    var pTime = moment().add(time, 'minutes').format('HHmmss');
    const requestBody = {
      order_status: 'processing',
      order_id: props.route.params.order_id,
      set_preparing_time: time,
      set_remainder_time: 0,
    };
    const onSuccess = res => {
      setIsVisibleModal(false);
      orderStatusPendingRequest();
      printBillTest();
      props.navigation.navigate('kitchen');
    };
    const onFail = () => {};
    dispatch(updateOrder({data: requestBody, onSuccess, onFail, ...props}));
  };

  const printBillTest = () => {
    orderDetailById.printers.map((item, k) => {
      let stringValue = '';
      let printerFooter = '';
      let printHeader = '';
      console.log('123Peii', item);
      if (item.printer_ip_address) {
        // if (item.printer_ip_address === host) {
        // if ('192.168.0.33' === host) {
        // {
        item.items.map((item, i) => {
          if (!item) return;
        });
        // }
        {
          printHeader = `<C>Maharaja Tandoori Cuisine</C>

             <C>DEL -9279 - NO CULTLERY</C>

            <C>pickup at : 18:46-</C>

            <C>DL -1164505761</C>

            <C> ____________________________</C>

            <C>Delivery</C>

             <C> ___________________________</C>

            <C>18:30:27</C>

            <C>Kavish J</C>`;
        }
        {
          printerFooter = `<C>02/12/21</C>
      <C>Register : POS</C>
      <C>Printer :1</C> 
      <C>Customer :Delivery</C>`;
        }
        return (
          <>
            {item.items.map((data, i) => {
              if (!data) return;
              return (stringValue =
                stringValue +
                `<CM>${data.item_quantity} X ${data.item_name}</CM>
               ________________________________
         `);
            })}

            {console.log(
              'printerssssss',
              `${printHeader}${stringValue}${printerFooter}`,
            )}
            {NetPrinter.printText(
              `<C>${printHeader}\n${stringValue}\n${printerFooter}\n\n\n\n\n\n\n</C>`,
            )}
          </>
        );
      }
    });
  };
  return (
    <>
      <HeaderComponent headerName={'Back'} isBackIcon={true} {...props} />

      <TimeOptionModal
        isVisible={isReminderVisibleModal}
        close={() => setIsReminderVisibleModal(false)}
        onSelectTime={updateToHold}
        heading="Set Reminder Before"
      />
      <TimeOptionModal
        isVisible={isVisibleModal}
        close={() => setIsVisibleModal(false)}
        onSelectTime={handleUpdateOrder}
        heading="Set Time Required For Preparing"
      />
      <View style={{flex: 1}}>
        <OrderDetailById
          singleOrderdetail={orderDetailById}
          screen={props.route.params.screen}
        />
      </View>

      {props.route.params.screen === 'reception' ? (
        <>
          {props.route.params.screen &&
          props.route.params.pickup_when === 'Now' ? (
            <PrimaryButton
              onPress={handleSendToKitchen}
              name={'Send to Kitchen'}
            />
          ) : (
            <PrimaryButton onPress={handleSendToHold} name={'Put On Hold'} />
          )}
        </>
      ) : (
        <>
          {props.route.params.screen === 'hold' && (
            <PrimaryButton
              onPress={handleSendToKitchen}
              name={'Send to Kitchen'}
            />
          )}
        </>
      )}
    </>
  );
}
