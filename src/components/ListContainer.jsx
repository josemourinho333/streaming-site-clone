import List from './List';

const ListContainer = (props) => {
  return (
    <div className="list-container my-1">
      <div className="list-title text-2xl font-bold mx-8 mt-3 decoration-1">{props.title}</div>
      <List media={props.media} allGenres={props.allGenres} favMovie={props.favMovie} watchListMovie={props.watchListMovie} favourite={props.favourite} watchList={props.watchList} />
    </div>
  )
}

export default ListContainer;