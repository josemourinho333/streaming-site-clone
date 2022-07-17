import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListContainer from './components/ListContainer';
import HeroContainer from './components/HeroContainer';

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
    hero: []
  });

  const trendingMoviesURL = `${URL}${endpoints.trendingMovies}`;
  const trendingShowsURL = `${URL}${endpoints.trendingShows}`;
  const popularMoviesURL = `${URL}${endpoints.popularMovies}`;
  const popularShowsURL = `${URL}${endpoints.popularShows}`;
  const topRatedMoviesURL = `${URL}${endpoints.topRatedMovies}`;
  const topRatedShowsURL = `${URL}${endpoints.topRatedShows}`;
  const discoverMoviesURL = `${URL}${endpoints.discoverMovies}`;
  const discoverShowsURL = `${URL}${endpoints.discoverShows}`;
  const upcomingMoviesURL = `${URL}${endpoints.upcomingMovies}`;

  const apiKey = {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  }

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
      axios.get(upcomingMoviesURL, apiKey)
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
      upcomingMovies: all[8].data.results
    }))
  })
  .then(() => {
    setState(prev => ({
      ...prev,
      hero: prev.popularMovies[Math.floor(Math.random() * prev.popularMovies.length)]
    }))
  });
  }, [])

  // initalizing states for each category
  // const [trendingMovies, setTrendingMovies] = useState([]);
  // const [trendingShows, setTrendingShows] = useState([]);
  // const [popularMovies, setPopularMovies] = useState([]);
  // const [popularShows, setPopularShows] = useState([]);
  // const [topRatedMovies, setTopRatedMovies] = useState([]);
  // const [topRatedShows, setTopRatedShows] = useState([]);
  // const [discoverMovies, setDiscoverMovies] = useState([]);
  // const [discoverShows, setDiscoverShows] = useState([]);
  // const [upcomingMovies, setUpcomingMovies] = useState([]); 



  // const trendingMoviesData = useRequests(trendingMoviesURL, API_KEY)
  // const trendingShowsData = useRequests(trendingShowsURL, API_KEY)
  // const popularMoviesData = useRequests(popularMoviesURL, API_KEY)
  // const popularShowsData = useRequests(popularShowsURL, API_KEY)
  // const topRatedMoviesData = useRequests(topRatedMoviesURL, API_KEY)
  // const topRatedShowsData = useRequests(topRatedShowsURL, API_KEY)
  // const discoverMoviesData = useRequests(discoverMoviesURL, API_KEY)
  // const discoverShowsData = useRequests(discoverShowsURL, API_KEY)
  // const upcomingMoviesData = useRequests(upcomingMoviesURL, API_KEY)

  // setTrendingMovies(trendingMoviesData);
  // setTrendingShows(trendingShowsData);
  // setPopularMovies(popularMoviesData);
  // setPopularShows(popularShowsData);
  // setTopRatedMovies(topRatedMoviesData);
  // setTopRatedShows(topRatedShowsData);
  // setDiscoverMovies(discoverMoviesData);
  // setDiscoverShows(discoverShowsData);
  // setUpcomingMovies(upcomingMoviesData);

  // Promise.all([
  //   useRequests(trendingMoviesURL, API_KEY),
  //   useRequests(trendingShowsURL, API_KEY),
  //   useRequests(popularMoviesURL, API_KEY),
  //   useRequests(popularShowsURL, API_KEY),
  //   useRequests(topRatedMoviesURL, API_KEY),
  //   useRequests(topRatedShowsURL, API_KEY),
  //   useRequests(discoverMoviesURL, API_KEY),
  //   useRequests(discoverShowsURL, API_KEY),
  //   useRequests(upcomingMoviesURL, API_KEY)
  // ])
  // .then((all) => {
  //   setTrendingMovies(all[0].data);
  //   setTrendingShows(all[1].data);
  //   setPopularMovies(all[2].data);
  //   setPopularShows(all[3].data);
  //   setTopRatedMovies(all[4].data);
  //   setTopRatedShows(all[5].data);
  //   setDiscoverMovies(all[6].data);
  //   setDiscoverShows(all[7].data);
  //   setUpcomingMovies(all[8].data);
  // })
  // .catch((error) => {
  //   console.log('***ERROR', error.message);
  // })


  return (
    <div className="App">
      <HeroContainer movie={state.hero}/>
      <ListContainer title="Trending Movies" media={state.trendingMovies} />
      <ListContainer title="Trending Shows" media={state.trendingShows} />
      <ListContainer title="Popular Movies" media={state.popularMovies} />
      <ListContainer title="Popular Shows" media={state.popularShows} />
      <ListContainer title="Top Rated Movies" media={state.topRatedMovies} />
      <ListContainer title="Top Rated Shows" media={state.topRatedShows} />
      <ListContainer title="Discover Movies" media={state.discoverMovies} />
      <ListContainer title="Discover Shows" media={state.discoverShows} />
      <ListContainer title="Upcoming Movies" media={state.upcomingMovies} />
    </div>
  );
}

export default App;
