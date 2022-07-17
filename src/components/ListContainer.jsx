import List from './List';

const ListContainer = (props) => {
  return (
    <div className="list-container my-1">
      <div className="list-title text-2xl font-bold uppercase mx-8">{props.title}</div>
      <List media={props.media}/>
    </div>
  )
}

export default ListContainer;