import "./ProjectCard.scss";
import PropTypes from "prop-types";

const ProjectCard = ({ image }) => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h1>Prc</h1>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
};

export default ProjectCard;
