import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from './style';

export default function OrderHeader(props) {
  // console.log('orderLength', props);
  return (
    <View style={Style.main}>
      <TouchableOpacity onPress={() => props.navigation.push('reception')}>
        {props.activeTab === 'reception' ? (
          <Text style={{...Style.active, ...Style.tab}}>
            New Orders ({props.orderLength})
          </Text>
        ) : (
          <Text style={{...Style.deactive, ...Style.tab}}>New Orders </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.push('OnHold')}>
        <Text
          style={
            props.activeTab === 'hold'
              ? {...Style.active, ...Style.tab}
              : {...Style.tab, ...Style.deactive}
          }>
          On Hold
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.push('kitchen')}>
        <Text
          style={
            props.activeTab === 'kitchen'
              ? {...Style.active, ...Style.tab}
              : {...Style.tab, ...Style.deactive}
          }>
          Kitchen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.push('Ready')}>
        <Text
          style={
            props.activeTab === 'Ready'
              ? {...Style.active, ...Style.tab}
              : {...Style.tab, ...Style.deactive}
          }>
          Ready
        </Text>
      </TouchableOpacity>
    </View>
  );
}
