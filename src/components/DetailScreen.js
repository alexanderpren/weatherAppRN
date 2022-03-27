import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {URL_IMAGE} from '../global/constants';
import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {COLORS} from '../global/colors';
import {Round} from '../utils/tools';

const DetailScreen = ({navigation, route}) => {
  const {weatherData} = useSelector(state => state.weather);
  const {_id} = route.params;

  const icon = URL_IMAGE + weatherData[_id].weather[0].icon + '.png';

  const [state, setState] = useState(weatherData[_id]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.tempContainer}>
        <Text style={styles.temp}>
          {state ? Round(state.main?.temp) : null}
        </Text>
      </View>
      <View style={styles.feelsContainer}>
        <Text style={styles.feelsText}>
          Fells Like:
          {state ? Round(state.main?.feels_like) : null}
        </Text>
      </View>

      <View style={styles.containerWeatherType}>
        <Text style={styles.type}>{state ? state?.weather[0].main : ''}</Text>
        <Text style={styles.description}>
          {state ? state?.weather[0].description : ''}
        </Text>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: icon,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    marginLeft: 5,
  },
  image: {width: '40%', height: '40%', marginLeft: 30},
  tempContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: 30,
  },
  temp: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.black,
  },
  feelsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  feelsText: {
    fontSize: 20,
    marginRight: 40,
    color: COLORS.black,
  },
  containerWeatherType: {
    display: 'flex',
    marginTop: 40,
    marginLeft: 20,
  },
  type: {
    fontSize: 40,
    color: COLORS.black,
  },
  description: {
    marginTop: 5,
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 'normal',
    marginLeft: 5,
  },
});

export default DetailScreen;
