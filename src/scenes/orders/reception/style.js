import {StyleSheet, Dimensions} from 'react-native';
export const deviceHeight = Dimensions.get('window').height;

export default style = StyleSheet.create({
  borderBottom: {
    // flex: 1,
    backgroundColor: 'white',
    // height: deviceHeight,
  },

  addIcon: {
    position: 'absolute',
    bottom: 85,
    right: 10,
  },
});
