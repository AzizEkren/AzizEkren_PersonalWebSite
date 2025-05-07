import React from 'react';
import profilePhoto from '../assets/profil.jpg';
import './About.css';

function About() {
  const interests = [
    { 
      title: "Software Development",
      icon: <div className="interest-icon-container software-dev">
              <span role="img" aria-label="Software Development">🌐</span>
            </div>,
      color: "#FFD700"
    },
    { 
      title: "Algorithms",
      icon: <div className="interest-icon-container algorithms">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>,
      color: "#2196F3"
    },
    { 
      title: "Mobile Development",
      icon: <div className="interest-icon-container mobile-dev">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12" y2="18"></line>
              </svg>
            </div>,
      color: "#E91E63"
    },
    { 
      title: "Artificial Intelligence",
      icon: <div className="interest-icon-container ai">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                <path d="M12 6a1 1 0 0 0-1 1v4a1 1 0 0 0 .55.89l3 1.5a1 1 0 0 0 .9-1.78L13 10.28V7a1 1 0 0 0-1-1z"></path>
              </svg>
            </div>,
      color: "#9C27B0"
    },
    { 
      title: "Computer Engineering",
      icon: <div className="interest-icon-container comp-eng">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M9 16h6"></path>
                <path d="M12 8v8"></path>
              </svg>
            </div>,
      color: "#F44336"
    },
    { 
      title: "Web Programming",
      icon: <div className="interest-icon-container web-dev">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M18 10h-4v4h4v-4z"></path>
                <circle cx="6" cy="6" r="2"></circle>
                <line x1="6" y1="10" x2="6" y2="18"></line>
                <line x1="10" y1="6" x2="18" y2="6"></line>
              </svg>
            </div>,
      color: "#00BCD4"
    }
  ];

  return (
    <div className="about-fullpage">
      <div className="about-header">
        <h1>Aziz Ekren</h1>
      </div>
      
      <div className="about-main-content">
        <div className="profile-image-section">
          <img src={profilePhoto} alt="Aziz Ekren" />
        </div>
        
        <div className="profile-info-section">
          <p className="profile-bio">
          Hello, I'm Aziz Ekren, a 22-year-old third-year Computer Engineering student at Süleyman Demirel University.
          I’m actively involved in mobile application development, with a particular focus on building AI-powered
          mobile apps. In addition to that, I’m also interested in web technologies. Currently, my team and I are
          working on an AI-powered mobile application that we believe can solve an industrial-scale problem.
           You can check out my projects to learn more about the app.          
           </p>
          
          <div className="personal-info-grid">
            <div className="info-item">
              <span className="info-icon">📅</span>
              <div className="info-content">
                <span className="info-label">Date of Birth:</span>
                <span className="info-value">October 1, 2003</span>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-content">
                <span className="info-label">City:</span>
                <span className="info-value">Bursa, TR</span>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div className="info-content">
                <span className="info-label">Phone:</span>
                <span className="info-value">+90 553 718 21 16</span>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div className="info-content">
                <span className="info-label">Email:</span>
                <span className="info-value">azizekren18@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="interests-section">
        <div className="interests-header">
          <h2>INTERESTS</h2>
          <div className="header-line"></div>
        </div>
        
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-box">
              <div className="interest-icon" style={{color: interest.color}}>
                {interest.icon}
              </div>
              <h3 className="interest-title">{interest.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About; 