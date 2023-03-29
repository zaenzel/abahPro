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
          title={"Konsultasi Properti"}
          desc={true}
          buttonText={"Mulai Konsultasi"}
        />

        <CardOffer
          image={coorporation}
          title={"Ingin Berkerjasama?"}
          buttonText={"Ajukan Kerjasama"}
        />
      </div>
    </div>
  );
};

export default Offer;
