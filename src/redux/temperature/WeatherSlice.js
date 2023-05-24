import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '../fetchWeather';
import compare from './sortCity';

export const fetchWeatherByCity = createAsyncThunk(
  'weather/fetchByCityt',
  async (city, thunkAPI) => {
    try {
      const response = await fetchWeather(city);
      if (response.ok) {
        const data = await response.json();
        return thunkAPI.fulfillWithValue(data);
      }
      return thunkAPI.rejectWithValue(`Error: HTTP code:, ${response.status} ${response.statusText}`);
    } catch (err) {
      throw thunkAPI.rejectWithValue(err);
    }
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
      const {
        id, main, name, weather,
      } = payload;
      const data = {
        id,
        name,
        temp: main.temp,
        weather: weather[0],
      };
      state.weatherList = [...state.weatherList, data];
      state.weatherList.sort(compare);
      state.error = false;
      state.listState = 'loaded';
    }).addCase(fetchWeatherByCity.pending, (state) => {
      state.listState = 'loading';
    }).addCase(fetchWeatherByCity.rejected, (state, action) => {
      const { payload } = action;
      state.error = payload;
    });
  },
});

export const { loaded } = tempSlice.actions;

export default tempSlice.reducer;
