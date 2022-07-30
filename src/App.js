import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListContainer from './components/ListContainer';
import HeroContainer from './components/HeroContainer';
import NavContainer from './components/NavContainer';

// Hooks
// import useRequests from './hooks/useRequests';

// KEY DATA
const URL = 'https://api.themoviedb.org/3';

const endpoints = {
  trendingMovies: '/trending/movie/week',
  trendingShows: '/trending/tv/week',
  popularMovies: '/movie/popular',
  popularShows: '/tv/popular',
  topRatedMovies: '/movie/top_rated',
  topRatedShows: '/tv/top_rated',
  discoverMovies: '/discover/movie',
  discoverShows: '/discover/tv',
  upcomingMovies: '/movie/upcoming',
  movieGenres: '/genre/movie/list',
  showGenres: '/genre/tv/list',
};

function App() {
  // one state to rule them all
  const [state, setState] = useState({
    trendingMovies: [],
    trendingShows: [],
    popularMovies: [],
    popularShows: [],
    topRatedMovies: [],
    topRatedShows: [],
    discoverMovies: [],
    discoverShows: [],
    upcomingMovies: [],
    hero: [],
    allGenres: []
  });

  const [favourite, setFavourite] = useState([]);
  const [watchList, setWatchList] = useState([]);

  // api endpoints
  const trendingMoviesURL = `${URL}${endpoints.trendingMovies}`;
  const trendingShowsURL = `${URL}${endpoints.trendingShows}`;
  const popularMoviesURL = `${URL}${endpoints.popularMovies}`;
  const popularShowsURL = `${URL}${endpoints.popularShows}`;
  const topRatedMoviesURL = `${URL}${endpoints.topRatedMovies}`;
  const topRatedShowsURL = `${URL}${endpoints.topRatedShows}`;
  const discoverMoviesURL = `${URL}${endpoints.discoverMovies}`;
  const discoverShowsURL = `${URL}${endpoints.discoverShows}`;
  const upcomingMoviesURL = `${URL}${endpoints.upcomingMovies}`;
  const movieGenresURL = `${URL}${endpoints.movieGenres}`;
  const showGenresURL = `${URL}${endpoints.showGenres}`;

  const apiKey = {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  }

  // axios api call and populating relative states from the result
  useEffect(() => {
    Promise.all([
      axios.get(trendingMoviesURL, apiKey),
      axios.get(trendingShowsURL, apiKey),
      axios.get(popularMoviesURL, apiKey),
      axios.get(popularShowsURL, apiKey),
      axios.get(topRatedMoviesURL, apiKey),
      axios.get(topRatedShowsURL, apiKey),
      axios.get(discoverMoviesURL, apiKey),
      axios.get(discoverShowsURL, apiKey),
      axios.get(upcomingMoviesURL, apiKey),
      axios.get(movieGenresURL, apiKey),
      axios.get(showGenresURL, apiKey)
  ])
  .then((all) => {
    setState(prev => ({
      ...prev,
      trendingMovies: all[0].data.results,
      trendingShows: all[1].data.results,
      popularMovies: all[2].data.results,
      popularShows: all[3].data.results,
      topRatedMovies: all[4].data.results,
      topRatedShows: all[5].data.results,
      discoverMovies: all[6].data.results,
      discoverShows: all[7].data.results,
      upcomingMovies: all[8].data.results,
      allGenres: [...all[9].data.genres, ...all[10].data.genres],
    }))
  })
  .then(() => {
    setState(prev => ({
      ...prev,
      hero: prev.popularMovies[Math.floor(Math.random() * prev.popularMovies.length)]
    }))
  });
  }, [])

  // add to fav, watchList functions, takes in the state in poster.jsx then adds or removes depending on state
  const favMovie = (fav) => {
    if (fav.faved) {
      setFavourite([...favourite, fav]);
    } else {
      const favRemoved = favourite.filter(favMovie => favMovie.id !== fav.id);
      setFavourite(favRemoved);
    }
  }

  const watchListMovie = (myList) => {
    if (myList.myListed) {
      setWatchList([...watchList, myList]);
    } else {
      const watchItemRemoved = watchList.filter(watchItem => watchItem.id !== myList.id);
      setWatchList(watchItemRemoved);
    }
  }

  return (
    <div className="App">
      <NavContainer />
      <HeroContainer movie={state.hero}/>
      <ListContainer title="Trending Movies" media={state.trendingMovies} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
      <ListContainer title="Trending Shows" media={state.trendingShows} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
      <ListContainer title="Popular Movies" media={state.popularMovies} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
      <ListContainer title="Popular Shows" media={state.popularShows} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
      <ListContainer title="Top Rated Movies" media={state.topRatedMovies} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
      <ListContainer title="Top Rated Shows" media={state.topRatedShows} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
      <ListContainer title="Discover Movies" media={state.discoverMovies} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
      <ListContainer title="Discover Shows" media={state.discoverShows} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
      <ListContainer title="Upcoming Movies" media={state.upcomingMovies} allGenres={state.allGenres} favMovie={favMovie} watchListMovie={watchListMovie} favourite={favourite} watchList={watchList} />
    </div>
  );
}

export default App;
