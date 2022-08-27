import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

// Initial state
const initialState = {
  loading: false,
  topRatedTv: [],
  error: '',
};

export const fetchTopRatedTv = createAsyncThunk('tv/fetchTopRatedTv', () => {
  return tmdb
    .get('tv/top_rated')
    .then((response) => response.data);
});

const topRatedTvSlice = createSlice({
  name: 'topRatedTv',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTopRatedTv.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTopRatedTv.fulfilled, (state, action) => {
      state.loading = false;
      state.topRatedTv = action.payload;
      state.error = '';
    });

    builder.addCase(fetchTopRatedTv.rejected, (state, action) => {
      state.loading = false;
      state.topRatedTv = [];
      state.error = action.error
    });
  },
});

export default topRatedTvSlice.reducer;