import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-professional">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-image-side reveal">
            <div className="main-about-img">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Defence Technology R&D" />
            </div>
            <div className="about-stat-overlay glass-card">
              <div className="stat-num">24+</div>
              <div className="stat-label">Years of Innovation</div>
            </div>
          </div>
          
          <div className="about-content-side reveal">
            <span className="section-badge">🏢 ABOUT TECHBRAIN</span>
            <h2 className="section-title">Redefining <br />Autonomous <span className="logo-accent">Defence 🦅</span></h2>
            <p className="about-lead">
              At Techbrain Networks, we engineer the digital backbone of modern security operations. 
              Our focus is on delivering mission-critical infrastructure that excels in the most 
              challenging environments. 🌍
            </p>
            
            <div className="vmp-professional-grid">
              <div className="vmp-item">
                <div className="vmp-icon">👁️</div>
                <div className="vmp-text">
                  <h3>Our Vision</h3>
                  <p>A globally secure landscape enabled by intelligent, human-centric technology.</p>
                </div>
              </div>
              <div className="vmp-item">
                <div className="vmp-icon">🎯</div>
                <div className="vmp-text">
                  <h3>Our Mission</h3>
                  <p>To provide defense forces with the most reliable and advanced tactical software tools.</p>
                </div>
              </div>
              <div className="vmp-item">
                <div className="vmp-icon">🔥</div>
                <div className="vmp-text">
                  <h3>Our Passion</h3>
                  <p>Engineering excellence that empowers security forces with next-generation tactical superiority.</p>
                </div>
              </div>
            </div>

            {/* <div className="about-cta-row">
              <button className="btn-primary">Company Profile</button>
               
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
