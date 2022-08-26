import { configureStore } from '@reduxjs/toolkit';
import trendingMoviesReducer from '../movies/trendingMoviesSlice';
import popularMoviesReducer from '../movies/popularMoviesSlice';
import topRatedMoviesReducer from '../movies/topRatedMoviesSlice';
import upcomingMoviesReducer from '../movies/upcomingMoviesSlice';
import discoverMoviesReducer from '../movies/discoverMoviesSlice';
import heroReducer from '../movies/heroSlice';
import moviesByCatReducer from '../movies/moviesByCatSlice';
import favoriteMoviesReducer from '../movies/favoriteMoviesSlice';
import watchListMoviesReducer from '../movies/watchListMoviesSlice';
import customListMoviesReducer from '../movies/customListMoviesSlices';

import movieGenresReducer from '../genres/movieGenresSlice';
import allGenresReducer from '../genres/allGenresSlice';

import reqTokenReducer from '../auth/reqTokenSlice';

import userLoggedInReducer from '../auth/userLoggedIn';

export default configureStore({
  reducer: {
    hero: heroReducer,

    trendingMovies: trendingMoviesReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    discoverMovies: discoverMoviesReducer,

    movieGenres: movieGenresReducer,
    allGenres: allGenresReducer,

    moviesByCat: moviesByCatReducer,

    reqToken: reqTokenReducer,
    userLoggedIn: userLoggedInReducer,

    favMovies: favoriteMoviesReducer,
    watchListMovies: watchListMoviesReducer,
    customListMovies: customListMoviesReducer,
  }
})