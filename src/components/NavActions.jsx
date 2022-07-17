const NavActions = () => {
  return (
    <div className="nav-actions flex items-center">
      <input type="text" placeholder='Search...' className="search font-sm text-black px-2" />
      <button className="sing-in text-lg font-bold bg-white text-black px-3 rounded-sm ml-2">Sign In</button>
    </div>
  )
}

export default NavActions;