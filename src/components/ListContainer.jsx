import List from './List';

const ListContainer = (props) => {

  return (
    <div className="list-container my-8 px-8">
      <div className='flex mt-3 items-center justify-between'>
        <div className="list-title text-2xl font-bold">
          {props.title}
        </div>
        <div className='text-sm font-light'>View More</div>
      </div>
      <List media={props.media} allGenres={props.allGenres} />
    </div>
  )
}

export default ListContainer;