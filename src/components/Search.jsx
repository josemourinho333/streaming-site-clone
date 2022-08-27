import { useState, useEffect } from "react";
import tmdb from "../api/tmdb";
import useDebounce from '../hooks/useDebounce';
import ListContainer from "./ListContainer";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const finalTerm = useDebounce(searchTerm, 500);

  const [searchWithTerm, setSearchWithTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchWithTerm(finalTerm);
  }, [finalTerm]);

  useEffect(() => {
    if (searchWithTerm) {
      tmdb.get(`search/movie`, {
        params: {
          query: searchWithTerm
        }
      })
      .then((response) => {
        setSearchResults([...response.data.results])
      })
    }
  }, [searchWithTerm]);

  return (
    <>
      <div className="search-container mt-20 flex flex-col items-center">
        {/* <h1 className="text-5xl">Search any movies</h1> */}
        <input type="search" placeholder='Search for any movies...' className="search font-lg text-black px-2 rounded-lg w-1/2 mt-5" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <h1>{props.query}</h1>
      </div>
      <ListContainer 
        title={`Search results for: "${searchWithTerm}"`}
        media={searchResults}
        allGenres={props.allGenres}
        search={true}
      />
    </>

  )
}

export default Search;