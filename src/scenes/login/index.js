import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import {loginRequested} from './actionCreator';

import Style from './style';
//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({navigation}) {
  //REDUX
  const login = useSelector(state => state.login);
  //useState(9068321122)
  //useState('admin')
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  const [username, setUsername] = useState(1234567890);
  const [password, setPassword] = useState('admin');

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('login......', login);
  }, [login]);

  function RolesNavigate(data) {
    // console.log('roles', data);
    if (data.response.role === 'StoreEmployee')
      return navigation.navigate('KitchenAction');
    else if (data.response.role === 'StoreAdmin')
      return navigation.navigate('reception', data);
    // return navigation.navigate('KitchenAction', data);
    else if (data.response.role === 'DeliveryBoy')
      return navigation.navigate('DeliveryAction');
  }
  async function onLoginPress() {
    const payload = {
      username: username,
      password: password,
      device_token: await AsyncStorage.getItem('device_token'),
    };
    const onSuccess = data => {
      // ApiInitializer();
      RolesNavigate(data);
      // navigation.navigate('reception', data);
    };
    const onFail = err => {
      // console.log('fail....', err);
      Alert.alert('Invalid Credentials');
    };
    dispatch(loginRequested({payload, onSuccess, onFail}));
  }
  return (
    <>
      <View style={Style.mainContainer}>
        <ImageBackground
          style={Style.bacgroundImage}
          source={require('_assets/images/login-background.png')}>
          <View style={Style.section}>
            <Image
              style={Style.logoImg}
              source={require('_assets/images/maharajaLogoFavicon.png')}
            />

            <View style={Style.inputSection}>
              <TextInput
                style={Style.usernameInput}
                onChangeText={t => setUsername(t)}
                placeholder="Username"
              />
              <Image
                style={Style.userImage}
                source={require('_assets/icons/username.png')}
              />
              <TextInput
                style={Style.usernameInput}
                onChangeText={t => setPassword(t)}
                placeholder="Password"
              />
              <Image
                style={Style.passwordImage}
                source={require('_assets/icons/password.png')}
              />
            </View>

            <TouchableOpacity onPress={() => onLoginPress()}>
              <View style={Style.loginBtn}>
                <Text style={Style.loginText}>Log In</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={Style.forgotPassword}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
