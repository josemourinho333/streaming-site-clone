import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  tvByCat: {},
  error: '',
};

export const fetchTvByCat = createAsyncThunk('tv/fetchTvByCat', () => {
  return tmdb
    .get('genre/tv/list')
    .then((response) => {
      const genres = response.data.genres;
      return Promise.all(genres.map((genre) => {
        return tmdb.get('discover/tv', {
          params: {
            page: Math.floor(Math.random() * 5) + 1,
            with_genres: `${genre.id}`
          }
        })
        .then((response) => {
          const payload = {
            [genre.name]: response.data.results
          };
          return payload;
        })
      }))
      .then((all) => {
        const results = {};
        for (const item of all) {
          const [key, value] = Object.entries(item)[0];
          results[key] = [...value];
        }
        return results;
      })
    })
});

const tvByCatSlice = createSlice({
  name: 'tvByCat',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTvByCat.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTvByCat.fulfilled, (state, action) => {
      state.loading = false;
      state.tvByCat = action.payload;
      state.error = '';
    });

    builder.addCase(fetchTvByCat.rejected, (state, action) => {
      state.loading = false;
      state.tvByCat = {};
      state.error = action.error;
    });
  }
});

export default tvByCatSlice.reducer;