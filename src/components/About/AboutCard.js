import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      
          <p style={{ textAlign: "justify", fontSize: "20px" }}>
            Hi Everyone, I am <span className="purple">Akash Rajmane </span>
            from <span className="purple"> Akluj, Maharashtra, India.</span>
            <br />
            <br/>
            I am an experienced Software Developer with a passion for creating immersive user experience.
            <br/>
            I have strong knowledge in ReactJS, TypeScript, HTML5, CSS3, JavaScript (ECMAScript latest versions), Redux, NodeJS, Express, MongoDB, MySQL and I am aware of Web Content Accessibility Guidelines, optimization techniques, React Profiling, AWS S3 and AWS EC2.
            <br/>
            I also have a good sense of design and a willingness to learn new things.
          </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
