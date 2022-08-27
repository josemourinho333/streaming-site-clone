import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeartIcon, PlusIcon} from '@heroicons/react/solid';
import tmdb from '../../api/tmdb';
import getDirectorName from '../../helpers/getDirectorName';
import getOfficialTrailer from '../../helpers/getOfficialTrailer';
import Reviews from './Reviews';
import addToFavHandler from '../../helpers/addToFav';
import addToWatchList from '../../helpers/addToWatchList';
import Cookies from 'js-cookie';

import MediaInfoAction from './MediaInfoAction';

const MediaDetail = () => {
  const [mediaInfo, setMediaInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {type, id} = useParams();
  const sessionId = Cookies.get('session_id');

  useEffect(() => {
    if (isLoading) {
      tmdb.get(`${type}/${id}`, {
      params: {
        append_to_response: 'videos',
      }
    })
      .then((response) => {
        setMediaInfo({...response.data});
      })
      .then(() => {
        tmdb.get(`${type}/${id}/credits`)
          .then((response) => {
            setMediaInfo(prev => ({
              ...prev,
              cast: [...response.data.cast],
              crew: [...response.data.crew],
            }))
          })
          .then(() => {
            tmdb.get(`${type}/${id}/reviews`)
            .then((response) => {
              setMediaInfo(prev => ({
                ...prev,
                reviews: [...response.data.results],
              }))
            })
            .then(() => {
              tmdb.get(`${type}/${id}/account_states`, {
                params: {
                  session_id: sessionId,
                }
              })
              .then((response) => {
                setMediaInfo(prev => ({
                  ...prev,
                  account_states: {...response.data}
                }))
              })
              .then(() => setIsLoading(false));
            })
          })
      })
      .catch((error) => console.log('error', error));
    }
  }, []);

  const director = getDirectorName(mediaInfo?.crew, mediaInfo?.created_by);
  const trailer = getOfficialTrailer(mediaInfo?.videos.results);

  const favorited = mediaInfo?.account_states?.favorite ? 'fill-red-500' : 'fill-white-500';
  const watchListed = mediaInfo?.account_states?.watchlist ? 'fill-green-500' : 'fill-white-500';

  const watchListClickHandler = () => {
    if (sessionId) {
      setMediaInfo(prev => ({
        ...prev,
        account_states: {
          ...prev.account_states,
          watchlist: true,
        }
      }));
      addToWatchList(mediaInfo);
    } else {
      console.log('must be logged in');
    }
  }

  const favClickHandler = () => {
    if (sessionId) {
      setMediaInfo(prev => ({
        ...prev,
        account_states: {
          ...prev.account_states,
          favorite: true,
        }
      }));
      addToFavHandler(mediaInfo);
    } else {
      console.log('must be logged in');
    }
  }

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="media-info-detail-container flex flex-col w-9/12 m-auto">
      <div className="media-info-backdrop" style={{backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0) 70%, rgba(17,17,17,1) 98%), linear-gradient(-90deg, rgba(255,255,255,0) 70%, rgba(17,17,17,1) 98%), linear-gradient(180deg, rgba(255,255,255,0) 70%, rgba(17,17,17,1) 98%), radial-gradient(circle, rgba(255,255,255,0) 70%, rgba(17,17,17,1) 97%), url(https://image.tmdb.org/t/p/original${mediaInfo.backdrop_path})`}}>
        <div className="media-info-header flex">
          <div className="media-info-title text-4xl font-bold mx-2">{mediaInfo.title ? mediaInfo.title : mediaInfo.name}</div>
          <div className="media-info-release text-lg mr-2 text-indigo-500 font-light">({mediaInfo.release_date ? mediaInfo.release_date.substring(0, 4) : mediaInfo.first_air_date.substring(0, 4)})</div>
          <div className="media-info-director text-lg mx-2 font-light">Directed by <span className='font-semibold'>{director}</span></div>
        </div>
      </div>

      <div className="media-info-more mt-5">

        <div className="media-info-poster border border-indigo-500">
          <img src={`https://image.tmdb.org/t/p/w200/${mediaInfo.poster_path}`} alt="media-info-poster"/>
        </div>
        
        <div className="media-info-detail flex flex-col px-3">
          <div className="media-info-tagline font-semibold text-lg">{mediaInfo.tagline}</div>
          <div className="media-info-overview font-light mt-2">{mediaInfo.overview}</div>

          <div className="media-info-cast mt-2">
            <div className="cast-title font-semibold text-indigo-500">Cast</div>
            <div className="cast-list">
              {mediaInfo.cast.map((person, index) => {
                if (index < 10) {
                    return (
                    <span key={index} className='max-w-max rounded-md text-sm font-light bg-indigo-500 px-1 mr-1 inline-block'>{person.name}</span>
                  )
                }
              })}
            </div>
          </div>
            
          <div className="media-info-misc flex items-center">
            <div className="media-info-genres mt-2">
              <div className="genre-title font-semibold text-indigo-500">Genres</div>
              <div className="genre-list">
                {mediaInfo.genres.map((genre,index) => {
                  return (
                    <span key={index} className="max-w-max rounded-md text-sm font-light bg-indigo-500 px-1 mr-1 inline-block">{genre.name}</span>
                  )
                })}
              </div>
            </div>
            <div className="media-info-runtime ml-3 mt-2">
              <div className="runtime-title font-semibold text-indigo-500">Runtime</div>
              <div className="runtime-detail max-w-max rounded-md text-sm font-light bg-indigo-500 px-1 mr-1 inline-block">{mediaInfo.runtime} mins</div>
            </div>
          </div>


        </div>
        
        <MediaInfoAction 
          favClickHandler={favClickHandler} 
          watchListClickHandler={watchListClickHandler}
          mediaInfo={mediaInfo}
        />

        {/* <div className="media-info-action flex flex-col bg-slate-700 w-8/12 rounded-lg items-center justfy-center font-light p-5">
          <div className="media-info-save flex items-center justify-evenly pb-4 border-b border-b-slate-200 w-full">
            <div className="media-info-like">
              <HeartIcon onClick={() => addToFavHandler(mediaInfo)} className={`w-7 h-7 ${favorited} hover:text-red-500`}/>
            </div>
            <div className="media-info-watchList">
              <PlusIcon onClick={() => addToWatchList(mediaInfo)} className={`w-7 h-7 ${watchListed} hover:text-green-500`}/>
            </div>
          </div>
          <div className="media-info-rate max-h-max flex flex-col items-center">
            <div className="rate-title mt-2">Rating</div>
            <div className="rate-avg font-bold text-5xl mt-2 text-indigo-500">
              {Math.round(mediaInfo.vote_average * 10) / 10}
            </div>
          </div>
        </div> */}

        <div className='media-info-trailer px-3 my-5'>
          <iframe width="840" height="472" src={`https://www.youtube-nocookie.com/embed/${trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <Reviews reviews={mediaInfo.reviews}/>

      </div>
    </div>
  )
};

export default MediaDetail;