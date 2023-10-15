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
    </motion.div>
  );
};

export default Projects;
