import ListContainer from "./ListContainer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteMovies } from "../movies/favoriteMoviesSlice";
import { fetchAllGenres } from '../genres/allGenresSlice';
import { fetchFavoriteTv } from "../tv/favoriteTvSlice";
import { useParams } from 'react-router';


const Favourites = () => {
  const favMovies = useSelector(state => state.favMovies.favMovies.results);
  const favTv = useSelector(state => state.favTv.favTv.results);
  const allGenres = useSelector(state => state.allGenres.allGenres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
    dispatch(fetchFavoriteTv());
    dispatch(fetchAllGenres());
  }, []);

  const {type} = useParams();

  return (
    <>
      { type === 'movies' && 
        <ListContainer 
          title="Favourite Movies"
          media={favMovies}
          allGenres={allGenres}
          favourites={true}
        />
      }
      { type === 'tv' &&
        <ListContainer 
          title="Favourite TV"
          media={favTv}
          allGenres={allGenres}
          favourites={true}
        />
      }
    </>
  )
}

export default Favourites;