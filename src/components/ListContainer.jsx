import List from './List';
import Poster from './Poster';

const ListContainer = (props) => {

  if (props.customList) {

    const posters = props.media.map(poster => {
    return (
      <Poster 
        key={poster.id}
        src={`https://image.tmdb.org/t/p/w300${poster.poster_path}`}
        title={poster.title}
        name={poster.name}
        id={poster.id}
        genres={poster.genres}
        releaseDate={poster.release_date}
        airDate={poster.first_air_date}
        score={poster.vote_average}
        allGenres={props.allGenres}
        favMovie={props.favMovie}
        watchListMovie={props.watchListMovie}
        favourite={props.favourite.filter(fav => fav.id === poster.id)[0]}
        watchList={props.watchList.filter(listItem => listItem.id === poster.id)[0]}
      />
    )
  })

  return (
      <div className="list-container mt-20 my-1">
        <div className="list-title text-2xl font-bold mx-8 mt-3 decoration-1">{props.title}</div>
        <div className="grid mx-8 mt-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {posters}
        </div>
      </div>
    )
  }

  return (
    <div className="list-container my-1">
      <div className="list-title text-2xl font-bold mx-8 mt-3 decoration-1">{props.title}</div>
      <List media={props.media} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
    </div>
  )
}

export default ListContainer;