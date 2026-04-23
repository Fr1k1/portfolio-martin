import "./ServiceCard.scss";

const ServiceCard = ({ icon, title, text, color }) => {
  return (
    <div className="service-card glass">
      <div className="service-icon" style={{ background: `${color}20`, color }}>
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{text}</p>
    </div>
  );
};

export default ServiceCard;
