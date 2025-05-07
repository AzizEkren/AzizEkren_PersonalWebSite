import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <div className="content">
        <div className="project-item">
          <h3>SafeWay AI</h3>
          <p className="tech">React Native,Node JS,Tensorflow,MongoDB</p>
          <p className="description">
          Safeway AI is an AI-powered mobile application developed to enhance driver safety and minimize
           traffic accidents. By analyzing real-time data, the system monitors driver behavior and detects
            risky situations such as drowsiness, fatigue, and distraction, instantly alerting the user.
             It also provides post-drive performance reports to help users improve their driving habits.
              Ideal for both individual drivers and driving schools, Safeway AI combines the power of artificial
               intelligence with traffic safety.
          </p>
        </div>
        
        <div className="project-item">
          <h3>E-Commerce Platform</h3>
          <p className="tech">Kotlin,Tensorflow,Firebase</p>
          <p className="description">
          This mobile application aims to simplify student tracking for tutoring
          centers and provide personalized education through AI support.
          It will offer features such as recording student absences, tracking homework,
          analyzing practice exam results to deliver personalized feedback, and creating weekly
           study schedules tailored to each student.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects; 