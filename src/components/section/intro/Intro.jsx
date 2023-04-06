import "./intro.css";
import ImageProfile from "../../image-profile/ImageProfile";
import imageProfile from "/images/foto.jpg";
import border from "/border.svg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Intro = () => {
  let imageHero = useRef(null);
  let textHero = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textHero,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section className="container-hero">
      <div className="wrap-hero">
        <div ref={(el) => (textHero = el)} className="wrap-desc-profile">
          <h1 className="text-2xl font-bold">
            Hai, Saya <br />{" "}
            <span className="text-4xl text-color-sekunder">Nashir Alam</span>
          </h1>
          <p className="text-xl text-color-19191A">
            Saya seorang marketer perumahan dengan pengalaman lebih dari 10
            tahun. Saya telah bekerja di berbagai proyek perumahan, mulai dari
            rumah tapak, rumah susun, hingga kompleks perumahan.
          </p>
        </div>

        <div className="wrap-img-profile">
          <ImageProfile src={imageProfile} border={border} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
