import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Animated,
  Alert,
} from 'react-native';
import Style from './style';
import Icon from '_atoms/icon';
import {Mixins} from '_styles/index';
import {useDispatch} from 'react-redux';
import {baseURL} from '_services/apiCalls';
//Action
import {fetchMoreOrderRequested} from '_scenes/orders/reception/action';
//IMPORT FIREBASE NOTIFICATION
import messaging from '@react-native-firebase/messaging';
import {Colors} from '_styles/index';
import NotificationSounds, {
  playSampleSound,
} from 'react-native-notification-sounds';
import moment from 'moment';

export default function DeliveryCard(props) {
  // console.log('propssss', props);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState(props.data.data || []);
  const [notifyOrderId, setnotifyOrderId] = useState('');
  const [notifyIdStyle, setNotifyIdStyle] = useState({
    fontWeight: '600',
    color: Colors.BLACK,
    // backgroundColor: 'rgb(0,0,0)',
  });
  const [nextPageUrl, setNextPageUrl] = useState(props.data.next_page_url);
  const [animatedValue] = useState(new Animated.Value(0));
  // const [seconds, setSeconds] = useState(0);
  // const [minutus, setMinutus] = useState(0);
  // const [hours, sethours] = useState(0);

  //timer
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTimer(lastTimerCount => {
  //       lastTimerCount <= 1 && clearInterval(interval);
  //       return lastTimerCount - 1;
  //     });
  //   }, 1000); //each count lasts for a second
  //   //cleanup the interval on complete
  //   return () => clearInterval(interval);
  // }, []);
  ///start
  // useEffect(() => {
  //   console.log(' ....... orders .....', orders);
  //   if (orders.length) {
  //     orders.map(x => {
  //       console.log('x .....', x.billing_address);
  //     });
  //   }
  //   var then = moment().add(1, 'minute');
  //   const now = moment();
  //   let pendingTime = then.diff(now, 'seconds');

  //   let intervalId = null;
  //   setTimeout(() => {
  //     intervalId = setInterval(() => {
  //       pendingTime = pendingTime - 1;
  //       sethours(parseInt(pendingTime / 3600));
  //       setMinutus(parseInt((pendingTime % 3600) / 60));
  //       setSeconds(pendingTime % 60);
  //       if (pendingTime == 0) clearInterval(intervalId);
  //     }, 1000);
  //   }, 10000);

  //   return () => clearInterval(intervalId);
  // }, []);
  //end
  //FCM NOTIFICATION FOR NEW ORDERS
  useEffect(() => {
    // const data = {
    //   order_id: 189,
    //   name: 'fjvfvkjfkvf',
    //   grand_total: 200,
    //   pickup_when: 'later',
    //   billing_address: {
    //     order_type: 'delivery',
    //   },
    // };
    // setnotifyOrderId(data.order_id);
    // newOrdersNotification(data);
    // getLastOrder(data, true);
    // NotificationSounds.getNotifications('notification').then(soundsList => {
    //   console.log('SOUNDS', JSON.stringify(soundsList));
    //   playSampleSound(soundsList[6]);
    // });
    const unsubscribe = messaging().onMessage(remoteMessage => {
      console.log('remoteMessage', remoteMessage);

      const data = {
        ...remoteMessage.data,
        order_id: remoteMessage.data.orderId,
        grand_total: 44,
        billing_address: {
          order_type: remoteMessage.data.order_type,
        },
      };
      // const data = {
      //   order_id: 189,
      //   name: 'fjvfvkjfkvf',
      //   grand_total: 200,
      //   pickup_when: 'later',
      //   billing_address: {
      //     order_type: 'delivery',
      //   },
      // };
      setnotifyOrderId(data.order_id);
      getLastOrder(data, true);
      newOrdersNotification(data);

      NotificationSounds.getNotifications('notification').then(soundsList => {
        console.log('SOUNDS', JSON.stringify(soundsList));
        playSampleSound(soundsList[1]);
      });
    });
    return unsubscribe;
  }, []);
  //Animation
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  }, []);

  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 150],
    outputRange: ['rgb(255,255,255)', 'rgb(255,0,0)'],
  });

  const animationStyle = {
    backgroundColor: interpolateColor,
  };
  const newOrdersNotification = newOrder => {
    console.log('notify', newOrder);
    if (newOrder.order_id) {
      setNotifyIdStyle({...animationStyle});
      setTimeout(() => {
        setNotifyIdStyle({fontWeight: '600', color: Colors.BLACK});
        getLastOrder(newOrder);
      }, 4000);
    }
  };

  const handleEndReached = () => {
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
  // console.log('setorders', orders);

  const getLastOrder = (order, activeNotification) => {
    setOrders(prevState => {
      if (activeNotification) prevState = [order, ...prevState];
      else prevState.shift();
      return [...prevState];
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <FlatList
        style={{marginBottom: 300}}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            colors={['#FF3008', '#41BE62']}
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />
        }
        data={orders}
        keyExtractor={orders => {
          orders.order_id.toString();
        }}
        onEndReached={handleEndReached}
        renderItem={({item}) => {
          return (
            <React.Fragment>
              {item.billing_address.order_type === 'Delivery' ? (
                <Animated.View
                  style={
                    notifyOrderId == item.order_id
                      ? [(Style.orderId, notifyIdStyle)]
                      : Style.orderId
                  }>
                  <View style={{paddingHorizontal: 20}}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('DeliveryNow', {
                          order_id: item.order_id,
                          screen: props.screen,
                          pickup_when: item.billing_address.pickup_when,
                        })
                      }>
                      <View style={Style.content}>
                        <View>
                          <Text style={Style.name}>
                            {item.name}
                            <Text style={Style.items}>
                              &nbsp;&nbsp;(5 Items)
                            </Text>
                          </Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                          <Icon icon={'delivery'} style={Style.deliveryIcon} />
                          <Text style={Style.delivery}>
                            {item.billing_address.pickup_when}
                          </Text>
                        </View>
                      </View>
                      <View style={Style.distanceView}>
                        <Icon
                          icon={'location'}
                          style={{
                            height: Mixins.scaleSize(13.7),
                            width: Mixins.scaleSize(10.6),
                          }}
                        />
                        <Text style={Style.kmAway}>&nbsp; 7 KM Away</Text>
                      </View>
                      <View
                        style={
                          props.screen != 'hold'
                            ? Style.border
                            : Style.orderIdRs
                        }>
                        <View>
                          <Text style={Style.orderId}>
                            Order ID #{item.order_id}
                          </Text>
                        </View>
                        <View>
                          <Text style={Style.rsSymbol}>
                            $
                            <Text style={Style.orderPrice}>
                              &nbsp; {item.total}
                            </Text>
                          </Text>
                        </View>
                      </View>
                      {props.screen === 'hold' && (
                        <Hold
                          orderTime={item.billing_address.order_time}
                          putOnHold={item.put_on_hold}
                          orderId={item.order_id}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              ) : (
                <Animated.View
                  style={
                    notifyOrderId === item.order_id
                      ? [(Style.orderId, notifyIdStyle)]
                      : Style.orderId
                  }>
                  <View style={{paddingHorizontal: 20}}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('DeliveryNow', {
                          order_id: item.order_id,
                          screen: props.screen,
                          pickup_when: item.billing_address.pickup_when,
                        })
                      }>
                      <View style={Style.content}>
                        <View>
                          <Text style={Style.name}>
                            {item.name}
                            <Text style={Style.items}>
                              &nbsp;&nbsp;(5 Items)
                            </Text>
                          </Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                          <Icon icon={'pickup'} style={Style.pickupIcon} />
                          <Text style={Style.pickupText}>
                            {item.billing_address.pickup_when}
                          </Text>
                        </View>
                      </View>
                      <View style={Style.timeR}>
                        <Icon icon={'time'} style={Style.timeIcon} />
                        <Text style={Style.time}>
                          &nbsp; 07:00 Am -08:00 Am
                        </Text>
                      </View>
                      <View
                        style={
                          props.screen != 'hold'
                            ? Style.border
                            : Style.orderIdRs
                        }>
                        <View>
                          <Text style={Style.orderId}>
                            Order ID #{item.order_id}
                          </Text>
                        </View>
                        <View>
                          <Text style={Style.rsSymbol}>
                            $
                            <Text style={Style.orderPrice}>
                              &nbsp; {item.total}
                            </Text>
                          </Text>
                        </View>
                      </View>
                      {props.screen === 'hold' && (
                        <Hold
                          orderTime={item.billing_address.order_time}
                          putOnHold={item.put_on_hold}
                          orderId={item.order_id}
                        />
                        /* <View style={Style.timeRemaining}>
                          <Text style={Style.timeRemainingText}>
                            TIME REMAINING
                          </Text>
                          <Text style={Style.RemainingTimer}>
                            {hours}
                            {minutus}
                            {seconds}
                          </Text> */
                        /* <Text style={Style.RemainingTimer}>02:02:23</Text> */
                        /* </View> */
                      )}
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              )}
            </React.Fragment>
          );
        }}
      />
    </SafeAreaView>
  );
}

function Hold({orderTime, putOnHold, orderId}) {
  const [seconds, setSeconds] = useState(0);
  const [minutus, setMinutus] = useState(0);
  const [hours, sethours] = useState(0);

  useEffect(() => {
    // var then = moment(orderTime).add(2, 'minute');
    orderTime = moment(orderTime);
    putOnHold = moment(putOnHold);
    const now = moment();
    debugger;
    let pendingTime = orderTime.diff(putOnHold, 'seconds');
    let putOnHoldPending = putOnHold.diff(now, 'seconds');
    // let pendingTime = then.diff(now, 'seconds');

    console.log('putOnHoldPending....', putOnHoldPending);

    let intervalId = null;
    setTimeout(() => {
      intervalId = setInterval(() => {
        pendingTime = pendingTime - 1;
        sethours(parseInt(pendingTime / 3600));
        setMinutus(parseInt((pendingTime % 3600) / 60));
        setSeconds(pendingTime % 60);
        if (pendingTime == 0) clearInterval(intervalId);
      }, 1000);
    }, putOnHoldPending);
  }, [orderId]);

  return (
    <View style={Style.timeRemaining}>
      <Text style={Style.timeRemainingText}>TIME REMAINING</Text>
      <Text style={Style.RemainingTimer}>
        {hours}
        {minutus}
        {seconds}
      </Text>
    </View>
  );
}
