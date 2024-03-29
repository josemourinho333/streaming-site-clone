import NavMenu from './NavMenu';
import NavActions from './NavActions';
import { useState, useEffect } from 'react';

const NavContainer = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHandle = () => {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);
    
    return () => {
      window.removeEventListener('scroll', scrollHandle);
    }
  });

  return (
    <div className={`fixed top-0 left-0 right-0 nav-container flex justify-between px-10 py-3 ${scrollPosition < 100 ? 'bg-transparent' : 'bg-indigo-500'}`}>
      <NavMenu />
      <NavActions signInOpenHandler={props.signInOpenHandler} signOutHandler={props.signOutHandler} user={props.user}/>
    </div>
  )
}

export default NavContainer;