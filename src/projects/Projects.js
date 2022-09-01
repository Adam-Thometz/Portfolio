import React, { useCallback, useEffect, useState } from "react";
import projects from "../_data/projectInfo";
import Project from "./project/Project";
import Navbar from "../_components/navbar/Navbar";
import './Projects.css'
import OrderToggle from "../_components/toggle/OrderToggle";

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(projects);
  const [sortByMostRecent, setSortByMostRecent] = useState(true);

  const handleSort = useCallback(() => setSortByMostRecent(state => !state), []);

  useEffect(() => {
    function reverseOrder(projects) {
      let start = 0, end = projects.length-1;
      while (start < end) {
        [projects[start], projects[end]] = [projects[end], projects[start]];
        start++;
        end--;
      };
      return projects;
    };
    setProjectInfo(reverseOrder(projectInfo));
  }, [sortByMostRecent, projectInfo]);

  return (
    <main className="Projects">
      <Navbar />
      <OrderToggle currToggle={sortByMostRecent} handleSort={handleSort} />
      <h1 className="Projects-header">Projects</h1>
      {projectInfo.map(p => (
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
      ))}
      <a className="Projects-back" href="#nav">Back to navigation</a>
    </main>
  );
};

export default Projects;