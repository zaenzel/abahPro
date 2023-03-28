import React from "react";
import Intro from "../../components/section/intro/Intro";
import RecomendPro from "../../components/section/recomend-propety/RecomendPro";

const Home = () => {
  return (
    <div className="space-y-10">
      <Intro />
      <RecomendPro />
    </div>
  );
};

export default Home;
