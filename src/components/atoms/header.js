import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Icon} from '_atoms';
import PropTypes from 'prop-types';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default function HeaderComponent(props) {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      {props.isBackIcon ? (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={style.headerBack}>
            <Icon icon={'back'} style={{height: 15.4, width: 9.9}} />
            <Text style={{...style.titleBack, marginLeft: 10}}>
              {props.headerName}{' '}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <>
          <View style={style.header}>
            {props.isBack ? (
              <TouchableOpacity
                hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                onPress={props.handelBackPress}>
                <Icon icon={'back'} style={{height: 15.4, width: 9.9}} />
              </TouchableOpacity>
            ) : (
              <></>
            )}
            <Text style={[style.title, {marginLeft: props.marginLeft}]}>
              {props.headerName}{' '}
            </Text>
            {!props.isPrinter ? (
              <Icon icon={'bell'} style={{height: 26.1, width: 23}} />
            ) : (
              <TouchableOpacity onPress={props.printerPress}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon icon={props.iconName} style={{height: 20, width: 20}} />
                  {/* <Text> {props.Refresh}</Text> */}
                </View>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 40 : 56,
    backgroundColor: Colors.WHITE,
    borderStyle: 'solid',
    borderBottomWidth: 0.6,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 15,
    paddingHorizontal: 15,
  },
  headerBack: {
    display: 'flex',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 40 : 56,
    backgroundColor: Colors.WHITE,
    borderStyle: 'solid',
    borderBottomWidth: 0.6,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  titleBack: {
    width: Mixins.scaleSize(150),
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_21,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(24),
    letterSpacing: 0,
    color: Colors.GRAY_DARK,
    alignItems: 'center',
  },
  title: {
    width: 'auto',
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_21,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(24),
    letterSpacing: 0,
    color: '#e16d34',
    alignItems: 'center',
  },
});
HeaderComponent.propTypes = {
  isBackIcon: PropTypes.bool,
};
