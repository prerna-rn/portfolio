// import logo from './prernalogo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Experience from "./components/Experience";
import {Projects} from './components/Projects/Projects';
import 'react-vertical-timeline-component/style.min.css'; // import the CSS styles
function App() {
  const experienceData = [
    {
      title: "Software Engineering Intern",
      company: "@TBD",
      date: "TBD",
      description: "TBD"
    },
    {
      title: "Machine Learning Research Intern",
      company: "@Prodigal AI",
      date: "March 2023 - July 2023",
      description: `Drove research and development of groundbreaking projects, leveraging cutting-edge
      technologies like LangChain, LLMs, GPT-4 to deliver innovative solutions.
      `
    },
    // Add more experience data as needed
  ];
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience experienceData={experienceData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
