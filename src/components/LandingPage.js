import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import EllenImage from '../assets/Ellen.jpg';
import Header from './Header';
import ProjectPage from './ProjectPage';
import EllenKImage from '../assets/ellenk.jpg';
import EllenKKImage from '../assets/ellenkk.jpg';

const LandingPage = () => {

  const images = [EllenImage, EllenKImage, EllenKKImage];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the image index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up the interval on unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [images.length]);

  const [showMessage, setShowMessage] = useState(true);
  const [showContainers, setShowContainers] = useState(false);

  useEffect(() => {
    // Show the cute message for 3 seconds
    const messageTimeout = setTimeout(() => {
      setShowMessage(false);
      // After the message disappears, add the "darken" class to the landing-page
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
      {showMessage && <div className="cute-message">Hi, Glad You Could Make It</div>}
      <div className={`landing-page ${showContainers ? 'darken' : ''}`}>
        <div className={`container ${showContainers ? 'show' : ''}`}>
          
          <img src={images[currentImageIndex]} alt="Ellen Kganakga - UX Designer Web Developer" className="image-container" />


          <h1 className="text-white">Ellen Kganakga</h1>
        </div>
        <div className={`container ${showContainers ? 'show' : ''}`}>
        <div className="text-white" style={{ color: 'white' }}>
          <p>

            I embody the perfect blend of outgoing personality, a strong understanding of user needs, and the ability to serve as an effective middleman between customers, developers, and designers!
          </p>
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
      <div className="space-between">
        {/* Add more space between LandingPage and ProjectPage */}
      </div>
      <ProjectPage />
    </div>
  );
  

};

export default LandingPage;
