import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  allGenres: [],
  error: '',
}

export const fetchAllGenres = createAsyncThunk('genres/fetchAllGenres', () => {
  return Promise.all([
    tmdb.get('genre/movie/list'),
    tmdb.get('genre/tv/list')
  ])
  .then((all) => [...all[0].data.genres, ...all[1].data.genres])
})

const allGenresSlice = createSlice({
  name: 'movieGenres',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllGenres.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAllGenres.fulfilled, (state, action) => {
      state.loading = false;
      state.allGenres = action.payload;
      state.error = '';
    });

    builder.addCase(fetchAllGenres.rejected, (state, action) => {
      state.loading = false;
      state.allGenres = [];
      state.error = action.error
    });
  }
});

export default allGenresSlice.reducer;