import React, { useState, useEffect } from "react";
import "./CustomSlider.css";
import banner1 from "./fk_banner1.png";
import banner2 from "./fk_banner2.png";
import banner3 from "./fk_banner3.jpeg";

function SimpleSlider() {
  const images = [
    banner1,
    banner2,
    banner3
  ];

  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="simple_slider">
      <img src={images[index]} alt="banner" className="slider_img" />
 
      <button
        className="btn left_btn"
        onClick={() =>
          setIndex((prev) => (prev - 1 + images.length) % images.length)
        }
      >
        ❮
      </button>

      <button
        className="btn right_btn"
        onClick={() =>
          setIndex((prev) => (prev + 1) % images.length)
        }
      >
        ❯
      </button>
    </div>
  );
}

export default SimpleSlider;
