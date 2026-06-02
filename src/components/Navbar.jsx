import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">TECHBRAIN NETWORKS</span>
          <span className="logo-accent">DEFENCE TECHNOLOGY</span>
        </div>

        <ul className="navbar-links">
          <li><a href="#home">🏠 Home</a></li>
          <li><a href="#about">ℹ️ About</a></li>
          <li><a href="#industries">🏭 Industries</a></li>
          <li><a href="#products">⚙️ Products</a></li>
          <li><a href="#careers">💼 Careers</a></li>
          <li><a href="#contact">� Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
