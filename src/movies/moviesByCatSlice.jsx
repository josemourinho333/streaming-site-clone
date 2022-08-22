import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../api/tmdb';

const initialState = {
  loading: false,
  moviesByCat: {},
  error: '',
};

export const fetchMoviesByCat = createAsyncThunk('movies/fetchMoviesByCat', () => {
  return tmdb
    .get('genre/movie/list')
    .then((response) => {
      const genres = response.data.genres;
      return Promise.all(genres.map((genre) => {
        return tmdb.get('discover/movie', {
          params: {
            page: Math.floor(Math.random() * 5) + 1,
            with_genres: `${genre.id}`
          }
        })
        .then((response) => {
          const payload = {
            [genre.name]: response.data.results
          };
          console.log('payloaddd', payload);
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

const moviesByCatSlice = createSlice({
  name: 'moviesByCat',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesByCat.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchMoviesByCat.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesByCat = action.payload;
      state.error = '';
    });

    builder.addCase(fetchMoviesByCat.rejected, (state, action) => {
      state.loading = false;
      state.moviesByCat = {};
      state.error = action.error;
    });
  }
});

export default moviesByCatSlice.reducer;

// return tmdb
//     .get('movie/discover', {
//       ...tmdb.params,
//       page: Math.floor(Math.random() * 20) + 1,
//       with_genres: 
//     })
//     .then(() => {
      
//     })