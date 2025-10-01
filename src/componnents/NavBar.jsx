import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/Mga__1_-removebg-preview22.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram
import { HashLink } from "react-router-hash-link";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img className="ii" src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Solutions
            </Nav.Link>
           <Nav.Link
  href="#chat"  // هنا غيرنا href
  className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
  onClick={() => onUpdateActiveLink("projects")}
>
  BotChat
</Nav.Link>
<Nav.Link
  href="#presentations"
  className={activeLink === "presentations" ? "active navbar-link" : "navbar-link"}
  onClick={() => onUpdateActiveLink("presentations")}
>
  Proposals
</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
  <a
    href="https://www.linkedin.com/in/omar-abdelrahman-10260829a/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={navIcon1} alt="LinkedIn" />
  </a>

  {/* GitHub بنفس تنسيق باقي الأيقونات */}
  <a
    href="https://github.com/OMARg404"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa fa-github" aria-hidden="true" style={{ fontSize: '20px', zIndex: 1 }}></i>
  </a>

  <a
    href="https://www.instagram.com/omar_hasballa/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={navIcon3} alt="Instagram" />
  </a>
</div>


            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
