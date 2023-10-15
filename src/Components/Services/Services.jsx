import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.scss";
import { servicesData } from "../../ServiceCardData";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="services-parent-wrapper" id="services">
        <div className="techstack-text-wrapper">
          <h4>SERVICES</h4>
        </div>

        <div className="services-wrapper">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
