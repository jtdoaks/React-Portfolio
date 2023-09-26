import Project from "../components/Project";

export default function Portfolio() {
  const projects = [{
    id: 1,
    title: "project 1",
    description: "project 1 descrip",
    image: "https://placehold.co/400x200/png",
    deployedLink: "link",
    gitHubLink: "link"
  },
  {
    id: 2,
    title: "project 2",
    description: "project 2 descrip",
    image: "https://placehold.co/400x200/png",
    deployedLink: "link",
    gitHubLink: "link"
  },
  {
    id: 3,
    title: "project 3",
    description: "project 3 descrip",
    image: "https://placehold.co/400x200/png",
    deployedLink: "link",
    gitHubLink: "link"
  },
  {
    id: 4,
    title: "project 4",
    description: "project 4 descrip",
    image: "https://placehold.co/400x200/png",
    deployedLink: "link",
    gitHubLink: "link"
  },
  {
    id: 5,
    title: "project 5",
    description: "project 5 descrip",
    image: "https://placehold.co/400x200/png",
    deployedLink: "link",
    gitHubLink: "link"
  },
  {
    id: 6,
    title: "project 6",
    description: "project 6 descrip",
    image: "https://placehold.co/400x200/png",
    deployedLink: "link",
    gitHubLink: "link"
  },

  ]

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
}
