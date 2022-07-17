// Helpers
import getGenresInMovie from '../helpers/getGenresInMovie';
import { HeartIcon, PlusIcon, DotsHorizontalIcon } from '@heroicons/react/solid';

const Poster = (props) => {
  const releaseYear = props.releaseDate ? props.releaseDate?.split('-')[0] : props.airDate?.split('-')[0];

  const genresInMovie = getGenresInMovie(props.genres, props.allGenres);
  const mappedGenres = genresInMovie?.map((item, index) => {
    while (index < 3) {
      return (
      <span key={item?.id}>
        {item?.name === 'Science Fiction' ? 'Sci-Fi' : item?.name}
      </span>
      )
    }
  })

  return (
    <div className="media-card min-w-[300px] min-h-[440px] bg-center flex items-end group" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w300${props.src})`}}>
      <a href="#" className='flex items-end h-1/2 media-page px-5 py-5 w-full bg-gradient-to-t from-black via-black invisible group-hover:visible'>
        <div className="media-info">
          <p className="media-header">
            <span className='text-xs font-semibold text-white px-0.5 py-0.25'>{releaseYear}</span> 
            {/* <span>Avg score: {props.score}</span> */}
          </p>
          <h3 className="media-name text-md font-bold tracking-wide">{props.title ? props.title : props.name}</h3>
          <p className="media-body flex mt-2 mb-2">
            <HeartIcon className='h-6 w-6 mr-1 fill-white-500 hover:fill-red-500'/>
            <PlusIcon  className='h-6 w-6 mr-1 fill-white-500 hover:fill-green-500'/>
            <DotsHorizontalIcon  className='h-6 w-6 mr-1 fill-white-500 hover:fill-gray-500'/></p>
          <p className="media-genres">
            {mappedGenres}
          </p>
        </div>
      </a>
    </div>
  )
}

export default Poster;