import axios from "axios";
import { useState, useEffect } from "react";
import ListContainer from "./ListContainer";

const Search = (props) => {
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    console.log('use effect ran in search comp');
    // make axios call with the query value
    setTimeout(() => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=avengers&page=1&include_adult=false`)
      .then((results) => {
        console.log('results from axios', results)
      })
    }, "2000")
    // setSearchResult the axios call results.data

    // 
  }, [props.query]);

  return (
    <>
      <div className="search-container mt-20 flex flex-col items-center">
        <h1 className="text-5xl">Search any movies</h1>
        <input type="search" placeholder='Search...' className="search font-lg text-black px-2 rounded-lg w-1/2 mt-5" onChange={(e) => props.setQuery(e.target.value)}/>
        <h1>{props.query}</h1>
      </div>
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