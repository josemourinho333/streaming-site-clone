import NavMenu from './NavMenu';
import NavActions from './NavActions';

const NavContainer = () => {
  return (
    <div className="bg-transparent fixed top-0 left-0 right-0 nav-container flex justify-between px-10 py-3 ">
      <NavMenu />
      <NavActions />
    </div>
  )
}

export default NavContainer;