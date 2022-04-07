import React from 'react';
import {Image} from 'react-native';
import add from '_assets/icons/add.png';
import bell from '_assets/icons/bell.png';
import booking from '_assets/icons/booking.png';
import delivery from '_assets/icons/delivery.png';
import location from '_assets/icons/location.png';
import orders from '_assets/icons/orders.png';
import time from '_assets/icons/time.png';
import actions from '_assets/icons/actions.png';
import inventory from '_assets/icons/inventory.png';
import dashboard from '_assets/icons/dashboard.png';
import history from '_assets/icons/history.png';
import profile from '_assets/icons/profile.png';
import back from '_assets/icons/back.png';
import cash from '_assets/icons/cash.png';
import pickup from '_assets/icons/pickup.png';
import calender from '_assets/icons/calender.png';
import bookingtable from '_assets/icons/bookingtable.png';
import colaps from '_assets/icons/colaps.png';
import search from '_assets/icons/search.png';
import up from '_assets/icons/up.png';
import down from '_assets/icons/down.png';
import phone from '_assets/icons/phone.png';
import print from '_assets/icons/print.png';
import refresh from '_assets/icons/refresh.png';
import navigator from '_assets/icons/navigator.png';
import addprinter from '_assets/icons/addPrinter.png';

export default function Icon(props) {
  let icon = null,
    height = 25,
    width = 25;

  if (props.icon.toLowerCase() === 'add') icon = add;
  else if (props.icon.toLowerCase() === 'search') icon = search;
  else if (props.icon.toLowerCase() === 'phone') icon = phone;
  else if (props.icon.toLowerCase() === 'up') icon = up;
  else if (props.icon.toLowerCase() === 'down') icon = down;
  else if (props.icon.toLowerCase() === 'bell') icon = bell;
  else if (props.icon.toLowerCase() === 'colaps') icon = colaps;
  else if (props.icon.toLowerCase() === 'cash') icon = cash;
  else if (props.icon.toLowerCase() === 'back') icon = back;
  else if (props.icon.toLowerCase() === 'booking') icon = booking;
  else if (props.icon.toLowerCase() === 'delivery') icon = delivery;
  else if (props.icon.toLowerCase() === 'location') icon = location;
  else if (props.icon.toLowerCase() === 'orders') icon = orders;
  else if (props.icon.toLowerCase() === 'time') icon = time;
  else if (props.icon.toLowerCase() === 'actions') icon = actions;
  else if (props.icon.toLowerCase() === 'inventory') icon = inventory;
  else if (props.icon.toLowerCase() === 'dashboard') icon = dashboard;
  else if (props.icon.toLowerCase() === 'history') icon = history;
  else if (props.icon.toLowerCase() === 'profile') icon = profile;
  else if (props.icon.toLowerCase() === 'pickup') icon = pickup;
  else if (props.icon.toLowerCase() === 'calender') icon = calender;
  else if (props.icon.toLowerCase() === 'bookingtable') icon = bookingtable;
  else if (props.icon.toLowerCase() === 'print') icon = print;
  else if (props.icon.toLowerCase() === 'refresh') icon = refresh;
  else if (props.icon.toLowerCase() === 'navigator') icon = navigator;
  else if (props.icon.toLowerCase() === 'addprinter') icon = addprinter;
  else icon = '';
  return (
    <Image
      source={icon}
      style={{height, width, ...props.style}}
      tintColor={props.tintColor}
    />
  );
}
