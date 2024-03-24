import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    // Your 6 projects here
    {
      title: "Chatify",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      ghLink: "https://github.com/soumyajit4419/Chatify",
      demoLink: "https://chatify-49.web.app/",
    },
    {
      title: "Bits-0f-C0de",
      description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
      demoLink: "https://blogs.soumya-jit.tech/",
    },
    {
      title: "Editor.io",
      description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      ghLink: "https://github.com/soumyajit4419/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/",
    },
    {
      title: "Chatify",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      ghLink: "https://github.com/soumyajit4419/Chatify",
      demoLink: "https://chatify-49.web.app/",
    },
    {
      title: "Bits-0f-C0de",
      description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
      demoLink: "https://blogs.soumya-jit.tech/",
    },
    {
      title: "Editor.io",
      description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      ghLink: "https://github.com/soumyajit4419/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/",
    },
    {
      title: "Editor.io",
      description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      ghLink: "https://github.com/soumyajit4419/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                          projects.slice(0, 3).map((project, index) => (
                            <Col md={4} key={index}>
                              <ProjectCard {...project} />
                            </Col>
                          ))
                        }
                      </Row>
                      <Row>
                        {
                          projects.slice(3, 6).map((project, index) => (
                            <Col md={4} key={index}>
                              <ProjectCard {...project} />
                            </Col>
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* Content for second tab */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* Content for third tab */}
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