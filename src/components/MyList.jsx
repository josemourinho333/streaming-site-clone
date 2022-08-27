import ListContainer from "./ListContainer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchListMovies } from '../movies/watchListMoviesSlice';
import { fetchAllGenres } from '../genres/allGenresSlice';
import { fetchCustomListMovies } from "../movies/customListMoviesSlices";
import { fetchWatchListTv } from "../tv/watchListTvSlice";

const MyList = () => {
  const watchListMovies = useSelector(state => state.watchListMovies.watchListMovies.results);
  const customListMovies = useSelector(state => state.customListMovies.customListMovies);
  const watchListTv = useSelector(state => state.watchListTv.watchListTv.results);
  const allGenres = useSelector(state => state.allGenres.allGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatchListMovies());
    dispatch(fetchCustomListMovies());
    dispatch(fetchWatchListTv())
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
        title="My Watch List Movies"
        media={watchListMovies}
        allGenres={allGenres}
        // favourites={true}
      />

      <ListContainer 
        title="My Watch List TV"
        media={watchListTv}
        allGenres={allGenres}
        // favourites={true}
      />

      {customListContainer}
    </>
  )
}

export default MyList;

