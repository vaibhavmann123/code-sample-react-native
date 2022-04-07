import {StyleSheet} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
  },

  main: {
    marginTop: 27.4,
    marginHorizontal: 29,
    flex: 0.4,
    // flexWrap: 'wrap',
  },
  fDirection: {
    flexDirection: 'row',
  },
  map: {
    height: 72,
    width: 75,
    marginRight: 13,
  },
  orderId: {
    height: 21,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#424242',
  },
  fDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  callLabel: {
    marginTop: 5,
    height: 17,
    fontFamily: 'SegoeUI',
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
  },
  callIcon: {
    width: 21.4,
    height: 18.6,
  },
  addressLabel: {
    height: 21,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#424242',
  },
  addressText: {
    height: 45,
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
  },
  btn: {
    height: 33,
    borderRadius: 4,
    backgroundColor: '#ff3008',
  },
  btnTextView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  btnText: {
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
});
