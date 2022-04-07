import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.WHITE,
    marginLeft: Mixins.scaleSize(15),
  },
  tab: {
    height: Mixins.scaleSize(26),
    fontFamily: Typography.FONT_SEGOEUI.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,

    textAlign: 'left',
  },
  active: {
    color: '#41be62',
    borderBottomWidth: 1,
    borderBottomColor: '#41be62',
  },

  deactive: {
    color: '#1a0c3d',
  },
});
