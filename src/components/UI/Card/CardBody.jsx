import React, { useState, useEffect } from 'react';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('src/components/UI/Card/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>Languages used: {project.languagesUsed.join(', ')}</p>
            <img src={project.imageUrl} alt={project.name} />
            <p><a href={project.repoUrl}>Application's Repo</a></p>
            <p><a href={project.deployedAppUrl}>Deployed App</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
