import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavContainer from './components/NavContainer';
import Home from './components/Home';
import Categories from './components/Categories';
import MediaDetail from './components/MediaDetail';

function App() {

  return (
    <div className="App">
      <NavContainer />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/:type/:id/:name' element={<MediaDetail />}/>


        {/* <Route path='/mylist' element={
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
