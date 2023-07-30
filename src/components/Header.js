import React from 'react';
import EllenKganakgaPDF from '../assets/Ellen Kganakga.pdf';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="default" className="header">
      <Toolbar>
        <div className="header-buttons">
          <Button variant="contained" color="primary" target="_blank" href="https://github.com/KamoEllen/Kamo.website">
            Check Website Code
          </Button>
        </div>
        <div className="header-links">
          <Button variant="contained" color="secondary" href={EllenKganakgaPDF} download>
            Resume
          </Button>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" href="https://www.linkedin.com/in/kamogelokganakga/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Button>
          <Button color="inherit" href="https://github.com/kamoellen" target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
          <Button color="inherit" href="https://www.behance.net/kamoellenkganakga" target="_blank" rel="noopener noreferrer">
            Behance
          </Button>
          <Button color="inherit" href="https://dribbble.com/KamogeloKganakga" target="_blank" rel="noopener noreferrer">
            Dribbble
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
