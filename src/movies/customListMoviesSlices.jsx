import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  customListMovies: [],
  error: '',
};

const accountId = JSON.parse(localStorage.getItem('user_info'));
const sessionId = Cookies.get('session_id');

export const fetchCustomListMovies = createAsyncThunk('movies/fetchCustomListMovies', () => {
  return tmdb
    .get(`account/${accountId.id}/lists`, {
      params: {
        session_id: sessionId,
      }
    })
    .then((response) => {
      const list = response.data.results;

      return Promise.all(list.map((item) => {
        return tmdb.get(`list/${item.id}`)
          .then((response) => {
            return response.data;
          })
      }))
        .then((all) => {
          return all;
        })
    })
    .catch((error) => console.log('error', error));
});

const customListMoviesSlice = createSlice({
  name: 'customListMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCustomListMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCustomListMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.customListMovies = action.payload;
      state.error = '';
    });

    builder.addCase(fetchCustomListMovies.rejected, (state, action) => {
      state.loading = false;
      state.favMovies = [];
      state.error = action.error;
    });
  }
});

export default customListMoviesSlice.reducer;
