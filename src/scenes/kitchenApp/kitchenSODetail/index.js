import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, FlatList} from 'react-native';
import {getOrderByIdRequested} from '_scenes/orders/orderDeliveryNow/action';
import {KitchenHeader, KitchenFooter, OrderDetail} from '_atoms';
import moment from 'moment';

export default function SingalOrderDetail(props) {
  const [orderDetailById, setOrderDetailById] = useState(null),
    dispatch = useDispatch();
  useEffect(() => {
    getOrderById();
  }, [props.route.params.orderId]);
  function getOrderById() {
    const orderId = props.route.params.orderId;
    const onSuccess = res => {
      res.order &&
        setOrderDetailById(() => {
          return {...res.order};
        });
      // console.log('res11', res);
    };
    const onFail = () => {};
    dispatch(getOrderByIdRequested({orderId, onSuccess, onFail}));
  }
  const renderIcon = type => {
    switch (type) {
      case 'Delivery':
        return require('../../../assets/icons/delivery.png');
      case 'Pickup':
        return require('../../../assets/icons/pickup.png');
      default:
        return '';
    }
  };
  // console.log('order_iddddd', orderDetailById);
  if (!orderDetailById) return <></>;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <KitchenHeader headerName={'Back'} isBackIcon={true} {...props} />

      <OrderDetail
        orderId={orderDetailById.order_id}
        name={orderDetailById.name}
        product_detail={orderDetailById.product_detail}
        total={orderDetailById.total}
        deliveryText={orderDetailById.billing_address.order_type}
        // items={item.order_id}
        icon={renderIcon(orderDetailById.billing_address.order_type)}
        // iconName={item.billing_address.order_type}
        // counter={'23:29'}
        // time={moment(parseInt(item.billing_address.order_time)).format(
        //   'hh:mm:ss',
        // )}
      />

      <KitchenFooter screen={'actions'} {...props} />
    </View>
  );
}
