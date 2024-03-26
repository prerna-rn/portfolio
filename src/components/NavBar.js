import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/prernalogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { FaHome,FaBriefcase, FaLaptopCode, FaFileCode } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaTwitter, FaBook } from 'react-icons/fa';
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                <FaHome /> Home
              </Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                <FaFileCode /> Skills
              </Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                <FaLaptopCode /> Projects
              </Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>
                <FaBriefcase /> Experience
              </Nav.Link>  
              <Nav.Link href="#publications" className={activeLink === 'publications' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('publications')}>
                <FaBook /> Publications
              </Nav.Link>  
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://github.com/prerna-rn"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/prerna-s-5b116922a/"><FaLinkedin /></a>
              <a href="https://twitter.com/Prernasigh"><FaTwitter /></a>
              </div>
              <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/prerna-rn/portfolio"
                target="_blank"
                className="fork-btn-inner"
                style={{ backgroundColor: '#DC84F3 !important' }}
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
