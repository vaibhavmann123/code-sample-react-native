import React, {useState, useEffect, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {KitchenHeader, KitchenFooter, KitchenComponent} from '_atoms';
import {orderStatusProcessingRequested} from '_scenes/orders/kitchen/action';
import {updateOrder} from '_scenes/orders/orderDeliveryNow/action';
import {fetchMoreOrderRequested} from '_scenes/orders/reception/action';
import {baseURL} from '_services/apiCalls';

import moment from 'moment';

export default function KitchenAction(props) {
  const dispatch = useDispatch();
  //state
  const [orders, setOrders] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    orderStatusProcessingRequest();
  }, []);

  const onRefresh = React.useCallback(() => {
    orderStatusProcessingRequest();
    setRefreshing(false);
  }, []);

  function orderStatusProcessingRequest() {
    const onSuccess = data => {
      data &&
        setOrders(() => {
          return data.response.orders;
        });
    };
    const onFail = () => {};
    dispatch(orderStatusProcessingRequested({onSuccess, onFail}));
  }
  const handleEndReached = nextPageUrl => {
    // console.log('1');
    if (!nextPageUrl) return;
    const res = nextPageUrl.replace(baseURL, '');
    const nextPageOrders = res;
    // console.log('str', res);
    const onSuccess = data => {
      data &&
        setOrders(prevState => {
          return [...prevState, ...data.response.orders.data];
        });
      props.updateOrders &&
        props.updateOrders([...orders, ...data.response.orders.data]);
      setNextPageUrl(data.response.orders.next_page_url);
      // console.log('moreOrders', orders, data.response.orders);
    };
    const onFail = () => {};
    dispatch(fetchMoreOrderRequested({onSuccess, onFail, nextPageOrders}));
  };

  const updateToReady = orderId => {
    const requestBody = {
      order_status: 'ready',
      order_id: orderId,
      set_preparing_time: 0,
      set_remainder_time: 0,
    };
    // console.log('requestBody', requestBody);
    const onSuccess = res => {
      orderStatusProcessingRequest();
      // console.log('res11', res);
    };
    const onFail = () => {};
    dispatch(updateOrder({data: requestBody, onSuccess, onFail, ...props}));
  };

  // console.log('kitchenAction');
  const renderIcon = type => {
    switch (type) {
      case 'Delivery':
        return require('../../../assets/icons/delivery.png');
      case 'Pickup':
        return require('../../../assets/icons/pickup.png');
      default:
        return '';
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <KitchenHeader headerName={'Kitchen'} />
      <View style={styles.flatList}>
        <FlatList
          data={orders.data || []}
          keyExtractor={item => item.order_id.toString()}
          contentContainerStyle={{paddingBottom: 120}}
          onEndReached={handleEndReached()}
          refreshControl={
            <RefreshControl
              colors={['#FF3008', '#41BE62']}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            // console.log('itemitem', item);
            return (
              <View style={{flex: 1}}>
                <KitchenComponent
                  Name={item.name}
                  time={moment(
                    parseInt(item.billing_address.order_time),
                  ).format('hh:mm:ss')}
                  iconName={item.iconName || ''}
                  orderId={item.order_id}
                  items={item.order_id}
                  counter={'23:29'}
                  delivery={renderIcon(item.billing_address.order_type)}
                  deliveryText={item.billing_address.order_type}
                  updateToReady={orderId => updateToReady(orderId)}
                  navigate={props.navigation.navigate}
                />
              </View>
            );
          }}
        />
      </View>
      <KitchenFooter screen={'actions'} {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    padding: 10,
    marginTop: '6%',
    paddingBottom: 20,
  },
});
