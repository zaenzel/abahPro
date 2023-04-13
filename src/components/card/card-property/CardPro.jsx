import "./cardPro.css";
import imagePro from "/images/rumah.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconText from "../../icon-text/IconText";
import { Link } from "react-router-dom";
import WrapIconPro from "../../wrap-icon-properti/WrapIconPro";

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
           <WrapIconPro />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardPro;
