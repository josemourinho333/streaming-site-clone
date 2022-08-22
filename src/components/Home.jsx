import ListContainer from './ListContainer';
import HeroContainer from './HeroContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies } from '../movies/trendingMoviesSlice';
import { fetchPopularMovies } from '../movies/popularMoviesSlice';
import { fetchTopRatedMovies } from '../movies/topRatedMoviesSlice';
import { fetchDiscoverMovies } from '../movies/discoverMoviesSlice';
import { fetchUpcomingMovies } from '../movies/upcomingMoviesSlice';
import { fetchAllGenres } from '../genres/allGenresSlice';

const Home = (props) => {

  const trendingMovies = useSelector(state => state.trendingMovies.trendingMovies.results);
  const popularMovies = useSelector(state => state.popularMovies.popularMovies.results);
  const topRatedMovies = useSelector(state => state.topRatedMovies.topRatedMovies.results);
  const discoverMovies = useSelector(state => state.discoverMovies.discoverMovies.results);
  const upcomingMovies = useSelector(state => state.upcomingMovies.upcomingMovies.results);
  const allGenres = useSelector(state => state.allGenres.allGenres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchDiscoverMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchAllGenres());
  }, [])

  return (
    <>
      <HeroContainer />
      <ListContainer title="Trending Movies" media={trendingMovies} allGenres={allGenres}/>
      <ListContainer title="Popular Movies" media={popularMovies} allGenres={allGenres}/>
      <ListContainer title="Top Rated Movies" media={topRatedMovies} allGenres={allGenres}/>
      <ListContainer title="Discover Movies" media={discoverMovies} allGenres={allGenres}/>
      <ListContainer title="Upcoming Movies" media={upcomingMovies} allGenres={allGenres}/>

      {/* tv shows */}
      {/* <ListContainer title="Trending Shows" media={props.trendingShows} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} /> */}
      {/* <ListContainer title="Popular Shows" media={props.popularShows} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} /> */}
      {/* <ListContainer title="Top Rated Shows" media={props.topRatedShows} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} /> */}
      {/* <ListContainer title="Discover Shows" media={props.discoverShows} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} /> */}
    </>
  )
}

export default Home;