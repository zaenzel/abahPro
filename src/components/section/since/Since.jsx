import { Home } from "@mui/icons-material";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./since.css";

const Since = () => {
  let homeIcon = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      homeIcon,
      { duration: 1, opacity: 0 },
      { duration: 2, opacity: 1, attr: {
        fill: '#fffff'
      } }
    );
  }, []);

  return (
    <section className="container-since">
      <h1 className="title-since">Sejak 2010</h1>
      <div className="home-sold">
        <div className="number-home-sold">
          <Home fontSize="inherit" ref={(e) => (homeIcon = e)} />
          <p className="text-color-sekunder">120+</p>
        </div>
        <h4>Rumah Terjual</h4>
      </div>
    </section>
  );
};

export default Since;
