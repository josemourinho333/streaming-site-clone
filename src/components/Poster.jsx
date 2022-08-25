import getGenresInMovie from '../helpers/getGenresInMovie';
import { HeartIcon, PlusIcon, DotsHorizontalIcon } from '@heroicons/react/solid';
import addToFavHandler from '../helpers/addToFav';

const Poster = (props) => {
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
            <HeartIcon onClick={() => addToFavHandler(props)} className={`h-6 w-6 mr-1 fill-white-500 hover:fill-red-500`}/>
            {/* <span>Avg score: {props.score}</span> */}
            {/* <PlusIcon className={`h-6 w-6 mr-1 fill-white-500 hover:fill-green-500`}/> */}
            {/* <DotsHorizontalIcon className='h-6 w-6 mr-1 fill-white-500 hover:fill-gray-500'/> */}
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