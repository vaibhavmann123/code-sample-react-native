import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Style from './style';
import Icon from '_atoms/icon';
import {Mixins} from '_styles/index';

export default function PickupCard(props) {
  // console.log('Pickuppropssss', props);
  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ReadyOrder')}>
          <View style={Style.content}>
            <View>
              <Text style={Style.name}>
                John doe
                <Text style={Style.items}>&nbsp;(5 Items)</Text>
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Icon icon={'pickup'} style={Style.pickupIcon} />
              <Text style={Style.pickupText}>Pick Up</Text>
            </View>
          </View>
          <View style={Style.timeR}>
            <Icon icon={'time'} style={Style.timeIcon} />
            <Text style={Style.time}>&nbsp; 07:00 Am -08:00 Am</Text>
          </View>
          <View style={Style.orderIdRs}>
            <View>
              <Text style={Style.orderId}>Order ID #90868</Text>
            </View>
            <View>
              <Text style={Style.rsSymbol}>
                $<Text style={Style.orderPrice}>&nbsp; 450</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
