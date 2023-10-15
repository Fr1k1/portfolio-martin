import "./ProjectCard.scss";

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

export default ProjectCard;
