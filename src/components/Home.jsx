import ListContainer from './ListContainer';
import HeroContainer from './HeroContainer';

const Home = (props) => {
  return (
    <>
      <HeroContainer movie={props.hero}/>
      <ListContainer title="Trending Movies" media={props.trendingMovies} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
      <ListContainer title="Trending Shows" media={props.trendingShows} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
      <ListContainer title="Popular Movies" media={props.popularMovies} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
      <ListContainer title="Popular Shows" media={props.popularShows} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
      <ListContainer title="Top Rated Movies" media={props.topRatedMovies} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
      <ListContainer title="Top Rated Shows" media={props.topRatedShows} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
      <ListContainer title="Discover Movies" media={props.discoverMovies} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
      <ListContainer title="Discover Shows" media={props.discoverShows} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
      <ListContainer title="Upcoming Movies" media={props.upcomingMovies} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
    </>
  )
}

export default Home;