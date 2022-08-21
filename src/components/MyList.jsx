import ListContainer from "./ListContainer";
import { useEffect, useState } from 'react';
import axios from "axios";

const MyList = (props) => {
  const [myList, setMyList] = useState([]);

  const movieIds = props.watchList.map(item => item.id);
  const setOfIds = new Set(movieIds);
  const uniqueIds = [...setOfIds];

  useEffect(() => {
    uniqueIds.map((item) => {
      const apiURL = `https://api.themoviedb.org/3/movie/${item}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
      axios.get(apiURL)
        .then((results) => {
          setMyList(prev => ([...prev, results.data]))
        })
        .catch((err) => console.log('error:', err))
    })
  }, []);

  return (
    <>
      <ListContainer 
        title="My List"
        media={myList}
        customList={true}
        allGenres={props.allGenres}
        favMovie={props.favMovie}
        watchListMovie={props.watchListMovie}
        favourite={props.favourite}
        watchList={props.watchList}
      />
    </>
  )
}

export default MyList;

