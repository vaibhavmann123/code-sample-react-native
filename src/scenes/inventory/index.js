import React, {useState, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  Image,
  Switch,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {HeaderComponent, FooterComponent} from '_atoms';
import Style from './style';
import {Icon} from '_atoms';
import {fetchMenuItemRequested, updateMenuItemRequested} from './action';

export default function Inventory(props) {
  console.log('prinertrnavigation', props);
  const dispatch = useDispatch();
  //redux
  // const state = useSelector(state => state.menuItem.menuItemList);

  //state
  const [open, setOpen] = useState(-1);
  const [menuItem, setMenuItem] = useState([]);
  useEffect(() => {
    menuItemRequest();
  }, []);

  function menuItemRequest() {
    const onSuccess = data => {
      data &&
        setMenuItem(() => {
          return data.response;
        });
    };

    const onFail = () => {};
    dispatch(fetchMenuItemRequested({onSuccess, onFail}));
  }

  const toggleSwitch = (id, status) => {
    const payload = {
      menu_item_id: id,
      item_status: status == 'Active' ? 'Inactive' : 'Active',
    };
    const onSuccess = data => {
      menuItemRequest();
    };
    dispatch(updateMenuItemRequested({data: payload, onSuccess}));
  };
  const handleColapse = i => {
    setOpen(open === i ? -1 : i);
  };

  return (
    <View style={Style.container}>
      <HeaderComponent
        isPrinter={true}
        iconName={'print'}
        headerName={'Reception'}
        printerPress={() => props.navigation.navigate('Printer')}
      />
      <ScrollView style={{marginBottom: 100}}>
        {menuItem.menuItem &&
          menuItem.menuItem.map((data, i) => {
            // console.log('data......', data);
            const show = open === i;
            return (
              <React.Fragment key={i}>
                <TouchableOpacity
                  onPress={() => handleColapse(i)}
                  hitSlop={{top: 20, bottom: 20, left: 100, right: 100}}>
                  <View style={[Style.border, show && {borderBottomWidth: 0}]}>
                    <View style={Style.row}>
                      <View>
                        <Text style={Style.label}>{data.cat_name}</Text>
                      </View>
                      <View>
                        {show ? (
                          <Icon icon={'colaps'} style={Style.open} />
                        ) : (
                          <Icon icon={'colaps'} style={Style.close} />
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                {show &&
                  data.menuItems.map((itemList, x) => {
                    const toggleSwitchStaus =
                      itemList.item_status === 'Inactive';
                    // console.log('toggleSwitchStaus', toggleSwitchStaus);
                    return (
                      <View key={x}>
                        <View style={Style.dishContainer}>
                          <View style={Style.dishR}>
                            <Image
                              style={Style.img}
                              source={{
                                uri: itemList.item_image,
                              }}
                            />
                            <View key={x} style={Style.labelMargin}>
                              <Text style={Style.dishName}>
                                {/* {// console.log('data.menuItems', itemList)} */}
                                {/* {// console.log('x', x)} */}

                                {itemList.item_name}
                              </Text>
                              <Text style={Style.dishQuality}>
                                {itemList.item_description}
                              </Text>
                              <Text style={Style.dishPrice}>
                                $ {itemList.item_price}
                              </Text>
                            </View>
                          </View>

                          <View
                            style={{
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                backgroundColor: toggleSwitchStaus
                                  ? '#ff3008'
                                  : '#ffffff',
                                ...Style.toggleView,
                              }}>
                              <Switch
                                height={18}
                                width={48}
                                trackColor={{false: '#ffffff', true: '#ff3008'}}
                                onTintColor="#00000"
                                thumbColor={
                                  toggleSwitchStaus ? '#ffffff' : '#ff3008'
                                }
                                ios_backgroundColor="#3e3e3e"
                                style={Style.toggle}
                                onValueChange={() =>
                                  toggleSwitch(
                                    itemList.menu_item_id,
                                    itemList.item_status,
                                  )
                                }
                                value={toggleSwitchStaus}
                              />
                            </View>
                            <Text style={Style.toggleText}>
                              {itemList.item_status === 'Active'
                                ? 'In Stock'
                                : 'Out Stock'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
              </React.Fragment>
            );
          })}
      </ScrollView>
      <FooterComponent {...props} screen={'inventory'} />
    </View>
  );
}
