import React from 'react';
import './HomePage.css';  // Style sheet for the HomePage component
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css';


const HomePage = () => {
  const handleResumeClick = () => {

    window.open("/assets/yashupresume.pdf", '_blank');
  };

  return (
    <div className="home-container">
      <div className="left-content">
        <h1>Welcome to My<span>PORTFOLIO</span></h1>

        <p>I am a passionate and dedicated frontend developer with a strong foundation in HTML, CSS, JavaScript, and React. As a fresher, I bring enthusiasm and a commitment to delivering clean, responsive, and visually appealing websites. My educational background in computer science has equipped me with a solid understanding of programming principles and problem-solving skills.</p>
        <div className="buttons">
          <button  className="hire-me-btn">Hire Me</button>
          <button className="resume-btn" onClick={handleResumeClick}>My Resume</button>
        </div>
      </div>
      <div className="right-image">
        <img src="/assets/fresh.jpg" alt="My Portrait" />
      </div>
    

    </div>
  );
};

export default HomePage;
