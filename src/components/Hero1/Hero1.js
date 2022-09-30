import React, { useEffect } from "react";
import "./hero1.css";
import { useSelector, useDispatch } from "react-redux";
import { setStake } from "../../redux/reducers/Hero1State";
import { setText } from "../../redux/reducers/Hero1State";

const Hero1 = () => {
  const dispatch = useDispatch();
  const { totalstake } = useSelector((state) => state.stake.value);
  const [stakingTenure, setStakingTenure] = React.useState("0%");
  const [text, setText] = React.useState(null);

  const handleTextFields = (event) => {
    setText(event.target.value);
  };

  const submitFielda = () => {};

  useEffect(() => {
    const handlestake = () => {
      // dispatch any actions here
      dispatch(setStake({ stakingtenure: stakingTenure }));
    };
    handlestake();
  }, [dispatch, stakingTenure]);

  return (
    <div>
      <div className="box-hero1">
        <h5 className="h5-hero1">PARTICIPATE META-QUANTUM STAKE</h5>
        <h1 className="priceQTH">{totalstake}QTH</h1>
        <br />
        <h6 className="h6-hero1">Total Stake</h6>
        <hr className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] " />
        <div className="pt-5 pb-5 pr-5 flex flex-col gap-5">
          <div className="flex flex-wrap">
            <button
              className="btn-hero1"
              onClick={() => {
                setStakingTenure("1%");
              }}
            >
              1 MONTH
            </button>
            <button
              className="btn-hero1"
              onClick={() => {
                setStakingTenure("3.3%");
              }}
            >
              3 MONTHS
            </button>
            <button
              className="btn-hero1"
              onClick={() => {
                setStakingTenure("7.5%");
              }}
            >
              6 MONTHS
            </button>
          </div>
          <div className="flex justify-center flex-wrap">
            <button
              className="btn-hero1"
              onClick={() => {
                setStakingTenure("12.6%");
              }}
            >
              9 MONTHS
            </button>
            <button
              className="btn-hero1"
              onClick={() => {
                setStakingTenure("18.6%");
              }}
            >
              12 MONTHS
            </button>
          </div>
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
          <div className="flex flex-col gap-5">
            <h1 className="text-white pr-4 text-[20px]">APY</h1>
            <h1 className="text-white text-[20px]">{stakingTenure}</h1>
          </div>
        </div>
        <br />
        <div className="flex flex-col">
          <h2 className="text-white text-[12px]">BALANCE:</h2>
          <div className="flex ">
            <input type="text" onChange={handleTextFields} />
            <button className="btn-hero1" onClick={submitFielda}>
              APPROVE
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-[12px]">STAKE BALANCE:</h2>
          <div className="flex ">
            <input type="text" onChange={handleTextFields} />
            <button className="btn-hero1" onClick={submitFielda}>
              WITHDRAW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
