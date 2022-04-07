import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {DeliveryHeader, DeliveryFooter, DeliveryPickup} from '_atoms';
import {
  fetchAllOrderForDeliveryBoyRequested,
  updateOrderReadyToDeliver,
} from './action';
import Styles from './style';
import MapView from 'react-native-maps';
import {Icon} from '_atoms';

export default function DeliveryAction(props) {
  const dispatch = useDispatch();
  //state
  const [allReadyOrder, setAllReadyOrder] = useState([]);

  useEffect(() => {
    allReadyOrderListRequest();
  }, []);
  function allReadyOrderListRequest() {
    const onSuccess = data => {
      // console.log('setAllReadyOrder', data);
      data &&
        setAllReadyOrder(() => {
          return data.response.orders;
        });
    };

    const onFail = () => {};
    dispatch(fetchAllOrderForDeliveryBoyRequested({onSuccess, onFail}));
  }
  const handelSendToDeliver = order_id => {
    const requestBody = {
      order_status: 'delivery',
      order_id: order_id,
      // set_preparing_time: 0,
      // set_remainder_time: 0,
    };
    const onSuccess = res => {
      // console.log('res11', res);
      allReadyOrderListRequest();
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
  console.log('allReadyOrder', allReadyOrder);
  return (
    <View style={Styles.container}>
      <DeliveryHeader headerName={'Delivery'} />
      <DeliveryPickup
        count={allReadyOrder.data && allReadyOrder.data.length}
        activeTab={'pickUp'}
        {...props}
      />
      {allReadyOrder === 0 ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={Styles.img}
            source={require('_assets/images/pickUpcart.png')}
          />
          <Text style={Styles.noPickLabel}>There is no orders to pick up</Text>
        </View>
      ) : (
        <FlatList
          style={{marginBottom: 80}}
          data={allReadyOrder.data || []}
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
                  <View style={{flex: 1}}>
                    <Text style={Styles.nameLabel}>{item.name}</Text>
                    <View style={Styles.fDirection}>
                      <Icon icon={'location'} style={Styles.icon} />
                      <Text style={Styles.deliveryLabel}>
                        {item.billing_address.order_type}
                      </Text>
                      <Text style={Styles.addressLabel}>
                        : Rainbow 2nd floor{' '}
                      </Text>
                    </View>
                    <View style={Styles.btnView}>
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('PickupRoute', {
                              order_id: item.order_id,
                            })
                          }
                          style={Styles.inActiveBtn}>
                          <Text style={Styles.inActiveBtnText}>Navigate</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => handelSendToDeliver(item.order_id)}
                          style={Styles.activeBtn}>
                          <Text style={Styles.activeBtnText}>Pick up</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={Styles.border}></View>
              </View>
            );
          }}
        />
      )}
      <DeliveryFooter screen={'actions'} {...props} />
    </View>
  );
}
