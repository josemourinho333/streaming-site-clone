import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListContainer from './ListContainer';
import { fetchMoviesByCat } from '../movies/moviesByCatSlice';
import { fetchAllGenres } from '../genres/allGenresSlice';
import { useParams } from 'react-router';
import { fetchTvByCat } from '../tv/tvByCatSlice';

const Categories = () => {
  const categorizedMovies = useSelector(state => state.moviesByCat.moviesByCat);
  const allGenres = useSelector(state => state.allGenres.allGenres);
  const dispatch = useDispatch();
  const categorizedTv = useSelector(state => state.tvByCat.tvByCat)

  useEffect(() => {
    dispatch(fetchMoviesByCat());
    dispatch(fetchAllGenres());
    dispatch(fetchTvByCat());
  }, []);

  const {type} = useParams();

  const categorizedListMovies = Object.keys(categorizedMovies).map((name, index) => {
    return (
      <ListContainer 
        key={index}
        title={name}
        media={categorizedMovies[name]}
        allGenres={allGenres}
      />
    )
  });

  const categorizedListTv = Object.keys(categorizedTv).map((name, index) => {
    return (
      <ListContainer 
        key={index}
        title={name}
        media={categorizedTv[name]}
        allGenres={allGenres}
      />
    )
  })

  return (
    <div className="genre-container mt-20">
      {type === 'movies' && categorizedListMovies}
      {type === 'tv' && categorizedListTv}
    </div>
  )
}

export default Categories;