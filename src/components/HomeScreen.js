import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import { COLORS } from '../global/colors';
import { CityForm } from './CityForm';
import * as Yup from 'yup';
import { getWeatherByCity } from '../slices/weatherSlice';

import { useSelector, useDispatch } from 'react-redux';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  city: Yup.string()
    .required('Required')
    .min(3, 'Must be at least 3 characters long')
    .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
    .max(15, 'Must be 15 characters or less'),

});

const HomeScreen = () => {
  const dispatch = useDispatch()


  const handleSubmit = (value) => {
    console.log("si llega")
    dispatch(getWeatherByCity(value));
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Formik
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={DisplayingErrorMessagesSchema}
        initialValues={{ city: '' }}>
        <CityForm />
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
});

export default HomeScreen;
