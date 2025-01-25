import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";

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
              imgPath={project1}
              isBlog={false}
              title="Responsive Financial Analysis web Application"
              description="It is an interactive front-end webpage with a Machine Learning model for analyzing product sales based on user-defined constraints like time period and area. Built using Python's Streamlit library."
              ghLink="https://github.com/Dhanunjay03/FAFA.git"
              demoLink="https://loveyoufafa.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Department Learning Portal"
              description="Developed an educational webapp using MERN stack (MongoDB, Express.js, React.js, Node.js) Designed and implemented user interfaces for seamless navigation and optimal user experience. Integrated Bootstrap for responsive design, ensuring compatibility across devices and browsers. Implemented features allowing students to enroll in courses and enabling staff to create and manage courses."
              ghLink="https://github.com/dhanunjay03"
              demoLink="https://github.com/dhanunjay03"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Responsive E-Commerce webpage"
              description="It is an Interactive,dynamic and animated front-end webpage with back-end connectivity, created by using Basic HTML, CSS, JavaScript, JQuery, Nodejs and PHP"
              ghLink="https://github.com/dhanunjay03"
              demoLink="https://github.com/dhanunjay03"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
