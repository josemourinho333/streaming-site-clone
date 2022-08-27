import { Link } from 'react-router-dom';
import DropDown from './dropDown';
import { useState } from 'react';

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-menu flex justify-start items-center">
      <div className="logo text-3xl font-bold ">LOGO</div>
      <div className="home text-sm font-light ml-3"><Link to='/'>Home</Link> </div>
      <div onClick={() => setOpen(!open)} className="categories text-sm font-light ml-3 cursor-pointer relative">
        Categories
        {open && <DropDown />}
      </div>
      <div className="my-list text-sm font-light ml-3"><Link to='/mylist'>My List</Link></div>
      <div className="fav text-sm font-light ml-3"><Link to='/favourites'>Favourites</Link></div>
      <div className="search text-sm font-light ml-3"><Link to='/search'>Search</Link></div>
    </div>
  )
}

export default NavMenu;