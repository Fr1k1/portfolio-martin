import "./Experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ReactIcon from "../../assets/react.png";
import CSharpIcon from "../../assets/c_sharp.png";
import JavaScriptIcon from "../../assets/javascript.png";
import JavaIcon from "../../assets/java.png";

const Experience = () => {
  return (
    <div className="experience-wrapper" id="experience">
      <div className="techstack-text-wrapper">
        <h4>EXPERIENCE</h4>
      </div>
      <VerticalTimeline animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ display: "flex", alignItems: "center" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="November 2024 - present"
          iconStyle={{
            background: "rgba(29, 29, 29, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="experience-icon-wrapper">
              <img src={JavaIcon} style={{ height: "40px" }} alt="React Icon" />
            </div>
          }
        >
          <div className="vertical-timeline-element-content max-width">
            <h3 className="vertical-timeline-element-title">
              Java Backend developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Emil Frey Digital
            </h4>
            <p>
              Spring Boot, Quarkus, Kubernetes, Cross-country Pipelines, Large
              scale software development
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ display: "flex", alignItems: "center" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jun 2023 - November 2024"
          iconStyle={{
            background: "rgba(29, 29, 29, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="experience-icon-wrapper">
              <img
                src={ReactIcon}
                style={{ height: "40px" }}
                alt="React Icon"
              />
            </div>
          }
        >
          <div className="vertical-timeline-element-content max-width">
            <h3 className="vertical-timeline-element-title">React developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Deck99</h4>
            <p>
              Developing web apps using React, NextJS, developing Chrome
              extensions...
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ display: "flex", alignItems: "center" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="April 2023 - Jul 2023"
          iconStyle={{
            background: "rgba(29, 29, 29, 1)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="experience-icon-wrapper">
              <img
                src={ReactIcon}
                style={{ height: "40px" }}
                alt="React Icon"
              />
            </div>
          }
        >
          <div className="vertical-timeline-element-content max-width">
            <h3 className="vertical-timeline-element-title">React developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Speck</h4>
            <p>
              Speck academy apprenticeship- learning about async programming, JS
              and React JS
            </p>
            <p>Top 10 percent</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ display: "flex", alignItems: "center" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="April 2023 - Jun 2023"
          iconStyle={{
            background: "rgba(154, 154, 154, 1)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="experience-icon-wrapper">
              <img
                src={CSharpIcon}
                style={{ height: "40px" }}
                alt="React Icon"
              />
            </div>
          }
        >
          <div className="vertical-timeline-element-content max-width">
            <h3 className="vertical-timeline-element-title">.NET developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Faculty of organization and informatics Varaždin
            </h4>
            <p>Working on project ORKAN for managing fleets of UAV</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ display: "flex", alignItems: "center" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jul 2022 - Sept 2022"
          iconStyle={{
            background: "rgba(154, 154, 154, 1)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="experience-icon-wrapper">
              <img
                src={JavaScriptIcon}
                style={{ height: "40px" }}
                alt="React Icon"
              />
            </div>
          }
        >
          <div className="vertical-timeline-element-content max-width">
            <h3 className="vertical-timeline-element-title">
              Frontend developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SICK Mobilisis
            </h4>
            <p>
              Summer apprenticeship- developing an app for travel orders
              management using JS, jQuery, DevExtreme and SwaggerAPI
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
