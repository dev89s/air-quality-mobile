import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPolution } from '../fetchWeather';

export const fetchPolutionByCity = createAsyncThunk(
  'polution/fetchByCity',
  async (city, thunkAPI) => {
    try {
      const response = await fetchPolution(city);
      if (response.ok) {
        const data = await response.json();
        return thunkAPI.fulfillWithValue(data);
      }
      return thunkAPI.rejectWithValue(`HTTP Error! ${response.status} ${response.statusText}`);
    } catch (err) {
      throw thunkAPI.rejectWithValue(err.message);
    }
  },
);

const initState = {
  airQuality: {},
  dataState: 'unready',
  error: false,
};

export const polutionSlice = createSlice({
  name: 'polution',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPolutionByCity.fulfilled, (state, action) => {
      const { payload } = action;
      const fetchedData = payload.list[0];
      const { main, components } = fetchedData;
      const data = {
        aqi: main.aqi,
        components,
      };
      state.airQuality = data;
      state.error = false;
      state.dataState = 'loaded';
    }).addCase(fetchPolutionByCity.pending, (state) => {
      state.dataState = 'loading';
      state.error = false;
    }).addCase(fetchPolutionByCity.rejected, (state, action) => {
      const { payload } = action;
      state.error = payload;
    });
  },
});

// export const { } = polutionSlice.actions;

export default polutionSlice.reducer;
