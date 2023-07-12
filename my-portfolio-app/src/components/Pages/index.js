import React, { useState } from 'react';
import NavBar from '../Header/NavBar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

const Pages = () => {
  const [activeItem, setActiveItem] = useState('about');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const renderPageContent = () => {
    switch (activeItem) {
      case 'about':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar activeItem={activeItem} handleItemClick={handleItemClick} />
      {renderPageContent()}
    </div>
  );
};

export default Pages;
