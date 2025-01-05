import React from 'react'
import './Projects.css'

function Projects() {
  return (
    
    <div id='projects' className="projects-container">
    <h2 className="projects-heading">My Projects</h2>
    <div className="projects-row">
      <div className="project-item">
        <img src="/assets/project1.png" alt="Project 1" />
        <h3>Youtube Clone</h3>
        <p>My YouTube project is a front-end application showcasing a dynamic video platform inspired by YouTube. It features a responsive design with components like a header, sidebar, recommended video section, and a search page, delivering a seamless user experience</p>
      </div>
      <div className="project-item">
        <img src="/assets/project2.png" alt="Project 2" />
        <h3>EasyCart</h3>
        <p>The Easy Cart project, developed using WordPress, is a user-friendly and efficient e-commerce solution designed to simplify online shopping. Featuring seamless navigation, secure payment integration, and customizable product listings, it ensures a smooth and engaging experience for both customers and business owners</p>
      </div>
      <div className="project-item">
        <img src="/assets/project3.png" alt="Project 3" />
        <h3>SafeCam</h3>
        <p>Safecam is a modern and responsive portfolio website showcasing innovative camera designs and features. Built using HTML, CSS, JavaScript, and Bootstrap, it delivers a seamless user experience across all devices. The website highlights cutting-edge technology and aesthetics, reflecting professionalism and creativity.</p>
      </div>
    </div>
      
  </div>
   
  )
}

export default Projects
