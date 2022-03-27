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
    setWeatherByCity: (state) => {
      state.value -= 1
    },

  },
})

// Action creators are generated for each case reducer function
export const { getWeatherByCity, decrement } = weatherSlice.actions

export default weatherSlice.reducer