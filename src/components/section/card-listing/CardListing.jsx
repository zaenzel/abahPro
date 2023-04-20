import React from "react";
import CardPro from "../../card/card-property/CardPro";
import "./cardListing.css";
import { Link } from "react-router-dom";
import properti from "../../../data/properti";
import blogs from "../../../data/blogs";
import CardBlog from "../../card/card-blog/CardBlog";

const CardListing = ({ recomendPro, isBlog }) => {
  const dataPro = properti;
  const topPro = dataPro.slice(0, 3);
  const dataBlog = blogs;

  return (
    <section className="container-recomendPro">
      <div className="wrap-items-recomendPro">
        <div className="wrap-title-recomendPro">
          <div className="right-title-recomendPro">
            <h1>
              {isBlog
                ? "Artkel seputar dunia properti"
                : "Rekomendasi Properti"}
            </h1>
            <p>
              {isBlog
                ? "Beberapa bahan bacaan tentang properti"
                : "Beberapa properti yang terbaik"}
            </p>
          </div>
          <p className={`${!recomendPro && "hidden"} left-title-recomendPro`}>
            <Link to={"listproperti"}>Lihat Lebih...</Link>
          </p>
        </div>
        <div className="wrap-cardPro">
          {isBlog
            ? dataBlog.map((e, i) => <CardBlog key={i} blogs={e} />)
            : recomendPro
            ? topPro.map((e, i) => {
                return <CardPro favPro={i == 1 && true} key={i} dataPro={e} />;
              })
            : dataPro.map((e, i) => {
                return <CardPro key={i} dataPro={e} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default CardListing;
