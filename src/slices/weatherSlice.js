import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityData: "",
  cityName: "",
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherByCity: (state, action) => {

    },
    setWeatherByCity: (state, action) => {

      const { name, country } = action.payload.cities.city
      state.cityName = name + ', ' + country;

    },

  },
})

// Action creators are generated for each case reducer function
export const { getWeatherByCity, setWeatherByCity } = weatherSlice.actions

export default weatherSlice.reducer