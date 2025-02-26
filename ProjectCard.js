import React, { useState } from "react";

function ProjectCard({ project }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.techStack}</p>
      <button onClick={toggleDescription}>
        {showDescription ? "Hide Details" : "Show Details"}
      </button>
      {showDescription && <p>{project.description}</p>}
    </div>
  );
}

export default ProjectCard;
