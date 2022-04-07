import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TextInput, FlatList} from 'react-native';
import {DeliveryHeader, DeliveryFooter, DeliveryPickup} from '_atoms';
import Styles from './style';
import MapView from 'react-native-maps';
import {Icon} from '_atoms';
import {fetchDriverOrderForDeliveredRequested} from './action';

export default function History(props) {
  const dispatch = useDispatch();
  //state
  const [deliveredOrder, setDeliveredOrder] = useState([]);

  useEffect(() => {
    deliverOrderListRequest();
  }, []);
  function deliverOrderListRequest() {
    const onSuccess = data => {
      data &&
        setDeliveredOrder(() => {
          return data.response.orders;
        });
    };
    const onFail = () => {};
    dispatch(fetchDriverOrderForDeliveredRequested({onSuccess, onFail}));
  }
  console.log('deliveredOrder', deliveredOrder);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <DeliveryHeader headerName={'Delivery'} />
      <DeliveryPickup
        count={deliveredOrder.data && deliveredOrder.data.length}
        activeTab={'history'}
        {...props}
      />
      <View style={Styles.searchView}>
        <View style={Styles.searchIconView}>
          <Icon icon={'search'} style={Styles.searchIcon} />
        </View>
        <TextInput style={Styles.search} placeholder="Search" />
      </View>
      <FlatList
        style={{marginBottom: 80}}
        data={deliveredOrder.data || []}
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
                    <Text style={Styles.deliveryLabel}>delivery </Text>
                    <Text style={Styles.addressLabel}>
                      : Rainbow 2nd floor{' '}
                    </Text>
                  </View>
                  <View style={Styles.statusView}>
                    <View>
                      <Text style={Styles.statusLabel}>Status</Text>
                    </View>
                    <View>
                      <Text style={Styles.statusAction}>
                        {item.order_status}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={Styles.border}></View>
            </View>
          );
        }}
      />
      <DeliveryFooter screen={'actions'} {...props} />
    </View>
  );
}
