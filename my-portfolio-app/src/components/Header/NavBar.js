import React from 'react';

const NavBar = ({ activeItem, handleItemClick }) => {
  return (
    <nav>
      <ul>
        <li className={activeItem === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleItemClick('about')}>
            About Me
          </a>
        </li>
        <li className={activeItem === 'projects' ? 'active' : ''}>
          <a href="#projects" onClick={() => handleItemClick('projects')}>
            Projects
          </a>
        </li>
        <li className={activeItem === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleItemClick('contact')}>
            Contact
          </a>
        </li>
        <li className={activeItem === 'resume' ? 'active' : ''}>
          <a href="#resume" onClick={() => handleItemClick('resume')}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
