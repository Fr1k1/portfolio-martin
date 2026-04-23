import { motion } from "framer-motion";
import { servicesData } from "../../ServiceCardData";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="content-wrapper">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">What I Do</h2>
          <p className="section-sub">
            Areas where I bring the most value — from architecting backends to shipping polished frontends.
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
