import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  movieGenres: [],
  error: '',
}

export const fetchMovieGenres = createAsyncThunk('genres/fetchMovieGenres', () => {
  return tmdb
    .get('genre/movie/list')
    .then((response) => response.data);
})

const movieGenresSlice = createSlice({
  name: 'movieGenres',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovieGenres.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchMovieGenres.fulfilled, (state, action) => {
      state.loading = false;
      state.movieGenres = action.payload;
      state.error = '';
    });

    builder.addCase(fetchMovieGenres.rejected, (state, action) => {
      state.loading = false;
      state.movieGenres = [];
      state.error = action.error
    });
  }
});

export default movieGenresSlice.reducer;