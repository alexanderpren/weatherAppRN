import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  weatherData: '',
  cityName: '',
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
  },
});

// Action creators are generated for each case reducer function
export const {getWeatherByCity, setWeatherByCity} = weatherSlice.actions;

export default weatherSlice.reducer;
