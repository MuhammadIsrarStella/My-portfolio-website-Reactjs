import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eCom from "../../Assets/Projects/E-com.png";
import jsomBlog from "../../Assets/Projects/jsomBlog.png";
import taskify from "../../Assets/Projects/Taskify.png";
import aF from "../../Assets/Projects/artisteeF.png";
import aA from "../../Assets/Projects/artisteeA.png";
import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
              imgPath={taskify}
              isBlog={false}
              title="HealtheConnections (HEC), Stella Technology"
              description=": An application that maps healthcare information based on standards and provides all 
              functionality of an HIE (Healthcare Information Exchange), including features to debug and
              visualize the flow "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="confidanthealth"
              description="We’re building the next-generation of virtual care, designed to maximize both provider experience and patient outcomes. Driven by personal experience and powered by deep subject matter expertise, the team at Confidant Health is focused on helping providers to deliver data-driven, person-centered virtual care.
              We’re committed to changing the behavioral health field and improving the wellbeing of the members and providers on the Confidant Health platform. We rally behind great outcomes and realize to achieve these we must set great providers up for success.."
              liveLink="https://www.confidanthealth.com/about-us"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="VERATO, Stella Technology"
              description="Played an important role in building a Back-end Patient module for a Universal Match Patient Index (UMPI), VERATO.."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Jsom Blog"
              description="It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like  api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button."
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Artistee Web"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
          
            /> 
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Artistee Admin Pannel"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
