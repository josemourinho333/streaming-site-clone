import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  watchListTv: [],
  error: '',
};

const accountId = JSON.parse(localStorage.getItem('user_info'));
const sessionId = Cookies.get('session_id');

export const fetchWatchListTv = createAsyncThunk('tv/fetchWatchListTv', () => {
  return tmdb
    .get(`account/${accountId.id}/watchlist/tv`, {
      params: {
        session_id: sessionId,
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log('error', error));
});

const watchListTvSlice = createSlice({
  name: 'watchListTv',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWatchListTv.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchWatchListTv.fulfilled, (state, action) => {
      state.loading = false;
      state.watchListTv = action.payload;
      state.error = '';
    });

    builder.addCase(fetchWatchListTv.rejected, (state, action) => {
      state.loading = false;
      state.watchListTv = [];
      state.error = action.error;
    });
  }
});

export default watchListTvSlice.reducer;