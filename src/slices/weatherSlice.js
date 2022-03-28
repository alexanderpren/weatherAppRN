import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  weatherData: [],
  cityName: '',
  showAlert: false,
  alertTitle: '',
  alertMessage: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherByCity: (state, action) => {},
    setWeatherByCity: (state, action) => {
      const {name, country} = action.payload.cities.city;
      state.cityName = name + ', ' + country;
      state.weatherData = action.payload.cities.list;
    },
    showAlert: (state, action) => {
      state.showAlert = true;
      state.alertTitle = action.payload.message.message;
      state.alertMessage = action.payload.message.data[1].message;
    },
    closeAlert: (state, action) => {
      console.log('Si esta cerrando');
      state.showAlert = false;
      state.alertTitle = '';
      state.alertMessage = '';
    },
    cleanData: (state, action) => {
      state.cityName = '';
      state.weatherData = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {getWeatherByCity, setWeatherByCity, showAlert, closeAlert} =
  weatherSlice.actions;

export default weatherSlice.reducer;
