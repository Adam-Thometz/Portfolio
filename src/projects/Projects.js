import React, { useCallback, useState } from "react";

import './Projects.css';

import Project from "./project/Project";
import Navbar from "../_components/navbar/Navbar";
import OrderToggle from "../_components/toggle/OrderToggle";

import reverseOrder from "../_utils/reverseOrder";
import projects from "../_data/projectInfo";

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState([...projects]);
  const [sortByMostRecent, setSortByMostRecent] = useState(true);

  const handleSort = useCallback(() => {
    setProjectInfo([...reverseOrder(projectInfo)]);
    setSortByMostRecent(state => !state);
  }, [projectInfo]);

  const projectDisplay = projectInfo.map(p => (
    <Project
      name={p.name}
      award={p.award}
      description={p.description}
      learnedHowTo={p.learnedHowTo}
      techStack={p.techStack}
      login={p.login}
      img={p.img}
      links={p.links}
    />
  ))

  return (
    <main className="Projects">
      <Navbar />
      <OrderToggle currToggle={sortByMostRecent} handleSort={handleSort} />
      <h1 className="Projects-header">Projects</h1>
      {projectDisplay}
      <a className="Projects-back" href="#nav">Back to navigation</a>
    </main>
  );
};

export default Projects;