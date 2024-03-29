import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavContainer from './components/NavContainer';
import Home from './components/Home';
import Categories from './components/Categories';
import MediaDetail from './components/MediaDetail';
import Login from './components/Login';
import Favourites from './components/Favourites';
import MyList from './components/MyList';
import Search from './components/Search';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from "react";

import { fetchReqToken } from "./auth/reqTokenSlice";
import { setUserLoggedOut } from "./auth/userLoggedIn";
import Cookies from 'js-cookie';

function App() {
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.userLoggedIn.userLoggedIn);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('user_info'));
    if (userDetails) {
      setUser({...userDetails});
    } else {
      setUser(null);
    }
  }, [loggedIn]);

  const signInOpenHandler = () => {
    dispatch(fetchReqToken());
  };

  const signOutHandler = () => {
    Cookies.remove('session_id');
    dispatch(setUserLoggedOut());
  };

  return (
    <div className="App">
      <Login />
      <NavContainer signInOpenHandler={signInOpenHandler} signOutHandler={signOutHandler} user={user}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/categories/:type' element={<Categories />}/>

        <Route path='/:type/:id/:name' element={<MediaDetail />}/>

        <Route path='/favourites/:type' element={
          user
          ? <Favourites />
          : <div>Must log in to see favourites</div>
        } />

        <Route path='/mylist' element={
          user
          ? <MyList />
          : <div>Must log in to see your watch list</div>
        } />

        <Route path='/search' element={
          <Search />
        } />

      </Routes>
    </div>
  );
}

export default App;
