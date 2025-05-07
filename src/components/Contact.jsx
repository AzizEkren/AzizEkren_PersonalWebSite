import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="section contact-section">
      <h2>Contact Me</h2>
      <div className="content">
        <p>I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me through any of the following channels:</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:azizekren18@gmail.com">azizekren18@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p><a href="tel:+905537182116">+90 553 718 21 16</a></p>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <p><a href="https://linkedin.com/in/azizekren" target="_blank" rel="noopener noreferrer">linkedin.com/in/azizekren</a></p>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <p><a href="https://github.com/AzizEkren" target="_blank" rel="noopener noreferrer">github.com/AzizEkren</a></p>
          </div>
          <div className="contact-item">
            <h3>Instagram</h3>
            <p><a href="https://instagram.com/ekrenaziz" target="_blank" rel="noopener noreferrer">instagram.com/ekrenaziz</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 