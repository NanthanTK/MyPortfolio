import React from 'react';
import './style.css';
import facebook from "../../images/Facebook_icon.png"
import twitter from "../../images/twitter.png"
import linkedin from "../../images/linkedin.png"

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
                <img src={facebook} alt="facebook" style={{ width: '30px', height: '30px', marginRight: '10px'}}/>
              </a>
              <a href="#" className="link">
                <img src={twitter} alt="twitter" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
              </a>
              <a href="#" className="link">
                <img src={linkedin} alt="linkedin" style={{ width: '30px', height: '30px', marginRight: '10px'}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
