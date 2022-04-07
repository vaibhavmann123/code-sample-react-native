import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  name: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(13),
    letterSpacing: 0,
    color: Colors.GRAY_DARK,
    textAlign: 'center',
  },

  items: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_10,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: 13,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
  },

  pickupIcon: {
    height: Mixins.scaleSize(23.5),
    width: Mixins.scaleSize(24.1),
  },

  pickupText: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_10,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: 13,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1a0c3d',
  },
  timeR: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  timeIcon: {
    height: Mixins.scaleSize(14.7),
    width: Mixins.scaleSize(14.6),
  },

  time: {
    fontFamily: Typography.FONT_SEGOEUI.fontFamily,
    fontSize: Typography.FONT_SIZE_12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#1a0c3d',
    alignItems: 'center',
  },
  orderId: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_DARK,
  },

  orderPrice: {
    fontFamily: Typography.FONT_SEGOEUI.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.ACTIVATE,
  },
  rsSymbol: {
    color: Colors.ACTIVATE,
  },
  borderBottom: {
    margin: 15,
  },

  orderIdRs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY_LIGHT,
  },
});
