import React, { useEffect, useState } from 'react';
import './Navbar.css';
// import DarkMode from '../../DarkMode/DarkMode';
import DarkMode from '../DarkMode/DarkMode';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  // const closeMobileMenu = () => {
  //   setShowMenu(false);

  // };

  const closeMobileMenu = () => {
    document.querySelector('.nav-menu').classList.remove('show');
    // setTimeout(() => setShowMenu(false), 300);
    setTimeout(() => {
      setShowMenu(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={`nav-bar ${isDarkMode ? 'dark' : ''}`}>
      <div className='menu-icon' onClick={toggleMenu}>
        {/* <img src={showMenu ? null : images.dropdown_icon} alt='' /> */}
        <img src={images.dropdown_icon} alt='' />
      </div>
      <div className='logo'>
        <Link to='/'>Guidelily</Link>
      </div>
      <nav>
        <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
          <div className='mobile-nav'>
            <div className='menu-icon' onClick={toggleMenu}>
              <img src={showMenu ? images.close_icon : null} alt='' />
            </div>
            <div className='dark-mode-mobile'>
              <DarkMode
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
          <li className='home-hidden'>
            <Link to='/' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/Guides' onClick={closeMobileMenu}>
              Guides
            </Link>
          </li>
          <li>
            <Link to='/About' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to='/Newsletter' onClick={closeMobileMenu}>
              Newsletter
            </Link>
          </li>
          <li>
            <Link to='/' onClick={closeMobileMenu}>
              X
            </Link>
          </li>
        </ul>
        <DarkMode toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </nav>
    </div>
  );
};

export default Navbar;
