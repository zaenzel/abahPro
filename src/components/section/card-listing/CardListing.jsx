import React from "react";
import CardPro from "../../card/card-property/CardPro";
import "./cardListing.css";
import { Link } from "react-router-dom";
import properti from "../../../properti";

const RecomendPro = ({ recomendPro }) => {
  const dataPro = properti
  return (
    <section className="container-recomendPro">
      <div className="wrap-items-recomendPro">
        <div className="wrap-title-recomendPro">
          <div className="right-title-recomendPro">
            <h1>Rekomendasi Properti</h1>
            <p>Beberapa properti yang terbaik</p>
          </div>
          <p className={`${!recomendPro && "hidden"} left-title-recomendPro`}>
            <Link to={"list"}>Lihat Lebih...</Link>
          </p>
        </div>
        <div className="wrap-cardPro">
          {recomendPro
            ? [...Array(3)].map((e, i) => {
                return (
                  <CardPro favPro={i == 1 && true} key={i} dataPro={dataPro} />
                );
              })
            : [...Array(10)].map((i) => {
                return <CardPro key={i} dataPro={dataPro} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default RecomendPro;
