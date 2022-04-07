import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ActivityIndicator, Text } from 'react-native';
import Styles from './style';
import { spinnerEnd } from './action';

export default Spinner = () => {
  const dispatch = useDispatch();
  // Redux
  const spinner = useSelector(state => state.spinner);
  // console.log('spinnerState.....', spinner);
  // STATE
  const [showLoader, setShowLoader] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (spinner) {
      setShowLoader(() => spinner.isLoading);
      setMessage(spinner.message);
    }
  }, [spinner]);

  useEffect(() => {
    dispatch(spinnerEnd());
  }, []);

  return showLoader ? (
    <View style={Styles.container}>
      <ActivityIndicator size="large" color="#abc24e" />
      <Text style={Styles.spinnerText}>{message}</Text>
    </View>
  ) : (
      <></>
    );
};
