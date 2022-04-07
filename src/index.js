import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
// STORE
import {store, persistor} from '_redux/Store';
// import Navigator from '_navigations';
import AppStack from '_navigations/auth-navigator';
import {navigationRef} from '_navigations/auth-navigator';
import {NavigationContainer} from '@react-navigation/native';
//FLASHMESSAGE
import FlashMessage from 'react-native-flash-message';
import ToastMessage from '_molecules/toastMessage/toastMessage';
//LOADER
import Spinner from '_molecules/spinner/spinner';
//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
// const navigation = useNavigation();

export default function App() {
  // console.disableYellowBox = true;
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    // console.log('Message handled in the background!', remoteMessage);
    // navigation.navigate('inventory', remoteMessage.data.orderId);
  });
  useEffect(() => {
    // console.log('PixelRatio.getFontScale(.....', PixelRatio.getFontScale());
    requestUserPermission();
    //   const unsubscribe = messaging().onMessage(async remoteMessage => {
    //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //     newOrdersNotification(152);
    //   });
    //   return unsubscribe;
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
      // console.log('Authorization status:', authStatus);
    }
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      AsyncStorage.setItem('device_token', fcmToken);
      console.log('Your Firebase Tokens is:', fcmToken);
    } else {
      // console.log('Failed', 'No token received');
    }
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <AppStack />
          <ToastMessage />
          <FlashMessage position="Top" />
          <Spinner />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
