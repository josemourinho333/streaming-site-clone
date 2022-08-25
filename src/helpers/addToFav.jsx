import tmdb from '../api/tmdb';
import Cookies from 'js-cookie';

const addToFavHandler = (movieData) => {
  const account = JSON.parse(localStorage.getItem('user_info'));
  if (!account) {
    console.log('must be logged in to fav');
  } else {
    const sessionId = Cookies.get('session_id');
    const reqBody = {
      media_type: movieData.title ? 'movie' : 'tv',
      media_id: movieData.id,
      favorite: true,
    }
    tmdb.post(`account/${account.id}/favorite`, reqBody, {
      params: {
        session_id: sessionId,
      }
    })
    .then((response) => {
      console.log('post response success', response);
    })
    .catch((error) => console.log('error', error));
  }
};

export default addToFavHandler;