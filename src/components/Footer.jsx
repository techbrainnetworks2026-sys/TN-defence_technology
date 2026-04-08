import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-professional">
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">TECHBRAIN</span>
              <span className="logo-accent">DEFENCE</span>
            </div>
            <p className="footer-bio">
              Global leaders in autonomous defence systems, signal intelligence, 
              and mission-critical infrastructure security.
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="link-col">
              <h4>Solutions</h4>
              <a href="#products">Autonomous Systems</a>
              <a href="#products">Cyber Security</a>
              <a href="#products">Signal Intel</a>
            </div>
            <div className="link-col">
              <h4>Company</h4>
              <a href="#about">About Excellence</a>
              <a href="#careers">Global Careers</a>
              <a href="#contact">Contact Hub</a>
            </div>
            <div className="link-col">
              <h4>Compliance</h4>
              <a href="#">Security Policy</a>
              <a href="#">Export Control</a>
              <a href="#">Ethical AI</a>
            </div>
          </div>
        </div>

        {/* <div className="footer-middle">
          <div className="compliance-badges">
            <div className="badge">ISO 27001</div>
            <div className="badge">GDPR Compliant</div>
            <div className="badge">CMMC Level 3</div>
            <div className="badge">NIST CSF</div>
          </div>
        </div> */}

        <div className="footer-bottom-professional">
          <p>© 2026 Techbrain Networks. All Rights Reserved. Protecting Global Interests.</p>
          <div className="footer-meta">
            <span>Secure Site</span>
            <span>•</span>
            <span>Last Updated: 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
