import {StyleSheet, Dimensions} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;

export default style = StyleSheet.create({
  borderBottom: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 200,
    height: deviceHeight,
  },

  addIcon: {
    position: 'absolute',
    bottom: 85,
    right: 10,
  },
});
