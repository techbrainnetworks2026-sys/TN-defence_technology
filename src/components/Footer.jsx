import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const privacyPoints = [
    "Government and Defense-Level Security: All personal and organizational telemetry data is stored, processed, and maintained in complete alignment with zero-trust security guidelines and classified military data standards.",
    "Telemetry and Sensor Anonymization: System performance, network, and hardware sensor variables gathered through our platforms are fully anonymized at the source, preventing any identity or tracking leakage.",
    "Advanced Cryptographic Protection: Every datastream, whether in transit across military networks or stored at rest on our secure cloud instances, is shielded using post-quantum hybrid and AES-256 encryption.",
    "Strict Non-Disclosure Policy: Techbrain Networks operates under a zero-third-party policy; we never sell, lease, trade, or share any user or organizational data with commercial ad services or foreign agencies.",
    "Legitimate Government Access Controls: Data disclosure to sovereign entities is strictly limited to authorized national defense agencies under verified legal warrants and established diplomatic protocols.",
    "Isolated Sovereign Air-Gapping: Defense and government clients have the option of complete physical and network isolation (air-gapping) to contain all data processing within their geographical boundaries.",
    "Comprehensive Operational Audit Logs: Users can request transparent, real-time reports detailing exactly when, how, and by which authorized operational commands their system logs were accessed.",
    "Right to Permanent Eradication: In compliance with modern global data protection frameworks, clients can request the permanent, unrecoverable, and absolute shredding of all stored operational archives.",
    "Real-Time Security Event Alerts: In the rare event of a suspected perimeter probe or cyber intrusion, affected client organizations are notified via encrypted emergency channels within 15 minutes.",
    "Global Compliance and Operations Monitoring: We maintain dedicated, certified Security Operations and Data Protection officers who continuously monitor and enforce global regulatory compliance."
  ];

  const termsPoints = [
    "Restricted Export Control Compliance: The purchase, deployment, and use of all Techbrain platforms are strictly governed by national defense trade controls, ITAR, and relevant allied export control regulations.",
    "Authorized Military and Enterprise Use: Our platforms, digital twins, and systems are reserved exclusively for vetted government agencies, military organizations, and certified defense contractors.",
    "Absolute Prohibition on Reverse Engineering: Users are strictly forbidden from decompiling, reverse engineering, disassembling, or extracting source code, algorithms, and firmware signatures.",
    "Zero Tolerance for Unauthorized Penetration: Any unauthorized scanning, vulnerability probing, or exploit testing of our cloud systems or network infrastructure will trigger immediate legal prosecution.",
    "Autonomous Operations Safety Guidelines: All automated swarm intelligence and kinetic wargaming systems must be operated within human-supervised parameters in alignment with international military rules.",
    "Hardware and Software License Limitations: Product licenses are non-transferable, non-sublicensable, and strictly tied to specific physical deployments, command nodes, or authorized cloud environments.",
    "Decision Support and Analytics Disclaimer: All predictive analytics and wargame course-of-action recommendations are decision-support aids; final operational responsibility remains entirely with human commanders.",
    "Immediate Termination for Safety Violations: Techbrain Networks reserves the absolute right to disable remote software access and terminate support services instantly upon any breach of safety agreements.",
    "Sovereign Legal Jurisdiction: All disputes, legal actions, and contractual obligations arising from product use are governed exclusively under the jurisdiction of our primary corporate headquarters' national laws.",
    "System Modification and Warranty Limits: Any unauthorized manual alteration of hardware shells or custom software modifications voids all system warranties and releases Techbrain from all operational liabilities."
  ];

  return (
    <footer className="footer-professional">
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">TECHBRAIN NETWORKS</span>
              <span className="logo-accent">DEFENCE TECHNOLOGY</span>
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
          </div>
        </div>

        <div className="footer-bottom-professional">
          <p>© 2026 Techbrain Networks. All Rights Reserved. Protecting Global Interests.</p>
          <div className="footer-meta">
            <button onClick={() => setActiveModal('privacy')} className="footer-btn-link">Privacy Policy</button>
            <span className="meta-separator">•</span>
            <button onClick={() => setActiveModal('terms')} className="footer-btn-link">Terms & Conditions</button>
            <span className="meta-separator">•</span>
            <span>Secure Site</span>
            <span className="meta-separator">•</span>
            <span>Last Updated: 2026</span>
          </div>
        </div>
      </div>

      {/* Modern Glassmorphic Overlay Modal */}
      {activeModal && (
        <div className="legal-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="legal-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="legal-modal-header">
              <h3>
                {activeModal === 'privacy' ? '🛡️ Privacy Policy (10-Point Framework)' : '📋 Terms & Conditions (10-Point Charter)'}
              </h3>
              <button className="legal-modal-close" onClick={() => setActiveModal(null)}>×</button>
            </div>
            <div className="legal-modal-body">
              <ol className="legal-points-ol">
                {(activeModal === 'privacy' ? privacyPoints : termsPoints).map((point, index) => {
                  const [title, desc] = point.split(': ');
                  return (
                    <li key={index} className="legal-point-li">
                      <strong className="legal-point-title">{title}</strong>
                      <span className="legal-point-desc">{desc}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="legal-modal-footer">
              <button className="btn-outline-small" onClick={() => setActiveModal(null)}>Acknowledge & Close</button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
