import { motion } from "framer-motion";
import { technologies } from "../../TechnologiesData";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import "./TechStack.scss";

const TechStack = () => {
  return (
    <section className="techstack section" id="tech-stack">
      <div className="content-wrapper">
        <motion.div
          className="techstack-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-sub">
            Technologies I work with daily to build scalable systems and polished UIs.
          </p>
        </motion.div>

        <div className="tech-grid">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.82 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TechnologyCard icon={tech.icon} name={tech.name} category={tech.category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
