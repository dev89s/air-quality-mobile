import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './temperature/WeatherSlice';
import polutionReducer from './polution/PolutionSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    polution: polutionReducer,
  },
});

export default store;
