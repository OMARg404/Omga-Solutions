import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const PresentationsSection = () => {
  const presentations = [
    {
      title: "OMGA AI Intro",
      description: "Introduction to OMGA AI, services, pricing, and models.",
      link: "/OMGA-AI.pdf", // ضع ملف PDF هنا داخل public
    },
    {
      title: "Training Courses",
      description: "Overview of courses we offer in AI, Full-Stack, and Data Science.",
      link: "/Python Roadmap.pdf", // ضع هذا PDF داخل public
    },
  ];

  
  return (
    <section className="skill presentations-section" id="presentations">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <h2>🎬 Our Service Proposals</h2>
<p>
  Explore detailed presentations of the services we offer, including project proposals, solutions, and training programs.
</p>

             <Carousel
  responsive={{
    superLargeDesktop: { breakpoint: { max: 4000, min: 0 }, items: 1 },
  }}
  infinite={true}
  arrows={true}       // تشغيل الأسهم الجانبية
  autoPlay={false}    // ممكن تشغل autoPlay لو تحب
  showDots={true}     // تشغيل النقاط تحت السلايدر
  className="owl-carousel owl-theme skill-slider"
>
  {presentations.map((p, idx) => (
    <div className="presentation-card" key={idx}>
      <h5>{p.title}</h5>
      <p>{p.description}</p>
      <iframe
        src={p.link}
        title={p.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
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
