import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';
import Icon from '_atoms/icon';

export default function StatusCard() {
  return (
    <>
      <View style={Style.fRow}>
        <Text style={Style.nameLabel}>
          John Doe <Text style={Style.itemLabel}>(5 Items)</Text>
        </Text>
        <View style={Style.deliveryView}>
          {/* <Icon icon={'delivery'} style={Style.deliveryIcon} /> */}
          {/* <Text style={Style.deliveryLabel}>Delivery</Text> */}

          <Icon icon={'pickup'} style={Style.deliveryIcon} />
          <Text style={Style.deliveryLabel}>Pick Up</Text>
        </View>
      </View>
      <View style={Style.fDirection}>
        <Icon icon={'location'} style={Style.locationPin} />
        <Text style={Style.kmAway}>7 km Away</Text>
      </View>
      <View>
        <Text style={Style.orderId}>Order ID #90866</Text>
      </View>
      <View style={Style.fRow}>
        <Text style={Style.statusLabel}>Status</Text>
        <Text style={Style.status}>In Kitchen</Text>
      </View>
      <View style={Style.borderLine}></View>
      <View style={Style.fRow}>
        <Text style={Style.nameLabel}>
          John Doe <Text style={Style.itemLabel}>(5 Items)</Text>
        </Text>
        <View style={Style.deliveryView}>
          <Icon icon={'delivery'} style={Style.deliveryIcon} />
          <Text style={Style.deliveryLabel}>Delivery</Text>
        </View>
      </View>
      <View style={Style.fDirection}>
        <Icon icon={'location'} style={Style.locationPin} />
        <Text style={Style.kmAway}>7 km Away</Text>
      </View>
      <View>
        <Text style={Style.orderId}>Order ID #90866</Text>
      </View>
      <View style={Style.fRow}>
        <Text style={Style.statusLabel}>Status</Text>
        <Text style={Style.status}>On Ride</Text>
      </View>
      <View style={Style.borderLine}></View>
    </>
  );
}
