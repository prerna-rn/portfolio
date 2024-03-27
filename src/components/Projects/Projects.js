import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Particle from "./Particle";
import uni from './uni.png';
import canteen from './canteen.png';
import edu from './edu.png';
import fest from './fest.png';
import file from './file.png';
import fitcom from './fitcom.png';
import linkedin from './linkedin.png';
import weather from './weather.png';

export const Projects = () => {

  const projects = [
    {
      imgPath: edu,
      title: "EduSangam",
      description: `A full-stack website to revolutionize education by blending traditional and online. Leveraged technology, real-time data, and personalized approaches to enhance individual student
      performance and address challenges in larger classroom settings. 
      I worked on integrating ML models with the website using Flask. Developed a chatbot and
      collaborated on developing accurate ML algorithms.`,
      ghLink: "https://github.com/prerna-rn/GyaanSaathi",
      // demoLink: "https://prerna-rn.github.io/igdtuw/",
    },
    {
      imgPath: uni,
      title: "University Website",
      description: "A university website developed using HTML, CSS, JS. Backend is handled via PHP and MYSQL. Has a landing page, chatbot, and login system for students. Students can view their marks, attendance, and other details on the dashboard. The dashboard has light and dark mode.",
      ghLink: "https://github.com/prerna-rn/igdtuw",
      demoLink: "https://prerna-rn.github.io/igdtuw/",
    },
    {
      imgPath: weather,
      title: "The Weather Stalker",
      description: "A weather app developed using React.js. The app utilises Geolocation API to automatically detect user's current location and forecast weather. Weather data is fetched from the OpenWeatherMap API. The user can search for any city and view the weather details. The app also displays the weather forecast for the next 5 days.",
      ghLink: "https://github.com/prerna-rn/the-weather-stalker/",
      demoLink: "https://prerna-rn.github.io/the-weather-stalker/",
    },
    {
      imgPath: linkedin,
      title: "LinkedIn Post Recommender System",
      description: "Developed a highly effective post recommender system for LinkedIn with BERT, a Transformer model, achieving an average accuracy of 97%. Hosted on Streamlit. It is a supplement to my research paper titled, Evaluating Bert and GPT-2 Models for Personalised Linkedin Post Recommendation. It is published in IEEE Xplore as part of the Proceedings for the 14th International Conference on Computing,Communication, and Networking Technologies 2023 (ICCCNT). DOI-10.1109/ICCCNT56998.2023.10307957 ",
      ghLink: "https://github.com/prerna-rn/LinkedIn-BERT-Post-Recommender-System",
      demoLink: "https://prerna-rn-linkedin-bert-post-recommender-system.streamlit.app/",
    },
    {
      imgPath: fitcom,
      title: "FitCom",
      description: "I designed the frontend of the website using HTML, CSS, and JavaScript. The website is for a game which aims at traveling smarter with reduced carbon emissions. The user is rewarded with points for using sustainable modes of transport. The website has a login system, a dashboard to view points, and a leaderboard to view the top scorers.",
      ghLink: "https://github.com/prerna-rn/FitCom",
      // demoLink: "https://prerna-rn.github.io/igdtuw/",
    },
    {
      imgPath: file,
      title: "File Friend",
      description: "Deployed a conversational A.I. chat bot to generate answers to user’s question about their uploaded PDF or CSV file using LangChain and Large Language Models, having more than 95% accuracy by generating embedding space of PDF files and retrieving answers.",
      ghLink: "https://github.com/prerna-rn/File-Friend",
      // demoLink: "https://prerna-rn.github.io/igdtuw/",
    },
    {
      imgPath: fest,
      title: "Fest Website",
      description: "Deployed a website for the college fest using HTML, CSS, JS. The website has a landing page, events page, registration page, and contact page. The website is responsive and has a dark mode.",
      ghLink: "https://github.com/prerna-rn/innerve",
      demoLink: "hhttps://prerna-rn.github.io/innerve/",
    },
    {
      imgPath: canteen,
      title: "Cafeteria Management System",
      description: "Made a management system for the college cafeteria using Python as front-end and MySQL as back-end. The system has a login system for the admin and the user. The admin can add, delete, and update the menu. The user can view the menu, order food, and view the bill. The system also generates a bill for the user.",
      ghLink: "https://github.com/prerna-rn/IGDTUW_canteen",
      // demoLink: "https://prerna-rn.github.io/igdtuw/",
    },
  ];
  const projects1 = projects.slice(0, 3);
  const projects2 = projects.slice(3, 6);
  const projects3 = projects.slice(6, 9);

  return (
    <section className="project" id="projects">
    <Particle />
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p className="text-center">Explore my work! Navigate through the tabs to find a selection of projects that showcase my skills and creativity.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects1.map((project, index) => (
                          <Col md={4} key={index}>
                            <ProjectCard {...project} />
                          </Col>
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projects2.map((project, index) => (
                          <Col md={4} key={index}>
                            <ProjectCard {...project} />
                          </Col>
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projects3.map((project, index) => (
                          <Col md={4} key={index}>
                            <ProjectCard {...project} />
                          </Col>
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}