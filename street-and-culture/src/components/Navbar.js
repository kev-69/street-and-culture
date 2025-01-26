import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, ShoppingCart, Search } from 'lucide-react';
import brandLogo from '../assets/images/web-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle closing the menu when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.closest('.mobile-menu') || e.target.closest('.menu-icon')) return;
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" onClick={handleOutsideClick}>
      {/* Left Section: Search Icon */}
      <div className="navbar-left">
        <Search className="icon" />
      </div>

      {/* Mobile Menu */}
      <Menu
        className="icon menu-icon"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      {isMenuOpen && (
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {/* Place a search input here with the search icon with placeholder "Search for products" */}
          <div className="mobile-search">
            <input type="text" placeholder="Search for products" />
            <Search className="icon" />
          </div>
          <a href="#">BRANDS</a>
          <a href="#">DENIM WEAR</a>
          <a href="#">STREET WEAR</a>
          <span></span>
          <span></span>
          <span></span>
          <a href="#">SEE BLOGS</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </div>
      )}

      {/* Center Section: Logo & Links (large screens only) */}
      <div className="navbar-center">
        <div className="nav-links">
          <a href="#">BRANDS</a>
          <a href="#">STREET WEARS</a>
          <a href="#">DENIM WEARS</a>
        </div>
        <img src={brandLogo} alt="Logo" className="logo" />
        <div className="nav-links">
          <a href="#">SEE BLOGS</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </div>
      </div>

      {/* Right Section: Cart Icon */}
      <div className="navbar-right">
        <ShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
