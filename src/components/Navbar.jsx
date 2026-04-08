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
          <li><a href="#home">Home</a></li>
          <li className="dropdown-parent">
            <a href="#industries" className="dropdown-toggle">Industries</a>
            <div className="industries-dropdown">
              <div className="dropdown-grid">
                {[
                  "Aerospace", "Agriculture", "Automotive", "Chemical", 
                  "Defence Technology", "Education", "Energy & Utilities", 
                  "Entertainment and Media", "Finance", "Food Technology", 
                  "Healthcare", "Infrastructure", "Logistics", "Manufacturing", 
                  "Ocean Technology", "Oil and Gas", "Pharmaceutical", "Retail", 
                  "Sports", "Technology", "Telecommunication", "Textile", 
                  "Transportation", "Travel"
                ].map((industry) => (
                  <a key={industry} href={`#${industry.toLowerCase().replace(/ /g, '-')}`} className="dropdown-item">
                    {industry}
                  </a>
                ))}
              </div>
            </div>
          </li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><a href="#contact" className="nav-cta">Get in Touch</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
