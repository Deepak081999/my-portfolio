import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/portfolio.jpg";
import editor from "../../Assets/Projects/login1.jpg";
import chatify from "../../Assets/Projects/rajas.jpg";
import bitsOfCode from "../../Assets/Projects/shop-g.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Artisan Market online Ecommerce"
              description="The objectives of the thesis was to make a successful ecommerce of handicraft that were manufacture in Rajasthan."
              ghLink="https://github.com/Deepak081999/Artisan-market"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="shop-genie online Ecommerce"
              description="The Project is related to E-Commerce website. Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing"
              ghLink="https://github.com/Deepak081999/E-commerce"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Matrimonial website"
              description="Anything matrimonial has something to do with marriage or married people. A formal way to say 'wedding,' for example, would be 'matrimonial event."
              ghLink="https://github.com/Deepak081999/Matrimonial"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio"
              description="A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic."
              ghLink="https://github.com/Deepak081999/portfolio"
              demoLink="https://deepak081999.github.io/portfolio/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
