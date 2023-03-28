import React from "react";
import CardPro from "../../card/card-property/CardPro";
import "./recomendPro.css";

const RecomendPro = () => {
  return (
    <section className="container-recomendPro">
      <div className="wrap-items-recomendPro">
        <div className="wrap-title-recomendPro">
          <div className="right-title-recomendPro">
            <h1>Rekomendasi Properti</h1>
            <p>Beberapa properti yang terbaik</p>
          </div>
          <p className="left-title-recomendPro">Lihat Lebih...</p>
        </div>
        <div className="wrap-cardPro">
            <CardPro />
            <CardPro />
            <CardPro />
        </div>
      </div>
    </section>
  );
};

export default RecomendPro;
