import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {View} from 'react-native';
import {AddButton, DeliveryCard} from '_organisms';
import {HeaderComponent, SubHeader, OrderHeader, FooterComponent} from '_atoms';

//Action
import {orderStatusProcessingRequested} from './action';
//css
import Style from './style';

export default function Kitchen(props) {
  const dispatch = useDispatch();
  //state
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(false);
    props.navigation.replace('kitchen');
  }, []);

  useEffect(() => {
    orderStatusProcessingRequest();
  }, []);

  function orderStatusProcessingRequest() {
    const onSuccess = data => {
      data &&
        setOrders(() => {
          return data.response;
        });
    };

    const onFail = () => {};
    dispatch(orderStatusProcessingRequested({onSuccess, onFail}));
  }
  // console.log('ordersorders', orders);
  return (
    <>
      <HeaderComponent headerName={'Reception'} />
      <View style={Style.borderBottom}>
        <SubHeader {...props} />
        <OrderHeader
          orderLength={orders.length}
          activeTab={'kitchen'}
          {...props}
        />
        {orders.orders && orders.orders.data ? (
          <DeliveryCard
            data={orders.orders}
            {...props}
            refreshing={refreshing}
            onRefresh={onRefresh}
            screen={'kitchen'}
          />
        ) : (
          <></>
        )}
      </View>
      <AddButton />
      <FooterComponent screen={'reception'} {...props} />
    </>
  );
}
