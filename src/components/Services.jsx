import { useState, useRef, useEffect } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaPhp, FaPython,
  FaGitAlt, FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiPostgresql,
  SiTypescript, SiNextdotjs, SiRedux,
} from "react-icons/si";

export default function Services() {
  const languages = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Python", icon: <FaPython /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Database", icon: <FaDatabase /> },
  ];

  const [hoveredLang, setHoveredLang] = useState(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const moveTooltip = (e) => {
      if (!tooltipRef.current) return;

      const x = e.clientX - 45; // half of 90px
      const y = e.clientY - 45;

      tooltipRef.current.style.transform =
        `translate3d(${x}px, ${y}px, 0) scale(${hoveredLang ? 1 : 0})`;
    };

    window.addEventListener("mousemove", moveTooltip);
    return () => window.removeEventListener("mousemove", moveTooltip);
  }, [hoveredLang]);

  return (
    <section className="section services fade-up-stagger" id="services">
      <div className="container">
        <h2 className="center fade-item">Technologies I Use</h2>

        <div className="icons-grid">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="icon-wrapper fade-item"
              onMouseEnter={() => setHoveredLang(lang.name)}
              onMouseLeave={() => setHoveredLang(null)}
            >
              {lang.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Always mounted — smoother */}
      <div ref={tooltipRef} className="tooltip-circle">
        {hoveredLang}
      </div>
    </section>
  );
}