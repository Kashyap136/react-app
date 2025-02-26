import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects] = useState([
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my work.",
      techStack: "React, CSS, JavaScript",
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce web app.",
      techStack: "React, Node.js, Express",
    },
  ]);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}

export default Projects;
