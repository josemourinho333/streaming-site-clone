import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavContainer from './components/NavContainer';
import Home from './components/Home';
import Categories from './components/Categories';
import MyList from './components/MyList';
import Favourites from './components/Favourites';
import Search from './components/Search';

// Hooks
import useAppData from './hooks/useAppData';

import tmdb from './api/tmdb';

function App() {

  const { state, favourite, watchList, favMovie, watchListMovie, query, setQuery, getAuthToken } = useAppData();


  return (
    <div className="App">
      <NavContainer getAuthToken={getAuthToken} />
      <Routes>
        <Route path="/" element={
          <Home 
            hero={state.hero} 
            trendingMovies={state.trendingMovies} 
            trendingShows={state.trendingShows}
            popularMovies={state.popularMovies}
            popularShows={state.popularShows}
            topRatedMovies={state.topRatedMovies}
            topRatedShows={state.topRatedShows}
            discoverMovies={state.discoverMovies}
            discoverShows={state.discoverShows}
            upcomingMovies={state.upcomingMovies}
            allGenres={state.allGenres}
            favMovie={favMovie}
            watchListMovie={watchListMovie}
            favourite={favourite}
            watchList={watchList}
          />
        } />
        <Route path='/categories' element={
          <Categories 
            movieGenres={state.movieGenres}
            allGenres={state.allGenres}
            tvGenres={state.tvGenres}
            favMovie={favMovie}
            watchListMovie={watchListMovie}
            favourite={favourite}
            watchList={watchList}
          />
        } />
        <Route path='/mylist' element={
          <MyList 
            favMovie={favMovie}
            watchListMovie={watchListMovie}
            favourite={favourite}
            watchList={watchList}
            allGenres={state.allGenres}
          />
        } />
        <Route path='/favourites' element={
          <Favourites 
            favMovie={favMovie}
            watchListMovie={watchListMovie}
            favourite={favourite}
            watchList={watchList}
            allGenres={state.allGenres}
          />
        } />
        <Route path='/search' element={
          <Search 
            query={query}
            setQuery={setQuery}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
