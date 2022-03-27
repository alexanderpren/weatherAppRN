import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {URL_IMAGE} from '../global/constants';
import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';

const DetailScreen = ({navigation, route}) => {
  const {weatherData} = useSelector(state => state.weather);
  const {_id} = route.params;

  const [icon, setIcon] = useState('');
  console.log('dsfkjaskdlfjaklsjfkla', weatherData[_id]);
  const [state, setState] = useState(weatherData[_id]);

  const {loading, data} = useFetch(
    URL_IMAGE + weatherData[_id].weather[0].icon + '.png',
  );

  console.log('que onda vato', state);
  return (
    <View>
      <Text>{state ? state.main?.temp : null}</Text>
      <Text>{state ? state.main?.feels_like : null}</Text>
    </View>
  );
};

export default DetailScreen;
