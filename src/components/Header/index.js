import React from "react";
import NavBar from './NavBar';
import './style.css'; // Import the CSS file


const Header = ({ activeItem, handleItemClick }) => {
  return (
    <header className="headerStyle">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex align-items-center">
            <div className="row">
              <div className="col-2">
                <img
                  src="/images/Avatar.jpg"
                  alt="my Avatar"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
              </div>
              <div className="col-10">
                <h1 className="headingStyle">Karun Thiyagarajah</h1>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-end">
            <NavBar activeItem={activeItem} handleItemClick={handleItemClick} />
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;
