import ListContainer from "./ListContainer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchListMovies } from '../movies/watchListMoviesSlice';
import { fetchAllGenres } from '../genres/allGenresSlice';

const MyList = () => {
  const watchListMovies = useSelector(state => state.watchListMovies.watchListMovies.results);
  const allGenres = useSelector(state => state.allGenres.allGenres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatchListMovies());
    dispatch(fetchAllGenres());

  }, []);

  return (
    <>
      <ListContainer 
        title="My Watch List"
        media={watchListMovies}
        allGenres={allGenres}
        favourites={true}
      />
    </>
  )
}

export default MyList;

