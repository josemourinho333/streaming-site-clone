import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

// Initial state
const initialState = {
  loading: false,
  trendingTv: [],
  error: '',
};

export const fetchTrendingTv = createAsyncThunk('tv/fetchTrendingTv', () => {
  return tmdb
    .get('trending/tv/week')
    .then((response) => response.data);
});

const trendingTvSlice = createSlice({
  name: 'trendingTv',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingTv.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTrendingTv.fulfilled, (state, action) => {
      state.loading = false;
      state.trendingTv = action.payload;
      state.error = '';
    });

    builder.addCase(fetchTrendingTv.rejected, (state, action) => {
      state.loading = false;
      state.trendingTv = [];
      state.error = action.error
    });
  },
});

export default trendingTvSlice.reducer;