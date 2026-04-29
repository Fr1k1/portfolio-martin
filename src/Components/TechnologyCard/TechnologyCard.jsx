import { Icon } from "@iconify/react";
import "./TechnologyCard.scss";

const TechnologyCard = ({ icon, name, category }) => {
  return (
    <div className="tech-card glass">
      <Icon icon={icon} className="tech-logo" />
      <span className="tech-name">{name}</span>
      {category && <span className="tech-category">{category}</span>}
    </div>
  );
};

export default TechnologyCard;
