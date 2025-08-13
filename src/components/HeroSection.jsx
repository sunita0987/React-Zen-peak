import React from "react";
import logo from "../assets/images/logo.png";
import bgImage from "../assets/images/heroimage.png";

const HeroSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className=" flex flex-col justify-center items-center text-center px-4">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="ZenPeak Logo" className="w-40 h-16 " />
        </div>
        <h1 className="text-[#ffffff] text-3xl sm:text-5xl md:text-6xl font-light italic leading-snug mb-80">
          Exploring
          <span className="not-italic font-bold">Crypto And Primary</span>
          <br />
          Market Strategies
        </h1>
        <button className="font-bold px-6 py-2 rounded-full border border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#DFBCA6] transition cursor-pointer">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;