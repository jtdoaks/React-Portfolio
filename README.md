# React Portfolio
This project is a Progressive Web Application using webpack, service workers and manifest.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Project Overview

This project is a test of skills for creating a single page application using React.



## Links

- GitHub - https://github.com/jtdoaks/React-Portfolio to an external site. 

- Netifly - https://6514b5a104f8911701216ea6--lovely-pithivier-090e54.netlify.app/ to an external site. 


 <div className="col-md-4">
                <img src={image} className="project-img rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p> 
                </div>
                <div className="card-body container-fluid">
                    <a href={deployedLink} className="card-link">Demo App</a>
                    <a href={gitHubLink} className="card-link">GitHub Repo</a>
                </div>
            </div>

             return (
    <div>
      <h1>Portfolio Page</h1>
      {projects.map(project => (
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          deployedLink={project.deployedLink}
          gitHubLink={project.gitHubLink}
          key = {project.id}
        />
      ))}
    </div>
  );

   return (
        <div className="project-cards col-md-3 mb-4 mb-3" >
            <div className="row ">
                {projects.map((project, index) => (
                    <div key={index} className="projectCards">
                        <ProjectInfo
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            deployedLink={project.deployedLink}
                            gitHubLink={project.gitHubLink}
                        />
                    </div>
                ))}
            </div>

        </div>);