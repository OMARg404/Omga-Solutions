import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Mga__1_-removebg-preview22.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* First Row: Logo + Dev Text */}
        <Row className="align-items-center mb-3">
          <Col xs={12} md={6} className="text-start">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end mt-3 mt-md-0">
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              Omga-Solutions Dev
            </span>
          </Col>
        </Row>

        {/* Second Row: Social Icons + Copyright */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mt-3 mt-md-0">
            <p>© 2025. All Rights Reserved. Owned by Omga-Solutions Dev</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/omar-abdelrahman-10260829a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/OMARg404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/omar_hasballa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a
                href="https://www.youtube.com/@oMgaCode_omarAbdelrahman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
