// import { useState, useEffect } from 'react';
// import tmdb from '../api/tmdb';
// import axios from 'axios';


// const useAppData = () => {
//   // state for storing results from api calls
//   const [state, setState] = useState({
//     trendingMovies: [],
//     trendingShows: [],
//     popularMovies: [],
//     popularShows: [],
//     topRatedMovies: [],
//     topRatedShows: [],
//     discoverMovies: [],
//     discoverShows: [],
//     upcomingMovies: [],
//     hero: [],
//     allGenres: [],
//     movieGenres: [],
//     tvGenres: []
//   });

//   // Favourites and watch list states
//   const [favourite, setFavourite] = useState([]);
//   const [watchList, setWatchList] = useState([]);
//   const [query, setQuery] = useState('');

//   // fetching main data
//   useEffect(() => {
//     Promise.all([
//       tmdb.get('trending/movie/week'),
//       tmdb.get('trending/tv/week'),
//       tmdb.get('movie/popular'),
//       tmdb.get('tv/popular'),
//       tmdb.get('movie/top_rated'),
//       tmdb.get('tv/top_rated'),
//       tmdb.get('discover/movie'),
//       tmdb.get('discover/tv'),
//       tmdb.get('movie/upcoming'),
//       tmdb.get('genre/movie/list'),
//       tmdb.get('genre/tv/list')
//   ])
//   .then((all) => {
//     setState(prev => ({
//       ...prev,
//       trendingMovies: all[0].data.results,
//       trendingShows: all[1].data.results,
//       popularMovies: all[2].data.results,
//       popularShows: all[3].data.results,
//       topRatedMovies: all[4].data.results,
//       topRatedShows: all[5].data.results,
//       discoverMovies: all[6].data.results,
//       discoverShows: all[7].data.results,
//       upcomingMovies: all[8].data.results,
//       allGenres: [...all[9].data.genres, ...all[10].data.genres],
//       movieGenres: all[9].data.genres,
//       tvGenres: all[10].data.genres
//     }))
//   })
//   .then(() => {
//     setState(prev => ({
//       ...prev,
//       hero: prev.popularMovies[Math.floor(Math.random() * prev.popularMovies.length)]
//     }))
//   });
//   }, []);

//   // work in progress
//   const favMovie = (fav) => {
//     if (fav.faved) {
//       setFavourite([...favourite, fav]);
//     } else {
//       const favRemoved = favourite.filter(favMovie => favMovie.id !== fav.id);
//       setFavourite(favRemoved);
//     }
//   };

//   // work in progress
//   const watchListMovie = (myList) => {
//     if (myList.myListed) {
//       setWatchList([...watchList, myList]);
//     } else {
//       const watchItemRemoved = watchList.filter(watchItem => watchItem.id !== myList.id);
//       setWatchList(watchItemRemoved);
//     }
//   };

//   //work in progress
//   const getAuthToken = () => {
//     axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`)
//       .then((result) => {
//         console.log('authtoken log', result);
//         localStorage.setItem('user_auth', JSON.stringify(result.data));
//         return result;
//       })
//       .then((result) => {
//         window.location.replace(`https://www.themoviedb.org/authenticate/${result.data.request_token}?redirect_to=http://localhost:3000/
//         `);
//       })
//       .then(() => {
//         const auth = JSON.parse(localStorage.getItem('user_auth'));
//         axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`, {
//           "request_token": auth.request_token
//         })
//           .then((result) => {
//             console.log('succes..?', result);
//           })
//       })
//       .catch((error) => console.log('error', error));
//   };

//   return { state, favourite, watchList, favMovie, watchListMovie, URL, query, setQuery, getAuthToken}
// }

// export default useAppData;
