import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import searchIcon from '../assets/icons/search-icon.png';
import cartIcon from '../assets/icons/cart-icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Search Icon */}
        <div className='search-icon-large'>
          <a href="#">
            <img src={searchIcon} alt="search icon" />
          </a>
        </div>

        {/* Main Navigation */}
        <div ref={menuRef} className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
          {/* Mobile Search Input */}
          <div className='search-input-mobile'>
            <input type='text' placeholder='Search for a product' />
          </div>

          {/* Left Navigation Links */}
          <ul className='nav-links left-links'>
            <li><a href='#' onClick={toggleMenu}>BRANDS</a></li>
            <li><a href='#' onClick={toggleMenu}>DENIM WEAR</a></li>
            <li><a href='#' onClick={toggleMenu}>STREET WEAR</a></li>
          </ul>

          {/* Logo */}
          <div className='logo'>
            <a href='/'>
              <h1>REVOLVER</h1>
            </a>
          </div>

          {/* Right Navigation Links */}
          <ul className='nav-links right-links'>
            <li><a href='#' onClick={toggleMenu}>SEE BLOGS</a></li>
            <li><a href='#' onClick={toggleMenu}>ABOUT US</a></li>
            <li><a href='#' onClick={toggleMenu}>CONTACT US</a></li>
          </ul>
        </div>

        {/* Cart Icon */}
        <div className='cart-icon'>
          <a href="#">
            <img src={cartIcon} alt="cart icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
