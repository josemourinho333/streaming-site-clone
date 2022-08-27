import React, { useState, useEffect } from 'react';
import { HeartIcon, PlusIcon} from '@heroicons/react/solid';

const MediaInfoAction = (props) => {
  const [state, setState] = useState(null)

  const favorited = state?.favorite ? 'fill-red-500' : 'fill-white-500';
  const watchListed = state?.watchlist ? 'fill-green-500' : 'fill-white-500';

  useEffect(() => {
    setState({...props.mediaInfo.account_states})
  }, [props.mediaInfo.account_states])

  return (
    <div className="media-info-action flex flex-col bg-slate-700 w-8/12 rounded-lg items-center justfy-center font-light p-5">
    <div className="media-info-save flex items-center justify-evenly pb-4 border-b border-b-slate-200 w-full">
      <div className="media-info-like">
        <HeartIcon onClick={() => props.favClickHandler()} className={`w-7 h-7 ${favorited} hover:text-red-500`}/>
      </div>
      <div className="media-info-watchList">
        <PlusIcon onClick={() => props.watchListClickHandler()} className={`w-7 h-7 ${watchListed} hover:text-green-500`}/>
      </div>
    </div>
    <div className="media-info-rate max-h-max flex flex-col items-center">
      <div className="rate-title mt-2">Rating</div>
      <div className="rate-avg font-bold text-5xl mt-2 text-indigo-500">
        {Math.round(props.mediaInfo?.vote_average * 10) / 10}
      </div>
    </div>
  </div>
  )
}

export default MediaInfoAction;