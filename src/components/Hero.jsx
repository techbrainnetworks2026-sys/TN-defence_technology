import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-professional">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content section-container">
        <div className="hero-badge reveal active">🛡️ ADVANCING GLOBAL SECURITY</div>
        <h1 className="hero-title reveal active">
          Next-Generation <br />
          <span className="text-gradient">Defence Technology ⚡</span>
        </h1>
        <p className="hero-subtitle reveal active">
          Empowering modern security forces with autonomous systems 🤖, 
          quantum-grade encryption 🔒, and real-time mission intelligence 🌐.
        </p>
        {/* <div className="hero-btns reveal active">
          <button className="btn-primary">Our Solutions 🚀</button>
          <button className="btn-outline">Learn More 📖</button>
        </div> */}
      </div>

      {/* <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
