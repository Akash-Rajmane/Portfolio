import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ET from "../../Assets/Projects/Expesne-Tracker-Img.png";
import FP from "../../Assets/Projects/FavPlaces-Img.png";
import SM from "../../Assets/Projects/Students-Manager-Img.png";
import DC from "../../Assets/Projects/Disney+-Clone-Img.png";
import TL from "../../Assets/Projects/Todo-List-Img.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ET}
              isBlog={false}
              title="Expense Tracker"
              stack="ReactJS, HTML, CSS, JavaScript, React-Router-Dom, Razorpay Payment Gateway, NodeJS, ExpressJS, MySQL, Sequelize, JWT Authentication, nodemailer, AWS S3."
              description="User signup, login, reset password, logout and responsive web design.
              Add, Delete Expense.User can see Full Expense Report.
              Premium users can download Full Expense Report, see daily/weekly/monthly/yearly Expense Report, see previously downloaded files, see Expense Leaderboard."
              demoLink="https://expense-tracker-fs.netlify.app"
              ghLink="https://github.com/Akash-Rajmane/Expense-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FP}
              isBlog={false}
              title="FavPlaces"
              stack="ReactJS, HTML, CSS, JavaScript, React-Router-Dom, NodeJS, ExpressJS, MongoDB, JWT Authentication, Google Maps API"
              description="User signup, login, logout and responsive web design.
              User can Add, Edit, Delete places.
              User can see other users and their saved places.
              Automatic generation of map on inputting address."
              ghLink="https://github.com/Akash-Rajmane/FavPlaces-Front-End"
              demoLink="https://favplaces.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SM}
              isBlog={false}
              title="Students Manager"
              stack="ReactJS, Typescript, HTML, SCSS, JavaScript, React- Router-Dom, NodeJS, ExpressJS, MongoDB"
              description="Add, Edit, Delete student, Delete all students, Students Statistics.
              Sort students according to marks or attendance, download the students data from leaderboard.
              Show students data in the form of card, search students by name or roll number.
              It is a progressive, responsive web app."
              ghLink="https://github.com/Akash-Rajmane/Students-Manager-FrontEnd"
              demoLink="https://students-manager.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DC}
              isBlog={false}
              title="Disney+ Clone"
              task="ReactJS, HTML, SCSS, JavaScript, Redux Toolkit, React-Router-Dom, TMDB API, Firebase Authentication."
              description="Disney+ clone with cool, responsive user interface, firebase authentication.
              Search movies and tv shows.
              Movies or tv shows recommendations.
              Get details of movie or tv show and watch trailers, videos."
              ghLink="https://github.com/Akash-Rajmane/Disney-Plus"
              demoLink="https://disney-plus-reactjs.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TL}
              isBlog={false}
              title="Todo List"
              stack="ReactJS, Redux, HTML, CSS, React- Router-Dom"
              description="User can add, edit, delete todo.
              User can change the card-style.
              It is a responsive website.
              It is a progressive web app."
              ghLink="https://github.com/Akash-Rajmane/Todo-List"
              demoLink="https://todo-list-with-reactjs-redux.netlify.app/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
