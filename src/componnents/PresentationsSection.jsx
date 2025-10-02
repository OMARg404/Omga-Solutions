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
    document.body.classList.add("modal-open");
  };

  const handleClose = () => {
    setActiveIdx(null);
    document.body.classList.remove("modal-open");
  };

  return (
    <section className="presentations-wrapper" id="presentations">
      <div className="presentations-container">
        <h2 className="presentations-title">🎬 Service Proposals</h2>
        <p className="presentations-subtitle">
          Explore detailed presentations of our services, solutions, and training programs.
        </p>

        <Carousel
          responsive={{ superLargeDesktop: { breakpoint: { max: 4000, min: 0 }, items: 1 } }}
          infinite
          arrows
          autoPlay={false}
          showDots
          className="presentations-carousel"
        >
          {presentations.map((p, idx) => (
            <div
              className={`presentation-card-new ${activeIdx === idx ? "active" : ""}`}
              key={idx}
              onClick={() => handleCardClick(idx)}
            >
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.description}</p>
              <iframe
                src={p.link}
                title={p.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {activeIdx === idx && (
                <button className="card-close-btn" onClick={handleClose}>
                  Close
                </button>
              )}
            </div>
          ))}
        </Carousel>
      </div>

      <img className="presentations-bg" src={colorSharp} alt="Background" />
    </section>
  );
};
