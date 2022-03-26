import { takeEvery, put, call } from 'redux-saga/effects';
import { getWeatherByCity } from "../slices/weatherSlice";


function* getCityWeather() {
console.log("Que ondaaaa");
    /*  try{
         const response = yield call(fetch, 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22');
         const data = yield response.json();
         yield put({type: 'SET_WEATHER', payload: data});
     }catch(error){
         console.log(error);
     } */
}

export  function* rootSaga() {
    yield takeEvery(getCityWeather.type, getCityWeather);
}

