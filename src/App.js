import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from './/components/ProjectPage';
import ProblemSolution from './/components/ProblemSolution';
import LandingPage from './components/LandingPage';
import ProblemSolutionn from './components/ProblemSolution2';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/projectsolution1" element={<ProblemSolution />} />
        <Route path="/projectsolution2" element={<ProblemSolutionn />} />
      </Routes>
    </Router>
  );
};

export default App;
