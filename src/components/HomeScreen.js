import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text} from 'react-native';
import {Formik} from 'formik';
import {COLORS} from '../global/colors';
import {CityForm} from './CityForm';
import {getWeatherByCity} from '../slices/weatherSlice';
import {DisplayingErrorMessagesSchema} from '../utils/tools';
import {useDispatch, useSelector} from 'react-redux';
import AlertScreen from './AlertScreen';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {showAlert, alertTitle, alertMessage} = useSelector(
    state => state.weather,
  );

  const handleSubmit = (value, onSubmitProps) => {
    dispatch(getWeatherByCity({cityToFind: value.city}));
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      {showAlert && (
        <AlertScreen
          alertMessage={alertMessage}
          alertTitle={alertTitle}
          showAlert={showAlert}
        />
      )}
      <Formik
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={DisplayingErrorMessagesSchema}
        initialValues={{city: ''}}>
        <CityForm />
      </Formik>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  headerShown: false,
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
