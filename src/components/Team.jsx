export default function FeaturedProjects() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform with secure checkout, user authentication, and product management.",
    },
    {
      title: "Portfolio Site",
      description:
        "A sleek and interactive portfolio website showcasing design and development work, optimized for both desktop and mobile.",
    },
    {
      title: "Admin Dashboard",
      description:
        "A dynamic admin dashboard with real-time analytics, user management, and customizable charts.",
    },
    {
      title: "Marketing Campaign",
      description:
        "A comprehensive marketing campaign including email automation, social media strategy, and performance tracking.",
    },
    {
      title: "Web-based Inventory System",
      description:
        "An inventory management system accessible via web, allowing real-time stock tracking, reporting, and multi-user access.",
    },
  ];

  return (
    <section className="section container-projects fade-up-stagger" id="projects">
      <h2 className="center fade-item">Featured Projects</h2>
      <div className="container featured-container">
        {projects.map((project, i) => (
          <div className="box fade-item" key={i}>
            <span></span>
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}