import React from "react";
import Intro from "../../components/section/intro/Intro";
import Offer from "../../components/section/offer/Offer";
import CardListing from "../../components/section/card-listing/CardListing";
import Since from "../../components/section/since/Since";
import SliderPartner from "../../components/section/slider-partnership/SliderPartner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-10">
      <Intro />
      <div>
        <CardListing recomendPro={true} />
        <p className="text-end mt-7 px-5 xl:px-14 sm:hidden">
          <Link to={"listproperti"}>Lihat Lebih...</Link>
        </p>
      </div>
      <Since />
      <SliderPartner />
      <Offer />
    </div>
  );
};

export default Home;
