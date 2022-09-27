import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import projectData from "./project-data";
import ProjectC from "./projectEl";
export default function Project(props) {
  const projects = projectData.project;
  const projectEl = projects.map((project) => {
    return (
      <ProjectC
        id={project.name}
        key={project.id}
        name={project.name}
        description={project.description}
        githubLink={project.githubLink}
        webLink={project.webLink}
        src={project.src}
      />
    );
  });
  return (
    <section className="project-section" id="work">
      <div className="project-section-headingbox">
        <span className="nav-no heading-no">02. </span>
        <p className="heading-territory" href="#">
          Projects I've Build
        </p>
        <ul className="project-list">{projectEl}</ul>
      </div>
    </section>
  );
}
