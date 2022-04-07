import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {loginout} from '_scenes/login/actionCreator';
import {fetchOrderDetailRequested} from '_scenes/profile/action';

import {Mixins} from '_styles';
import {DeliveryHeader, DeliveryFooter} from '_atoms';
import Styles from './style';

export default function DeliveryProfile(props) {
  const dispatch = useDispatch();
  //state
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    userDetailsRequest();
  }, []);
  function onPressLogout() {
    dispatch(loginout());
    props.navigation.navigate('login');
  }
  function userDetailsRequest() {
    const onSuccess = data => {
      // console.log('usersData', data);
      data &&
        setUserDetail(() => {
          return data.response.currentUser;
        });
    };

    const onFail = () => {};
    dispatch(fetchOrderDetailRequested({onSuccess, onFail}));
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <DeliveryHeader headerName={'Delivery'} />
      <ScrollView>
        <View style={Styles.scrollMainView}>
          <View style={Styles.imageView}>
            <Image
              style={Styles.img}
              source={require('../../../assets/images/maharajaLogoFavicon1.png')}
            />
            <Text style={Styles.labelName}>{userDetail.name}</Text>
          </View>
          <View style={Styles.detailView}>
            <View style={Styles.fRow}>
              <View>
                <Text style={Styles.emailLabel}>Email</Text>
                <Text style={Styles.emailText}>{userDetail.email}</Text>
              </View>
              <View>
                <TouchableOpacity style={Styles.updateBtn}>
                  <Text style={Styles.updateBtnText}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={Styles.detailView}>
            <View style={Styles.fRow}>
              <View>
                <Text style={Styles.emailLabel}>Phone no</Text>
                <Text style={Styles.emailText}>{userDetail.phone}</Text>
              </View>
              <View>
                <TouchableOpacity style={Styles.updateBtn}>
                  <Text style={Styles.updateBtnText}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{...Styles.detailView, height: Mixins.scaleSize(105)}}>
            <View style={Styles.fRow}>
              <View>
                <Text style={Styles.emailLabel}>Support</Text>
                <Text style={Styles.emailText}>Reception</Text>
                <Text style={Styles.emailText}>{userDetail.phone}</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <TouchableOpacity style={Styles.updateBtn}>
                  <Text style={Styles.updateBtnText}>Call</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={Styles.margin}>
            <TouchableOpacity onPress={() => onPressLogout()}>
              <View style={Styles.logoutBtn}>
                <Text style={Styles.logoutBtnText}>Log out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <DeliveryFooter screen={'profile'} {...props} />
    </View>
  );
}
