import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import NavContainer from './components/NavContainer';
import Home from './components/Home';
import Categories from './components/Categories';
import MyList from './components/MyList';

// Hooks
import useAppData from './hooks/useAppData';

function App() {

  const { state, favourite, watchList, favMovie, watchListMovie, URL, apiKey } = useAppData();

  return (
    <div className="App">
      <NavContainer />
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
            title="My Watch List"
            favMovie={favMovie}
            watchListMovie={watchListMovie}
            favourite={favourite}
            watchList={watchList}
            allGenres={state.allGenres}
          />
        } />
        <Route path='/favourites' element={
          <div> favourites </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
