import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles/index';

export default style = StyleSheet.create({
  mainView: {
    marginHorizontal: Mixins.scaleSize(20.5),
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Mixins.scaleSize(15),
    backgroundColor: Colors.WHITE,
  },
  strip: {
    width: 0,
    height: Mixins.scaleSize(27.7),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.GRAY_LIGHT,
  },
  orders: {
    height: Mixins.scaleSize(21),
    fontFamily: 'SegoeUI',
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#e16d34',
    paddingLeft: 5,
  },
  bookings: {
    height: Mixins.scaleSize(21),
    fontFamily: Typography.FONT_SEGOEUI.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#424242',
    paddingLeft: 5,
  },
  icon: {
    height: Mixins.scaleSize(23.5),
    width: Mixins.scaleSize(23.1),
  },
  orderBooking: {
    display: 'flex',
    flexDirection: 'row',
  },
});
