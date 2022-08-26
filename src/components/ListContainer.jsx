import List from './List';

const ListContainer = (props) => {

  const favourites = props.favourites ? true : false;

  if (favourites) {
    return (
      <div className="list-container my-20 px-8">
        <div className='flex mt-3 items-center justify-center'>
          <div className="list-title text-2xl font-bold">
            {props.title}
          </div>
        </div>
        <List media={props.media} allGenres={props.allGenres} favourites={favourites}/>
      </div>
    )
  }

  return (
    <div className="list-container my-20 px-8">
      <div className='flex mt-3 items-center justify-between'>
        <div className="list-title text-2xl font-bold">
          {props.title}
        </div>
        <div className='text-sm font-light'>View More</div>
      </div>
      <List media={props.media} allGenres={props.allGenres} favourites={favourites}/>
    </div>
  )
}

export default ListContainer;