import "./intro.css";
import ImageProfile from "../../image-profile/ImageProfile";
import imageProfile from "/images/foto.jpg";
import border from "/border.svg";

const Intro = () => {
  return (
    <section className="container-hero">
      <div className="wrap-hero">
        <div className="wrap-desc-profile">
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
