import { Home } from "@mui/icons-material";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./since.css";

const Since = () => {
  let icon = useRef(null);
  let years = useRef(null);
  let count = useRef(null);
  let tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(years, { x: -500 }, { x: 0, duration: 2 }, 2);
    tl.fromTo(
      icon,
      { duration: 1, opacity: 0 },
      {
        duration: 2,
        opacity: 1,
      },
      "<0.5"
    );
    tl.fromTo(count, { x: 10000 }, { x: 0, duration: 1 }, ">0.5");
  }, []);

  return (
    <section className="container-since">
      <h1 className="title-since" ref={(e) => (years = e)}>
        Sejak 2010
      </h1>
      <div className="home-sold">
        <div className="number-home-sold" ref={(e) => (icon = e)}>
          <Home fontSize="inherit" />
          <p className="text-color-sekunder">120+</p>
        </div>
        <h4 ref={(e) => (count = e)}>Rumah Terjual</h4>
      </div>
    </section>
  );
};

export default Since;
