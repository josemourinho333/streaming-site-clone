

const NavActions = (props) => {

  return (
    <div className="nav-actions flex items-center">
      <button onClick={props.getAuthToken} className="sing-in text-md font-semibold bg-white text-black px-3 rounded-sm ml-2">Sign In</button>
    </div>
  )
}

export default NavActions;