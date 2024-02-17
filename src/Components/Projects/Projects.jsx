import "./Projects.scss";
import { projects } from "../../ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-parent-wrapper" id="projects">
        <div className="projects-text-wrapper">
          <h4>PROJECTS</h4>
          <a href="https://github.com/Fr1k1" target="blank">
            + more
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              name={project.name}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
