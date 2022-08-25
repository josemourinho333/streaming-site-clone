import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  favMovies: [],
  error: '',
};

const accountId = JSON.parse(localStorage.getItem('user_info'));
const sessionId = Cookies.get('session_id');

export const fetchFavoriteMovies = createAsyncThunk('movies/fetchFavoriteMovies', () => {
  return tmdb
    .get(`account/${accountId.id}/favorite/movies`, {
      params: {
        session_id: sessionId,
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log('error', error));
});

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.favMovies = action.payload;
      state.error = '';
    });

    builder.addCase(fetchFavoriteMovies.rejected, (state, action) => {
      state.loading = false;
      state.favMovies = [];
      state.error = action.error;
    });
  }
});

export default favoriteMoviesSlice.reducer;