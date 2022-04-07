import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Icon} from '_atoms';

export default function KitchenComponent({
  orderId,
  Name,
  items,
  iconName,
  time,
  counter,
  delivery,
  updateToReady,
  deliveryText,
  navigate,
}) {
  return (
    <View>
      {/* {console.log('navigate', navigate)} */}
      <TouchableOpacity
        onPress={() => navigate('SingalOrderDetail', {orderId})}>
        <View style={styles.mainRow}>
          <View style={styles.progressBar}>
            <ProgressCircle
              percent={50}
              radius={30}
              borderWidth={4}
              color="#ff3008"
              shadowColor="#ffe8c7"
              bgColor="#fff">
              <Text style={{fontSize: 13}}>{counter}</Text>
            </ProgressCircle>
          </View>
          <View>
            <View style={styles.rowTittle}>
              <Text style={styles.tittle}>{Name}</Text>
              <Text style={styles.items}>{items} items</Text>
            </View>
            <View style={styles.pinlocation}>
              <Icon
                icon={iconName}
                style={
                  iconName === 'location'
                    ? {width: 9.6, height: 13.7}
                    : {width: 14.2, height: 14.5}
                }
                color="#e64d2e"
              />
              <Text style={styles.km}>{time}</Text>
            </View>
            <Text style={styles.order}>OrderId #{orderId}</Text>
          </View>
          <View style={styles.deliveryView}>
            <Image source={delivery} style={styles.delivery} />
            <Text style={styles.deliveryText}>{deliveryText}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateToReady(orderId)}>
        <View style={styles.btn}>
          <Text style={styles.redy}>Ready</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  rowTittle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
  items: {
    fontSize: 11,
    color: 'grey',
    marginLeft: '7%',
  },
  pin: {
    height: 20,
    width: 10,
  },
  pinlocation: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  km: {
    fontSize: 11,
    marginLeft: '7%',
    color: '#424242',
  },
  delivery: {
    height: 19.2,
    width: 24.4,
  },
  deliveryView: {
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 12,
  },
  btn: {
    backgroundColor: '#ff3008',
    width: '82%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: '2%',
    alignSelf: 'center',
  },
  line: {
    backgroundColor: 'grey',
    height: 0.5,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  order: {
    marginTop: '5%',
  },
  redy: {
    color: 'white',
  },
});
