import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  discoverMovies: [],
  error: '',
}

export const fetchDiscoverMovies = createAsyncThunk('movies/fetchDiscoverMovies', () => {
  return tmdb
    .get('discover/movie')
    .then((response) => response.data);
})

const discoverMoviesSlice = createSlice({
  name: 'discoverMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDiscoverMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchDiscoverMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.discoverMovies = action.payload;
      state.error = '';
    });

    builder.addCase(fetchDiscoverMovies.rejected, (state, action) => {
      state.loading = false;
      state.discoverMovies = [];
      state.error = action.error
    });
  }
});

export default discoverMoviesSlice.reducer;