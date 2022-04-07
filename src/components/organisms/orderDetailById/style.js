import {StyleSheet} from 'react-native';
import {Typography, Colors, Mixins} from '_styles';

export default style = StyleSheet.create({
  align: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Mixins.scaleSize(10),
  },
  mainPadding: {
    padding: Mixins.scaleSize(15),
    backgroundColor: Colors.WHITE,
    // height: Mixins.deviceHeight,
    flex: 1,
  },
  name: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_DARK,
    // marginBottom: 10,
  },
  items: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Colors.GRAY_DARK,
    // marginBottom: 10,
  },

  orderId: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    // textAlign: 'left',
    color: Colors.GRAY_DARK,
    // marginBottom: 10,
  },
  call: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(16),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#e16d34',
    marginRight: Mixins.scaleSize(20),
  },
  reject: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(16),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#e16d34',
  },
  deliveryUrgency: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
  },

  now: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
  },
  deliveryAddress: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
    // marginTop: 15,
  },
  locationLayout: {
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: Mixins.scaleSize(0.5),
    borderColor: '#cecece',
    marginBottom: Mixins.scaleSize(10),
  },
  locationIcon: {
    height: Mixins.scaleSize(13.7),
    width: Mixins.scaleSize(9.6),
    marginTop: Mixins.scaleSize(10),
  },
  hno: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_10,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
    marginTop: Mixins.scaleSize(10),
    marginLeft: Mixins.scaleSize(3),
    // marginBottom: 20,
  },
  order: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
    // marginVertical: 10,
  },
  orderItems: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
    // marginVertical: 10,
  },
  time: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
  },
  dishName: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
    // marginVertical: 10,
  },
  rs: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(21),
    letterSpacing: 0,
    color: Colors.GRAY_MEDIUM,
    textAlign: 'right',
  },
  customize: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(15),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
  },
  itemLayout: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingRight: Mixins.scaleSize(15),
  },
  callDetailView: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: Mixins.scaleSize(24),
  },
  totalLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: Mixins.scaleSize(0.5),
    borderTopWidth: Mixins.scaleSize(0.5),
    borderColor: '#cecece',
    alignItems: 'center',
    marginBottom: Mixins.scaleSize(10),
  },
  total: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(40),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_DARK,
    // marginBottom: 20,
  },
  totalAmount: {
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(40),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#e16d34',
    // marginBottom: 20,
  },
  paymentMethod: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_SEGOEUI.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
  },
  cashLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cashIcon: {
    width: Mixins.scaleSize(19.7),
    height: Mixins.scaleSize(13.2),
    opacity: Mixins.scaleSize(0.72),
    marginRight: Mixins.scaleSize(3),
  },
  cash: {
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_MEDIUM,
  },
  assignBtnLayout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: Mixins.scaleSize(30),
    marginTop: Mixins.scaleSize(20),
  },
  manualAssignBtn: {
    width: Mixins.scaleSize(92),
    height: Mixins.scaleSize(23),
    borderRadius: Mixins.scaleSize(3),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: Mixins.scaleSize(1),
    borderColor: '#ff3008',
    justifyContent: 'center',
    alignItems: 'center',
  },
  manualAssignText: {
    // width: Mixins.scaleSize(58),
    height: Mixins.scaleSize(10),
    fontFamily: 'Roboto',
    fontSize: Mixins.scaleSize(8),
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(10),
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ff3008',
  },
  autoAssignText: {
    // width: Mixins.scaleSize(44),
    height: Mixins.scaleSize(10),
    fontFamily: 'Roboto',
    fontSize: 8,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(10),
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  autoAssignBtn: {
    width: Mixins.scaleSize(92),
    height: Mixins.scaleSize(23),
    borderRadius: Mixins.scaleSize(3),
    backgroundColor: '#ff3008',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderStyle: 'solid',
    borderWidth: Mixins.scaleSize(0.5),
    borderColor: '#cecece',
    marginTop: Mixins.scaleSize(18),
    marginBottom: Mixins.scaleSize(25),
  },
  deliveryBoyAssignText: {
    height: Mixins.scaleSize(19),
    fontFamily: 'Montserrat',
    fontSize: Mixins.scaleSize(16),
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: Mixins.scaleSize(19),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
    marginLeft: Mixins.scaleSize(18),
    marginBottom: Mixins.scaleSize(27),
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
  deliveryBoyAssignView: {
    flexDirection: 'row',
    marginBottom: Mixins.scaleSize(16),
    alignItems: 'center',
    marginLeft: Mixins.scaleSize(18),
  },
});
