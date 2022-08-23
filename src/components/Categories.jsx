import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListContainer from './ListContainer';
import { fetchMoviesByCat } from '../movies/moviesByCatSlice';
import { fetchAllGenres } from '../genres/allGenresSlice';


const Categories = () => {
  const categorizedMovies = useSelector(state => state.moviesByCat.moviesByCat);
  const allGenres = useSelector(state => state.allGenres.allGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesByCat());
    dispatch(fetchAllGenres());
  }, []);

  const categorizedList = Object.keys(categorizedMovies).map((name, index) => {
    return (
      <ListContainer 
        key={index}
        title={name}
        media={categorizedMovies[name]}
        allGenres={allGenres}
      />
    )
  });

  return (
    <div className="genre-container mt-20">
      {categorizedList}
    </div>
  )
}

export default Categories;