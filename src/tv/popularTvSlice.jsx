import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

// Initial state
const initialState = {
  loading: false,
  popularTv: [],
  error: '',
};

export const fetchPopularTv = createAsyncThunk('tv/fetchPopularTv', () => {
  return tmdb
    .get('tv/popular')
    .then((response) => response.data);
});

const popularTvSlice = createSlice({
  name: 'popularTv',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPopularTv.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPopularTv.fulfilled, (state, action) => {
      state.loading = false;
      state.popularTv = action.payload;
      state.error = '';
    });

    builder.addCase(fetchPopularTv.rejected, (state, action) => {
      state.loading = false;
      state.popularTv = [];
      state.error = action.error
    });
  },
});

export default popularTvSlice.reducer;