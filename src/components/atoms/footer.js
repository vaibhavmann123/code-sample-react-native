import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {Icon} from '_atoms';
import {Mixins, Colors} from '_styles/index';

export default function FooterComponent(props) {
  // console.log('footer', props, props.tintColor);
  return (
    <View style={style.main}>
      <TouchableOpacity onPress={() => props.navigation.navigate('reception')}>
        <View style={style.tabSection}>
          <Icon
            icon={'actions'}
            style={{
              height: Mixins.scaleSize(20.13),
              width: Mixins.scaleSize(25.89),
              // This tintColor working for IOS
              tintColor: props.screen === 'reception' ? '#e16d34' : '#1a0c3d',
            }}
            // This tintColor working for Android

            tintColor={props.screen === 'reception' ? '#e16d34' : '#1a0c3d'}
          />
          <Text
            style={{
              color: props.screen === 'reception' ? '#e16d34' : '#1a0c3d',
            }}>
            Actions
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('inventory')}>
        <View style={style.tabSection}>
          <Icon
            icon={'inventory'}
            style={{
              height: Mixins.scaleSize(22.11),
              width: Mixins.scaleSize(26.88),
              // This tintColor working for IOS
              tintColor: props.screen === 'inventory' ? '#e16d34' : '#1a0c3d',
            }}
            // This tintColor working for Android

            tintColor={props.screen === 'inventory' ? '#e16d34' : '#1a0c3d'}
          />
          <Text
            style={{
              color: props.screen === 'inventory' ? '#e16d34' : '#1a0c3d',
            }}>
            Inventory
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Dashboard')}>
        <View style={style.tabSection}>
          <Icon
            icon={'dashboard'}
            style={{
              height: Mixins.scaleSize(22),
              width: Mixins.scaleSize(24.93),
              // This tintColor working for IOS
              tintColor: props.screen === 'dashboard' ? '#e16d34' : '#1a0c3d',
            }}
            // This tintColor working for Android

            tintColor={props.screen === 'dashboard' ? '#e16d34' : '#1a0c3d'}
          />
          <Text
            style={{
              color: props.screen === 'dashboard' ? '#e16d34' : '#1a0c3d',
            }}>
            Dashboard
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('AllStatus')}>
        <View style={style.tabSection}>
          <Icon
            icon={'history'}
            style={{
              height: Mixins.scaleSize(22.44),
              width: Mixins.scaleSize(23.77),
              // This tintColor working for IOS
              tintColor: props.screen === 'history' ? '#e16d34' : '#1a0c3d',
            }}
            // This tintColor working for Android

            tintColor={props.screen === 'history' ? '#e16d34' : '#1a0c3d'}
          />
          <Text
            style={{
              color: props.screen === 'history' ? '#e16d34' : '#1a0c3d',
            }}>
            History
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('profile')}>
        <View style={style.tabSection}>
          <Icon
            icon={'profile'}
            style={{
              height: Mixins.scaleSize(24.41),
              width: Mixins.scaleSize(23.21),
              // This tintColor working for IOS
              tintColor: props.screen === 'profile' ? '#e16d34' : '#1a0c3d',
            }}
            // This tintColor working for Android
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
    padding: 15,
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.WHITE,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: Colors.GRAY_LIGHT,
    width: '100%',
  },
  tabSection: {
    alignItems: 'center',
  },
});
