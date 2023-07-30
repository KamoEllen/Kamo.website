import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './ProjectPage.css';
import picture1 from '../assets/projectimg.png';
import picture01 from '../assets/picture01.jpeg';
import picture02 from '../assets/picture02.jpeg';
import picture3 from '../assets/picture3.png';
import picture03 from '../assets/picture03.png';
import picture4 from '../assets/picture4.png';
import projectimg2 from '../assets/projectimg2.png';

const useStyles = makeStyles((theme) => ({
  projectPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  categoryButtons: {
    marginBottom: theme.spacing(2),
  },
  categoryButton: {
    marginRight: theme.spacing(2),
    borderRadius: '5px',
    textTransform: 'none',
    fontSize: '16px',
    padding: theme.spacing(1, 2),
  },
  activeButton: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  projectSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  projectLink: {
    textDecoration: 'none',
  },
  projectBlock: {
    width: '300px',
    height: '250px',
    margin: '0 auto 20px',
    position: 'relative',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.1) translateY(-8px)',
      boxShadow: '0 8px 16px rgb(0, 0, 0)',
    },
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
    transition: 'transform 0.3s ease',
    '&:hover': {
      height: '100%',
      objectFit: 'cover',
    },
  },
  projectInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '30%',
    padding: theme.spacing(1),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '0 0 8px 8px',
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 0,
    },
  },
  projectLinkClickme: {
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.palette.common.white,
    backgroundColor: 'rgba(0, 0, 0, 0.936)',
    padding: theme.spacing(2, 1),
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'background-color 0.2s ease',
    opacity: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&:hover': {
      opacity: 1,
    },
  },
  projectBlockTitle: {
    marginTop: theme.spacing(1),
  },
  projectBlockDescription: {
    fontSize: '14px',
  },
}));

const ProjectPage = () => {
  const classes = useStyles();

  // ... Your project data ...

  // Rest of the code remains the same...


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
