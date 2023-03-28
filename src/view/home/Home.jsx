import React from "react";
import Intro from "../../components/section/intro/Intro";
import Partnership from "../../components/section/partnership/Partnership";
import RecomendPro from "../../components/section/recomend-propety/RecomendPro";
import Since from "../../components/section/since/Since";

const Home = () => {
  return (
    <div className="space-y-10">
      <Intro />
      <RecomendPro />
      <Since />
      <Partnership />
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
