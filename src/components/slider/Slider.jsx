import React from "react";
import Carousel from "better-react-carousel";
import home from "/images/rumah.jpg";

const Slider = () => {
  const MyDots = ({ isActive }) => (
    <span
      className={`inline-block rounded-full mt-5 ${
        isActive ? "h-4 w-4 bg-color-sekunder" : "h-2 w-2 bg-color-ADADAD"
      }`}
    ></span>
  );

  return (
    <div className="py-3">
      <Carousel
        cols={1}
        rows={1}
        gap={5}
        showDots
        dot={MyDots}
      >
        {[...Array(5)].map((e, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="w-full min-h-72 max-h-80 rounded-2xl object-cover lg:object-cover"
                alt=""
                src={home}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
