import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListContainer from './ListContainer';
import { fetchMoviesByCat } from '../movies/moviesByCatSlice';


const Categories = (props) => {
  // media as movie list in each genre
  // const [moviesByCat, setMoviesByCat] = useState({});

  const genresBaby = useSelector(state => state.moviesByCat);

  const dispatch = useDispatch();

  useEffect(() => {
    // doing movies in categories for now
    // for (const genre of props.movieGenres) {
    //   const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Math.floor(Math.random() * 5) + 1}&with_genres=${genre.id}&with_watch_monetization_types=flatrate`;
    //   axios.get(apiURL)
    //     .then((results) => {
    //       setMoviesByCat(prev => ({
    //         ...prev,
    //         [genre.name]: results.data.results
    //       }));
    //     });
    // }
    dispatch(fetchMoviesByCat());

  }, []);

  // const genreName = Object.keys(moviesByCat).map(name => {
  //   return (
  //     <ListContainer 
  //       key={props.movieGenres.id}
  //       title={name}
  //       media={moviesByCat[name]}
  //       allGenres={props.allGenres}
  //       favMovie={props.favMovie}
  //       favourite={props.favourite}
  //       watchListMovie={props.watchListMovie}
  //       watchList={props.watchList}
  //     />
  //   )
  // });

  return (
    <div className="genre-container mt-20">
      {/* {genreName} */}
    </div>
  )
}

export default Categories;