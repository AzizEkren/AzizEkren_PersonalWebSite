import React from 'react';
import './SocialIcons.css';

function SocialIcons() {
  
  const socialLinks = {
    linkedin: "https://linkedin.com/in/azizekren",  
    github: "https://github.com/AzizEkren",  
    google: "mailto:azizekren18@gmail.com",
    instagram: "https://instagram.com/ekrenaziz"
  };

  return (
    <div className="social-icons">
      <a 
        href={socialLinks.linkedin} 
        className="icon linkedin" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn Profili"
      >
        <i className="linkedin-icon"></i>
      </a>
      <a 
        href={socialLinks.github} 
        className="icon github" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub Profili"
      >
        <i className="github-icon"></i>
      </a>
      <a 
        href={socialLinks.google} 
        className="icon google"
        rel="noopener noreferrer"
        aria-label="E-posta Gönder"
      >
        <i className="google-icon"></i>
      </a>
      <a 
        href={socialLinks.instagram} 
        className="icon instagram" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram Profili"
      >
        <i className="instagram-icon"></i>
      </a>
    </div>
  );
}

export default SocialIcons; 