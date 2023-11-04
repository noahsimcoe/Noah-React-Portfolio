import React, { useState, useEffect } from 'react';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/json/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="project-box">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>Technologies used: {project.languagesUsed.join(', ')}</p>
            <img src={project.imageUrl} alt={project.name} />
            <div className="links-container">
              <p><a href={project.repoUrl}>Repo</a></p>
              <p><a href={project.deployedAppUrl}>View</a></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
