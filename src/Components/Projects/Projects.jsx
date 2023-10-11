import "./Projects.scss";
import { projects } from "../../ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="projects-parent-wrapper">
      <div className="projects-text-wrapper">
        <h4>PROJECTS</h4>
        <h5>+ more</h5>
      </div>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
