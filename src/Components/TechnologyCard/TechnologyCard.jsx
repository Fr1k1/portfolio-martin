import "./TechnologyCard.scss";
import PropTypes from "prop-types";

const TechnologyCard = ({ logo }) => {
  return (
    <div className="technology-card-wrapper">
      <img src={logo} alt="" />
    </div>
  );
};

TechnologyCard.propTypes = {
  logo: PropTypes.string,
};

export default TechnologyCard;
