import "./ServiceCard.scss";
import PropTypes from "prop-types";

const ServiceCard = ({ icon, title, text, background }) => {
  return (
    <div className="service-card-wrapper">
      <div className="service-card-icon-title-wrapper">
        {icon && (
          <div className="service-icon" style={{ backgroundColor: background }}>
            {icon}
          </div>
        )}
        <h4>{title}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
  background: PropTypes.string,
};

export default ServiceCard;
