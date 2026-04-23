import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import "./ProjectCard.scss";

const ProjectCard = ({ image, projectName, projectDescription, link, tags }) => {
  const isGithub = link && link.startsWith("https://github.com");

  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img src={image} alt={projectName} className="project-img" loading="lazy" />
      </div>

      <div className="project-overlay">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-desc">{projectDescription}</p>

        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="project-link">
            {isGithub ? (
              <><GithubLogo size={14} weight="bold" /> View Source</>
            ) : (
              <><ArrowUpRight size={14} weight="bold" /> Live Demo</>
            )}
          </a>
        )}
      </div>

      <div className="project-bar">
        <span className="project-bar-name">{projectName}</span>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="project-bar-btn" aria-label={`Open ${projectName}`}>
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
