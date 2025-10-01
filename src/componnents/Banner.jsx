import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/oo.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { FaBrain, FaLaptopCode, FaDatabase, FaChalkboardTeacher, FaCogs } from "react-icons/fa";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  const tick = useCallback(() => {
    const toRotate = [
      "AI Solutions",
      "Full-Stack Development",
      "Data Science",
      "Database Management",
      "Machine Learning",
      "Education & Training",
      "Custom Business Applications",
    ];

    const period = 3000;

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.4); // حذف أسرع شوية
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(250 + Math.random() * 100); // كتابة طبيعية (سرعة متغيرة)
    }
  }, [loopNum, text, isDeleting]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <div className="banner-overlay"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                  <span className="tagline">🚀 Welcome to Omga-Solutions</span>
                  <h1>
                    {`We Provide `}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    At <strong>Omga-Solutions</strong>, we solve all programming challenges
                    and deliver innovative solutions in{" "}
                    <b>Front-End, Back-End, Data Science, AI, Databases, and Training</b>. 
                    Our mission is to make technology accessible and practical for businesses,
                    institutions, and individuals.
                  </p>

                  <Row className="service-icons">
                    <Col xs={6} md={4}><FaBrain size={30}/> <p>AI & Data Science</p></Col>
                    <Col xs={6} md={4}><FaLaptopCode size={30}/> <p>Full-Stack Dev</p></Col>
                    <Col xs={6} md={4}><FaDatabase size={30}/> <p>Databases</p></Col>
                    <Col xs={6} md={4}><FaChalkboardTeacher size={30}/> <p>Training</p></Col>
                    <Col xs={6} md={4}><FaCogs size={30}/> <p>Business Apps</p></Col>
                  </Row>

                  <div className="cta-buttons">
                    <HashLink to="#connect">
                      <button className="btn-primary">
                        Let’s Connect <ArrowRightCircle size={20} />
                      </button>
                    </HashLink>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <img src={headerImg} alt="Omga-Solutions Banner" className="banner-img"/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
