import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import IconText from "../../icon-text/IconText";
import "./partnership.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Partnership = () => {
  let partner = useRef(null);
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useEffect(() => {
    tl.fromTo(partner, { opacity: 0, duration: 2 }, { opacity: 1 });
  }, []);

  return (
    <section className="container-partnership">
      <div className="backdrop"></div>
      <div className="wrap-partnerships">
        <p className="title-partnership" ref={(e) => (partner = e)}>
          Kemitraan
        </p>
        <div className="wrap-items-prartnership">
          {[...Array(12)].map((e, i) => {
            return (
              <IconText key={i}>
                <HolidayVillageIcon fontSize="large" />
                <h5 className="text-base sm:text-xl lg:text-4xl">Tabebuya</h5>
              </IconText>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
