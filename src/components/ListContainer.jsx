import List from './List';

const ListContainer = (props) => {

  return (
    <div className="list-container my-8 px-8">
      <div className="list-title text-2xl font-bold mt-3 decoration-1">
        {props.title}
      </div>
      <List media={props.media} allGenres={props.allGenres} />
    </div>
  )
}

export default ListContainer;