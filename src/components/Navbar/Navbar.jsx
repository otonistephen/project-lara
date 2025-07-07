import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState('');

  const toggleMenu = () => {
    setShowMenu(prev => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : 'auto';
      return newState;
    });
  };

  const closeMobileMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  useEffect(() => {
    // Cleanup overflow on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={`nav-bar ${isDarkMode ? 'dark' : ''}`}>
      <div className='menu-icon' onClick={toggleMenu}>
        <img
          src={showMenu ? images.close_icon : images.dropdown_icon}
          alt='Menu toggle'
        />
      </div>
      <div className='logo'>
        <Link to='/'>Guidelily</Link>
      </div>
      <nav>
        <ul className={`nav-menu ${showMenu ? 'show' : ''} `}>
          <div className='mobile-nav'>
            <div className='menu-icon' onClick={toggleMenu}>
              <img
                src={showMenu ? images.close_icon : images.dropdown_icon}
                alt='Menu toggle'
              />
            </div>
            <div className='dark-mode-mobile'>
              <DarkMode
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
          <li
            className={`home-hidden clicked ${
              clicked === 'Home' ? 'active' : ''
            }`}
          >
            <Link
              to='/'
              onClick={() => {
                setClicked('Home');
                closeMobileMenu();
              }}
            >
              Home
            </Link>
          </li>
          <li className={`clicked ${clicked === 'Guides' ? 'active' : ''}`}>
            <Link
              to='/Guides'
              onClick={() => {
                setClicked('Guides');
                closeMobileMenu();
              }}
              
            >
              Guides
            </Link>
          </li>
          <li className={`clicked ${clicked === 'About' ? 'active' : ''}`}>
            <Link
              to='/About'
              onClick={() => {
                setClicked('About');
                closeMobileMenu();
              }}
            >
              About
            </Link>
          </li>
          <li className={`clicked ${clicked === 'Newsletter' ? 'active' : ''}`}>
            <Link
              to='/Newsletter'
              onClick={() => {
                setClicked('Newsletter');
                closeMobileMenu();
              }}
            >
              Newsletter
            </Link>
          </li>
          <li className={`clicked ${clicked === 'X' ? 'active' : ''}`}>
            <Link
              to='/'
              onClick={() => {
                setClicked('X');
                closeMobileMenu();
              }}
            >
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
