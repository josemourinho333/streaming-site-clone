import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  upcomingMovies: [],
  error: '',
}

export const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcomingMovices', () => {
  return tmdb
    .get('movie/upcoming')
    .then((response) => response.data);
})

const upcomingMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUpcomingMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.upcomingMovies = action.payload;
      state.error = '';
    });

    builder.addCase(fetchUpcomingMovies.rejected, (state, action) => {
      state.loading = false;
      state.upcomingMovies = [];
      state.error = action.error
    });
  }
});

export default upcomingMoviesSlice.reducer;