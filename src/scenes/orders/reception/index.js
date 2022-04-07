import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Alert} from 'react-native';
//Componet
import {AddButton} from '_organisms';
import {HeaderComponent, SubHeader, OrderHeader, FooterComponent} from '_atoms';
import {DeliveryCard} from '_organisms';

//Action
import {orderStatusPendingRequested} from './action';
//css
import Style from './style';

export default function Reception(props) {
  // console.log('poopp', props);
  const dispatch = useDispatch();
  const moreOrder = useSelector(state => state.orderStatusPending.moreOrder);
  // console.log('moreOrderState', moreOrder);
  //state
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    orderSatusPendingRequest();
  }, []);

  const onRefresh = React.useCallback(() => {
    orderSatusPendingRequest();
    setRefreshing(false);
    props.navigation.replace('reception');
  }, []);

  function orderSatusPendingRequest() {
    setOrders([]);
    const onSuccess = data => {
      // console.log('data...', data);
      data &&
        setOrders(() => {
          return data.response;
        });
    };
    const onFail = () => {};
    dispatch(orderStatusPendingRequested({onSuccess, onFail}));
  }
  // const disableBackButton = () => {
  //   props.navigation.goBack();
  //   return true;
  // Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //   {
  //     text: 'Cancel',
  //     onPress: () => null,
  //     style: 'cancel',
  //   },
  //   {text: 'YES', onPress: () => BackHandler.exitApp()},
  // ]);

  // return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', disableBackButton);

  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
  // }, []);

  const updateOrders = orders => {
    setOrders({orders: {data: orders}});
  };
  // console.log('ordersPending', orders);
  return (
    <>
      <HeaderComponent headerName={'Reception'} />
      <View style={Style.borderBottom}>
        <SubHeader {...props} />
        {/* {// console.log('odressssssss', orders)} */}

        <OrderHeader
          orderLength={orders.orders && orders.orders.data.length}
          activeTab={'reception'}
          {...props}
        />
        {orders.orders && orders.orders.data && (
          <DeliveryCard
            data={orders.orders}
            {...props}
            onRefresh={onRefresh}
            updateOrders={updateOrders}
            screen={'reception'}
            refreshing={refreshing}
            orderSatusPendingRequest={orderSatusPendingRequest}
          />
        )}
      </View>
      <AddButton />
      <FooterComponent {...props} screen={'reception'} />
    </>
  );
}
