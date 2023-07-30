import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import EllenImage from '../assets/Ellen.jpg';
import Header from './Header';
import ProjectPage from './ProjectPage';
import EllenKImage from '../assets/ellenk.jpg';
import EllenKKImage from '../assets/ellenkk.jpg';

const useStyles = makeStyles((theme) => ({
  landingPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    backgroundColor: 'transparent',
    transition: 'background-color 3s ease',
  },
  container: {
    maxWidth: '400px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    transform: 'translateX(-100%)',
    opacity: 0,
    transition: 'transform 1s ease, opacity 1s ease',
  },
  imageContainer: {
    width: '300px',
    height: '500px',
  },
  message: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '10px 20px',
    borderRadius: '5px',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const images = [EllenImage, EllenKImage, EllenKKImage];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [showMessage, setShowMessage] = useState(true);
  const [showContainers, setShowContainers] = useState(false);

  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setShowMessage(false);
      const darkenTimeout = setTimeout(() => {
        setShowContainers(true);
      }, 1000);

      return () => {
        clearTimeout(darkenTimeout);
      };
    }, 3000);

    return () => {
      clearTimeout(messageTimeout);
    };
  }, []);

  return (
    <div>
      <Header />
      {showMessage && <div className={classes.message}>Hi, Glad You Could Make It</div>}
      <div className={`${classes.landingPage} ${showContainers ? classes.darken : ''}`}>
        <div className={`${classes.container} ${showContainers ? classes.show : ''}`}>
          <img src={images[currentImageIndex]} alt="Ellen Kganakga - UX Designer Web Developer" className={classes.imageContainer} />
          <h1 className="text-white">Ellen Kganakga</h1>
        </div>
        <div className={`${classes.container} ${showContainers ? classes.show : ''}`}>
          <div style={{ color: 'white' }}>
            <p>I embody the perfect blend of outgoing personality, a strong understanding of user needs, and the ability to serve as an effective middleman between customers, developers, and designers!</p>
            <h2>Skills:</h2>
            <ul>
              <li>Usability Testing</li>
              <li>User Experience (UX) Design</li>
              <li>User Interviews</li>
              <li>Prototyping</li>
              <li>Web Development Frameworks: React, Vue.js</li>
              <li>Visual Design: Adobe XD, Sketch, Figma</li>
              <li>Version Control: Git</li>
              <li>Responsive Web Design</li>
              <li>User Interface (UI) Design</li>
              <li>Cross-browser Compatibility</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-between"></div>
      <ProjectPage />
    </div>
  );
};

export default LandingPage;
