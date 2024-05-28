import React, { useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [highlightStyle, setHighlightStyle] = useState({
    top: "50%",
    left: "50%",
  });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setHighlightStyle({ top: `${y}px`, left: `${x}px` });
  };

  return (
    <Card className="project-card-view" onMouseMove={handleMouseMove}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <div className="highlight" style={highlightStyle}></div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <span>Stack:</span><br/>
          {props.stack}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <span>Features:</span><br/>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
