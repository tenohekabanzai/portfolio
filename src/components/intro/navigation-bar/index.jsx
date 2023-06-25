import React from 'react';
import "./style.scss";
import Arrow from "../../shared/arrow"
import logo from "../../../images/logo.png";
// import CallToAction from '../../shared/CallToAction';
import { scrollToSection } from "../../utils/helpers";
const Navigation = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="img" />
      </div>
      <div className="navigation">
        <span className="navigation-item">Skills</span>
        <span className="navigation-item">Portfolio</span>
        <span className="navigation-item">Blogs & Articles</span>
      </div>
      <button className="button" onClick={() => scrollToSection("contact")} >
        <span className="text">Contact Me</span> 
        <Arrow/> 
      </button>
      
    </div>
  );
}

export default Navigation;
