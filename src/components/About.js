// import React from 'react';
import './About.css';
import React, { useEffect, useRef } from 'react';

const About = () => {
  const imageRef = useRef(null); // Image reference
  const contentRef = useRef(null); // Content reference

  useEffect(() => {
    // IntersectionObserver setup
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // observer.unobserve(entry.target);
        }
      });
    });

    // Observe image and content elements
    if (imageRef.current) {
      observer.observe(imageRef.current)
    }
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => observer.disconnect();
  }, []);


  return (
    <>
      {/* About Me Section */}
      <div id='about-us' className="about-container">
        <div className="container">
          <div className="image-box" ref={imageRef}>
            <img src="/assets/about.png" alt="Profile" />
          </div>
          <div className="content-box" ref={contentRef}>
            <h1>About Me</h1>
            <h2>Hello! My Name Is Yash Nawale</h2>
            <p>
              I am a self-taught programmer with a passion for learning and exploring new
              technologies. I have a strong background in Frontend Development and improving
              Full-Stack Development skills. I am always eager to expand my skillset and take
              on new challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-container">
        <div className="feature-item">
          <div className="direction-start">
            <div className="left">
              <span className="feature-number">01</span>
              <h3 className="feature-heading">Dedication</h3>
            </div>
            <div className="right">
              <img className="feature-icon" src="/assets/icon1.png" alt="Dedication Icon" />
            </div>
          </div>
          <p className="feature-description">Dedication is the cornerstone of success, driving individuals to consistently strive for excellence and overcome challenges. It fuels perseverance, ensuring that every effort is focused towards achieving long-term goals with unwavering commitment.</p>
        </div>
        <div className="feature-item">
          <div className="direction-start">
            <div className="left">
              <span className="feature-number">02</span>
              <h3 className="feature-heading">Smart Work</h3>
            </div>
            <div className="right">
            <img className="feature-icon" src="/assets/smart-work.png" alt="Smart Work Icon" />
            </div>
          </div>
          <p className="feature-description">Smart work transforms hard work into efficiency by emphasizing quality over quantity. It enables you to work smarter, not harder, by utilizing resources wisely and achieving goals with precision and creativity</p>
        </div>
        <div className="feature-item">
          <div className="direction-start">
            <div className="left">
              <span className="feature-number">03</span>
              <h3 className="feature-heading">Intelligence</h3>
            </div>
            <div className="right">
            <img className="feature-icon" src="/assets/intelligence.png" alt="Intelligence Icon" />
            </div>
          </div>
          <p className="feature-description">Intelligence is the ability to adapt, learn, and apply knowledge to solve problems and make informed decisions. It empowers individuals to think critically, innovate, and navigate complex challenges with clarity and confidence.</p>
        </div>
      </div>
    </>
  );
};

export default About;
