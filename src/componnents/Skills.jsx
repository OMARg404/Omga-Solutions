import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Solutions We Provide</h2>
              <p>
                At <strong>Omga-Solutions</strong>, we master cutting-edge technologies 
                to deliver impactful solutions. Our expertise covers multiple domains 
                to serve businesses, institutions, and individuals with excellence.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="AI Solutions" />
                  <h5>AI & Data Science</h5>
                  <p>Predictive analytics, NLP, and AI-powered automation for smarter decisions.</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '95%' }}>95%</div>
                  </div>
                </div>
                <div className="item">
                  <img src={meter2} alt="Full-Stack" />
                  <h5>Full-Stack Development</h5>
                  <p>Modern web & mobile apps using React, Node.js, Express, SQL & MongoDB.</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '80%' }}>80%</div>
                  </div>
                </div>
                <div className="item">
                  <img src={meter3} alt="Database Solutions" />
                  <h5>Database Solutions</h5>
                  <p>Designing scalable & secure databases with optimization & performance tuning.</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                  </div>
                </div>
                <div className="item">
                  <img src={meter1} alt="Machine Learning" />
                  <h5>Machine Learning</h5>
                  <p>Custom ML models for classification, prediction, and automation tasks.</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '95%' }}>95%</div>
                  </div>
                </div>
                <div className="item">
                  <img src={meter2} alt="Training" />
                  <h5>Education & Training</h5>
                  <p>Workshops & courses to empower teams in AI, Data, and Full-Stack dev.</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '80%' }}>80%</div>
                  </div>
                </div>
                <div className="item">
                  <img src={meter3} alt="Business Apps" />
                  <h5>Custom Business Apps</h5>
                  <p>Tailored software solutions, automation systems & dashboards for businesses.</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
