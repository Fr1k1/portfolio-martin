import { GithubLogo } from "@phosphor-icons/react";
import "./ProjectCard.scss";

const ProjectCard = ({ image, projectName, projectDescription }) => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="hover-content">
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>

        <div className="hover-content-icon-wrapper">
          <GithubLogo size={32} className="content-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
