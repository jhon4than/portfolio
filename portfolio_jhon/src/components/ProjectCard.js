import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const handleClick = () => {
    console.log("cliquei aqui");
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" onClick={handleClick}>
          <h4>{title}</h4>
          <span>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >{description}</a>
          </span>
        </div>
      </div>
    </Col>
  );
};
