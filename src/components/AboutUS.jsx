import React from "react";
import circle from "../assets/images/circle.png";

const AboutUs = () => {
  return (
    <section className="bg-[#A68272] text-[#ffffff] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <button className="bg-[#A68272] text-[#ffffff] text-sm px-4 py-1 rounded-full mb-4 border border-white cursor-pointer hover:bg-[#5A5656] transition duration-300">
            About Us
          </button>
          <h2 className="text-3xl md:text-6xl font-light italic leading-tight">
            Pioneering Crypto
          </h2>

          <h2 className="text-3xl md:text-6xl font-bold leading-tight">
            And Primary <br /> Market
            <span className="font-light italic">Ventures</span>
          </h2>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-white/80 max-w-xl mx-auto md:mx-0">
            ZenPeak Capital is a forward-thinking venture firm specializing in
            innovative investments within the realms of cryptocurrency and
            primary markets. With a keen eye on emerging trends and disruptive
            technologies, we are dedicated to identifying and nurturing
            high-potential opportunities that yield both financial returns and
            transformative impact.
          </p>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-white/80 max-w-xl mx-auto md:mx-0">
            At ZenPeak Capital, we harness strategic investment to fuel positive
            change and drive growth. Focusing on established crypto assets and
            emerging primary market ventures, our experienced team crafts a
            diversified portfolio primed for long-term success.
          </p>
        </div>
        <div className="flex">
          <img
            src={circle}
            alt="About Us"
            className="h-100 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
