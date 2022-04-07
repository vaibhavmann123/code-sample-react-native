import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  strip: {
    width: 0,
    height: 27.7,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#cecece',
  },
  orders: {
    height: 21,
    fontFamily: 'SegoeUI',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#424242',
    paddingLeft: 5,
  },
  bookings: {
    height: 21,
    fontFamily: 'SegoeUI',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    paddingLeft: 5,
    color: '#e16d34',
  },
  newBooking: {
    fontFamily: 'SegoeUI',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1a0c3d',
  },
  arrivals: {
    fontFamily: 'SegoeUI',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#41be62',
  },

  name: {
    // height: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    // lineHeight: 22,
    letterSpacing: 0,
    color: '#424242',
    textAlign: 'center',
  },
  date: {
    fontFamily: 'SegoeUI',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#1a0c3d',
  },
  orderId: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#424242',
  },

  borderBottom: {
    margin: 15,
  },
  icon: {
    height: 23.5,
    width: 23.1,
  },
  orderBooking: {
    display: 'flex',
    flexDirection: 'row',
  },
  orderIdRs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderColor: '#c7c7c7',
  },

  addIcon: {
    position: 'absolute',
    bottom: 85,
    right: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },

  currentDate: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#e16d34',
  },
  todaysArrival: {
    fontFamily: 'SegoeUI',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#606060',
  },
});
