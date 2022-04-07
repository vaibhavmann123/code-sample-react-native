import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles/index';

export default style = StyleSheet.create({
  PrimaryBtnStyle: {
    backgroundColor: Colors.PRIMARY,
    height: Mixins.scaleSize(58),
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: 20,
    fontWeight: Typography.FONT_WEIGHT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: 'center',
    color: Colors.WHITE,
  },

  btnStyle: {
    backgroundColor: '#ff3008',
    height: 58,
    justifyContent: 'center',
  },

  addIcon: {
    position: 'absolute',
    bottom: 85,
    right: 10,
  },
});
