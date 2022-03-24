import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from '../slices/weatherSlice';

const store = configureStore({
  reducer: {weather: weatherReducer}, // root reducer
  devTools: process.env.NODE_ENV !== 'production', // activate devTools
  // enhancers: [enhancer]         // enhancers (optional)
});

export default store;
