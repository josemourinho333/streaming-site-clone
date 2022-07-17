import Poster from './Poster';

const List = (props) => {

  const posters = props.media.map((poster) => {
    return (
      <Poster
        key={poster.id}
        src={`https://image.tmdb.org/t/p/w300${poster.poster_path}`}
        alt={poster.title}
        id={poster.id}
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