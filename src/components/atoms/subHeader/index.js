import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from './style';
import {Icon} from '_atoms';

export default function SubHeader(props) {
  // console.log('prop.......', props);
  return (
    <View style={Style.mainView}>
      <View style={Style.main}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('reception')}>
          <View style={Style.orderBooking}>
            <Icon icon={'orders'} style={Style.icon} />
            <Text style={Style.orders}>Orders</Text>
          </View>
        </TouchableOpacity>

        <View style={Style.strip}></View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewBookingsOrder')}>
          <View style={Style.orderBooking}>
            <Icon icon={'booking'} style={Style.icon} />
            <Text style={Style.bookings}>Bookings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
