import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div id='skills' className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        <div className="skill-box">
          <img src="/assets/html-icon.png" alt="HTML" />
          <h3>HTML</h3>
        </div>
        <div className="skill-box">
          <img src="/assets/css-icon.png" alt="CSS" />
          <h3>CSS</h3>
        </div>
        <div className="skill-box">
          <img src="/assets/js-icon.png" alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill-box">
          <img src="/assets/react-icon.png" alt="React" />
          <h3>React</h3>
        </div>
        <div className="skill-box">
          <img src="/assets/bootstrap-icon.png" alt="Webpack" />
          <h3>BootStrap</h3>
        </div>
        <div className="skill-box">
          <img src="/assets/java-icon.png" alt="Node.js" />
          <h3>Java</h3>
        </div>
        <div className="skill-box">
          <img src="/assets/mysql-icon.png" alt="Git" />
          <h3>MySQL</h3>
        </div>
        {/* <div className="skill-box">
          <img src="/assets/express-icon.png" alt="Express" />
          <h3>Express</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
