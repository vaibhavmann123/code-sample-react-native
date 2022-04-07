import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Style from './style';
import Icon from '_atoms/icon';

export default function StatusHeader(props) {
  // console.log('orderLength', props);
  return (
    <View style={Style.bgColor}>
      <View style={Style.searchView}>
        <View style={Style.searchIconView}>
          <Icon icon={'search'} style={Style.searchIcon} />
        </View>
        <TextInput style={Style.search} placeholder="Search" />
      </View>
      <View style={Style.main}>
        <TouchableOpacity onPress={() => props.navigation.push('reception')}>
          <Text style={{...Style.active, ...Style.tab}}>All </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('OnHold')}>
          <Text style={{...Style.deactive, ...Style.tab}}>Pick Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('kitchen')}>
          <Text style={{...Style.deactive, ...Style.tab}}>Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Ready')}>
          <Text style={{...Style.deactive, ...Style.tab}}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Ready')}>
          <Text style={{...Style.deactive, ...Style.tab}}>Cash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
