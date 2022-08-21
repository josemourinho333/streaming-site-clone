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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies } from './movies/trendingMoviesSlice';


function App() {

  // const { state, favourite, watchList, favMovie, watchListMovie, query, setQuery, getAuthToken } = useAppData();

  // const trendinggMovies = useSelector(state => state.trendingMovies);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTrendingMovies());
  // }, [])

  // console.log('useselector trendinggMovies', trendinggMovies);

  return (
    <div className="App">
      <NavContainer />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        {/* <Route path='/categories' element={
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
        } /> */}
      </Routes>
    </div>
  );
}

export default App;
