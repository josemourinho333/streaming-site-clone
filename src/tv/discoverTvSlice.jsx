import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

// Initial state
const initialState = {
  loading: false,
  discoverTv: [],
  error: '',
};

export const fetchDiscoverTv = createAsyncThunk('tv/fetchDiscoverTv', () => {
  return tmdb
    .get('discover/tv')
    .then((response) => response.data);
});

const discoverTvSlice = createSlice({
  name: 'discoverTv',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDiscoverTv.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchDiscoverTv.fulfilled, (state, action) => {
      state.loading = false;
      state.discoverTv = action.payload;
      state.error = '';
    });

    builder.addCase(fetchDiscoverTv.rejected, (state, action) => {
      state.loading = false;
      state.discoverTv = [];
      state.error = action.error
    });
  },
});

export default discoverTvSlice.reducer;