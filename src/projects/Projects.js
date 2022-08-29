import React, { useCallback, useEffect, useState } from "react";
import projects from "./project-info";
import Project from "./Project";
import NavContact from "../_components/navbar-contact/NavContact";
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
      <OrderToggle currToggle={sortByMostRecent} handleSort={handleSort} />
      <a className="Projects-skip" href="#nav">Skip to navigation</a>
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
      <NavContact />
    </main>
  );
};

export default Projects;