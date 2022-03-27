import React, { } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import { COLORS } from '../global/colors';
import { CityForm } from './CityForm';
import { getWeatherByCity } from '../slices/weatherSlice';
import { DisplayingErrorMessagesSchema } from '../utils/tools';
import { useDispatch } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const handleSubmit = (value, onSubmitProps) => {
    dispatch(getWeatherByCity({ cityToFind: value.city }));
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    navigation.navigate("ListDetail")

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

HomeScreen.navigationOptions = {
  headerShown: false,
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
});



export default HomeScreen;
