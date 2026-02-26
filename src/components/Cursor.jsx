import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);

  // Target position (mouse) and current position (cursor)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });

  const [hovering, setHovering] = useState(false);

  // Smooth follow using requestAnimationFrame
  const animate = () => {
    posRef.current.x += (mousePos.x - posRef.current.x) * 0.15; // lerp
    posRef.current.y += (mousePos.y - posRef.current.y) * 0.15;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setHovering(true);
    const handleHoverEnd = () => setHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Apply active class to all clickable elements
    const clickables = document.querySelectorAll(
      "button, a, input, .icon-wrapper, .btn"
    );
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      cancelAnimationFrame(requestRef.current);
    };
  }, [mousePos]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? "active" : ""}`}
    />
  );
}
