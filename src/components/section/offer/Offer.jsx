import CardOffer from "../../card/card-offer/CardOffer";
import "./offer.css";
import consultation from "/images/consultation.svg";
import coorporation from "/images/coorporation.svg";

const Offer = () => {
  return (
    <div className="container-offer">
      <div className="wrap-offer">
        <CardOffer
          image={consultation}
          title={"Butuh Penjelasan Langsung Konsultasi Tentang Properti?"}
          buttonText={"Ngobrol Langsung"}
        />

        <CardOffer
          image={coorporation}
          title={"Ingin Kerja Sama atau Menjadi Mitra?"}
          buttonText={"Hubungi Kami"}
        />
      </div>
    </div>
  );
};

export default Offer;
