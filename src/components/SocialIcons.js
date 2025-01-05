import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="icon-box">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </a>
      <a href="https://www.instagram.com/nawaleyash7208/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/yash-nawale-807851260/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
      <a href="https://github.com/Yashn12/youtube-clone" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="social-icon" />
      </a>
      
    </div>
  );
};

export default SocialIcons;
