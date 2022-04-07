import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default function DeliveryPickup(props) {
  // console.log('orderLength', props);
  return (
    <View style={Style.bgColor}>
      <View style={Style.main}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DeliveryAction')}>
          {props.activeTab === 'pickUp' ? (
            <Text style={{...Style.active, ...Style.tab}}>
              Pick up ({props.count})
            </Text>
          ) : (
            <Text style={{...Style.deactive, ...Style.tab}}>Pick up</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Deliverydelivery')}>
          {props.activeTab === 'delivery' ? (
            <Text style={{...Style.active, ...Style.tab}}>
              Delivery ({props.count})
            </Text>
          ) : (
            <Text style={{...Style.deactive, ...Style.tab}}>Delivery</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('DeliveryHistory')}>
          {props.activeTab === 'history' ? (
            <Text style={{...Style.active, ...Style.tab}}>
              History({props.count})
            </Text>
          ) : (
            <Text style={{...Style.deactive, ...Style.tab}}>History</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  bgColor: {
    backgroundColor: Colors.WHITE,
  },
  search: {
    width: Mixins.scaleSize(342),
    height: Mixins.scaleSize(36),
    borderRadius: Mixins.scaleSize(4),
    elevation: Mixins.scaleSize(1),
    padding: Mixins.scaleSize(7),
    paddingLeft: 47,
  },
  tab: {
    height: Mixins.scaleSize(26),
    fontFamily: Typography.FONT_SEGOEUI.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,

    textAlign: 'left',
  },
  active: {
    color: '#41be62',
    borderBottomWidth: 1,
    borderBottomColor: '#41be62',
  },
  searchView: {
    alignItems: 'center',
    marginTop: 25,
  },
  deactive: {
    color: '#1a0c3d',
  },
  searchIconView: {
    position: 'absolute',
    left: 25,
    top: 8,
  },
  searchIcon: {
    height: 19.3,
    width: 19.3,
  },
});
