import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  searchView: {
    alignItems: 'center',
  },
  searchIconView: {
    position: 'absolute',
    left: 25,
    top: 8,
  },
  searchIcon: {
    height: 19.3,
    width: 19.3,
  },
  search: {
    width: Mixins.scaleSize(342),
    height: Mixins.scaleSize(36),
    borderRadius: Mixins.scaleSize(4),
    elevation: Mixins.scaleSize(2),
    padding: Mixins.scaleSize(7),
    paddingLeft: 47,
    borderWidth: 0.3,
    shadowColor: 'black',
    // shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  img: {
    width: Mixins.scaleSize(374.8),
    height: Mixins.scaleSize(298),
  },
  noPickLabel: {
    height: Mixins.scaleSize(21),
    fontFamily: Typography.FONT_FAMILY_SEGOEUI,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_SEGOEUI,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1a0c3d',
  },
  main: {
    marginTop: 27.4,
    marginHorizontal: 29,
    flexWrap: 'wrap',
  },
  fDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  map: {
    height: 72,
    width: 75,
    marginRight: 13,
  },

  nameLabel: {
    height: 19,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1a0c3d',
  },
  icon: {
    width: 9.7,
    height: 13.7,
    marginRight: 6,
  },
  deliveryLabel: {
    fontFamily: 'SegoeUI',
    height: 19,
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
    // alignSelf: 'center',
  },
  addressLabel: {
    fontFamily: 'SegoeUI',
    height: 14,
    fontSize: 10,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#616161',
    // alignSelf: 'center',
  },
  statusView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  statusLabel: {
    height: 21,
    fontFamily: 'SegoeUI',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#424242',
  },
  statusAction: {
    height: 19,
    fontFamily: 'SegoeUI',
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#e16d34',
  },
  marginR: {
    marginRight: 22,
  },

  border: {
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: '#c7c7c7',
    marginTop: 10,
    // flexDirection: 'column',
  },
});