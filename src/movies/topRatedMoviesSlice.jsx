import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  topRatedMovies: [],
  error: '',
}

export const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRatedMovies', () => {
  return tmdb
    .get('movie/top_rated')
    .then((response) => response.data);
})

const topRatedMoviesSlice = createSlice({
  name: 'topRatedMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTopRatedMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.topRatedMovies = action.payload;
      state.error = '';
    });

    builder.addCase(fetchTopRatedMovies.rejected, (state, action) => {
      state.loading = false;
      state.topRatedMovies = [];
      state.error = action.error
    });
  }
});

export default topRatedMoviesSlice.reducer;