import "./detail.css";
import Carousel from "../../components/slider/Slider";
import home1 from "/images/rumah.jpg";
import home2 from "/images/townhouse.jpg";
import home3 from "/images/home.jpg";
import IconText from "../../components/icon-text/IconText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const Detail = () => {
  const images = [home1, home2, home3];

  return (
    <div className="flex">
      <div className="">
        <Carousel images={images} />
        <div className="desc-detail">
          <h1 className="title-desc">Go Home - Alam Sutera</h1>
          <IconText gray={true}>
            <LocationOnIcon />
            <p className="">Serpong, Tanggerang</p>
          </IconText>
          <p className="text-">Rp 800 juta</p>
          <div className="wrap-icon-desc flex justify-between gap-5">
            <IconText>
              <SingleBedIcon fontSize="medium" />
              <p>2</p>
            </IconText>
            <IconText>
              <BathtubIcon fontSize="medium" />
              <p>2</p>
            </IconText>
            <IconText>
              <ZoomOutMapIcon fontSize="medium" />
              <p>
                200 m<sup>2</sup>
              </p>
            </IconText>
          </div>
          <div className="desc">
            <h1 className="text-xl">Deskripsi</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus laborum ad, illo quidem sunt quasi quisquam nostrum
              consectetur ipsam totam cupiditate ullam illum quis excepturi
              laudantium saepe necessitatibus at? Officia?
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:inline-block">
        <h5>Ingin Info Lebih Lanjut?</h5>
        <button>Hubungi Sekarang</button>
      </div>
    </div>
  );
};

export default Detail;
