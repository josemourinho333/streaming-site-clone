const NavMenu = () => {
  return (
    <div className="nav-menu flex justify-start items-center">
      <div className="logo text-3xl font-bold ">LOGO</div>
      <div className="home text-sm font-light ml-3">Home</div>
      <div className="categories text-sm font-light ml-3">Categories</div>
      <div className="my-list text-sm font-light ml-3">My List</div>
      <div className="fav text-sm font-light ml-3">Favourites</div>
    </div>
  )
}

export default NavMenu;