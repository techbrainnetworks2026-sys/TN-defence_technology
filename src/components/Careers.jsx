import React from 'react';
import './Careers.css';

const jobs = [
  { title: "Android Developer", skill: "Java, Kotlin", location: "Remote / Hybrid" },
  { title: "CAD/CAM Designer", skill: "Solidworks", location: "India" },
  { title: "DFT Engineer", skill: "DFT Methodologies, ATPG, JTAG", location: "UK" },
  { title: "FARM-stack Developer", skill: "FastAPI, ReactJs, MongoDB", location: "Remote" },
  { title: "FPGA Designer", skill: "VHDL, modelsim, xilinx vivado", location: "India" },
  { title: "Hardware Design & Testing", skill: "C, Embedded C, RTOS, Kicad", location: "India" },
  { title: "IOS Developer", skill: "Swift", location: "Remote" },
  { title: "Machine Learning Engineer", skill: "Python, Keras, Opencv, Scikit, Tensorflow", location: "Remote" }
];

const Careers = () => {
  return (
    <section id="careers" className="careers-professional">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">Join Our <span className="logo-accent">Global Team</span></h2>
          <p className="section-desc">
            We are looking for visionary engineers and thinkers to help us build 
            the future of global security infrastructure.
          </p>
        </div>

        <div className="careers-list-professional">
          {jobs.map((job, index) => (
            <div key={index} className="career-item-professional glass-card reveal">
              <div className="career-main-info">
                <h3 className="job-title-professional">{job.title}</h3>
                <p className="job-skills-professional">{job.skill}</p>
              </div>
              <div className="career-meta-info">
                <span className="job-location">{job.location}</span>
                <button className="btn-outline-small">Apply Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="careers-footer reveal">
          <p>Don't see a role for you? <a href="#contact" className="logo-accent">Send us your CV</a> anyway.</p>
        </div>
      </div>
    </section>
  );
};

export default Careers;
