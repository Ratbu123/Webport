// src/assets/hooks/useStaggeredFadeUp.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useStaggeredFadeUp() {
  useEffect(() => {
    // Fade-up animation for sections
    gsap.utils.toArray(".fade-up-stagger").forEach((section) => {
      const items = section.querySelectorAll(".fade-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // start when section top is at 80% of viewport
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);
}