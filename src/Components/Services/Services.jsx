import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.scss";
import { CodeBlock } from "@phosphor-icons/react";
import { servicesData } from "../../ServiceCardData";

const Services = () => {
  return (
    <div className="services-parent-wrapper">
      <div className="techstack-text-wrapper">
        <h4>SERVICES</h4>
      </div>
      {/* <ServiceCard
        text={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptate quisquam libero ipsum esse rerum reiciendis repellendus fugit labore illo. Harum exercitationem facere repellendus delectus, deserunt vero sit amet labore?"
        }
        title={"Naslov"}
        icon={<CodeBlock size={24} />}
      /> */}

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
  );
};

export default Services;
