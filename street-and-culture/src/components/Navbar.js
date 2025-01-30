import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, ShoppingCart, Search, CircleUserRound } from 'lucide-react';
import brandLogo from '../assets/images/web-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

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
          <div className="mobile-search">
            <input type="text" placeholder="Search for products" />
            <Search className="icon" />
          </div>
          <div className={`dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
            <a onClick={(e) => {
              e.preventDefault();
              toggleDropdown(0);
            }}>BRANDS</a>
            <div className={`dropdown-content ${activeDropdown === 0 ? 'active' : ''}`}>
              <a href="/FreeTheYouth">Free The Youth</a>
              <a href="/97Urban">97 Urban</a>
              <a href="/Mindset">MINDSET</a>
              <a href="/60Fellas">60.Fellas</a>
              <a href="/KevWCP">Kevlar Cool Pants</a>
              <a href="#">Calvin Klein</a>
              <a href="#">Urban</a>
              
            </div>
          </div>
          <div className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
            <a onClick={(e) => {
              e.preventDefault();
              toggleDropdown(1);
            }}>STREET WEARS</a>
            <div className={`dropdown-content ${activeDropdown === 1 ? 'active' : ''}`}>
              <a href="#">Free The Youth</a>
              <a href="#">Patched and Painted Jeans</a>
              <a href="#">Puma</a>
              <a href="#">The North Face</a>
              <a href="#">Calvin Klein</a>
              <a href="#">Urban</a>
            </div>
          </div>
          <div className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
            <a onClick={(e) => {
              e.preventDefault();
              toggleDropdown(2);
            }}>DENIM WEARS</a>
            <div className={`dropdown-content ${activeDropdown === 2 ? 'active' : ''}`}>
              <a href="#">Free The Youth</a>
              <a href="#">97 Urban</a>
              <a href="#">Puma</a>
              <a href="#">The North Face</a>
              <a href="#">Calvin Klein</a>
              <a href="#">Urban</a>
            </div>
          </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <a href="/blogs">SEE BLOGS</a>
          <a href="/about">ABOUT US</a>
          <a href="/contact">CONTACT US</a>

          {/* Account icon */}
          <div className="mobile-user">
            <a href="/login"><CircleUserRound className="icon" /></a>
          </div>
        </div>
      )}

      {/* Center Section: Logo & Links (large screens only) */}
      <div className="navbar-center">
        <div className="nav-links">
          <div className="dropdown">
            <a>BRANDS</a>
              <div className="dropdown-content">
                <a href="/FreeTheYouth">Free The Youth</a>
                <a href="/97Urban">97 Urban</a>
                <a href="/Mindset">MINDSET</a>
                <a href="/60Fellas">60.Fellas</a>
                <a href="/KevWCP">Kevlar Cool Pants</a>
                <a href="#">Calvin Klein</a>
                <a href="#">Urban</a>
              </div>
          </div>
          <div className="dropdown">
            <a>STREET WEARS</a>
              <div className="dropdown-content">
                <a href="#">Free The Youth</a>
                <a href="#">Patched and Painted Jeans</a>
                <a href="#">Puma</a>
                <a href="#">The North Face</a>
                <a href="#">Calvin Klein</a>
                <a href="#">Urban</a>
              </div>
          </div>
          <div className='dropdown'>
            <a>DENIM WEARS</a>
              <div className="dropdown-content">
                <a href="#">Free The Youth</a>
                <a href="#">97 Urban</a>
                <a href="#">Puma</a>
                <a href="#">The North Face</a>
                <a href="#">Calvin Klein</a>
                <a href="#">Urban</a>
              </div>
          </div>
        </div>
        <a href="/"><img src={brandLogo} alt="Logo" className="logo" /></a>
        <div className="nav-links">
          <a href="/blogs">SEE BLOGS</a>
          <a href="/about">ABOUT US</a>
          <a href="/contact">CONTACT US</a>
        </div>
      </div>

      {/* Right Section: Cart Icon */}
      <div className="navbar-right">
        <a href="/login"><CircleUserRound className="icon circle-user" /></a>
        <ShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
