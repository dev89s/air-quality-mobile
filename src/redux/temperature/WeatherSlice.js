import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from './fetchWeather';

export const fetchWeatherByCity = createAsyncThunk(
  'weather/fetchByCityt',
  async (city, thunkAPI) => {
    const response = await fetchWeather(city);
    if (response.ok) {
      const data = await response.json();
      return thunkAPI.fulfillWithValue(data);
    }
    return thunkAPI.rejectWithValue('Error: HTTP code:', response.status);
  },
);

const initState = {
  weatherList: [],
  listState: 'empty',
  error: false,
};

export const tempSlice = createSlice({
  name: 'weather',
  initialState: initState,
  reducers: {
    loaded: (state) => {
      state.listState = 'loaded';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCity.fulfilled, (state, action) => {
      const { payload } = action;
      // console.log(payload);
      const {
        id, main, name, weather,
      } = payload;
      const data = {
        id,
        name,
        temp: main.temp,
        weather: weather[0],
      };
      console.log(data);
      state.weatherList = [...state.weatherList, data];
      state.error = false;
    }).addCase(fetchWeatherByCity.pending, (state) => {
      state.error = false;
      state.listState = 'loading';
    });
  },
});

export const { loaded } = tempSlice.actions;

export default tempSlice.reducer;
