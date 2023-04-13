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
import Button from "../../components/button/Button";
import WrapIconPro from "../../components/wrap-icon-properti/WrapIconPro";

const Detail = () => {
  const images = [home1, home2, home3];

  return (
    <div className="md:flex md:container md:mx-auto">
      <div className="basis-2/3 space-y-5">
        <Carousel images={images} />
        <div className="desc-detail">
          <h1 className="title-desc">Go Home - Alam Sutera</h1>
          <IconText gray={true}>
            <LocationOnIcon />
            <p className="">Serpong, Tanggerang</p>
          </IconText>
          <p className="price-detail">Rp 800 juta</p>
          <WrapIconPro />
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

      <aside className="container mx-auto px-3 mt-10 md:mt-0 basis-1/3">
        <div className="p-5 text-center space-y-3 border shadow-sm rounded-lg">
          <h2 className="text-xl lg:text-2xl font-bold">Ingin tanya-tanya?</h2>
          <h5 className="text-color-ADADAD text-sm">
            Butuh penjelasan lebih lanjut?
          </h5>
          <Button word={"Hubungi Kami"} />
        </div>
      </aside>
    </div>
  );
};

export default Detail;
