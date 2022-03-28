import {takeEvery, put, call} from 'redux-saga/effects';
import {
  getWeatherByCity,
  setWeatherByCity,
  showAlert,
} from '../slices/weatherSlice';
import {weatherAPI} from '../../src/api/Weather';
import * as RootNavigation from '../utils/RootNavigation';

const getWeatherFromAPI = async cityToFind =>
  await weatherAPI
    .getWeatherByCity(cityToFind)
    .then(response => response)
    .catch(error => error);

function* getCityWeather({payload}) {
  const {cityToFind} = payload;

  try {
    const response = yield call(getWeatherFromAPI, cityToFind);
    if (response.message) {
      yield put(showAlert(response));
    } else {
      yield put(setWeatherByCity(response));
      RootNavigation.navigate('ListDetail');
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(getWeatherByCity.type, getCityWeather);
}
