import axios from 'axios';
import {URL_BACK, API_KEY} from '../global/constants';
import {getErrorMessage} from '../utils/tools';

const getWeatherByCity = id => {
  return axios
    .get(URL_BACK + id + '&units=imperial&appid=' + API_KEY)
    .then(Response => {
      return {
        cities: Response.data,
        message: null,
      };
    })
    .catch(Error => {
      return getErrorMessage(Error);
    });
};

export const weatherAPI = {
  getWeatherByCity,
};
