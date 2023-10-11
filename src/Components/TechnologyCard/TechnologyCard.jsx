import "./TechnologyCard.scss";

const TechnologyCard = ({ logo }) => {
  return (
    <div className="technology-card-wrapper">
      <img src={logo} alt="" />
    </div>
  );
};

export default TechnologyCard;
