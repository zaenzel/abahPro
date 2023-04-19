import "./cardPro.css";
import imagePro from "/images/rumah.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconText from "../../icon-text/IconText";
import { Link } from "react-router-dom";
import WrapIconPro from "../../wrap-icon-properti/WrapIconPro";

const CardPro = ({ favPro, dataPro }) => {
  let rupiah = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  })

  return (
    <Link to={`properti/${dataPro.id}`}>
      <div
        className={`container-cardPro ${
          favPro && "border-2 rounded-2xl border-color-tersier xl:mb-10"
        }`}
      >
        <div className="wrap-items-cardPro">
          <img
            src={dataPro.image}
            alt="propety-image"
            className="image-cardPro"
          />
          <div className="desc-cardPro">
            <h1 className="title-cardPro">{dataPro.name}</h1>
            <IconText gray={true}>
              <LocationOnIcon />
              <p>{dataPro.location}</p>
            </IconText>
            <h3 className="price-cardPro">{rupiah.format(dataPro.price)}</h3>
            <WrapIconPro kt={dataPro.bedroom} km={dataPro.bathroom} area={dataPro.area} />
          </div>  
        </div>
      </div>
    </Link>
  );
};

export default CardPro;
