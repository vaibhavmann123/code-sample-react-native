import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  prntImg: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#E16D34',
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnConnect: {
    borderWidth: 1,
    borderColor: '#E16D34',
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#FF3008',
  },
  btnText: {
    fontSize: 12,
    color: 'black',
  },
  btnTextConnected: {
    fontSize: 12,
    color: 'white',
  },
  border: {
    borderColor: '#c8c8c8',
    borderBottomWidth: 0.5,
    marginLeft: 18,
    marginRight: 15,
  },
  noDataView: {
    alignItems: 'center',
    marginTop: '50%',
  },
  noConnectionImg: {
    height: 64,
    width: 64,
  },
  noPrinterTxt: {
    marginTop: '2%',
  },
  nodataSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
  },
  refreshImg: {
    height: 16,
    width: 16,
  },
  refreshText: {
    color: '#FF3008',
  },
});
