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
import { fetchTrendingTv } from '../tv/trendingTvSlice';
import { fetchPopularTv } from '../tv/popularTvSlice';
import { fetchTopRatedTv } from '../tv/topRatedTvSlice';
import { fetchDiscoverTv } from '../tv/discoverTvSlice';
import { fetchCustomListMovies } from "../movies/customListMoviesSlices";



const Home = () => {

  const trendingMovies = useSelector(state => state.trendingMovies.trendingMovies.results);
  const popularMovies = useSelector(state => state.popularMovies.popularMovies.results);
  const topRatedMovies = useSelector(state => state.topRatedMovies.topRatedMovies.results);
  const discoverMovies = useSelector(state => state.discoverMovies.discoverMovies.results);
  const upcomingMovies = useSelector(state => state.upcomingMovies.upcomingMovies.results);

  const customListMovies = useSelector(state => state.customListMovies.customListMovies);

  const trendingTv = useSelector(state => state.trendingTv.trendingTv.results);
  const popularTv = useSelector(state => state.popularTv.popularTv.results);
  const topRatedTv = useSelector(state => state.topRatedTv.topRatedTv.results);
  const discoverTv = useSelector(state => state.discoverTv.discoverTv.results);

  const allGenres = useSelector(state => state.allGenres.allGenres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchDiscoverMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTrendingTv())
    dispatch(fetchPopularTv());
    dispatch(fetchTopRatedTv());
    dispatch(fetchDiscoverTv());
    dispatch(fetchAllGenres());

    dispatch(fetchCustomListMovies());

  }, [])

  return (
    <>
      <HeroContainer />
      <ListContainer title="Trending Movies" media={trendingMovies} allGenres={allGenres}/>
      <ListContainer title="Trending Shows" media={trendingTv} allGenres={allGenres} />
      <ListContainer title="Popular Movies" media={popularMovies} allGenres={allGenres}/>
      <ListContainer title="Popular Shows" media={popularTv} allGenres={allGenres} />
      <ListContainer title="Top Rated Movies" media={topRatedMovies} allGenres={allGenres}/>
      <ListContainer title="Top Rated Shows" media={topRatedTv} allGenres={allGenres} />
      <ListContainer title="Discover Movies" media={discoverMovies} allGenres={allGenres}/>
      <ListContainer title="Discover Shows" media={discoverTv} allGenres={allGenres} />
      <ListContainer title="Upcoming Movies" media={upcomingMovies} allGenres={allGenres}/>
    </>
  )
}

export default Home;