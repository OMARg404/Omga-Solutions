import { Col } from "react-bootstrap";
 // Assuming you create a separate CSS file for styles

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} className="project-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
