import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

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
    padding: theme.spacing(0, 2),
  },
  categoryButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  categoryButton: {
    textTransform: 'none',
    fontSize: '16px',
    padding: theme.spacing(1, 2),
    borderRadius: '5px',
    marginRight: theme.spacing(1),
  },
  activeButton: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  projectSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
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
  hideProjects: {
    display: 'none',
  },
}));

const ProjectPage = () => {
  const classes = useStyles();

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

  const [activeCategory, setActiveCategory] = useState('i design');

  const handleCategoryButtonClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={classes.projectPage}>
      <div className={classes.categoryButtons}>
        <Button
          className={`${classes.categoryButton} ${activeCategory === 'i design' && classes.activeButton}`}
          onClick={() => handleCategoryButtonClick('i design')}
        >
          I Design
        </Button>
        <Button
          className={`${classes.categoryButton} ${activeCategory === 'i build' && classes.activeButton}`}
          onClick={() => handleCategoryButtonClick('i build')}
        >
          I Build
        </Button>
      </div>
      <div className={`${classes.projectSection} ${activeCategory === 'i design' ? '' : classes.hideProjects}`}>
        {designProjects.map((project, index) => (
          <div key={index} className={classes.projectLink}>
            <Link to={project.figmaLink}>
              <div className={classes.projectBlock}>
                <img src={project.image} alt={project.title} className={classes.projectImage} />
                <div className={classes.projectInfo}>
                  <h3 className={classes.projectBlockTitle}>{project.title}</h3>
                  <p className={                   classes.projectBlockDescription}>{project.description}</p>
                </div>
                <div className={classes.projectLinkClickme}>Click Me</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={`${classes.projectSection} ${activeCategory === 'i build' ? '' : classes.hideProjects}`}>
        {buildProjects.map((project, index) => (
          <div key={index} className={classes.projectLink}>
            <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
              <div className={classes.projectBlock}>
                <img src={project.image} alt={project.title} className={classes.projectImage} />
                <div className={classes.projectInfo}>
                  <h3 className={classes.projectBlockTitle}>{project.title}</h3>
                  <p className={classes.projectBlockDescription}>{project.description}</p>
                </div>
                <div className={classes.projectLinkClickme}>Click Me</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

