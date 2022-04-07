import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

//Import Screens
import Login from '_scenes/login';
import Kitchen from '_scenes/orders/kitchen';
import OnHold from '_scenes/orders/onHold';
import NewBookingsOrder from '_scenes/bookings/newBookings';
import Arrivals from '_scenes/bookings/arrivals';
import Reception from '_scenes/orders/reception';
import Ready from '_scenes/orders/ready';
import DeliveryNow from '_scenes/orders/orderDeliveryNow';
import DeliveryCard from '_organisms/cards/deliveryCard';
import Profile from '_scenes/profile';
import Inventory from '_scenes/inventory';
import AllStatus from '../scenes/history/allStatus';
import Dashboard from '_scenes/dashboard';
//Kitchen App
import KitchenAction from '_scenes/kitchenApp/kitchenActions';
import KitchenInventory from '_scenes/kitchenApp/kitchenInventory';
import KitchenProfile from '_scenes/kitchenApp/kitchenProfile';
import SingalOrderDetail from '_scenes/kitchenApp/kitchenSODetail';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
// Delivery App
import DeliveryAction from '_scenes/deliveryApp/deliveryActions';
import DeliveryProfile from '_scenes/deliveryApp/deliveryProfile';
import Deliverydelivery from '_scenes/deliveryApp/delivery';
import DeliveryHistory from '_scenes/deliveryApp/history';
import DeliveryRoute from '_scenes/deliveryApp/deliveryRoute';
import PickupRoute from '_scenes/deliveryApp/pickupRoute';
import Printer from '_scenes/printer/Printer';

const Stack = createStackNavigator();

export default function AppStack() {
  const login = useSelector(state => state.login);
  // console.log('login', login);

  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });
  // useEffect(() => {
  //   // requestUserPermission();
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     newOrdersNotification(152);
  //   });
  //   return unsubscribe;
  // }, []);

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     getFcmToken();
  //     console.log('Authorization status:', authStatus);
  //   }
  // };

  // newOrdersNotification = orderId => {
  //   navigation.navigate('reception', {orderId: orderId});
  // };

  // const getFcmToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //     AsyncStorage.setItem('device_token', fcmToken);
  //     console.log('Your Firebase Tokens is:', fcmToken);
  //   } else {
  //     console.log('Failed', 'No token received');
  //   }
  // };

  return (
    <>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          animationEnabled: false,
          stackAnimation: 'none',
        }}>
        <Stack.Screen
          name={'profile'}
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'inventory'}
          component={Inventory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'login'}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'reception'}
          component={Reception}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'kitchen'}
          component={Kitchen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'OnHold'}
          component={OnHold}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'NewBookingsOrder'}
          component={NewBookingsOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Arrivals'}
          component={Arrivals}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Ready'}
          component={Ready}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'DeliveryCard'}
          component={DeliveryCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'DeliveryNow'}
          component={DeliveryNow}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'AllStatus'}
          component={AllStatus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Dashboard'}
          component={Dashboard}
          options={{headerShown: false}}
        />
        {/* Kitchen App Nevigation */}
        <Stack.Screen
          name={'KitchenAction'}
          component={KitchenAction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'KitchenInventory'}
          component={KitchenInventory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'KitchenProfile'}
          component={KitchenProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'SingalOrderDetail'}
          component={SingalOrderDetail}
          options={{headerShown: false}}
        />
        {/* Delivery App */}
        <Stack.Screen
          name={'DeliveryAction'}
          component={DeliveryAction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'DeliveryProfile'}
          component={DeliveryProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Deliverydelivery'}
          component={Deliverydelivery}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'DeliveryHistory'}
          component={DeliveryHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'DeliveryRoute'}
          component={DeliveryRoute}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'PickupRoute'}
          component={PickupRoute}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Printer'}
          component={Printer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
