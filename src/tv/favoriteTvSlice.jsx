import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  favTv: [],
  error: '',
};

const accountId = JSON.parse(localStorage.getItem('user_info'));
const sessionId = Cookies.get('session_id');

export const fetchFavoriteTv = createAsyncThunk('tv/fetchFavoriteTv', () => {
  return tmdb
    .get(`account/${accountId.id}/favorite/tv`, {
      params: {
        session_id: sessionId,
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log('error', error));
});

const favoriteTvSlice = createSlice({
  name: 'favTv',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteTv.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchFavoriteTv.fulfilled, (state, action) => {
      state.loading = false;
      state.favTv = action.payload;
      state.error = '';
    });

    builder.addCase(fetchFavoriteTv.rejected, (state, action) => {
      state.loading = false;
      state.favTv = [];
      state.error = action.error;
    });
  }
});

export default favoriteTvSlice.reducer;