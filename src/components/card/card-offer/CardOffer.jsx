import Button from "../../button/Button";
import "./cardOffer.css";

const CardOffer = ({ image, title, buttonText }) => {
  return (
    <div className="container-cardOffer">
      <div className="wrap-cardOffer">
        <div className="desc-offer">
          <div className="text-cardOffer">
            <h1>{title}</h1>
          </div>
          <Button word={buttonText} customStyle={`btn-offer`} />
        </div>
        <img
          src={image}
          alt=""
          className="image-cardOffer"
          width={300}
          as="svg"
        />
      </div>
    </div>
  );
};

export default CardOffer;
