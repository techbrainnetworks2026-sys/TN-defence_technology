import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-professional">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-info-side reveal">
            <h2 className="section-title">Strategic <br /> <span className="logo-accent">Inquiries</span></h2>
            <p className="contact-desc-professional">
              Partner with Techbrain Networks for industry-leading defense
              infrastructure solutions. Our team is available for technical
              consultations and mission-critical support.
            </p>

            <div className="contact-details-list">
              <div className="detail-item">
                <div className="detail-icon">✉</div>
                <div className="detail-text">
                  <span className="detail-label">Email Representation</span>
                  <a href="mailto:contact@techbrainnetworks.com">contact@techbrainnetworks.com</a>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">📞</div>
                <div className="detail-text">
                  <span className="detail-label">Global Direct Line</span>
                  <a href="tel:+918754906714">+91 8754 9067 14</a>
                </div>
              </div>
            </div>

            <div className="office-locations-grid">
              <div className="location-card glass-card">
                <h4 className="location-name">India Headquarters</h4>
                <p>6/12 Papa vaikal Street, Ayyampettai Post, Papanasam Taluk,Thanjavur 614201, Tamilnadu, India.</p>
              </div>
              <div className="location-card glass-card">
                <h4 className="location-name">United Kingdom Office</h4>
                <p>71-75 Shelton Street, Covent Garden,
                    London, WC2H 9JQ, United Kingdom.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-side reveal">
            <form className="professional-form glass-card">
              <h3 className="form-title">Consultation Request</h3>
              <div className="form-flex">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@company.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Organization</label>
                <input type="text" placeholder="Department of Defence / Company Name" />
              </div>
              <div className="form-group">
                <label>Message Requirements</label>
                <textarea rows="5" placeholder="How can we assist with your mission objectives?"></textarea>
              </div>
              <button type="submit" className="btn-primary full-width">Submit Request</button>
              <p className="form-note">
                Security disclosure: All data handled adheres to GDPR and ISO 27001 standards.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
