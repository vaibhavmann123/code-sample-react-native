import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Linking,
  Alert,
} from 'react-native';
import {DeliveryHeader, DeliveryFooter, DeliveryPickup} from '_atoms';
import MapView from 'react-native-maps';
import Styles from './style';
import {Icon} from '_atoms';
import {fetchDriverOrderDeliveryRequested} from './action';

export default function Delivery(props) {
  const dispatch = useDispatch();
  //state
  const [deliverOrder, setDeliverOrder] = useState([]);

  useEffect(() => {
    deliverOrderListRequest();
  }, []);

  function deliverOrderListRequest() {
    const onSuccess = data => {
      data &&
        setDeliverOrder(() => {
          return data.response.orders;
        });
    };
    const onFail = () => {};
    dispatch(fetchDriverOrderDeliveryRequested({onSuccess, onFail}));
  }

  console.log('setDeliverOrder', deliverOrder.data);
  // if (!deliverOrder) {
  //   return null;
  // }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <DeliveryHeader headerName={'Delivery'} />
      <DeliveryPickup
        count={deliverOrder.data && deliverOrder.data.length}
        activeTab={'delivery'}
        {...props}
      />
      <FlatList
        style={{marginBottom: 80}}
        data={deliverOrder.data || []}
        keyExtractor={item => item.order_id.toString()}
        renderItem={({item}) => {
          return (
            <View style={Styles.main}>
              <View style={Styles.fDirection}>
                <MapView
                  style={Styles.map}
                  initialRegion={{
                    latitude: 29.685629,
                    longitude: 76.990547,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
                <View style={Styles.fDirection}>
                  <Text style={Styles.orderId}>
                    Order ID : #{item.order_id}
                  </Text>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(`tel:${item.phone}`);
                      }}>
                      <Icon icon={'phone'} style={Styles.callIcon} />
                      <Text style={Styles.callLabel}>Call</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Text style={Styles.addressLabel}>Address :</Text>
                <Text
                  style={Styles.addressText}
                  numberOfLines={3}
                  ellipsizeMode="tail">
                  {item.billing_address.unit_number} :{' '}
                  {item.billing_address.suburb}
                  {item.billing_address.street_address},{' '}
                </Text>
              </View>
              <View style={{flex: 0.2}}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('DeliveryRoute', {
                      order_id: item.order_id,
                      name: item.name,
                      total: item.total,
                      paymentStatus: item.payment_status,
                      paymentType: item.payment_getway,
                    })
                  }
                  style={Styles.btn}>
                  <View style={Styles.btnTextView}>
                    <Text style={Styles.btnText}>Start Delivery</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <DeliveryFooter screen={'actions'} {...props} />
    </View>
  );
}
