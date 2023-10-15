import "./ServiceCard.scss";

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

export default ServiceCard;
