import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function End(){
    return(
        <>
         <div className="end-container">
            <h2>Omar</h2>
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
            <p>--Copyrights 2024-- All Rights Reserved Here By Omar Khaled Ayad</p>
         </div>
        
        </>
    )
}

export default End;