import React from 'react';

import './ProjectNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import projects from '../../projectInfo';

const ProjectNav = ({ currProject, setShownProject }) => {
  const exit = () => setShownProject(null);
  const move = e => {
    let projectIdx = projects.findIndex(p => p.name === currProject);
    projectIdx += +e.currentTarget.id;
    if (projectIdx < 0) projectIdx = projects.length-1;
    if (projectIdx >= projects.length) projectIdx = 0;
    
    const nextProject = projects[projectIdx];
    setShownProject(nextProject);
  };

  return (
    <nav className='ProjectNav'>
        <button id="-1" title="Previous" onClick={move}><FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="Project-exit" onClick={exit}>Back to projects</button>
        <button id="1" title="Next" onClick={move}><FontAwesomeIcon icon={faArrowRight} />
        </button>
    </nav>
  );
};

export default ProjectNav;