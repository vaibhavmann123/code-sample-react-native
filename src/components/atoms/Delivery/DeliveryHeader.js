import React from 'react';
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

export default function DeliveryHeader(props) {
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
        <View style={style.header}>
          <Text style={style.title}>{props.headerName} </Text>
          <Icon icon={'bell'} style={{height: 26.1, width: 23}} />
        </View>
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
    width: Mixins.scaleSize(150),
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
DeliveryHeader.propTypes = {
  isBackIcon: PropTypes.bool,
};
