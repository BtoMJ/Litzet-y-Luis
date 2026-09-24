import { useState, useEffect, useRef } from "react";
import "./Carrusel.css";

const slidesEnd = [
  <div className="slider-container-4"></div>,
  <div className="slider-container-5"></div>,
  <div className="slider-container-6"></div>,
];

function Carrusel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2700;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % slidesEnd.length),
      delay,
    );
    return () => resetTimeout();
  }, [index]);

  return (
    <div className="carrusel-container-2">
      <p className="cita">
        Solo se admiten sonrisas y buena onda, los acompañantes extras no
        califican, la invitación es exclusiva para ti
      </p>
      <div className="carousel-fade-2">
        {slidesEnd.map((content, i) => (
          <div key={i} className={`fade-slider ${i === index ? "active" : ""}`}>
            {content}
          </div>
        ))}
      </div>
      <p className="end-title">Te esperamos</p>
    </div>
  );
}

export default Carrusel;
