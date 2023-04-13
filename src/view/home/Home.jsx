import React from "react";
import Intro from "../../components/section/intro/Intro";
import Offer from "../../components/section/offer/Offer";
import CardListing from "../../components/section/card-listing/CardListing";
import Since from "../../components/section/since/Since";
import SliderPartner from "../../components/section/slider-partnership/SliderPartner";


const Home = () => {

  return (
    <div className="space-y-10">
      <Intro />
      <CardListing recomendPro={true} />
      <Since />
      <SliderPartner />
      <Offer />
    </div>
  );
};

export default Home;
