import React, {useEffect, useState, useCallback} from 'react';
import {ManualAssignModel} from '_molecules';
import {useDispatch, useSelector} from 'react-redux';

import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Linking,
  Image,
} from 'react-native';
//css
import Style from './style';
//Icon
import {Icon} from '_atoms';
import moment from 'moment';

export default function NewOrderByIdNow({singleOrderdetail = {}, screen}) {
  const [seconds, setSeconds] = useState(0);
  const [minutus, setMinutus] = useState(0);
  const [deliveryBoy, setDeliveryBoy] = useState([]);
  const [hours, sethours] = useState(0),
    [isManualVisibleModal, setIsManualVisibleModal] = useState(false),
    [orderDetail, setOrderDetail] = useState({});
  const deliveryBoyDetail = useSelector(state => state.deliveryBoy.deliveryBoy);
  const singleOrderDetails = useSelector(
    state => state.orderById.singleOrderDetails,
  );

  // console.log('singleOrderDetail...', singleOrderDetails);
  // console.log('singleOrderDetail...1', singleOrderdetail);

  useEffect(() => {
    setOrderDetail(singleOrderDetails);
    console.log('singleOrderdetail......', singleOrderdetail);
  }, [singleOrderDetails]);

  useEffect(() => {
    setOrderDetail(singleOrderdetail);
  }, [singleOrderdetail]);

  useEffect(() => {
    if (deliveryBoyDetail.response) {
      setDeliveryBoy(deliveryBoyDetail.response.users);
    }
  }, [deliveryBoyDetail]);

  useEffect(() => {
    console.log('1...');
    var then = moment().add(1, 'minute');
    const now = moment();
    let pendingTime = then.diff(now, 'seconds');

    const intervalId = setInterval(() => {
      pendingTime = pendingTime - 1;
      sethours(parseInt(pendingTime / 3600));
      setMinutus(parseInt((pendingTime % 3600) / 60));
      setSeconds(pendingTime % 60);
      if (pendingTime == 0) clearInterval(intervalId);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleManualAssign = () => {
    // console.log('......');
    setIsManualVisibleModal(true);
  };

  //Search delivery boy
  const boy = deliveryBoy.filter(
    dboy => dboy.user_id === orderDetail.driver_id,
  );
  // console.log('boyyy', deliveryBoy);

  //convert array in to object
  const output = Object.assign({}, ...boy);
  // console.log('deliveryBoyDetail', output);

  const itemPrice = (price = 0) => {
    price = parseFloat(price);
    if (price < 10) return `$ 0${price.toFixed(2)}`;
    else if (price < 100) return `$ ${price.toFixed(2)}`;
    else if (price < 1000) return `$ ${price.toFixed(1)}`;
  };
  return (
    <>
      <ScrollView>
        <View style={Style.mainPadding}>
          <View style={Style.align}>
            <View style={Style.align}>
              <Text style={Style.name}>{orderDetail.name}</Text>
              <Text style={Style.items}>&nbsp;(5 Items)</Text>
            </View>
            <View>
              {orderDetail.billing_address &&
              orderDetail.billing_address.order_type === 'Delivery' ? (
                <Icon icon={'delivery'} style={Style.icon} />
              ) : (
                <Icon icon={'pickup'} style={Style.icon} />
              )}
            </View>
          </View>
          <View>
            <Text style={Style.orderId}>Order ID #{orderDetail.order_id}</Text>
          </View>
          <View style={Style.callDetailView}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel:${orderDetail.phone}`);
              }}>
              <Text style={Style.call}>Call</Text>
            </TouchableOpacity>
            <Text style={Style.reject}>Reject</Text>
          </View>
          {screen === 'hold' ? (
            <>
              <View
                style={{
                  ...Style.align,
                  borderStyle: 'solid',
                  borderBottomWidth: 0.5,
                  borderColor: '#cecece',
                }}>
                <View>
                  <Text style={Style.deliveryUrgency}>
                    {orderDetail.billing_address &&
                      orderDetail.billing_address.order_type}
                    &nbsp; Urgency
                  </Text>

                  <Text style={Style.time}>Time Remaining</Text>
                </View>
                <View>
                  <Text style={Style.now}>
                    {orderDetail.billing_address &&
                      orderDetail.billing_address.pickup_when}
                    <Text style={Style.time}>
                      {'\n'}
                      {hours < 0 ? `0${hours}` : hours}:
                      {minutus < 10 ? `0${minutus}` : minutus}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={{marginBottom: 20}}></View>
            </>
          ) : (
            <>
              <View
                style={{
                  ...Style.align,
                  borderStyle: 'solid',
                  borderBottomWidth: 0.5,
                  borderColor: '#cecece',
                }}>
                <View>
                  <Text style={Style.deliveryUrgency}>
                    {orderDetail.billing_address &&
                      orderDetail.billing_address.order_type}
                    &nbsp; Urgency
                  </Text>
                  {orderDetail.billing_address &&
                    orderDetail.billing_address.pickup_when === 'Later' && (
                      <Text style={Style.time}>Time </Text>
                    )}
                  {/* {orderDetail.billing_address &&
                    orderDetail.billing_address.pickup_when ===
                      'Later' ? (
                      <Text style={Style.time}>Time </Text>
                    ) : (
                      <></>
                    )} */}
                </View>
                <View>
                  <Text style={Style.now}>
                    {orderDetail.billing_address &&
                      orderDetail.billing_address.pickup_when}

                    {orderDetail.billing_address &&
                      orderDetail.billing_address.pickup_when === 'Later' && (
                        <Text style={Style.time}>{'\n'}07:30 PM-08:30 PM</Text>
                      )}
                    {/* 'Later' ? (
                        <Text style={Style.time}>{'\n'}07:30 PM-08:30 PM</Text>
                      ) : (
                        <></>
                      )} */}
                  </Text>
                </View>
              </View>
              <View style={{marginBottom: 20}}></View>
            </>
          )}
          {orderDetail.billing_address &&
          orderDetail.billing_address.order_type === 'Delivery' ? (
            <>
              <View>
                <Text style={Style.deliveryAddress}>Delivery Address</Text>
              </View>
              <View style={Style.locationLayout}>
                <Icon icon={'location'} style={Style.locationIcon} />
                <Text style={Style.hno}>
                  {orderDetail.billing_address
                    ? orderDetail.billing_address.unit_number
                    : ''}
                  ,{''}
                  {orderDetail.billing_address
                    ? orderDetail.billing_address.suburb
                    : ''}
                  , {''}
                  {orderDetail.billing_address
                    ? orderDetail.billing_address.street_address
                    : ''}
                  {'\n'}
                </Text>
              </View>
            </>
          ) : (
            <>
              <View>
                <Text style={Style.deliveryAddress}>Store Address</Text>
              </View>
              <View style={Style.locationLayout}>
                <Icon icon={'location'} style={Style.locationIcon} />
                <Text style={Style.hno}>
                  {'Maharaja-Preston'}
                  {'\n'}
                </Text>
              </View>
            </>
          )}
          <View>
            <View>
              <Text style={Style.order}>
                order
                <Text style={Style.orderItems}>
                  (
                  {orderDetail.product_detail
                    ? orderDetail.product_detail.length
                    : 0}{' '}
                  Items){'\n'}
                </Text>
              </Text>
            </View>
            {orderDetail.product_detail &&
              orderDetail.product_detail.map((product, i) => {
                return (
                  <React.Fragment key={i}>
                    <View style={[Style.itemLayout]}>
                      <View>
                        <Text style={Style.dishName}>{product.item_name}</Text>
                      </View>
                      <View style={{textAlign: 'right'}}>
                        <Text style={Style.rs}>
                          {itemPrice(product.item_price)}
                        </Text>
                      </View>
                    </View>
                    <View>
                      {orderDetail.attributes ? (
                        <>
                          {Object.keys(orderDetail.attributes).map(
                            attributeKey => {
                              // split "-" to get child attributes id
                              let attributeKeys = attributeKey.split('-');
                              if (attributeKeys.length) {
                                attributeKeys.shift(); // remove first value to get original values
                                let childAttributes =
                                  orderDetail.attributes[attributeKey];
                                if (childAttributes.attributes) {
                                  return attributeKeys.map(x => {
                                    const {attr_name, quantity, attr_price} =
                                      childAttributes.attributes[x]; // get child arrtibues values
                                    return (
                                      <View
                                        style={{
                                          justifyContent: 'space-between',
                                          flexDirection: 'row',
                                        }}>
                                        <View
                                          style={{
                                            flexDirection: 'row',
                                          }}>
                                          <Text
                                            style={{
                                              height: 15,
                                              fontFamily: 'Montserrat',
                                              fontSize: 12,
                                              fontWeight: 'normal',
                                              fontStyle: 'normal',
                                              lineHeight: 15,
                                              letterSpacing: 0,
                                              textAlign: 'left',
                                              color: '#565656',
                                              marginRight: 5,
                                            }}>
                                            {quantity}
                                          </Text>
                                          <Text
                                            style={{
                                              height: 15,
                                              fontFamily: 'Montserrat',
                                              fontSize: 12,
                                              fontWeight: 'normal',
                                              fontStyle: 'normal',
                                              lineHeight: 15,
                                              letterSpacing: 0,
                                              textAlign: 'left',
                                              color: '#565656',
                                            }}>
                                            {attr_name}
                                          </Text>
                                        </View>
                                        <View>
                                          <Text style={Style.rs}>
                                            {itemPrice(attr_price)}
                                          </Text>
                                        </View>
                                      </View>
                                    );
                                  });
                                }
                              }
                            },
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </View>
                    <View
                      style={{
                        ...Style.align,
                      }}></View>
                  </React.Fragment>
                );
              })}
            <View style={Style.totalLayout}>
              <Text style={Style.total}>Total</Text>
              <Text style={Style.totalAmount}>
                {itemPrice(orderDetail.total)}
              </Text>
            </View>
            <View
              style={{
                ...Style.align,
              }}>
              <View>
                <Text style={Style.paymentMethod}>Payment Method</Text>
              </View>
              <View style={Style.cashLayout}>
                <Icon icon={'cash'} style={Style.cashIcon} />
                <Text style={Style.cash}>Cash</Text>
              </View>
            </View>
          </View>
          {screen === 'ready' && (
            <View>
              {orderDetail.driver_id > 0 ? (
                <>
                  <View style={Style.border}></View>
                  <Text style={Style.deliveryBoyAssignText}>
                    Assign Delivery Boy
                  </Text>
                  <View style={Style.deliveryBoyAssignView}>
                    <Image
                      source={require('../../../assets/images/maharajaLogoFavicon.png')}
                      style={Style.img}
                    />
                    <Text style={Style.label}>new User 1</Text>
                  </View>
                </>
              ) : (
                <>
                  <ManualAssignModel
                    isVisible={isManualVisibleModal}
                    close={() => setIsManualVisibleModal(false)}
                    order_id={orderDetail.order_id}
                  />
                  <View style={Style.assignBtnLayout}>
                    <TouchableOpacity style={Style.autoAssignBtn}>
                      <Text style={Style.autoAssignText}>Auto Assign</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleManualAssign}
                      style={Style.manualAssignBtn}>
                      <Text style={Style.manualAssignText}>Mannual Assign</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}
