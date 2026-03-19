import React, { useState } from "react";
import "./Carousel.css";

function Carousel() {
  const slides = [
    "../src/assets/2.jpg",
    "../src/assets/3.jpg",
    "../src/assets/4.jpg",
    "../src/assets/5.jpg",
    "../src/assets/6.jpg",
    "../src/assets/7.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <button className="Cprev" onClick={goToPrev}>❮</button>

      <div className="carousel-track">
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            <img src={slide} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <button className="Cnext" onClick={goToNext}>❯</button>
    </div>
  );
}

export default Carousel;