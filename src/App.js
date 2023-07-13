import React, {useState} from "react";
import Header from './components/Header';
import Pages from './components/Pages';
import Footer from './components/Footer';



function App() {
    const [activeItem, setActiveItem] = useState('about');
    const handleItemClick = (item) => {
    setActiveItem(item);
};

    return (
      <div>
        <Header activeItem={activeItem} handleItemClick={handleItemClick} />
        <Pages activeItem={activeItem} handleItemClick={handleItemClick} />
        <Footer />
      </div>
    );
  }

export default App;