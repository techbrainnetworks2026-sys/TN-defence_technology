import React from 'react';
import { services } from '../data/services';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-professional">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">Core <span className="logo-accent">Capabilities</span></h2>
          <p className="section-desc">
            Leveraging cutting-edge engineering to deliver excellence across the full lifecycle 
            of defense technology development.
          </p>
        </div>

        <div className="services-grid-professional">
          {services.map((service) => (
            <div key={service.id} className="service-card-professional glass-card reveal">
              <div className="service-icon-box">
                <div className="service-icon-inner">{service.title[0]}</div>
              </div>
              <h3 className="service-name-professional">{service.title}</h3>
              <p className="service-desc-professional">{service.description}</p>
              <div className="service-features-list">
                <span>Precision Engineering</span>
                <span>Mission Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
