import React from 'react';
import './Project1.css'; // Import the CSS file
import Header from './Header';
import Frame2162 from '../assets/Frame 2162 (1) (1).png';
import Group481784 from '../assets/Group 481784 (1).png';
import Group481776 from '../assets/Group 481776 (1).png';

const ProblemSolution = () => {
  const containerStyle = {
    
    color: '#000000',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    maxWidth: '100%',
    height: 'auto',
  };


  return (
    <div style={containerStyle}>
     <Header/>
     <div className="smolmargin">

      <br />
      <h5 className="important">PROBLEM</h5>
      <h1>The Problem in my home South Africa</h1>
      <p className="smaller">
        The high crime rate in South Africa, with approximately <span className="important">33.46 crimes per 100,000 </span>
        population, poses a significant challenge for law enforcement authorities as a considerable number of individuals
        become victims of crime on any given day.
      </p>

      <br />
      <br />
      <br />

      <h5 className="important">Solution</h5>
      <h1>Innovative Crime Solution: AppName</h1>
      <p>
        In response to the <span className="important">prevalent crime problem</span>, innovative apps like "<span className="important">AppName</span>"
        emerge as crucial solutions by offering <span className="important">essential support and assistance</span> to address these
        challenges directly. These apps play a vital role in ensuring the safety and well-being of individuals affected by crime,
        empowering them with necessary resources and access to support networks.
      </p>
      <hr />
      <br />

      {/* Add the image here */}

      <img src={Group481776} alt="" />

      <br />
      <br />
      <br />

      <br />
      <hr />
      <div className="timeline-container" style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>July - July 2023 (2 weeks)</h2>
          <p className="smaller" style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>
            Timeline
          </p>
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <h2 style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>My Role</h2>
          <p className="smaller" style={{ whiteSpace: 'pre-wrap' }}>UX Designer</p>
        </div>
      </div>

      <br />

      <h6>WHITE PAPER RESEARCH</h6>

      <p>
        Studies have shown that safety apps increase individuals' sense of security and confidence by 82%. Additionally,
        implementing safety apps and mobile technology for emergency response reduces response times by an average of 2 minutes.
        Journal of Emergency Medical Services and the International Journal of Medical Informatics
      </p>
      <br />
      <h6>Step 1: Understanding the Problem - Volunteer to Express Empathy</h6>
      <p>
        As a concerned citizen of South Africa, I acknowledge the high crime rate prevalent in the country. To tackle this problem
        effectively, I start by volunteering to understand the experiences and challenges faced by crime victims. I engage in
        conversations with individuals affected by crime, attend community meetings, and conduct thorough research to empathize
        with their struggles.
      </p>
      <br />
      <br />
      <h6>Step 2: Coming up with Ideas and Solutions - Designing for Efficiency and Speed</h6>
      <p>
        Inspired by the need for a proactive and efficient solution, I propose developing a user-friendly app called "You First" to
        address the safety concerns faced by individuals in South Africa. The app aims to provide immediate support and essential
        resources to users affected by crime, empowering them to take control of their safety.
      </p>
      <br />
      <br />
      <h6>Step 3 + 4: Deciding and Prototyping - 2 major improvements in my design </h6>
      <p>
        After brainstorming and evaluating various ideas, I finalize the concept of the app, "You First," and begin the process of
        designing the user interface (UI) prototype. I focus on creating efficient flows and visualizations that enhance clarity and
        functionality.
      </p>

      <img src={Frame2162} alt="" />


  <hr />
  <br />
  <br />

  <h6>Step 5: Round of Testing and Improvements - Enhancing Clarity and Functionality</h6>
  <p>
    To ensure the app's effectiveness and user satisfaction, I conduct rigorous testing and gather feedback from potential
    users. This feedback enables me to make improvements to the app's features, user interface, and overall functionality. I
    iterate on the prototype to enhance clarity and address any usability issues identified during testing.
  </p>

  <br />
  <br />
  <p>
    By following these steps, I am confident that I can develop a powerful app, "You First," which will contribute to improving
    the safety and well-being of individuals in South Africa. Through continuous refinement and active engagement with the
    community, I strive to create a solution that is efficient, user-friendly, and capable of making a positive impact on the
    crime rate in my home country.
  </p>

  <hr />
  <br />
  <br />

  <img src={Group481784} alt="" />
  <h6>Created with Figma</h6>
  <br />
  <div className="iframe-container">
    <iframe
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
      width="800"
      height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7IhwtFIJnyroL7loD3SZ6q%2FUntitled%3Ftype%3Ddesign%26node-id%3D1-19335%26t%3D06fmuJt1SVNC9QJm-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A19335%26mode%3Ddesign"
      allowFullScreen
    ></iframe>
  </div>
  </div>
</div>
);
};

export default ProblemSolution;
