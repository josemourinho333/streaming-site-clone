import tmdb from "../../api/tmdb";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { XIcon } from '@heroicons/react/solid';
import { fetchReqToken } from "../../auth/reqTokenSlice";
import { setUserLoggedIn } from "../../auth/userLoggedIn";
import Cookies from 'js-cookie';

const Login = () => {
  const open = useSelector(state => state.reqToken.isOpen);

  const [logIn, setLogIn] = useState({
    username: '',
    password: '',
    request_token: '',
  });

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('request_token'));
    if (token) {
      setLogIn(prev => ({
        ...prev,
        request_token: token.request_token,
      }))
    }
  }, [open]);

  const usernameHandler = (e) => {
    setLogIn(prev => ({
      ...prev,
      username: e.target.value,
    }))
  };

  const passwordHandler = (e) => {
    setLogIn(prev => ({
      ...prev,
      password: e.target.value,
    }))
  };

  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(fetchReqToken({close: true}));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitting');
    tmdb.post('authentication/token/validate_with_login', logIn)
      .then((response) => {
        if (response.status === 200) {
          tmdb.post('authentication/session/new', {
            request_token: response.data.request_token,
          })
          .then((response) => {
            Cookies.set('session_id', response.data.session_id);
            return response.data.session_id;
          })
          .then((sessionId) => {
            tmdb.get('account', {
              params: {
                session_id: sessionId,
              }
            })
            .then((response) => {
              console.log('response account deets', response);
              dispatch(setUserLoggedIn(response.data));
            })
            .then(() => {
              closeHandler();
            })
          })
        } else {
          console.log('invalid login info for tmdb');
        }
      })
      .catch((error) => console.log('error', error));
  };


  if (open) {
    return (
      <div className='login-page-container'>
        <div className="login-box bg-indigo-500 flex flex-col p-5">
          <div className="login-close">
            <XIcon className='w-7 h-7 text-white' onClick={closeHandler}/>
          </div>
          <form className="login-form flex flex-col" onSubmit={(e) => submitHandler(e)}>
            <div className="flex flex-col username-area mt-3">
              <label className='font-semibold text-lg'>Username</label>
              <input className='p-1 rounded-lg mt-2 text-black' type="text" value={logIn.username} onChange={(e) => usernameHandler(e)}/>
            </div>
            <div className="flex flex-col password-area mt-3">
              <label className='font-semibold text-lg'>Password</label>
              <input className='p-1 rounded-lg mt-2 text-black' type="password" value={logIn.password} onChange={(e) => passwordHandler(e)}/>
            </div>
            <button className="font-semibold py-1 rounded-lg submit mt-3 bg-white text-black w-1/2 self-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }

};

export default Login;
