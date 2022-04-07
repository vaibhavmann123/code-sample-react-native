import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {Mixins} from '_styles';
import Styles from './style';
import {Icon} from '_atoms';
import {
  fetchDeliveryBoyRequested,
  assignDeliveryBoy,
  // fetchDeliveryBoySuccess,
} from '../../../scenes/deliveryBoy/action';
import {orderStatusReadyRequested} from '_scenes/orders/ready/action';
import {getOrderByIdRequested} from '../../../scenes/orders/orderDeliveryNow/action';

export default function ManualAssignModel({
  close = () => {},
  isVisible = false,
  order_id,
}) {
  const [deliveryBoy, setDeliveryBoy] = useState([]);

  useEffect(() => {
    fetchDeliveryBoyRequest();
  }, []);
  const dispatch = useDispatch();
  function fetchDeliveryBoyRequest() {
    const onSuccess = data => {
      // data && console.log('data.response', data);

      setDeliveryBoy(() => {
        return data.users;
      });
    };
    const onFail = () => {};
    dispatch(fetchDeliveryBoyRequested({onSuccess, onFail}));
  }

  function AssignDeliveryBoy(user_id) {
    const payload = {
      order_id: order_id,
      driver_id: user_id,
    };
    const onSuccess = data => {
      dispatch(getOrderByIdRequested({orderId: order_id}));
      // console.log('Asigndata', data);
      close();
    };
    //Assign delivery boy
    dispatch(assignDeliveryBoy({data: payload, onSuccess}));
  }
  // console.log('consoledeliveryBoy', deliveryBoy);

  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        deviceWidth={Mixins.WINDOW_WIDTH}
        deviceHeight={Mixins.deviceHeight}
        animationInTiming={600}
        animationOutTiming={800}
        onBackButtonPress={close}>
        <View style={Styles.container}>
          <View style={Styles.cRow}>
            <Text style={Styles.modalHeading}>Manual Assign</Text>

            <TouchableOpacity
              onPress={() => {
                close();
              }}>
              <Text style={Styles.close}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.fRow}>
            <View style={Styles.searchView}>
              <Icon icon={'search'} style={Styles.searchIcon} />
            </View>
            <TextInput placeholder="Search" style={Styles.input} />
          </View>

          <ScrollView>
            {deliveryBoy.map((x, i) => {
              return (
                <View key={i}>
                  <TouchableOpacity
                    onPress={() => {
                      AssignDeliveryBoy(x.user_id);
                    }}>
                    <View style={Styles.scrollMain}>
                      <Image
                        source={require('../../../assets/images/maharajaLogoFavicon.png')}
                        style={Styles.img}
                      />
                      <Text style={Styles.label}>{x.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
