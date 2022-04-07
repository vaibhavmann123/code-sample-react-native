import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

export default function ToastMessage() {
  // REDUX
  const toast = useSelector(state => state.toast);

  useEffect(() => {
    if (toast) {
      if (toast.successMessage) {
        success(toast.successMessage);
      } else if (toast.errorMessage) {
        error(toast.errorMessage);
      }
    }
  }, [toast]);

  function success(message) {
    showMessage({
      message: message,
      type: 'success',
      color: '#fff',
      backgroundColor: '#28a745',
      icon: 'success',
      position: 'top',
      duration: 2000,
      // onPress: true
    });
  }

  function error(message) {
    showMessage({
      message: message,
      color: '#fff',
      backgroundColor: '#dc3545',
      icon: 'danger',
      position: 'top',
    });
  }

  return <></>;
}
