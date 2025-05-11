import React from 'react';
import './Education.css';
import sduLogo from '../assets/sdu.png';
import udemyLogo from '../assets/udemy.png';

function Education() {
  return (
    <div className="section education-section">
      <h2>Education</h2>
      <div className="edu-main-row">
        <img src={sduLogo} alt="Süleyman Demirel University" className="edu-main-logo" />
        <div className="edu-main-info">
          <h3>Bachelor of Computer Engineering</h3>
          <p className="institution">Süleyman Demirel University</p>
          <p className="year">2022 - Present</p>
          <div className="description">
          </div>
        </div>
      </div>
      <h2 className="cert-title">Online Certification</h2>
      <div className="cert-row">
        <img src={udemyLogo} alt="Udemy" className="cert-logo" />
        <div className="cert-info">
          <h3>Mobile Development with Kotlin</h3>
          <p className="institution">Udemy</p>
          <p className="year">2025</p>
          <a className="cert-link" href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3e08f73c-20d6-4870-b2f4-93a0b2a35b5b.pdf" target="_blank" rel="noopener noreferrer" title="View Certificate">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 1 7 7l-1 1a5 5 0 0 1-7-7"/><path d="M14 11a5 5 0 0 0-7-7l-1 1a5 5 0 0 0 7 7"/><line x1="8" y1="16" x2="16" y2="8"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education; 