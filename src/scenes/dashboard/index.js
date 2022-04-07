import React, {useState} from 'react';
import {View, Text, Picker} from 'react-native';
import {HeaderComponent, FooterComponent} from '_atoms';
import RNPickerSelect from 'react-native-picker-select';

import Icon from '_atoms/icon';

import Style from './style';
const sports = [
  {
    label: 'Football',
    value: 'football',
    key: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
    key: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
    key: 'hockey',
  },
];
export default function Dashboard(props) {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderComponent headerName={'Reception'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 60,
        }}>
        <View style={{marginTop: 31, marginRight: 60}}>
          <Text style={Style.from}>From</Text>
          <RNPickerSelect
            items={sports}
            onValueChange={value => setSelectedValue(value)}
            style={{width: 200}}
            width={200}
            pickerProps={{
              accessibilityLabel: 'baseball',
            }}
          />
          <Text style={Style.label}>Sale</Text>
          <Text style={Style.label}>Cash</Text>
        </View>
        <View style={{marginTop: 31, marginLeft: 10}}>
          <Text style={Style.till}>Till</Text>
          <RNPickerSelect
            // onValueChange={value => console.log(value)}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
            ]}
          />
          <Text style={Style.numberLabel}>
            200
            <Icon icon={'up'} style={{height: 12.4, width: 13.5}} />
          </Text>
          <Text style={Style.numberLabel}>
            50
            <Icon icon={'down'} style={{height: 12.4, width: 13.5}} />
          </Text>
        </View>
      </View>
      <FooterComponent {...props} screen={'dashboard'} />
    </View>
  );
}
