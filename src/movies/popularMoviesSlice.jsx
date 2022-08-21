import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  popularMovies: [],
  error: '',
}

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', () => {
  return tmdb
    .get('movie/popular')
    .then((response) => response.data);
})

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.popularMovies = action.payload;
      state.error = '';
    });

    builder.addCase(fetchPopularMovies.rejected, (state, action) => {
      state.loading = false;
      state.popularMovies = [];
      state.error = action.error
    });
  }
});

export default popularMoviesSlice.reducer;