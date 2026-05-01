import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "HedoraAI — AI-Powered Educational Analytics Platform",
      tech: "React · TypeScript · Node.js · Express · PostgreSQL · Prisma · React Native · Expo · Docker",
      description: `HedoraAI is a comprehensive AI-driven educational platform designed for tutoring centers to track, 
      analyze, and optimize student performance. The system features a full-stack web admin dashboard for educators 
      and a mobile application for students. Key features include:`,
      features: [
        "Automated exam import & analysis with learning outcome (kazanım) mapping",
        "AI-powered Wrong Prediction Score (WPS) algorithm that predicts the probability of a student answering incorrectly on specific topics",
        "Personalized weekly study programs with signal-based topic prioritization",
        "Real-time student performance dashboards with trend analysis",
        "Mobile app with Cosmic Aurora design system (React Native + Expo)",
        "Modular backend architecture with service/parser/route layers",
        "Production deployment with Docker Compose and Nginx"
      ],
      note: "Note: As this is a commercial project, the source code is private on GitHub. Projeler hakkında detaylı bilgi almak için iletişime geçebilirsiniz.",
      status: "🚀 In Production",
      role: "Lead Developer & System Architect"
    },
    {
      title: "Terzioğlu Hukuk Sistemi — Law Firm Management System",
      tech: "React · TypeScript · Node.js · Express · PostgreSQL · Prisma · Puppeteer · Docker · Nginx",
      description: `A comprehensive, enterprise-grade law firm management platform built for Terzioğlu Law Office. 
      The system digitizes and automates all aspects of legal practice management. Key modules include:`,
      features: [
        "Case & Enforcement (İcra) file management with TBB fee calculator",
        "Client (Müvekkil) and opposing party management with bulk Excel import",
        "Full financial system: cash/bank accounts, client ledgers (Cari), office expenses",
        "Document management: contracts, fee agreements, power of attorney, shipment tracking",
        "UETS (electronic notification) integration",
        "Role-based access control with granular permission system",
        "Calendar & task management with team assignment",
        "Hearing scheduler with automatic notification hub",
        "Production deployment via Docker multi-stage builds with Prisma migrations"
      ],
      note: "Note: As this is a commercial project, the source code is private on GitHub. Projeler hakkında detaylı bilgi almak için iletişime geçebilirsiniz.",
      status: "🚀 In Production",
      role: "Lead Developer & System Architect"
    },
    {
      title: "SafeWay AI — AI-Powered Driver Safety App",
      tech: "React Native · Node.js · TensorFlow · MongoDB",
      description: `SafeWay AI is an AI-powered mobile application developed to enhance driver safety and minimize 
      traffic accidents. By analyzing real-time data, the system monitors driver behavior and detects risky situations 
      such as drowsiness, fatigue, and distraction, instantly alerting the user. It also provides post-drive performance 
      reports to help users improve their driving habits.`,
      features: [],
      status: "📦 Completed",
      role: "Mobile Developer"
    }
  ];

  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <div className="content">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-meta">
                <span className="project-status">{project.status}</span>
                <span className="project-role">{project.role}</span>
              </div>
            </div>
            <p className="tech">{project.tech}</p>
            <p className="description">{project.description}</p>
            {project.features.length > 0 && (
              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            {project.note && (
              <p className="project-note">{project.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;