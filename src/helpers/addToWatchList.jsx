import tmdb from '../api/tmdb';
import Cookies from 'js-cookie';

const addToWatchList = (mediaData) => {
  console.log('mediaDat', mediaData);
  const account = JSON.parse(localStorage.getItem('user_info'));
  if (!account) {
    console.log('must be logged in to add to watchList');
  } else {
    const sessionId = Cookies.get('session_id');
    const reqBody = {
      media_type: mediaData.title ? 'movie' : 'tv',
      media_id: mediaData.id,
      watchlist: true,
    }
    tmdb.post(`account/${account.id}/watchlist`, reqBody, {
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

export default addToWatchList;