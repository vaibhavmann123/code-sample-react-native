import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Typography, Colors, Mixins} from '_styles';

export default function kitchenSingleOrder({
  orderId,
  name,
  items,
  icon,
  total,
  iconName,
  time,
  counter,
  deliveryText,
  product_detail = [],
}) {
  return (
    <ScrollView>
      {/* {console.log('product_detail', product_detail)} */}
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.fRow}>
            <View>
              <Text style={styles.name}>
                {name}
                <Text style={styles.items}> (5 Items)</Text>
              </Text>
              <Text style={styles.orderId}>Order ID #{orderId}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image style={styles.img} source={icon} />
              <Text style={styles.deliveryText}>{deliveryText}</Text>
            </View>
          </View>
          <View style={{marginTop: 45}}>
            <Text style={styles.prepare}>Prepare Order in</Text>
          </View>
          <View style={styles.progressBar}>
            <ProgressCircle
              percent={50}
              radius={75}
              borderWidth={8}
              color="#ff3008"
              shadowColor="#ffe8c7"
              bgColor="#fff">
              <Text style={{fontSize: 13}}>24:33</Text>
            </ProgressCircle>
          </View>
        </View>
        <View style={styles.barBorderbottom}></View>
        <View style={styles.barBorderbottom}></View>
        <View style={styles.orderDetailView}>
          <Text style={styles.order}>
            Order
            <Text> ({product_detail.length} Items)</Text>
          </Text>
          {product_detail.map((item, key) => {
            return (
              <>
                {/* {console.log('itemitem', item)} */}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.itemName}>{item.item_name}</Text>
                  <Text style={styles.itemTotal}>₹ {item.item_price}</Text>
                </View>
              </>
            );
          })}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalCount}>₹ {total}</Text>
          </View>
        </View>
        <View style={styles.borderBottom}></View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 100,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 21,
    paddingTop: 33,
  },
  fRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetailView: {
    paddingLeft: 19,
    paddingRight: 21,
  },
  name: {
    height: 21,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#424242',
    marginBottom: 10,
  },
  items: {
    height: 13,
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#505050',
  },
  orderId: {
    height: 21,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#424242',
  },
  img: {
    height: 19.2,
    width: 24.4,
  },
  deliveryText: {
    height: 13,
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 13,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1a0c3d',
  },
  prepare: {
    height: 19,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
  },
  progressBar: {
    marginTop: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 34,
  },
  barBorderbottom: {
    borderStyle: 'solid',
    borderBottomWidth: 0.6,
    borderColor: '#c4c4c4',
    marginBottom: 19,
  },
  order: {
    height: 19,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
    marginBottom: 17,
  },
  itemName: {
    height: 19,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
    marginBottom: 30,
  },
  itemTotal: {
    height: 21,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#606060',
  },
  totalText: {
    height: 19,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#565656',
  },
  totalCount: {
    height: 21,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#606060',
  },
  borderBottom: {
    borderStyle: 'solid',
    borderBottomWidth: 0.6,
    borderColor: '#c4c4c4',
    marginTop: 15,
    marginBottom: 60,
  },
});
