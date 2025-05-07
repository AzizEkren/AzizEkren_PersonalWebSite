import React from 'react';
import './Skills.css';
import kotlinLogo from '../assets/kotlin.png';
import javaLogo from '../assets/java.png';
import jsLogo from '../assets/javascript.png';
import mysqlLogo from '../assets/mysql.png';
import firebaseLogo from '../assets/firebase.png';
import nodejsLogo from '../assets/nodejs.png';
import tensorflowLogo from '../assets/tensorflow.png';
import reactLogo from '../assets/react.png';
import reactNativeLogo from '../assets/reactnative.png';
import gitLogo from '../assets/git.png';
import githubLogo from '../assets/github.png';

const skillsData = [
  {
    title: 'Languages and Databases',
    items: [
      { name: 'Kotlin', logo: kotlinLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'TensorFlow', logo: tensorflowLogo },
      { name: 'React', logo: reactLogo },
      { name: 'React Native', logo: reactNativeLogo },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
    ],
  },
];

function Skills() {
  return (
    <div className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-content">
        {skillsData.map((category, idx) => (
          <div className="skills-block" key={idx}>
            <h3 className="skills-block-title">{category.title}</h3>
            <div className="skills-logos-row">
              {category.items.map((item, i) => (
                <div className="skill-logo-item" key={i}>
                  <img src={item.logo} alt={item.name} className="skill-logo-img" />
                  <span className="skill-logo-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills; 