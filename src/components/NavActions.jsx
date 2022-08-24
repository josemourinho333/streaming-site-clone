import { fetchReqToken } from "../auth/reqTokenSlice";
import { useDispatch } from 'react-redux';

const NavActions = () => {

  const dispatch = useDispatch();

  const signInOpenHandler = () => {
    console.log('hello clicked');
    dispatch(fetchReqToken());
  };

  return (
    <div className="nav-actions flex items-center">
      <button onClick={() => {signInOpenHandler()}} className="sing-in text-md font-semibold bg-white text-black px-3 rounded-sm ml-2">Sign In</button>
    </div>
  )
}

export default NavActions;