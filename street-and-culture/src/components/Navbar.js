import React from 'react';
import './Navbar.css';
import searchIcon from '../assets/icons/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='search-icon'>
          <a href="#">
            <img src={searchIcon} alt="search icon" />
          </a>
        </div>
        
        <ul className='nav-links'>
          <li><a href='#'>BRANDS</a></li>
          <li><a href='#'>DENIM WEAR</a></li>
          <li><a href='#'>STREET WEAR</a></li>
          <li className='logo'>
            <a href='/'>
              <h1>REVOLVER</h1>
            </a>
          </li>
          <li><a href='#'>SEE BLOGS</a></li>
          <li><a href='#'>ABOUT US</a></li>
          <li><a href='#'>CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
