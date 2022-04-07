import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View} from 'react-native';
import {AddButton} from '_organisms';
import {HeaderComponent, SubHeader, OrderHeader, FooterComponent} from '_atoms';
import {DeliveryCard} from '_organisms';
import {orderStatusHoldRequested} from './action';

//css
import Style from './style';

export default function OnHold(props) {
  const dispatch = useDispatch();
  //state
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    orderStatusHoldRequest();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(false);
    props.navigation.replace('OnHold');
  }, []);

  function orderStatusHoldRequest() {
    const onSuccess = data => {
      data &&
        setOrders(() => {
          return data.response;
        });
    };

    const onFail = () => {};
    dispatch(orderStatusHoldRequested({onSuccess, onFail}));
  }
  return (
    <>
      <HeaderComponent headerName={'Reception'} />
      <View style={Style.borderBottom}>
        <SubHeader {...props} />
        <OrderHeader activeTab={'hold'} {...props} />
        {orders.orders && orders.orders.data ? (
          <DeliveryCard
            data={orders.orders}
            {...props}
            refreshing={refreshing}
            onRefresh={onRefresh}
            screen={'hold'}
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
