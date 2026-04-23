import { motion } from "framer-motion";
import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "../../ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="content-wrapper">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-sub">
            A selection of projects I&apos;ve built — from hackathon winners to live production apps.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://github.com/Fr1k1"
            target="_blank"
            rel="noreferrer"
            className="projects-more"
          >
            <GithubLogo size={17} />
            View all projects on GitHub
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
