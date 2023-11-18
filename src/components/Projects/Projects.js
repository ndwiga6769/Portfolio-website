import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Website"
              description="Discover a world of convenience and choice at our e-commerce hub. Shop the latest trends, explore diverse products, and indulge in seamless shopping experiences from the comfort of your screen."
              ghLink="https://github.com/ndwiga6769/e-commerce-app"
              demoLink="https://mopemada.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie-review-App"
              description="
              A movie review app serves as your go-to guide for film enthusiasts, offering comprehensive reviews, ratings, trailers, and personalized recommendations. From exploring new releases to discovering hidden gems, it's your cinema companion for informed decision-making and discovering your next favorite movie.."
              ghLink="https://github.com/ndwiga6769/Movie-review-app"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online Blog"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="#"
              demoLink="#"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
