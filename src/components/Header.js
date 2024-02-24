import React from 'react';
import {NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "../App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
  const header_pages = ({isActive}) =>{
    return{
      color: isActive?"gold" : "white",
      fontSize : isActive? "34px": "30px",
      textDecoration : "none",
      fontWeight : isActive? "bold" : "normal"
    }
  }
  return (
    <div className='header'>
      <h2 className='header-logo'>OMAR</h2>
      <nav className='header-links'>
        <NavLink style={header_pages} to="home">Home</NavLink>
        <span className="nav-spacer"></span>
        <NavLink style={header_pages} to="skills">Skills</NavLink>
        <span className="nav-spacer"></span>
        <NavLink style={header_pages} to="projects">Projects</NavLink>
      </nav>     
      <ul className='header-profiles'>     
        <div className='header-profles-div'> 
          <a href="https://www.linkedin.com/in/omarayad13/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </a>
        </div>
        <div className='header-profles-div middle'>
          <a href="https://github.com/omarayadd" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </div>
        <div className='header-profles-div'>
          <a href="https://www.instagram.com/omarrkhaledd___/?hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
    </ul>
      <button className='header-button'>Let's Connect</button>
    </div>
  );
}

export default Header;

