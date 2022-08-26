import ListContainer from "./ListContainer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchListMovies } from '../movies/watchListMoviesSlice';
import { fetchAllGenres } from '../genres/allGenresSlice';
import { fetchCustomListMovies } from "../movies/customListMoviesSlices";

const MyList = () => {
  const watchListMovies = useSelector(state => state.watchListMovies.watchListMovies.results);
  const customListMovies = useSelector(state => state.customListMovies.customListMovies);
  const allGenres = useSelector(state => state.allGenres.allGenres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatchListMovies());
    dispatch(fetchCustomListMovies());
    dispatch(fetchAllGenres());
  }, []);

  const customListContainer = customListMovies.map((item) => {
    return (
      <ListContainer 
        key={item.id}
        title={item.name}
        media={item.items}
        allGenres={allGenres}
        // favourites={true}
      />
    )
  })

  return (
    <>
      <ListContainer 
        title="My Watch List"
        media={watchListMovies}
        allGenres={allGenres}
        // favourites={true}
      />

      {customListContainer}
    </>
  )
}

export default MyList;

