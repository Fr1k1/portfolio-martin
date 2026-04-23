import "./TechnologyCard.scss";

const TechnologyCard = ({ logo, name, category }) => {
  return (
    <div className="tech-card glass">
      <img src={logo} alt={name} className="tech-logo" />
      <span className="tech-name">{name}</span>
      {category && <span className="tech-category">{category}</span>}
    </div>
  );
};

export default TechnologyCard;
