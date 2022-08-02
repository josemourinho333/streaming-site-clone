import Poster from "./Poster";
import ListContainer from "./ListContainer";
import { useEffect, useState } from 'react';
import axios from "axios";

const Favourites = (props) => {
  const [favourites, setFavourites] = useState([]);

  const movieIds = props.favourite.map(item => item.id)
  const setOfIds = new Set(movieIds);
  const uniqueIds = [...setOfIds];

  useEffect(() => {
    uniqueIds.map((item) => {
      const apiURL = `https://api.themoviedb.org/3/movie/${item}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
      axios.get(apiURL)
        .then((results) => {
          setFavourites(prev => ([...prev, results.data]))
        })
        .catch((err) => console.log('error:', err))
    })
  }, []);

  return (
    <>
      <ListContainer 
        title="Favourites"
        media={favourites}
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

export default Favourites