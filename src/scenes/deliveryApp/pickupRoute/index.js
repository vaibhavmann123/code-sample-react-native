import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {DeliveryHeader} from '_atoms';
import {PrimaryButton} from '_organisms';
import MapView from 'react-native-maps';
import {Icon} from '_atoms';
import {updateOrderReadyToDeliver} from '../deliveryActions/action';

export default function PickupRoute(props) {
  const dispatch = useDispatch();

  // console.log('routeProps', props);
  const handelSendToDeliver = () => {
    const requestBody = {
      order_status: 'delivery',
      order_id: props.route.params.order_id,
    };
    const onSuccess = res => {
      // console.log('res11', res);
      props.navigation.replace('DeliveryAction');
    };
    const onFail = () => {};
    dispatch(
      updateOrderReadyToDeliver({
        data: requestBody,
        onSuccess,
        onFail,
      }),
    );
  };
  return (
    <View style={{flex: 1}}>
      <DeliveryHeader headerName={'Delivery'} />

      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 15,
          height: 44,
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              flex: 1,
            }}>
            <Icon icon={'back'} style={{height: 15.4, width: 9.9}} />
            <Text
              style={{
                marginLeft: 13,
                height: 21,
                fontFamily: 'SegoeUI',
                fontSize: 16,
                fontWeight: '600',
                fontStyle: 'normal',
                lineHeight: 21,
                letterSpacing: 0,
                color: '#000000',
              }}>
              Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 29.685629,
          longitude: 76.990547,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <PrimaryButton onPress={handelSendToDeliver} name={'Pick Up'} />
    </View>
  );
}
