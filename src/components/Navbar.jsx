import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">TECHBRAIN NETWORKS</span>
          <span className="logo-accent">DEFENCE TECHNOLOGY</span>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          ☰
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>🏠 Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>ℹ️ About</a></li>
          <li><a href="#industries" onClick={() => setMenuOpen(false)}>🏭 Industries</a></li>
          <li><a href="#products" onClick={() => setMenuOpen(false)}>⚙️ Products</a></li>
          <li><a href="#careers" onClick={() => setMenuOpen(false)}>💼 Careers</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>✉️ Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
