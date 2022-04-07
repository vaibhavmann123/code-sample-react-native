import {StyleSheet, Platform, Dimensions} from 'react-native';
// STYLE
import {Mixins, Typography, Spacing, Colors} from '_styles';

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 22,
  },
  modalHeading: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: Typography.FONT_SEGOEUI.fontFamily,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
  },
  currentTime: {
    color: '#e16d34',
    fontSize: Typography.FONT_SIZE_14,
    lineHeight: 16,
    marginLeft: 20,
  },
  cRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBoxOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  timeOptionBox: {
    height: (Mixins.WINDOW_WIDTH - 120) / 3 - 37,
    width: (Mixins.WINDOW_WIDTH - 120) / 3,
    borderWidth: 1,
    borderColor: '#e16d34',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  timeOption: {
    color: '#e16d34',
    fontSize: Typography.FONT_SIZE_14,
  },
  close: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 100,
    fontSize: 12,
    transform: [{rotate: '180deg'}],
    height: 18,
    width: 18,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
