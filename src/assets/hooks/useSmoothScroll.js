import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with parameters tuned for heavy, inertia-like feel
    const lenis = new Lenis({
      // Using LERP instead of duration for more direct control
      lerp: 0.06,             // low = smoother/slower start (closer to Ashley)
      smoothWheel: true,       // smooth wheel/trackpad scroll
      wheelMultiplier: 1.4,    // increase scroll responsiveness
      smoothTouch: true,       // also smooth on touch devices
      normalizeWheel: true,    // normalize wheel across browsers
      overscroll: false        // prevents overshoot flick
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}