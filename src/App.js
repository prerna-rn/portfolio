// import logo from './prernalogo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import  Footer  from "./components/Footer";
import Experience from "./components/Experience";
import {Projects} from './components/Projects/Projects';
import Publications from './components/Publications';
import 'react-vertical-timeline-component/style.min.css'; // import the CSS styles
function App() {
  const experienceData = [
    {
      title: "Software Engineering Intern",
      company: "@Microsoft",
      date: "May 2024 - July 2024",
      description: `Member of Special Clouds Team which aims to make a unified approach to standardise deployments across all Microsoft-365 Services. 
      Created an Azure DevOps extension to troubleshoot customer’s pipeline failures using Generative AI to enable self-served debugging and reduce the bandwidth of on-call engineers. 
      Tech Stack: C#, .NET, Azure DevOps, React, Webpack, Chat Completion API.`
    },
    {
      title: "Machine Learning Research Intern",
      company: "@Prodigal AI",
      date: "March 2023 - July 2023",
      description: `Drove research and development of innovative AI solutions as part of an 8-member team.
      Developed “ZSearch”, an impactful cloud analytics chatbot utilising Generative Pretrained Transformers
(GPTs) & conversational AI. Presented research findings at ICRET 2023 conference.
Tech Stack: Deep Learning, LangChain, Large Language Models, Transformers, Streamlit.
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
      <Publications />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
