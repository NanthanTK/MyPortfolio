import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer footerrStyle" >
      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-6">
            
            <a href="https://github.com" className="link">
              GitHub Repository
            </a>
          </div>
        </div>  
        <div className ="row justify-content-center">
          <div className="col-md-6">
            
            <div className="icon-container">
              <a href="#" className="link">
                <img src="/images/Facebook_icon.png" alt="facebook" style={{ width: '30px', height: '30px', marginRight: '10px'}}/>
              </a>
              <a href="#" className="link">
                <img src="/images/twitter.png" alt="twitter" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
              </a>
              <a href="#" className="link">
                <img src="/images/linkedin.png" alt="linkedin" style={{ width: '30px', height: '30px', marginRight: '10px'}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
