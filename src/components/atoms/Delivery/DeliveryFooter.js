import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '_atoms';
import {Mixins, Colors} from '_styles';

export default function DeliveryFooter(props) {
  // console.log('footer', props, props.tintColor);
  return (
    <View style={style.main}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('DeliveryAction')}>
        <View style={style.tabSection}>
          <Icon
            icon={'actions'}
            style={{
              height: Mixins.scaleSize(22),
              width: Mixins.scaleSize(27),
            }}
            tintColor={props.screen === 'actions' ? '#e16d34' : '#1a0c3d'}
          />
          <Text
            style={{
              color: props.screen === 'actions' ? '#e16d34' : '#1a0c3d',
            }}>
            Actions
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('DeliveryProfile')}>
        <View style={style.tabSection}>
          <Icon
            icon={'profile'}
            style={{
              height: Mixins.scaleSize(22),
              width: Mixins.scaleSize(23.21),
            }}
            tintColor={props.screen === 'profile' ? '#e16d34' : '#1a0c3d'}
          />
          <Text
            style={{color: props.screen === 'profile' ? '#e16d34' : '#1a0c3d'}}>
            Profile
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Mixins.scaleSize(15),
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.WHITE,
    borderStyle: 'solid',
    borderWidth: Mixins.scaleSize(0.5),
    borderColor: Colors.GRAY_LIGHT,
    width: '100%',
    paddingHorizontal: Mixins.scaleSize(27),
    height: Mixins.scaleSize(60),
  },
  tabSection: {
    alignItems: 'center',
  },
});
