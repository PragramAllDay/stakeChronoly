import React from "react";
import "./hero1.css";

const Hero1 = () => {
  return (
    <div>
      <div className="box-hero1">
        <h5 className="h5-hero1">PARTICIPATE META-QUANTUM STAKE</h5>
        <h1 className="priceQTH">QTH</h1>
        <br />
        <h6 className="h6-hero1">Total Stake</h6>
        <hr className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] " />
        <div className="pt-5 pb-5 pl-5">
          <button className="btn-hero1">6 MONTHS</button>
          <button className="btn-hero1">1 YEAR</button>
          <button className="btn-hero1">3 YEARS</button>
        </div>
        <br />
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <h6 className="h6-hero1">Lock Period:</h6>
            <br />
            <h6 className="h6-hero1">Re-locks on registration:</h6>
            <br />
            <h6 className="h6-hero1">Status:</h6>
          </div>
          <h1 className="text-white pr-4 text-[20px]">APY</h1>
        </div>
        <br />
        <div className="flex flex-col">
          <h2 className="text-white text-[12px]">BALANCE:</h2>
          <div className="flex ">
            <input type="text" />
            <button className="btn-hero1">APPROVE</button>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-[12px]">STAKE BALANCE:</h2>
          <div className="flex ">
            <input type="text" />
            <button className="btn-hero1">WITHDRAW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
