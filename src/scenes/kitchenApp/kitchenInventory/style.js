import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  border: {
    height: Mixins.scaleSize(60),
    backgroundColor: Colors.WHITE,
    borderStyle: 'solid',
    borderWidth: Mixins.scaleSize(0.4),
    borderColor: Colors.GRAY_LIGHT,
    justifyContent: 'center',
  },
  label: {
    height: Mixins.scaleSize(21),
    fontFamily: Typography.FONT_FAMILY_ROBOTO,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_DARK,
    marginLeft: Mixins.scaleSize(13),
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: Mixins.scaleSize(15),
  },
  icon: {
    width: Mixins.scaleSize(17.1),
    height: Mixins.scaleSize(10.9),
  },
  close: {
    width: Mixins.scaleSize(17.1),
    height: Mixins.scaleSize(10.9),
    transform: [{rotate: '180deg'}],
  },
  open: {
    width: Mixins.scaleSize(17.1),
    height: Mixins.scaleSize(10.9),
  },
  dishContainer: {
    flexDirection: 'row',
    padding: Mixins.scaleSize(22),
    justifyContent: 'space-between',
  },
  dishR: {
    flexDirection: 'row',
  },
  img: {
    width: Mixins.scaleSize(75),
    height: Mixins.scaleSize(72),
  },
  labelMargin: {
    marginLeft: Mixins.scaleSize(15),
  },

  dishName: {
    fontFamily: Typography.FONT_FAMILY_SEGOEUI,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_DARK,
  },
  dishQuality: {
    width: Mixins.scaleSize(180),
    fontFamily: Typography.FONT_FAMILY_SEGOEUI,
    fontSize: Typography.FONT_SIZE_12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(16),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
  },
  dishPrice: {
    fontFamily: Typography.FONT_FAMILY_SEGOEUI,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#38bf11',
  },
  toggleView: {
    borderRadius: Mixins.scaleSize(50),
    borderWidth: Mixins.scaleSize(2),
    borderColor: Colors.PRIMARY,
  },
  toggle: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
    borderWidth: Mixins.scaleSize(2),
    borderColor: Colors.PRIMARY,
  },
  toggleText: {
    marginTop: Mixins.scaleSize(5),
    fontFamily: Typography.FONT_FAMILY_SEGOEU,
    fontSize: Typography.FONT_SIZE_8,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(11),
    letterSpacing: 0,
    textAlign: 'center',
    color: '#565656',
  },
});
