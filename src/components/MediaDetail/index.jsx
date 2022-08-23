import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdb from '../../api/tmdb';
import getDirectorName from '../../helpers/getDirectorName';

const MediaDetail = () => {
  const [mediaInfo, setMediaInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {type, id} = useParams();

  useEffect(() => {
    if (isLoading) {
      tmdb.get(`${type}/${id}`, {
      params: {
        append_to_response: 'videos, credits',
      }
    })
      .then((response) => {
        setMediaInfo({...response.data});
      })
      .then(() => {
        tmdb.get(`${type}/${id}/credits`)
          .then((response) => {
            console.log('responseee', response.data);
            setMediaInfo(prev => ({
              ...prev,
              cast: [...response.data.cast],
              crew: [...response.data.crew],
            }))
          })
          .then(() => setIsLoading(false))
      })
      .catch((error) => console.log('error', error));
    }
  }, []);

  const director = getDirectorName(mediaInfo?.crew)

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="media-detail-container flex flex-col w-9/12 m-auto">
      <div className="media-backdrop" style={{backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0) 70%, rgba(17,17,17,1) 98%), linear-gradient(-90deg, rgba(255,255,255,0) 70%, rgba(17,17,17,1) 98%), linear-gradient(180deg, rgba(255,255,255,0) 70%, rgba(17,17,17,1) 98%), radial-gradient(circle, rgba(255,255,255,0) 70%, rgba(17,17,17,1) 97%), url(https://image.tmdb.org/t/p/original${mediaInfo.backdrop_path})`}}>
        <div className="media-header flex">
          <div className="media-title text-5xl font-bold mx-2">{mediaInfo.title ? mediaInfo.title : mediaInfo.name}</div>
          <div className="media-release text-lg mr-2 text-indigo-500 font-light">({mediaInfo.release_date.substring(0, 4)})</div>
          <div className="media-director text-lg mx-2 font-light">Directed by <span className='font-semibold'>{director}</span></div>
        </div>
      </div>
      <div className="media-info mt-5">

        <div className="media-poster border border-indigo-500">
          <img src={`https://image.tmdb.org/t/p/w200/${mediaInfo.poster_path}`} alt="media-poster"/>
        </div>
        
        <div className="media-detail flex flex-col pl-5">
          <div className="media-tagline font-semibold text-lg">{mediaInfo.tagline}</div>
          <div className="media-overview font-light mt-2">{mediaInfo.overview}</div>
          <div className="media-cast mt-2">
            <div className="cast-title font-semibold text-indigo-500">Cast</div>
            <div className="cast-list">
              {mediaInfo.cast.map((person) => {
                return (
                  <span className='flex max-w-max whitespace-pre-line rounded-lg border border-indigo-500 text-sm font-light mr-1 p-1'>{person.name}</span>
                )
              })}
            </div>
          </div>
        </div>

        <div className="media-action flex flex-col">
          <div className="media-save flex">
            <div className="media-like">like</div>
            <div className="media-watchList">watchlist</div>
          </div>
          <div className="media-rate">rate</div>
        </div>
      </div>
    </div>
  )
};

export default MediaDetail;