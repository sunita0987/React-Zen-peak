import React, { useState } from "react";
import { TEAM_MEMBERS } from "../utils/helper";
import bgImage from "../assets/images/bgimage2.png";

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-[#f9f6f3] py-10">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="text-left text-4xl font-semibold mb-8 text-[#A68272] ml-50">
          Meet <span className="font-bold text-[#5A5656]">With Our</span> Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="absolute top-2 left-2 bg-[#A68272] text-white px-3 py-1 text-sm rounded hover:bg-[#8a6f60] cursor-pointer"
              >
                + SHOW BIO
              </button>
              {activeIndex === index && (
                <div className="absolute inset-0 bg-[#A68272] bg-opacity-80 text-white p-5 flex flex-col justify-center items-center text-center rounded-lg transition-all duration-300">
                  <h1 className="text-xl font-bold mb-2"> Bio</h1>
                  <p className="text-sm w-[300px]">{member.bio}</p>
                </div>
              )}
              <div className="mt-3 text-center">
                <h3 className="font-bold text-[#0C0F26]">{member.name}</h3>
                <p className="text-sm text-[#0C0F26]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
