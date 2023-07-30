import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';
import picture1 from '../assets/projectimg.png';
import picture01 from '../assets/picture01.jpeg';
import picture02 from '../assets/picture02.jpeg';
import picture3 from '../assets/picture3.png';
import picture03 from '../assets/picture03.png';
import picture4 from '../assets/picture4.png';

import projectimg2 from '../assets/projectimg2.png';

const ProjectPage = () => { 
  // ... Your project data ...
  const designProjects = [
    {
      title: 'Blog Platform UX/UI',
      description: 'Where every click reveals fascinating stories.',
      image: picture1,
      figmaLink: '/projectsolution1',
    },
    {
      title: 'Blog Platform UX/UI',
      description: 'Where every click reveals fascinating stories.',
      image: projectimg2,
      figmaLink: '/projectsolution2',
    },
    
    {
      title: 'UX Work',
      description: '',
      image: picture4,
      figmaLink: 'https://www.figma.com/proto/93X3VYg5IJeO4JdnbzFoSV/Portfolio?type=design&node-id=55-293&t=6WrTOCeidOaRavj1-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=55%3A293&show-proto-sidebar=1&mode=design',
    },

    {
      title: 'Owls - Donation',
      description: 'Together, We Can Secure Their Future!',
      image: picture3,
      figmaLink: 'https://www.figma.com/proto/FVf3j3ktt1Si9atbNq2QLd/OWLS-ENDANGERED?type=design&node-id=4-4&t=Ra3inQNMu58kxpAD-1&scaling=contain&page-id=0%3A1&mode=design',
    },
    

    // Add more design projects here...
  ];

  const buildProjects = [
    {
      title: 'Travel',
      description: '',
      image: picture01,
      figmaLink: 'https://tinyurl.com/travel2southafrica/',
    },
    {
      title: 'Blog',
      description: '',
      image: picture02,
      figmaLink: 'https://ornate-mousse-194f6f.netlify.app/',
    },
    {
      title: 'B2B Landing Page',
      description: '',
      image: picture03,
      figmaLink: 'https://tinyurl.com/B2Blandingpage',
    },

    // Add more build projects here...
  ];



  return (
    <div className="project-page" target="_blank">
      <div className="design-side project-section">
        <h2>I Design</h2>
        <br />
        {designProjects.map((project, index) => (
          <div key={index} className="project-link">
            <Link to={project.figmaLink}>
              <div className="project-block">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-link-clickme">
                  Click Me
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="build-side project-section">
        <h2>I Build</h2>
        <br />
        {buildProjects.map((project, index) => (
          <div key={index} className="project-link">
            <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
              <div className="project-block">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-link-clickme">
                  Click Me
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
