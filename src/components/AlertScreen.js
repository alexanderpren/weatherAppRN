import React, {useState} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useSelector, useDispatch} from 'react-redux';
import {closeAlert} from '../slices/weatherSlice';

const AlertScreen = ({alertMessage, alertTitle, showAlert}) => {
  const dispatch = useDispatch();

  const CloseAlert = () => {
    dispatch(closeAlert());
  };

  return (
    <>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={alertTitle}
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}      
        showConfirmButton={true}
        confirmButtonColor="#DD6B55"       
        onConfirmPressed={CloseAlert}
      />
    </>
  );
};

export default AlertScreen;
