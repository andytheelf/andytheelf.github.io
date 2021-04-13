import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '../../index.css';

function Footer() {
    return(
        <footer className="footer" id="footer">
            <div className="">
            <ul className="social-links">
                <li><a href="https://www.linkedin.com/in/andreaballewprofile/">
                <FontAwesomeIcon icon={faLinkedin} size="lg"/></a> 
                </li>
                <li><a href="https://github.com/andytheelf">
                <FontAwesomeIcon icon={faGithub} size="lg"/></a> 
                </li>
                {/* <li><a href="">
                <FontAwesomeIcon icon={faStackOverflow}  size="lg"/></a> 
                </li> */}
            </ul>
           </div>
        </footer>
    )
}

export default Footer;
