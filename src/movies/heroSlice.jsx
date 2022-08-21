import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  hero: {},
  error: '',
}

export const fetchHero = createAsyncThunk('movies/fetchHero', () => {
  return tmdb
    .get('movie/popular')
    .then((response) => 
    response.data.results[Math.floor(Math.random() * response.data.results.length)]
    );
})

const heroSlice = createSlice({
  name: 'popularMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHero.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchHero.fulfilled, (state, action) => {
      state.loading = false;
      state.hero = action.payload;
      state.error = '';
    });

    builder.addCase(fetchHero.rejected, (state, action) => {
      state.loading = false;
      state.hero = {};
      state.error = action.error
    });
  }
});

export default heroSlice.reducer;