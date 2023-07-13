import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

const Pages = ({activeItem}) => {
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
      {renderPageContent()}
    </div>
  );
};

export default Pages;
