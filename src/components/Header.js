import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="hero-navbar">
        <div className="hero-logo">Hepta</div>
        <div className="hero-hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {menuOpen && (
        <div className="full-page-menu">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
          <ul className="menu-list">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/hotels" onClick={() => setMenuOpen(false)}>Hotels</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/news" onClick={() => setMenuOpen(false)}>News</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
