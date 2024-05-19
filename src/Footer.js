import React from "react";
import "../src/Footer.css";
import githubLogo from './github.png';
import linkedinLogo from './linkedin.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Nisha-Velmurugan" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/nisha-velmurugan/" target="_blank" rel="noopener noreferrer">
             <img src={linkedinLogo} alt="LinkedIn Logo" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CodeHive - Innovate. Collaborate. Elevate</p>
      </div>
    </footer>
  );
}

export default Footer;