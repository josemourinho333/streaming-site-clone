import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

// Initial state
const initialState = {
  loading: false,
  trendingMovies: [],
  error: '',
};

// fetching data from api call, pending, fulfilled and rejected action types
export const fetchTrendingMovies = createAsyncThunk('movies/fetchTrendingMovies', () => {
  return tmdb
    .get('trending/movie/week')
    .then((response) => response.data);
});

const trendingMoviesSlice = createSlice({
  name: 'trendingMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.trendingMovies = action.payload;
      state.error = '';
    });

    builder.addCase(fetchTrendingMovies.rejected, (state, action) => {
      state.loading = false;
      state.trendingMovies = [];
      state.error = action.error
    });
  },
});

export default trendingMoviesSlice.reducer;