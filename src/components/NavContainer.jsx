import NavMenu from './NavMenu';
import NavActions from './NavActions';

const NavContainer = () => {
  return (
    <div className="nav-container flex justify-between px-5 py-3">
      <NavMenu />
      <NavActions />
    </div>
  )
}

export default NavContainer;