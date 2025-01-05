import React, { useState } from 'react';
import './Header.css'; // Styling ke liye
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className={showMenu ? "menu-mobile active" : "menu-web"}>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about-us" smooth={true} duration={500}>About Us</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="ham-menu">
        <button onClick={handleButtonToggle}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/assets/yashlogo.png" alt="yash" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
