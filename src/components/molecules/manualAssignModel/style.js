import {StyleSheet, Platform, Dimensions} from 'react-native';
// STYLE
import {Mixins, Typography, Spacing, Colors} from '_styles';

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: Mixins.scaleSize(15),
    padding: Mixins.scaleSize(22),
    width: Mixins.scaleSize(324),
    height: Mixins.scaleSize(286),
  },

  cRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fRow: {
    marginTop: Mixins.scaleSize(11),
    marginBottom: Mixins.scaleSize(20),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  close: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    borderRadius: Mixins.scaleSize(100),
    fontSize: Typography.FONT_SIZE_12,
    transform: [{rotate: '180deg'}],
    height: Mixins.scaleSize(18),
    width: Mixins.scaleSize(18),
    textAlign: 'center',
    alignSelf: 'center',
  },
  input: {
    width: Mixins.scaleSize(280),
    height: Mixins.scaleSize(36),
    borderRadius: Mixins.scaleSize(4),
    elevation: Mixins.scaleSize(1),
    paddingLeft: 45,
  },
  modalHeading: {
    height: Mixins.scaleSize(21),
    fontFamily: Typography.FONT_SEGOEUI.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
  },
  scrollMain: {
    flexDirection: 'row',
    marginBottom: Mixins.scaleSize(16),
    alignItems: 'center',
  },
  img: {
    width: Mixins.scaleSize(32),
    height: Mixins.scaleSize(33),
  },
  label: {
    height: Mixins.scaleSize(19),
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
    marginLeft: Mixins.scaleSize(17),
  },
  searchView: {
    position: 'absolute',
    left: 10,
    zIndex: 99,
  },
  searchIcon: {
    height: 19,
    width: 19,
  },
});
