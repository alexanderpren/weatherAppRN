import { takeEvery, put, call } from 'redux-saga/effects';
import { getWeatherByCity, setWeatherByCity } from "../slices/weatherSlice";
import { weatherAPI } from "../../src/api/Weather";


const getWeatherFromAPI = async (cityToFind) =>
    await weatherAPI.getWeatherByCity(cityToFind)
        .then((response) => response)
        .catch((error) => error);


function* getCityWeather({ payload }) {
    const { cityToFind } = payload;

    try {
        const response = yield call(getWeatherFromAPI, cityToFind);
        if (response.message) {

        } else {
            yield put(setWeatherByCity(response));

        }


    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield takeEvery(getWeatherByCity.type, getCityWeather);
}

