import getGenresInMovie from '../helpers/getGenresInMovie';
import { HeartIcon, PlusIcon, DotsHorizontalIcon } from '@heroicons/react/solid';
import addToFavHandler from '../helpers/addToFav';
import addToWatchList from '../helpers/addToWatchList';
import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';
import Cookies from 'js-cookie';

const Poster = (props) => {
  const [mediaState, setMediaState] = useState(null);

  // if release date data, split and only take the year value
  const releaseYear = props.releaseDate ? props.releaseDate?.split('-')[0] : props.airDate?.split('-')[0];
  
  // loop through all genres list and genres list in each movie and take only 3 genres
  // also shortens long names such as science fiction
  const genresInMovie = getGenresInMovie(props.genres, props.allGenres);
  const mappedGenres = genresInMovie?.map((item, index) => {
    while (index < 3) {
      return (
      <span key={item?.id}>
        {item?.name === 'Science Fiction' ? 'Sci-Fi' : item?.name} 
      </span>
      )
    }
  });

  const sessionId = Cookies.get('session_id');

  useEffect(() => {
    if (sessionId) {
      const mediaType = props.title ? 'movie' : 'tv';
      tmdb.get(`${mediaType}/${props.id}/account_states`, {
        params: {
          session_id: sessionId,
        }
      })
      .then((response) => {
        setMediaState({...response.data});
      });
    } 
  }, []);

  const favClickHandler = () => {
    if (sessionId) {
      setMediaState(prev => ({
        ...prev,
        favorite: true,
      }));
      addToFavHandler(props);
    } else {
      console.log('must be logged in');
    }
  };

  const watchListClickHandler = () => {
    if (sessionId) {
      setMediaState(prev => ({
        ...prev,
        watchlist: true,
      }));
      addToWatchList(props);
    } else {
      console.log('must be logged in');
    }
  };

  const favorited = mediaState?.favorite ? 'fill-red-500' : 'fill-white-500';
  const watchListed = mediaState?.watchlist ? 'fill-green-500' : 'fill-white-500';

  return (
    <div id={props.id} className="media-card min-w-[300px] min-h-[440px] bg-center flex items-end group" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w300${props.src})`}}>
      <div className="media-page flex items-end h-1/2 px-5 py-5 w-full bg-gradient-to-t from-black via-black invisible group-hover:visible">
        <div className="media-info">
          <p className="media-header">
            <span className='text-xs font-semibold text-white px-0.5 py-0.25'>{releaseYear}</span> 

          </p>
          <h3 className="media-name text-lg font-bold tracking-wide">
            <a href={`/${props.title ? 'movie' : 'tv'}/${props.id}/${props.title ? props.title : props.name}`}>
              {props.title ? props.title : props.name}
            </a>
          </h3>
          <p className="media-body flex mt-2 mb-2">
            <HeartIcon onClick={favClickHandler} className={`h-6 w-6 mr-1 ${favorited} hover:fill-red-500`}/>
            <PlusIcon onClick={watchListClickHandler} className={`h-6 w-6 mr-1 ${watchListed} hover:fill-green-500`}/>
            <DotsHorizontalIcon className='h-6 w-6 mr-1 fill-white-500 hover:fill-gray-500'/>
          </p>
          <p className="media-genres">
            {mappedGenres}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Poster;