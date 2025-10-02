import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const PresentationsSection = () => {
  const [activeIdx, setActiveIdx] = useState(null);
const presentations = [
  {
    title: "OMGA AI Intro",
    description: "Introduction to OMGA AI, services, pricing, and models.",
    link: "/OMGA-AI.pdf",
  },
  {
    title: "Python & AI Fundamentals",
    description: "A 6-level Python course covering fundamentals and AI basics.",
    link: "/Python Roadmap.pdf",
  },
];

const handleCardClick = (idx) => {
  setActiveIdx(idx);
  document.body.classList.add("modal-open"); // منع تمرير الخلفية
};

const handleClose = () => {
  setActiveIdx(null);
  document.body.classList.remove("modal-open");
};

  return (
    <section className="skill presentations-section" id="presentations">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <h2>&#127916; Our Service Proposals</h2>

              <p>
                Explore detailed presentations of the services we offer, including project proposals, solutions, and training programs.
              </p>

              <Carousel
                responsive={{
                  superLargeDesktop: { breakpoint: { max: 4000, min: 0 }, items: 1 },
                }}
                infinite={true}
                arrows={true}
                autoPlay={false}
                showDots={true}
                className="owl-carousel owl-theme skill-slider ss"
              >
                {presentations.map((p, idx) => (
                  <div
                    className={`presentation-card ${activeIdx === idx ? "active" : ""}`}
                    key={idx}
                    onClick={() => handleCardClick(idx)}
                  >
                    <h5>{p.title}</h5>
                    <p>{p.description}</p>
                    <iframe
                      src={p.link}
                      title={p.title}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                    {activeIdx === idx && (
  <button
    onClick={handleClose}
    style={{
      position: "absolute",
      top: 15,
      right: 15,
      background: "#AA367C",
      border: "none",
      color: "#fff",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: "5px",
      zIndex: 10000,
    }}
  >
    Close
  </button>
)}

                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
