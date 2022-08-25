const NavActions = (props) => {

  return (
    <div className="nav-actions flex items-center">
      { !props.user 
        ? <button onClick={() => {props.signInOpenHandler()}} className="sing-in text-md font-semibold bg-white text-black px-3 rounded-sm ml-2">Sign In</button>
        : <button onClick={() => {props.signOutHandler()}} className="sing-out text-md font-semibold bg-white text-black px-3 rounded-sm ml-2">{props?.user?.username}, click to sign out</button>
      }
    </div>
  )
}

export default NavActions;