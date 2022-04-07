import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {DeliveryHeader} from '_atoms';
import {Icon} from '_atoms';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
//Geolocation
import Geolocation from 'react-native-geolocation-service';
//Permission
import {PERMISSIONS, request} from 'react-native-permissions';
import {PrimaryButton} from '_organisms';
import {
  updateDriverOrderDeliverToDelivered,
  updatePaymentStatusRequested,
} from '../delivery/action';
import style from './style';

export default function DeliveryRoute(props) {
  const dispatch = useDispatch();
  const [paymentStatus, setPaymentStatus] = useState(
    props.route.params.paymentStatus,
  );
  const [paymentType, setPaymentType] = useState(
    props.route.params.paymentType,
  );
  const [state, setState] = useState({
    pickupCoords: {
      latitude: 30.7046,
      longitude: 76.7179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCoords: {
      latitude: 29.69261,
      longitude: 76.967278,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    time: 0,
    distance: 0,
  });
  const [userLocation, setUserLocation] = useState(false);

  useEffect(() => {
    setPaymentStatus(props.route.params.paymentStatus);
  }, [props.route.params.paymentStatus]);

  useEffect(() => {
    setPaymentType(props.route.params.paymentType);
  }, [props.route.params.paymentType]);

  useEffect(() => {
    function getUserLocation() {
      requestLocationPermission();
    }
    getUserLocation();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });

  //=========Location Permission =======
  async function requestLocationPermission() {
    var res = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (res === 'granted') {
      getLiveLocation();
    }
  }

  // =======CURRENT LOCATION========
  const getLiveLocation = async () => {
    await Geolocation.getCurrentPosition(
      ({coords}) => {
        console.log('coords', coords);
        setUserLocation(coords);
      },
      error => {
        Alert.alert(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeOut: 15000,
        maximunAge: 1000,
      },
    );
  };

  //=========END=======
  const handleUpdatePayment = payment => {
    const requestBody = {
      order_id: props.route.params.order_id,
      payment_status: 'complete',
      payment_type: payment,
    };
    const onSuccess = res => {
      // console.log('PaymentStus', res);

      setPaymentStatus('complete');
      setPaymentType(payment);
      // // console.log('PaymentStatus', res);
    };
    const onFail = () => {};
    dispatch(
      updatePaymentStatusRequested({
        data: requestBody,
        onSuccess,
        onFail,
      }),
    );
  };

  const fetchTime = (d, t) =>
    setState(state => ({...state, distance: d, time: t}));
  {
  }

  // console.log('paymentStatus', paymentStatus);
  console.log('paymentType', paymentType, paymentStatus);
  const handelSendToDelivered = () => {
    const requestBody = {
      order_status: 'delivered',
      order_id: props.route.params.order_id,
    };

    const onSuccess = res => {
      // console.log('res11', res);
      props.navigation.replace('Deliverydelivery');
    };
    const onFail = () => {};
    dispatch(
      updateDriverOrderDeliverToDelivered({
        data: requestBody,
        onSuccess,
        onFail,
      }),
    );
  };
  const mapRef = useRef();
  const {time, distance, dropLocationCoords} = state;
  const GOOGLE_PLACES_API_KEY = 'AIzaSyButCZ4W0lUhJnO9Wi2s7gkDjv58gDUrs4';

  return (
    <View>
      <DeliveryHeader headerName={'Delivery'} />
      {console.log('userLocation', userLocation)}

      <View style={style.backView}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon icon={'back'} style={style.backIcon} />
            <Text style={style.backText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <MapView
          ref={mapRef}
          // showsUserLocation={true}
          showsMyLocationButton={true}
          style={{height: 349}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapViewDirections
            origin={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            destination={dropLocationCoords}
            apikey={GOOGLE_PLACES_API_KEY}
            strokeWidth={5}
            strokeColor="green"
            optimizeWaypoints={true}
            onReady={result => {
              console.log('Distance', result);
              fetchTime(result.distance, result.duration);
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  left: 50,
                  // right: 30,
                  // bottom: 100,
                  // top: 100,
                },
              });
            }}
          />
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Image
              style={{
                height: 50,
                width: 50,
                transform: [{rotate: `${userLocation.heading || 0}deg`}],
              }}
              source={require('../../../assets/icons/bike.png')}
            />
            <Callout tooltip>
              <View>
                <View style={style.bubble}>
                  <Text style={style.title}>You are Here</Text>
                </View>
                <View style={style.arrowBorder} />
                <View style={style.arror} />
              </View>
            </Callout>
          </Marker>
          <Marker coordinate={dropLocationCoords}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../assets/icons/flag.png')}
            />
            <Callout tooltip>
              <View>
                <View style={style.bubble}>
                  <Text style={style.title}>Delivery Here</Text>
                </View>
                <View style={style.arrowBorder} />
                <View style={style.arror} />
              </View>
            </Callout>
          </Marker>
        </MapView>
        <View style={style.userInfo}>
          <Text>Time left:{time.toFixed(2)} min. </Text>
          <Text>Distance left:{distance} km</Text>
        </View>
        <View style={style.userInfo}>
          <View>
            <Text style={style.nameLable}>{props.route.params.name}</Text>
            <Text style={style.orderIdLabel}>
              Order Id: #{props.route.params.order_id}
            </Text>
          </View>
          <View>
            <Text style={style.amount}>₹ {props.route.params.total}</Text>
          </View>
        </View>
        <View style={style.border}></View>

        <View style={style.buttonMargin}>
          <View style={style.buttonDirection}>
            <Text style={style.paymentTextLabel}>Cash</Text>
            <TouchableOpacity
              onPress={() => handleUpdatePayment('cod')}
              style={
                style.btn
                // props.route.params.paymentStatus === 'complete'
                // props.route.params.paymentType === 'cod'
                // ?  {...style.accpedBtn, opacity: 0.5}
                // : style.btn
              }>
              {paymentStatus === 'complete' && paymentType === 'cod' ? (
                <Text style={style.accptedLabel}>Accepted</Text>
              ) : (
                <Text style={style.accptLabel}>Accept</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={style.buttonDirection}>
            <Text style={style.paymentTextLabel}>POS</Text>
            <TouchableOpacity
              onPress={() => handleUpdatePayment('pos')}
              style={
                style.btn
                // props.route.params.paymentStatus === 'complete' &&
                // props.route.params.paymentType === 'pos'
                //   ? {...style.accpedBtn, opacity: 0.5}
                //   : style.btn
              }>
              {paymentStatus === 'complete' && paymentType === 'pos' ? (
                <Text style={style.accptedLabel}>Accepted</Text>
              ) : (
                <Text style={style.accptLabel}>Accept</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.primeryButtonMargin}>
          <PrimaryButton
            onPress={() => handelSendToDelivered()}
            name={'Delivered'}
          />
        </View>
      </ScrollView>
    </View>
  );
}
