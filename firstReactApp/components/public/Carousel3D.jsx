import "./Carousel3D.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Carousel3D() {

  const [images, setImages] = useState([ ]);
  const [angle, setAngle] = useState(0);
  const total = images.length || 1;

  const rotateNext = () => {
    setAngle((prev) => prev - 360 / total);
  };

  const rotatePrev = () => {
    setAngle((prev) => prev + 360 / total);
  };

const activeIndex =
  ((Math.round(-angle / (360 / total)) % total) + total) % total;

  useEffect(() => {
    axios.get("/api/public/carouselTeam")
    .then(res => {setImages(res.data);})
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="carousel-container"><p className="carousel-title">TEAM OF DIRECTORATE OF ACCOUNTS</p>
      <div
        className="carousel3d"
        style={{
          transform: `rotateY(${angle}deg)`,
        }}
      >
        {images.map((img, index) => {
          const rotation = (360 / total) * index;
          return (
            <div
              className={`carousel-item ${index === (activeIndex + total) % total ? "active" : ""}`}
              key={index}
              style={{ transform: `rotateY(${rotation}deg) translateZ(300px)` }}
            >
              <img src={`data:image/jpeg;base64,${img.PHOTO}`} alt={`img-${index}`} />

              <div className="card-info">
                <h4>{img.RANK} {img.NAME}</h4>
                <p>{img.TITLE}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="btn prev" onClick={rotatePrev}>
        ❮
      </button>
      <button className="btn next" onClick={rotateNext}>
        ❯
      </button>
    </div>
  );
}

export default Carousel3D;