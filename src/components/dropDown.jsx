import React from 'react';

const DropDown = () => {
  return (
    <div className="drop-down flex flex-col absolute bg-indigo-500 w-full p-2 rounded-lg top-6">
      <div><a href={`/categories/movies`}>Movies</a> </div>
      <div><a href={`/categories/tv`}>TV</a></div>
    </div>
  )
}

export default DropDown;