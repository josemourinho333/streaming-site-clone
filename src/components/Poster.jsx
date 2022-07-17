// Helpers
import getGenresInMovie from '../helpers/getGenresInMovie';

const Poster = (props) => {
  const releaseYear = props.releaseDate ? props.releaseDate?.split('-')[0] : props.airDate?.split('-')[0];

  const genresInMovie = getGenresInMovie(props.genres, props.allGenres);
  const mappedGenres = genresInMovie?.map((item, index) => {
    console.log('item', item?.id, item?.name);
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
      <a href="#" className='media-page px-5 py-5 w-full bg-gradient-to-t from-black via-black/[0.90] invisible group-hover:visible'>
        <div className="media-info">
          <h3 className="media-name text-md font-bold tracking-wide">{props.title ? props.title : props.name}</h3>
          <p className="media-body"><span>{props.score}</span><span>{releaseYear}</span></p>
          <p className="media-genres">
            {mappedGenres}
          </p>
        </div>
      </a>
    </div>
  )
}

export default Poster;