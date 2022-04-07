import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from './style';
import {Icon} from '_atoms';

export function PrimaryButton({onPress = () => {}, name = ''}) {
  return (
    <View>
      <TouchableOpacity style={Style.PrimaryBtnStyle} onPress={onPress}>
        <Text style={Style.btnText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export function AddButton() {
  return (
    <View style={Style.addIcon}>
      <TouchableOpacity>
        <Icon icon={'add'} style={{height: 68, width: 50}} />
      </TouchableOpacity>
    </View>
  );
}
export function TwoButton(props) {
  // console.log('twobuttop', props);
  return (
    <View
      style={{
        ...Style.btnStyle,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
      }}>
      <TouchableOpacity
        onPress={props.handleSendToKitchen}
        style={{width: '50%'}}>
        <Text style={Style.btnText}>Send to Kitchen</Text>
      </TouchableOpacity>
      <View
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#ffffff',
          height: '100%',
        }}></View>
      <TouchableOpacity onPress={props.handleSendToHold} style={{width: '50%'}}>
        <Text style={Style.btnText}>Put On Hold</Text>
      </TouchableOpacity>
    </View>
  );
}
