import Me from "../assets/Images/Me.jpg";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">

        {/* IMAGE + INTRO */}
        <div className="about-layout fade-up-stagger">
          <div className="about-image fade-item">
            <img src={Me} alt="Me" />
          </div>

          <div className="about-content fade-item">
            <h1 className="about-title">RODOLFO C. GUCE III</h1>
            <h3 className="about-subtitle">Designing Systems</h3>
            <p>
              I’m a Full Stack Developer and Website Builder focused on building
              scalable systems and modern digital experiences.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="about-stats-layout fade-up-stagger">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "60+", label: "Projects Done" },
            { value: "40+", label: "Happy Clients" },
          ].map((stat, i) => (
            <div className="stat-box fade-item" key={i}>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div className="skills-layout fade-up-stagger">
          {[
            { name: "Frontend", percent: 90 },
            { name: "Backend", percent: 85 },
            { name: "UI/UX", percent: 80 },
            { name: "DevOps", percent: 70 },
          ].map((skill, index) => (
            <div className="skill-box fade-item" key={index}>
              <div
                className="skill-circle"
                style={{
                  background: `conic-gradient(#000 ${skill.percent}%, #ddd ${skill.percent}%)`,
                }}
              >
                <div className="circle-inner">{skill.percent}%</div>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        {/* EXPERIENCE CARDS */}
        <h2 className="section-title fade-item">Experience</h2>
        <div className="experience-layout fade-up-stagger">
          {[
            "Frontend Development",
            "Backend Architecture",
            "API Development",
            "Database Design",
            "Cloud Deployment",
            "System Optimization",
          ].map((item, index) => (
            <div className="custom-card fade-item" key={index}>
              <h3>{item}</h3>
              <p>Building scalable and efficient systems.</p>
            </div>
          ))}
        </div>

        {/* HOW I WORK */}
        <h2 className="section-title fade-item">How I Work</h2>
        <div className="work-layout fade-up-stagger">
          {[
            { title: "Research & Strategy", desc: "I deeply analyze before writing code." },
            { title: "System Design", desc: "I architect scalable and clean systems." },
            { title: "Build & Optimize", desc: "I focus on performance and long-term growth." },
          ].map((item, index) => (
            <div className="custom-card fade-item" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* WHAT I BUILD */}
        <h2 className="section-title fade-item">What I Build</h2>
        <div className="build-layout fade-up-stagger">
          {[
            { title: "Modern Websites", desc: "High-performance and responsive websites." },
            { title: "Web Applications", desc: "Full stack scalable applications." },
            { title: "Custom Platforms", desc: "End-to-end system architecture solutions." },
          ].map((item, index) => (
            <div className="custom-card fade-item" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
