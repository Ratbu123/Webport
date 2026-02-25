// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const svgRef = useRef(null);
  const backRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Rotate the scroll-down text
      if (svgRef.current) {
        svgRef.current.style.transform = `rotate(${scrollY * 0.25}deg)`;
      }

      // Show Back to Top after hero
      setShowBackToTop(scrollY > window.innerHeight);

      // Change Back to Top color dynamically
      if (backRef.current) {
        backRef.current.style.color =
          scrollY > window.innerHeight ? "rgb(255,152,0)" : "#fff";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      {/* ===== HERO CONTENT ===== */}
      <div className="hero-content">
        <h1>
          <span className="bold">Designing</span> a Better{" "}
          <span className="bold">World</span> Today
        </h1>
        <p className="hero-text">
          We are a creative agency focused on delivering innovative solutions
          that transform brands and experiences into meaningful journeys.
        </p>
        <div className="hero-buttons">
          <button className="btn what" onClick={scrollToServices}>
            Technologies I Use
            <span className="arrow black-circle">→</span>
          </button>
          <button className="btn works">
            View Works
            <span className="arrow gray-circle white">→</span>
          </button>
        </div>
      </div>

      {/* ===== SCROLL DOWN CIRCLE ===== */}
      <div className="scroll-container" onClick={handleScrollDown}>
        <svg ref={svgRef} viewBox="0 0 200 200" className="scroll-svg">
          <defs>
            <path
              id="circlePath"
              d="M 100,100 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            />
          </defs>
          <text fill="#fff" fontSize="10" letterSpacing="1.5">
            <textPath href="#circlePath">
              Scroll down  -  Scroll Down  -  Scroll Down  -  Scroll Down  -
            </textPath>
          </text>
        </svg>
        <div className="inner-circle">↓</div>
      </div>

      {/* ===== BACK TO TOP ===== */}
      {showBackToTop && (
        <div
          className="back-to-top-rotated"
          ref={backRef}
          onClick={handleBackToTop}
        >
          Back to Top →
        </div>
      )}

      {/* ===== PASSIVE BACKGROUND ===== */}
      <div className="hero-background" />
    </section>
  );
}