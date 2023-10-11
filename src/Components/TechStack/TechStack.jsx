import "./TechStack.scss";
import { technologies } from "../../TechnologiesData";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

const TechStack = () => {
  return (
    <div className="techstack-parent-wrapper">
      <div className="techstack-text-wrapper">
        <h4>TECHSTACK</h4>
        <h5>+ more</h5>
      </div>

      <div className="techstack-wrapper">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            name={technology.name}
            logo={technology.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
