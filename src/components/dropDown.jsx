import React from 'react';

const DropDown = (props) => {

  return (
    <div className="drop-down flex flex-col absolute bg-indigo-500 w-[80px] p-2 rounded-lg top-6">
      <div>
        <a href={ props.cat
          ? `/categories/movies`
          : props.fav
          ? `/favourites/movies`
          : ''
        }>
          Movies
        </a>
      </div>
      <div>
        <a href={ props.cat
         ? `/categories/tv`
         : props.fav
         ? `/favourites/tv`
         : ''
        }>
          TV
        </a>
      </div>
    </div>
  )
}

export default DropDown;