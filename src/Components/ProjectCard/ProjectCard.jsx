import { GithubLogo } from "@phosphor-icons/react";
import "./ProjectCard.scss";
import PropTypes from "prop-types";

const ProjectCard = ({ image, projectName, projectDescription, link }) => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="hover-content">
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>

        <div className="hover-content-icon-wrapper">
          <a href={link} target="_blank" rel="noreferrer">
            <GithubLogo size={32} className="content-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCard;
