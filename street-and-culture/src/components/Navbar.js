import React, { useState } from 'react';
import './Navbar.css';
import searchIcon from '../assets/icons/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className='logo'>
          <a href='/'>
            <h1>REVOLVER</h1>
          </a>
        </div>

        <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
          <ul className='nav-links left-links'>
            <li><a href='#' onClick={toggleMenu}>BRANDS</a></li>
            <li><a href='#' onClick={toggleMenu}>DENIM WEARS</a></li>
            <li><a href='#' onClick={toggleMenu}>STREET WEARS</a></li>
          </ul>

          <ul className='nav-links right-links'>
            <li><a href='#' onClick={toggleMenu}>SEE BLOGS</a></li>
            <li><a href='#' onClick={toggleMenu}>ABOUT US</a></li>
            <li><a href='#' onClick={toggleMenu}>CONTACT US</a></li>
          </ul>
        </div>

        <div className='search-icon'>
          <a href="#">
            <img src={searchIcon} alt="search icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
