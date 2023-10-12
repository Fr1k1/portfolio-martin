import "./ServiceCard.scss";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="service-card-wrapper">
      <div className="service-card-icon-title-wrapper">
        {icon && <div className="service-icon">{icon}</div>}
        <h4>{title}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
