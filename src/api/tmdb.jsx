import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    api_key: process.env.REACT_APP_API_KEY
  }
});

export default tmdb;


// const endpoints = {
//   trendingMovies: '/trending/movie/week',
//   trendingShows: '/trending/tv/week',
//   popularMovies: '/movie/popular',
//   popularShows: '/tv/popular',
//   topRatedMovies: '/movie/top_rated',
//   topRatedShows: '/tv/top_rated',
//   discoverMovies: '/discover/movie',
//   discoverShows: '/discover/tv',
//   upcomingMovies: '/movie/upcoming',
//   movieGenres: '/genre/movie/list',
//   showGenres: '/genre/tv/list',
// };