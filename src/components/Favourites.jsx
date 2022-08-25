import ListContainer from "./ListContainer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteMovies } from "../movies/favoriteMoviesSlice";
import { fetchAllGenres } from '../genres/allGenresSlice';

const Favourites = () => {
  const favMovies = useSelector(state => state.favMovies.favMovies.results);
  const allGenres = useSelector(state => state.allGenres.allGenres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
    dispatch(fetchAllGenres());
  }, []);

  return (
    <>
      <ListContainer 
        title="Favourites"
        media={favMovies}
        allGenres={allGenres}
        favourites={true}
      />
    </>
  )
}

export default Favourites;