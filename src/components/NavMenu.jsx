import { Link } from 'react-router-dom';
import DropDown from './dropDown';
import { useState } from 'react';

const NavMenu = () => {
  const [open, setOpen] = useState({
    categories: false,
    favourites: false,
    myList: false
  });

  return (
    <div className="nav-menu flex justify-start items-center">
      <div className="logo text-3xl font-bold ">LOGO</div>
      <div className="home text-sm font-light ml-3"><Link to='/'>Home</Link> </div>
      <div onClick={() => setOpen({categories: !open.categories, favourites: false, myList: false})} className="categories text-sm font-light ml-3 cursor-pointer relative">
        Categories
        {open.categories && <DropDown cat={true} />}
      </div>
      <div className="my-list text-sm font-light ml-3"><Link to='/mylist'>My List</Link></div>
      <div onClick={() => setOpen({favourites: !open.favourites, myList: false, categories: false})} className="fav text-sm font-light ml-3 cursor-pointer relative">
        Favourites
        {open.favourites && <DropDown fav={true} />}
      </div>
      <div className="search text-sm font-light ml-3"><Link to='/search'>Search</Link></div>
    </div>
  )
}

export default NavMenu;