import "./detail.css";
import Carousel from "../../components/slider/Slider";
import home1 from "/images/rumah.jpg";
import home2 from "/images/townhouse.jpg";
import home3 from "/images/home.jpg";
import IconText from "../../components/icon-text/IconText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "../../components/button/Button";
import WrapIconPro from "../../components/wrap-icon-properti/WrapIconPro";
import { useParams } from "react-router-dom";
import properti from "../../data/properti";
import CardCall from "../../components/card/card-call/CardCall";

const Detail = () => {
  const { id } = useParams();
  const dataPro = properti;
  const images = [home1, home2, home3];

  let rupiah = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="md:flex md:container md:mx-auto">
      <div className="basis-2/3 space-y-5">
        <Carousel images={images} />
        <div className="desc-detail">
          <h1 className="title-desc">{dataPro[id - 1].name}</h1>
          <IconText gray={true}>
            <LocationOnIcon />
            <p className="">{dataPro[id - 1].location}</p>
          </IconText>
          <p className="price-detail">{rupiah.format(dataPro[id - 1].price)}</p>
          <WrapIconPro
            kt={dataPro[id - 1].bedroom}
            km={dataPro[id - 1].bathroom}
            area={dataPro[id - 1].area}
          />
          <div className="desc">
            <h1 className="text-xl">Deskripsi</h1>
            <p>
             {dataPro[id-1].desc}
            </p>
          </div>
        </div>
      </div>

      <aside className="container mx-auto px-3 mt-10 md:mt-0 basis-1/3 min-w-fit">
        <CardCall />
      </aside>
    </div>
  );
};

export default Detail;
