import "./cardPro.css";
import imagePro from "/images/rumah.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import IconText from "../../icon-text/IconText";
import { Link } from "react-router-dom";

const CardPro = ({ favPro }) => {
  return (
    <Link to="/detail">
      <div
        className={`container-cardPro ${
          favPro && "border-2 rounded-2xl border-color-tersier xl:mb-10"
        }`}
      >
        <div className="wrap-items-cardPro">
          <img src={imagePro} alt="propety-image" className="image-cardPro" />
          <div className="desc-cardPro">
            <h1 className="title-cardPro">Alam Sutera</h1>
            <IconText gray={true}>
              <LocationOnIcon />
              <p>Serpong, Tanggerang</p>
            </IconText>
            <h3 className="price-cardPro">Rp 4.000.000</h3>
            <div className="desc flex justify-between gap-5">
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardPro;
