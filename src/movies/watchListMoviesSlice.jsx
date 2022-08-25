import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  watchListMovies: [],
  error: '',
};

const accountId = JSON.parse(localStorage.getItem('user_info'));
const sessionId = Cookies.get('session_id');

export const fetchWatchListMovies = createAsyncThunk('movies/fetchWatchListMovies', () => {
  return tmdb
    .get(`account/${accountId.id}/watchlist/movies`, {
      params: {
        session_id: sessionId,
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log('error', error));
});

const watchListMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWatchListMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchWatchListMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.watchListMovies = action.payload;
      state.error = '';
    });

    builder.addCase(fetchWatchListMovies.rejected, (state, action) => {
      state.loading = false;
      state.favMovies = [];
      state.error = action.error;
    });
  }
});

export default watchListMoviesSlice.reducer;