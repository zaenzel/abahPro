import PropetyInfo from "../../propety-info/PropetyInfo";
import "./cardPro.css";
import imagePro from "/images/rumah.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const CardPro = () => {
  return (
    <div className="container-cardPro">
      <div className="wrap-items-cardPro">
        <img src={imagePro} alt="propety-image" className="image-cardPro" />
        <div className="desc-cardPro">
          <h1 className="title-cardPro">Alam Sutera</h1>
          <PropetyInfo gray={true}>
            <LocationOnIcon />
            <p>Serpong, Tanggerang</p>
          </PropetyInfo>
          <h3 className="price-cardPro">Rp 4.000.000</h3>
          <div className="desc flex justify-between gap-5">
            <PropetyInfo>
              <SingleBedIcon fontSize="medium" />
              <p>2</p>
            </PropetyInfo>
            <PropetyInfo>
              <BathtubIcon fontSize="medium" />
              <p>2</p>
            </PropetyInfo>
            <PropetyInfo>
              <ZoomOutMapIcon fontSize="medium" />
              <p>
                200 m<sup>2</sup>
              </p>
            </PropetyInfo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPro;
