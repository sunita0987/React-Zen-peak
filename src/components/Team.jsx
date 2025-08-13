import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { LOGO_DATA } from "../utils/helper";

const Team = () => {
  return (
    <div className="bg-[#f9f6f3] py-10">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={40}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="max-w-7xl mx-auto"
      >
        {LOGO_DATA.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Team;
