import "./ProjectCard.scss";

const ProjectCard = ({ image, name }) => {
  return (
    <div className="project-card-wrapper">
      {/* <h3>{name}</h3> */}
      <div className="project-card-image-wrapper">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
