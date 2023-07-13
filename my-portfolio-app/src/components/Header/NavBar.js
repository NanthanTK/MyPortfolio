import React from 'react';
import './style.css'; // Import the CSS file

const NavBar = ({ activeItem, handleItemClick }) => {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav">
        <li className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => handleItemClick('about')}>
            About Me
          </a>
        </li>
        <li className={`nav-item ${activeItem === 'projects' ? 'active' : ''}`}>
          <a href="#projects" className="nav-link" onClick={() => handleItemClick('projects')}>
            Projects
          </a>
        </li>
        <li className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}>
          <a href="#contact" className="nav-link" onClick={() => handleItemClick('contact')}>
            Contact
          </a>
        </li>
        <li className={`nav-item ${activeItem === 'resume' ? 'active' : ''}`}>
          <a href="#resume" className="nav-link" onClick={() => handleItemClick('resume')}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
