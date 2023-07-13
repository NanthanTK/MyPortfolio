import React, {useState} from "react";


function SingleProject({ title, description, imageUrl, projectUrl }) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '350px', height: '200px' }}
    >
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <img
          className={`card-img-top ${isHovered ? 'faint' : ''}`}
          src={imageUrl}
          alt={title}
          style={{ opacity: isHovered ? '0.2' : '1' }}
        />
        {isHovered && (
          <div className="card-img-overlay">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        )}
      </a>
    </div>
  );
};
export default SingleProject;