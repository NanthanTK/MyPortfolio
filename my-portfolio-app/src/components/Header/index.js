import React from "react";
import NavBar from './NavBar';

const styles = {
    headerStyle: {
      background: 'grey',
    },
    headingStyle: {
      fontSize: '25px',
    },
  };

function Header({ activeItem, handleItemClick }) {
    return (
        <header style={styles.headerStyle} className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 style={styles.headingStyle}>Karun Thiyagarajah</h1>
            </div>
            <div className="col-md-6 text-md-end">
            <NavBar/>
            </div>
          </div>
        </div>
      </header>
    );
  }

export default Header;