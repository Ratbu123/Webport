// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Homepage", link: "#hero" },
    { name: "Projects", link: "#" },
    { name: "Resume", link: "#" },
    { name: "Achievements", link: "#" },
  ];

  const topLeft = ["Web-based Inventory System", "C++ School Inventory System", "School Attendance System", "Brg. Management System", "Website Admin Panels"];
  const topRight = ["Privacy Policy", "Terms and conditions", "Careers"];
  const bottomLeft = ["Poblacion East", "Alitagtag Batangas", "+63 963 679 6878"];
  const bottomRight = ["Systems Builder", "FreeLancer"];

  return (
    <>
      {/* Hamburger */}
      <header className="header">
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span className="half"></span>
        </div>
      </header>

      {/* Overlay */}
      <div className={`overlay ${open ? "active" : ""}`}>
        <div className="overlay-content">

          {/* Left menu */}
          <div className="overlay-left">
            <ul>
              {menuItems.map((item, i) => (
                <li key={i}>
                  <a href={item.link} onClick={() => setOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="overlay-divider"></div>

          {/* Right side: 2x2 lists */}
          <div className="overlay-right">

            {/* Top Row */}
            <div className="overlay-row">
              <div className="overlay-column">
                <h3>Projects</h3>
                <ul>
                  {topLeft.map((item, i) => (
                    <li key={i} onClick={() => setOpen(false)}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="overlay-column">
                <h3>Useful Links</h3>
                <ul>
                  {topRight.map((item, i) => (
                    <li key={i} onClick={() => setOpen(false)}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="row-divider"></div>

            {/* Bottom Row */}
            <div className="overlay-row">
              <div className="overlay-column">
                <h3>Philippines</h3>
                <ul>
                  {bottomLeft.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="overlay-column">
                <h3>Extra Info</h3>
                <ul>
                  {bottomRight.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Close button */}
        <div className="overlay-close" onClick={() => setOpen(false)}>✕</div>
      </div>
    </>
  );
}