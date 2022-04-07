import React from 'react';
import {View} from 'react-native';
import {HeaderComponent, StatusHeader, FooterComponent} from '_atoms';
import Style from './style';
import {StatusCard} from '_organisms';

export default function AllStatus(props) {
  return (
    <>
      <HeaderComponent headerName={'Reception'} />
      <StatusHeader />
      <View style={Style.container}>
        <StatusCard />
      </View>
      <FooterComponent {...props} screen={'history'} />
    </>
  );
}
