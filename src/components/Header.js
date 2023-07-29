import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import EllenKganakgaPDF from '../assets/Ellen Kganakga.pdf';

const Header = () => {
  return (
    <header className="header">
      <div className="header-buttons">
        <a href="https://github.com/kamoellen" target="_blank" rel="noopener noreferrer">
          <button>Check Website Code</button>
        </a>
       
      </div>
      <div className="header-links">
        <a href={EllenKganakgaPDF} download>Resume</a> {/* Add the "download" attribute to prompt the file download */}
        <a href="/" >Home</a>
        <a href="https://www.linkedin.com/in/kamogelokganakga/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/kamoellen" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.behance.net/kamoellenkganakga" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="https://dribbble.com/KamogeloKganakga" target="_blank" rel="noopener noreferrer">Dribbble</a>
      </div>
    </header>
  );
};

export default Header;
