import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, View} from 'react-native';
import {HeaderComponent, SubHeader, OrderHeader, FooterComponent} from '_atoms';
import Style from './style';
import {AddButton, DeliveryCard} from '_organisms';

//Action
import {orderStatusReadyRequested} from './action';
export default function Ready(props) {
  const dispatch = useDispatch();
  //state
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    orderStatusReadyRequest();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(false);
    props.navigation.replace('Ready');
  }, []);

  function orderStatusReadyRequest() {
    const onSuccess = data => {
      data &&
        setOrders(() => {
          return data.response;
        });
    };

    const onFail = () => {};
    dispatch(orderStatusReadyRequested({onSuccess, onFail}));
  }
  return (
    <>
      <HeaderComponent headerName={'Reception'} />

      {/* {// console.log('Rorders', orders)} */}
      <View style={Style.borderBottom}>
        <SubHeader {...props} />
        <OrderHeader activeTab={'Ready'} {...props} />
        {orders.orders && orders.orders.data ? (
          <DeliveryCard
            data={orders.orders}
            {...props}
            refreshing={refreshing}
            onRefresh={onRefresh}
            screen={'ready'}
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
