import { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const [fadeOutWords, setFadeOutWords] = useState(false);
  const [showRectangle, setShowRectangle] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const wordsTimer = setTimeout(() => setFadeOutWords(true), 1500);
    const rectangleTimer = setTimeout(() => setShowRectangle(true), 2000);
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
      const finishTimer = setTimeout(() => onFinish(), 500);
      return () => clearTimeout(finishTimer);
    }, 4000);

    return () => {
      clearTimeout(wordsTimer);
      clearTimeout(rectangleTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [onFinish]);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className={`words ${fadeOutWords ? "fade-down" : ""}`}>
        <span className="word">Pioneering</span>
        <span className="word bold">Creative</span>
        <span className="word">Excellence</span>
      </div>

      {showRectangle && (
        <div className="rectangle-container">
          <div className="text-mask">
            <div className="ashley-text">Welcome</div>
            <div className="rectangle"></div>
          </div>
        </div>
      )}
    </div>
  );
}