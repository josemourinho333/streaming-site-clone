import { TerminalIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import useDebounce from '../hooks/useDebounce';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const finalTerm = useDebounce(searchTerm, 400);

  const [searchWithTerm, setSearchWithTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchWithTerm(finalTerm);
  }, [finalTerm]);

  useEffect(() => {

  }, [])



  return (
    <>
      <div className="search-container mt-20 flex flex-col items-center">
        {/* <h1 className="text-5xl">Search any movies</h1> */}
        <input type="search" placeholder='Search for any movies...' className="search font-lg text-black px-2 rounded-lg w-1/2 mt-5" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <h1>{props.query}</h1>
      </div>
      <div>search term: {searchTerm}</div>
      {/* <ListContainer 
        title="Search results"
        customList={true}
        media={myList}
        allGenres={props.allGenres}
        favMovie={props.favMovie}
        watchListMovie={props.watchListMovie}
        favourite={props.favourite}
        watchList={props.watchList}
      /> */}
    </>

  )
}

export default Search;