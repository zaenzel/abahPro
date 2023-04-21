import React, { useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  FiberManualRecord,
} from "@mui/icons-material";
import "./slider.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotoSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-5 md:py-0 relative group">
      <img src={images[currentIndex]} alt="" className="image-detail" />
      <div className="next-slide" onClick={nextSlide}>
        <ArrowForwardIosOutlined />
      </div>
      <div className="prev-slide" onClick={prevSlide}>
        <ArrowBackIosOutlined />
      </div>
      <div className="wrap-dot-slide">
        {images.map((e, i) => {
          return (
            <div
              className={`item-dot-slide ${
                currentIndex === i ? "opacity-100 scale-125" : "opacity-40"
              }`}
              key={i}
              onClick={() => {
                gotoSlide(i);
              }}
            >
              <FiberManualRecord sx={{ fontSize: "12px" }} />
            </div>
          );
        })}
      </div>
    </div>  
  );
};

export default Slider;
