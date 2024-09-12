import "./TechStack.scss";
import { technologies } from "../../TechnologiesData";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="techstack-parent-wrapper" id="tech-stack">
        <div className="techstack-text-wrapper">
          <h4>TECHSTACK</h4>
        </div>

        <div className="techstack-wrapper">
          {technologies.map((technology, index) => (
            <TechnologyCard
              key={index}
              name={technology.name}
              logo={technology.logo}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
