import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
//Componet
import {HeaderComponent} from '_atoms';
import {Icon} from '_atoms';
import {FooterComponent} from '_atoms';
//css
import Style from './style';

export default function Arrivals(props) {
  return (
    <>
      <HeaderComponent headerName={'Reception'} />
      <View style={Style.borderBottom}>
        <View style={Style.main}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('reception')}>
            <View style={Style.orderBooking}>
              <Icon icon={'orders'} tintColor="#424242" style={Style.icon} />
              <Text style={Style.orders}>Orders</Text>
            </View>
          </TouchableOpacity>

          <View style={Style.strip}></View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('NewBookingsOrder')}>
            <View style={Style.orderBooking}>
              <Icon icon={'booking'} tintColor="#e16d34" style={Style.icon} />
              <Text style={Style.bookings}>Bookings</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('NewBookingsOrder')}>
            <Text style={Style.newBooking}>New Bookings </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={Style.arrivals}>Arrivals (3)</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text style={Style.currentDate}>
            28 May 2021
            <Text style={Style.todaysArrival}>
              &nbsp;&nbsp;(Todays Arrival)
            </Text>
          </Text>
        </View>

        <View>
          <ScrollView style={{marginBottom: 328}}>
            {[1, 2, 3].map((data, i) => {
              return (
                <React.Fragment key={i}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('')}>
                    <View style={Style.content}>
                      <View>
                        <Text style={Style.name}>John doe</Text>
                      </View>

                      <Icon
                        icon={'bookingtable'}
                        style={{height: 15, width: 30}}
                      />
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginBottom: 5,
                      }}>
                      <Icon
                        icon={'calender'}
                        style={{
                          height: 13.7,
                          width: 12,
                        }}
                      />
                      <Text style={Style.date}>&nbsp; 17 june 2020</Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                      }}>
                      <Icon
                        icon={'time'}
                        style={{
                          height: 14.7,
                          width: 14.6,
                        }}
                      />
                      <Text style={Style.date}>&nbsp; 07:00 Am -08:00 Am</Text>
                    </View>
                    <View style={Style.orderIdRs}>
                      <View>
                        <Text style={Style.orderId}>Booking ID #90868</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </React.Fragment>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View style={Style.addIcon}>
        <TouchableOpacity>
          <Icon icon={'add'} style={{height: 68, width: 50}} />
        </TouchableOpacity>
      </View>
      <FooterComponent />
    </>
  );
}
