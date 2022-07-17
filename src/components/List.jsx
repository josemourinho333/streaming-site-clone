import Poster from './Poster';

const List = (props) => {

  const posters = props.media.map((poster) => {
    return (
      <Poster
        key={poster.id}
        src={`https://image.tmdb.org/t/p/w300${poster.poster_path}`}
        title={poster.title}
        name={poster.name}
        id={poster.id}
        genres={poster.genre_ids}
        releaseDate={poster.release_date}
        airDate={poster.first_air_date}
        score={poster.vote_average}
        allGenres={props.allGenres}
      />
    )
  })

  return (
    <div className="list flex overflow-x-auto mt-4 p-4">
      {posters}
    </div>
  );
};

export default List;