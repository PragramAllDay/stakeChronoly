import React from "react";
import Header from "../Header/Header";
import Hero1 from "../Hero1/Hero1";
import Hero2 from "../Hero2/Hero2";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <div className="flex justify-center pt-12 gap-20 flex-wrap">
        <Hero1 />
        <Hero2 />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
