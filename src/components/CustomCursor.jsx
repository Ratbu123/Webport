import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const servicesSection = document.getElementById("services");

    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const handleHover = (e) => {
      if (
        e.target.closest(
          "a, button, .btn, .service-card, .custom-card, .box"
        )
      ) {
        cursor.classList.add("active");
      } else {
        cursor.classList.remove("active");
      }
    };

    const handleMouseMoveSectionCheck = (e) => {
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();

      const isInside =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right;

      if (isInside) {
        cursor.classList.add("hidden");
      } else {
        cursor.classList.remove("hidden");
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousemove", handleMouseMoveSectionCheck);
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousemove", handleMouseMoveSectionCheck);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
