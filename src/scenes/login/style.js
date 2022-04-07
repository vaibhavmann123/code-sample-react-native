import {Dimensions, StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography, Colors} from '_styles/index';

export default style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.WHITE,
  },
  logoImg: {
    width: Mixins.scaleSize(144),
    height: Mixins.scaleSize(144),
  },

  usernameInput: {
    width: Mixins.scaleSize(330),
    height: Mixins.scaleSize(44),
    borderRadius: 5,
    backgroundColor: Colors.WHITE,
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: Colors.PRIMARY,
    marginBottom: 20,
    paddingLeft: 40,
  },
  userImage: {
    width: Mixins.scaleSize(14.9),
    height: Mixins.scaleSize(14.5),
    opacity: 0.72,
    position: 'absolute',
    top: 14,
    left: 12,
  },
  passwordImage: {
    width: Mixins.scaleSize(14.9),
    height: Mixins.scaleSize(14.5),
    opacity: 0.72,
    position: 'absolute',
    bottom: 35,
    left: 12,
  },
  loginBtn: {
    width: Mixins.scaleSize(330),
    height: Mixins.scaleSize(40),
    borderRadius: 5,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    width: Mixins.scaleSize(44),
    height: Mixins.scaleSize(21),
    fontFamily: Typography.FONT_ROBOTO.fontFamily,
    fontSize: Mixins.scaleFont(15),
    fontWeight: Typography.FONT_ROBOTO.fontWeight,
    fontStyle: 'normal',
    textAlign: 'left',
    justifyContent: 'center',
    color: Colors.WHITE,
  },

  forgotPassword: {
    width: Mixins.scaleSize(150),
    height: Mixins.scaleSize(25),
    fontFamily: Typography.FONT_MONTSERRAT.fontFamily,
    fontSize: Mixins.scaleFont(12),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.GRAY_DARK,
    marginTop: 20,
    textAlign: 'center',
  },
  bacgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: Colors.WHITE,
  },
  section: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  inputSection: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
