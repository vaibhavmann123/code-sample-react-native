import {StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollMainView: {
    alignItems: 'center',
  },
  imageView: {
    alignItems: 'center',
    marginTop: Mixins.scaleSize(31),
  },
  img: {
    height: Mixins.scaleSize(146),
    width: Mixins.scaleSize(150),
  },
  margin: {
    marginTop: 100,
    marginBottom: 100,
  },
  labelName: {
    height: Mixins.scaleSize(27),
    fontFamily: Typography.FONT_FAMILY_SEGOEUI,
    fontSize: Typography.FONT_SIZE_21,
    fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(27),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.BLACK,
    marginBottom: Mixins.scaleSize(6),
  },
  detailView: {
    height: Mixins.scaleSize(64),
    backgroundColor: Colors.WHITE,
    borderStyle: 'solid',
    borderColor: '#c8c8c8',
    paddingLeft: Mixins.scaleSize(35),
    justifyContent: 'center',
    paddingRight: Mixins.scaleSize(23),
    borderTopWidth: Mixins.scaleSize(0.4),
    borderBottomWidth: Mixins.scaleSize(0.4),
    width: '100%',
  },

  fRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emailLabel: {
    height: Mixins.scaleSize(21),
    fontFamily: Typography.FONT_FAMILY_SEGOEUI,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.BLACK,
  },
  emailText: {
    height: Mixins.scaleSize(21),
    fontFamily: Typography.FONT_FAMILY_SEGOEUI,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.BLACK,
  },
  updateBtn: {
    width: Mixins.scaleSize(92),
    height: Mixins.scaleSize(23),
    borderRadius: Mixins.scaleSize(3),
    backgroundColor: Colors.PRIMARY,
  },
  updateBtnText: {
    fontFamily: Typography.FONT_FAMILY_ROBOTO,
    fontSize: Typography.FONT_SIZE_8,
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    fontStyle: 'normal',
    color: Colors.WHITE,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: Mixins.scaleSize(7),
    height: Mixins.scaleSize(23),
  },
  logoutBtn: {
    width: Mixins.scaleSize(314),
    height: Mixins.scaleSize(35),
    borderRadius: Mixins.scaleSize(3),
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtnText: {
    height: Mixins.scaleSize(16),
    fontFamily: Typography.FONT_FAMILY_ROBOTO,
    fontSize: Typography.FONT_SIZE_12,
    fontWeight: Typography.FONT_WEIGHT_ROBOTO,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(16),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
