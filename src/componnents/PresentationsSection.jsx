import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/oo.jpg";
import { FaBrain, FaLaptopCode, FaDatabase } from "react-icons/fa";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

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
      link: "/Python-Roadmap.pdf",
    },
    {
      title: "Web Development Roadmap",
      description: "Comprehensive roadmap for learning web development.",
      link: "/Web-development-Roadmap.pdf",
    }
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

              <div style={{ height: activeIdx === idx ? '90vh' : '60vh' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={p.link} />
                </Worker>
              </div>

              {activeIdx === idx && (
                <button className="card-close-btn" onClick={handleClose}>
                  Close
                </button>
              )}
            </div>
          ))}
        </Carousel>
      </div>

      {/* 🌟 Banner Section */}
      <div
  className="extra-banner-section"
  style={{
    marginTop: "40px",
    padding: "40px 0",
    background: "linear-gradient(90deg, #0a192f, #1f4068)",
    color: "#fff",
  }}
>
  <Container>
    <Row className="align-items-center text-center">
      <Col md={6}>
        <img
          src={headerImg}
          alt="Innovation Banner"
          style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
        />
      </Col>

      <Col md={6}>
        <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>🚀 Elevate Your Projects</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
          Transform your ideas into powerful applications using AI, Web, and Data Science.
          We provide tailored solutions to fit your vision and business goals.
        </p>
        <div className="banner-icons" style={{ fontSize: "1.5rem" }}>
          <FaBrain style={{ margin: "0 15px" }} />
          <FaLaptopCode style={{ margin: "0 15px" }} />
          <FaDatabase style={{ margin: "0 15px" }} />
        </div>
      </Col>
    </Row>
  </Container>
</div>


      <img className="presentations-bg" src={colorSharp} alt="Background" />
    </section>
  );
};
