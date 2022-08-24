import { fetchReqToken } from "../auth/reqTokenSlice";
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserLoggedOut } from "../auth/userLoggedIn";

const NavActions = () => {

  const loggedIn = useSelector(state => state.userLoggedIn.userLoggedIn);
  console.log('loggedin', loggedIn);
  const dispatch = useDispatch();

  const signInOpenHandler = () => {
    dispatch(fetchReqToken());
  };

  const signOutHandler = () => {
    console.log('signout clicked');
    Cookies.remove('session_id');
    dispatch(setUserLoggedOut());
  };

  return (
    <div className="nav-actions flex items-center">
      { Object.keys(loggedIn).length < 1 
        ? <button onClick={() => {signInOpenHandler()}} className="sing-in text-md font-semibold bg-white text-black px-3 rounded-sm ml-2">Sign In</button>
        : <button onClick={() => {signOutHandler()}} className="sing-out text-md font-semibold bg-white text-black px-3 rounded-sm ml-2">{loggedIn.username}</button>
      }

    </div>
  )
}

export default NavActions;